import SubEvents from "./SubEvents";
import { render } from "@testing-library/react";

describe("SubEvents tests", () => {
  test("renders without props", () => {
    render(<SubEvents />);
  });

  test("renders with props", () => {
    render(<SubEvents events={[]} deleteEvent={() => {}} />);
  });
});
