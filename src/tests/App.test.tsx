import { render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";
import { formatDate } from "../helpers";

describe("App", () => {
  it("should render App correctly", async () => {
    render(<App />);
    const frontTitle = await screen.findByRole("heading", {
      name: "Henrique Jensen",
    });
    expect(frontTitle).toBeInTheDocument();
  });

  it("should show correct Date", async () => {
    render(<App />);
    const dateFormated = formatDate(new Date());
    const date = await screen.findByText(dateFormated);
    expect(date).toBeInTheDocument();
  });
});
