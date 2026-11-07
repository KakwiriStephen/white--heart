import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Shop from "./Shop";

const renderShop = (initialPath = "/shop") =>
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:productId" element={<Shop />} />
      </Routes>
    </MemoryRouter>,
  );

test("renders the six WhiteHeart products without changing their badges or rating", () => {
  renderShop();

  expect(screen.getAllByRole("article")).toHaveLength(6);
  expect(screen.getByText("SHOWING 1–6 OF 6 RESULTS")).toBeInTheDocument();
  [
    "Hoodie",
    "Collarless Shirt",
    "Collared Shirt",
    "Singlets",
    "Notebooks",
    "Caps",
  ].forEach((name) => expect(screen.getByText(name)).toBeInTheDocument());
  expect(screen.getAllByText("Featured")).toHaveLength(3);
  expect(screen.getAllByText("-11%")).toHaveLength(3);
  expect(screen.getByLabelText("Rated 5 out of 5")).toBeInTheDocument();
});

test("shows the product quick view for a selected item", () => {
  renderShop("/shop/collared-shirt");

  expect(screen.getByRole("dialog")).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: "Collared Shirt" }),
  ).toBeInTheDocument();
  expect(screen.getByText("SKU: WH-003")).toBeInTheDocument();
  expect(screen.getByText("CATEGORY:")).toBeInTheDocument();
  expect(screen.getByText("TAGS: collared shirt, apparel")).toBeInTheDocument();
});

test.each(["hoodie", "collarless-shirt", "collared-shirt", "singlets"])(
  "provides a size picker for %s",
  (productId) => {
    renderShop(`/shop/${productId}`);

    const sizePicker = screen.getByLabelText("SIZE");
    expect(sizePicker).toBeRequired();
    expect(
      Array.from(sizePicker.options, (option) => option.textContent),
    ).toEqual([
      "Choose size",
      "Small",
      "Medium",
      "Large",
      "Extra Large",
      "XXXL",
    ]);
    expect(screen.getByRole("button", { name: "ADD TO ORDER" })).toBeDisabled();
    fireEvent.change(sizePicker, { target: { value: "Extra Large" } });
    expect(screen.getByRole("button", { name: "ADD TO ORDER" })).toBeDisabled();
    fireEvent.change(screen.getByLabelText("COLOR"), {
      target: { value: "Black with white stitching" },
    });
    expect(screen.getByRole("button", { name: "ADD TO ORDER" })).toBeEnabled();
  },
);

test.each(["hoodie", "collarless-shirt", "collared-shirt", "singlets", "caps"])(
  "provides the three stitching colorways for %s",
  (productId) => {
    renderShop(`/shop/${productId}`);

    expect(
      Array.from(
        screen.getByLabelText("COLOR").options,
        (option) => option.textContent,
      ),
    ).toEqual([
      "Choose color",
      "Black with white stitching",
      "White with black stitching",
      "Gray with black stitching",
    ]);
  },
);

test("shows color but no size picker for caps, and no pickers for notebooks", () => {
  const { unmount } = renderShop("/shop/caps");

  expect(screen.queryByLabelText("SIZE")).not.toBeInTheDocument();
  expect(screen.getByLabelText("COLOR")).toBeInTheDocument();

  unmount();
  renderShop("/shop/notebooks");

  expect(screen.queryByLabelText("SIZE")).not.toBeInTheDocument();
  expect(screen.queryByLabelText("COLOR")).not.toBeInTheDocument();
});

test.each([
  ["hoodie", "KSh 2,500", "KSh 2,800"],
  ["singlets", "KSh 750", null],
])("shows the requested price for %s", (productId, price, crossedOutPrice) => {
  renderShop(`/shop/${productId}`);

  expect(screen.getAllByText(price)).toHaveLength(2);
  if (crossedOutPrice) {
    expect(screen.getAllByText(crossedOutPrice)).toHaveLength(2);
  }
});

test("collects multiple products into one WhatsApp order", () => {
  renderShop();

  fireEvent.click(screen.getByRole("button", { name: "View Hoodie" }));
  fireEvent.click(screen.getByRole("button", { name: "Increase quantity" }));
  fireEvent.change(screen.getByLabelText("COLOR"), {
    target: { value: "Black with white stitching" },
  });
  fireEvent.change(screen.getByLabelText("SIZE"), {
    target: { value: "Large" },
  });
  fireEvent.click(screen.getByRole("button", { name: "ADD TO ORDER" }));

  const orderPanel = screen.getByRole("region", { name: "Your order" });
  expect(orderPanel).toBeInTheDocument();
  expect(within(orderPanel).getByText("Hoodie")).toBeInTheDocument();
  expect(within(orderPanel).getByText("Quantity: 2")).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "View Notebooks" }));
  fireEvent.click(screen.getByRole("button", { name: "ADD TO ORDER" }));

  expect(
    within(screen.getByRole("region", { name: "Your order" })).getByText(
      "Hoodie",
    ),
  ).toBeInTheDocument();
  expect(
    within(screen.getByRole("region", { name: "Your order" })).getByText(
      "Notebooks",
    ),
  ).toBeInTheDocument();

  const whatsappLink = screen.getByRole("link", {
    name: "ORDER VIA WHATSAPP",
  });
  const url = new URL(whatsappLink.href);
  const orderMessage = url.searchParams.get("text");

  expect(url.href).toContain("https://wa.me/254715378281");
  expect(orderMessage).toContain("1. Hoodie");
  expect(orderMessage).toContain("Color: Black with white stitching");
  expect(orderMessage).toContain("Size: Large");
  expect(orderMessage).toContain("Quantity: 2");
  expect(orderMessage).toContain("2. Notebooks");
  expect(orderMessage).toContain("Quantity: 1");
  expect(orderMessage.match(/Quantity:/g)).toHaveLength(2);
});

test("shows the not-found page for an unknown product", () => {
  renderShop("/shop/not-a-product");

  expect(
    screen.getByRole("heading", { name: /page not found/i }),
  ).toBeInTheDocument();
});
