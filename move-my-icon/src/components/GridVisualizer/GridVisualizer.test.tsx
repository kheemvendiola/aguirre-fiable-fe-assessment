import { render, screen } from "@testing-library/react";
import GridVisualizer from "./GridVisualizer";

test("renders the grid visualizer", () => {
  render(<GridVisualizer />);
  const linkElement = screen.getByTestId("gridVisualizer");
  expect(linkElement).toBeInTheDocument();
});
