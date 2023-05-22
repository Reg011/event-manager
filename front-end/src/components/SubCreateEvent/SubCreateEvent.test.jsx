import SubCreateEvent from "./SubCreateEvent";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("SubCreateEvent tests", () => {
  test("renders without props", () => {
    render(<SubCreateEvent />);
  });

  test("renders with props", () => {
    render(
      <SubCreateEvent
        handleCreateEvent={() => {}}
        setTitle={() => {}}
        setDescription={() => {}}
        setStartDate={() => {}}
        setEndDate={() => {}}
        title="title"
        description="description"
        startDate={new Date()}
        endDate={new Date()}
      />
    );
  });
});
