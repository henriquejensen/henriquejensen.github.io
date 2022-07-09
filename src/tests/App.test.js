import { screen } from "@testing-library/react";
import App from "../App";
import renderWithRouter from "./helpers/renderWithRouter";

describe("App", () => {
  it("should render App correctly", () => {
    renderWithRouter(<App />);
    const frontTitle = screen.getByRole("heading", {
      name: "Front end Engineer",
    });
    expect(frontTitle).toBeInTheDocument();
  });
});
