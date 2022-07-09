import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render App correctly", () => {
    render(<App />);
    const frontTitle = screen.getByRole("heading", {
      name: "Front end Engineer",
    });
    expect(frontTitle).toBeInTheDocument();
  });
});
