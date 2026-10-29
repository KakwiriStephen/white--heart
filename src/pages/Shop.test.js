import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { useNavigate, useParams } from "react-router-dom";
import Shop from "./Shop";

jest.mock(
  "react-router-dom",
  () => ({
    Link: "a",
    useNavigate: jest.fn(),
    useParams: jest.fn(),
  }),
  { virtual: true },
);

beforeEach(() => {
  useNavigate.mockReturnValue(jest.fn());
});

test("renders the six WhiteHeart products without changing their badges or rating", () => {
  useParams.mockReturnValue({});
  render(<Shop />);

  expect(screen.getAllByRole("article")).toHaveLength(6);
  expect(
    screen.getByText("SHOWING 1–6 OF 6 RESULTS"),
  ).toBeInTheDocument();
  ["Hoodie", "Collarless Shirt", "Collared Shirt", "Singlets", "Notebooks", "Caps"].forEach(
    (name) => expect(screen.getByText(name)).toBeInTheDocument(),
  );
  expect(screen.getAllByText("Featured")).toHaveLength(3);
  expect(screen.getAllByText("-11%")).toHaveLength(3);
  expect(screen.getByLabelText("Rated 5 out of 5")).toBeInTheDocument();
});

test("shows the product quick view for a selected item", () => {
  useParams.mockReturnValue({ productId: "collared-shirt" });
  render(<Shop />);

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
    useParams.mockReturnValue({ productId });
    render(<Shop />);

    const sizePicker = screen.getByLabelText("SIZE");
    expect(sizePicker).toBeRequired();
    expect(
      Array.from(sizePicker.options, (option) => option.textContent),
    ).toEqual(["Choose size", "Small", "Medium", "Large", "Extra Large", "XXXL"]);
    expect(
      screen.getByRole("button", { name: "ADD TO ORDER" }),
    ).toBeDisabled();
    fireEvent.change(sizePicker, { target: { value: "Extra Large" } });
    expect(
      screen.getByRole("button", { name: "ADD TO ORDER" }),
    ).toBeDisabled();
    fireEvent.change(screen.getByLabelText("COLOR"), {
      target: { value: "Black with white stitching" },
    });
    expect(
      screen.getByRole("button", { name: "ADD TO ORDER" }),
    ).toBeEnabled();
  },
);

test.each(["hoodie", "collarless-shirt", "collared-shirt", "singlets", "caps"])(
  "provides the three stitching colorways for %s",
  (productId) => {
    useParams.mockReturnValue({ productId });
    render(<Shop />);

    expect(
      Array.from(screen.getByLabelText("COLOR").options, (option) => option.textContent),
    ).toEqual([
      "Choose color",
      "Black with white stitching",
      "White with black stitching",
      "Gray with black stitching",
    ]);
  },
);

test("shows color but no size picker for caps, and no pickers for notebooks", () => {
  useParams.mockReturnValue({ productId: "caps" });
  const { rerender } = render(<Shop />);

  expect(screen.queryByLabelText("SIZE")).not.toBeInTheDocument();
  expect(screen.getByLabelText("COLOR")).toBeInTheDocument();

  useParams.mockReturnValue({ productId: "notebooks" });
  rerender(<Shop />);

  expect(screen.queryByLabelText("SIZE")).not.toBeInTheDocument();
  expect(screen.queryByLabelText("COLOR")).not.toBeInTheDocument();
});

test.each([
  ["hoodie", "KSh 2,500", "KSh 2,800"],
  ["singlets", "KSh 750", null],
])("shows the requested price for %s", (productId, price, crossedOutPrice) => {
  useParams.mockReturnValue({ productId });
  render(<Shop />);

  expect(screen.getAllByText(price)).toHaveLength(2);
  if (crossedOutPrice) {
    expect(screen.getAllByText(crossedOutPrice)).toHaveLength(2);
  }
});

test("collects multiple products into one WhatsApp order", () => {
  const navigate = jest.fn();
  useNavigate.mockReturnValue(navigate);
  useParams.mockReturnValue({ productId: "hoodie" });
  const { rerender } = render(<Shop />);

  fireEvent.click(screen.getByRole("button", { name: "Increase quantity" }));
  fireEvent.change(screen.getByLabelText("COLOR"), {
    target: { value: "Black with white stitching" },
  });
  fireEvent.change(screen.getByLabelText("SIZE"), {
    target: { value: "Large" },
  });
  fireEvent.click(screen.getByRole("button", { name: "ADD TO ORDER" }));
  expect(navigate).toHaveBeenCalledWith("/shop");

  useParams.mockReturnValue({});
  rerender(<Shop />);
  let orderPanel = screen.getByRole("region", { name: "Your order" });
  expect(orderPanel).toBeInTheDocument();
  expect(within(orderPanel).getByText("Hoodie")).toBeInTheDocument();
  expect(within(orderPanel).getByText("Quantity: 2")).toBeInTheDocument();

  useParams.mockReturnValue({ productId: "notebooks" });
  rerender(<Shop />);
  fireEvent.click(screen.getByRole("button", { name: "ADD TO ORDER" }));
  useParams.mockReturnValue({});
  rerender(<Shop />);

  orderPanel = screen.getByRole("region", { name: "Your order" });
  expect(within(orderPanel).getByText("Hoodie")).toBeInTheDocument();
  expect(within(orderPanel).getByText("Notebooks")).toBeInTheDocument();
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
  useParams.mockReturnValue({ productId: "not-a-product" });
  render(<Shop />);

  expect(
    screen.getByRole("heading", { name: "Page Not Found" }),
  ).toBeInTheDocument();
});
