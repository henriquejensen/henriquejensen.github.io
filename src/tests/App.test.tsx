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
    expect(screen.getByRole("link", { name: /résumé/i })).toHaveAttribute("href", "/resume-henrique-jensen.pdf");
  });

  it("renders the selected case studies", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: "Multi-brand frontend platform" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Accessible kiosk experience" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Local RAG for Moodle" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Computer Science" })).toBeInTheDocument();
    expect(screen.getByText("Professional working proficiency")).toBeInTheDocument();
  });
});
