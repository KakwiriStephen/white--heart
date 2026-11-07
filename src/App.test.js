import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

afterEach(() => {
  jest.restoreAllMocks();
});

test("scrolls to the top when navigating to another page", () => {
  const scrollTo = jest.spyOn(window, "scrollTo").mockImplementation(() => {});
  render(<App />);

  const aboutLink = screen.getAllByRole("link", { name: /about us/i })[0];
  scrollTo.mockClear();
  fireEvent.click(aboutLink);

  expect(scrollTo).toHaveBeenCalledWith(0, 0);
});
