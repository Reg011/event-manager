import { render } from "@testing-library/react";
import SubDatePickerInput from "./SubDatePickerInput";

describe("SubDatePickerInput tests", () => {
  test("renders without props", () => {
    render(<SubDatePickerInput />);
  });

  test("renders with props", () => {
    render(
      <SubDatePickerInput
        onChange={() => {}}
        name="date-picker"
        selected={new Date()}
        className="date-picker-classname"
      />
    );
  });
});
