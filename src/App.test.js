import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the WhiteHeart home page", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", {
      level: 1,
      name: /together, we can make a difference/i,
    }),
  ).toBeInTheDocument();
});
