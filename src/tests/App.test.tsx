import { render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  it("should render App correctly", async () => {
    render(<App />);
    const frontTitle = await screen.findByRole("heading", {
      name: "Front end Engineer",
    });
    expect(frontTitle).toBeInTheDocument();
  });

  it("should change to white mode if toggle is inactive", async () => {
    render(<App />);
    const toggle = screen.getByLabelText(/Mode Dark/i);
    userEvent.click(toggle);
    const newToggle = await screen.findByLabelText(/Mode Light/i);
    expect(newToggle).toBeInTheDocument();
    expect(screen.queryByLabelText(/Mode Dark/i)).not.toBeInTheDocument();
  });
});
