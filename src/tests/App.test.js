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

  it("should change to white mode if toggle is inactive", async () => {
    const { user } = renderWithRouter(<App />);
    const toggle = screen.getByLabelText(/Mode Dark/i);
    user.click(toggle);
    const newToggle = await screen.findByLabelText(/Mode Light/i);
    expect(newToggle).toBeInTheDocument();
    expect(screen.queryByLabelText(/Mode Dark/i)).not.toBeInTheDocument();
  });
});
