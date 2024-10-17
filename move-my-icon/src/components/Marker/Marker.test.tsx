import { render, screen } from "@testing-library/react";
import { Direction } from "../../enums/directions";
import Marker from "./Marker";

test("renders the marker component", () => {
  render(<Marker direction={Direction.NORTH} />);
  const linkElement = screen.getByTestId("marker");
  expect(linkElement).toBeInTheDocument();
});
