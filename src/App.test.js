import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

afterEach(() => {
  jest.restoreAllMocks();
});

test("renders the WhiteHeart home page", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", {
      level: 1,
      name: /together, we can make a difference/i,
    }),
  ).toBeInTheDocument();
});

test("scrolls to the top when navigating to another page", () => {
  const scrollTo = jest.spyOn(window, "scrollTo").mockImplementation(() => {});
  render(<App />);
  scrollTo.mockClear();
  fireEvent.click(screen.getByRole("link", { name: /about us/i }));

  expect(scrollTo).toHaveBeenCalledWith({
    top: 0,
    left: 0,
    behavior: "auto",
  });
});
