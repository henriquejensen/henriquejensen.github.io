import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("renders Henrique's positioning and primary navigation", async () => {
    render(<App />);
    expect(await screen.findByRole("heading", {
      name: /Henrique Jensen/i,
    })).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "Main navigation" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /explore my work/i })).toHaveAttribute("href", "#work");
  });

  it("renders the selected case studies", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: "Multi-brand frontend platform" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Accessible kiosk experience" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Local RAG for Moodle" })).toBeInTheDocument();
  });
});
