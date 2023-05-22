import { render } from "@testing-library/react";
import { createEventQuery, deleteEventQuery, getEventsQuery } from "./requests";
import SmartApp from "./SmartApp";
import moment from "moment";

describe("SmartApp tests", () => {
  test("renders", () => {
    render(<SmartApp />);
  });
});

// small reminder: irl this test suite is only safe with a staging db along with credentials (don't try this at home, this is only for demonstration)
describe("Functional tests", () => {
  test("Queries", async () => {
    const createEventResult = await createEventQuery({
      title: "test-title",
      description: "test-description",
      startDate: moment.utc(new Date()),
      endDate: moment.utc(new Date()),
    });

    expect(createEventResult).toBeTruthy();
    expect(createEventResult).toHaveProperty("data");
    expect(createEventResult.data).toBe("Success");

    const getEventsResult = await getEventsQuery();
    expect(getEventsResult).toBeTruthy();
    expect(getEventsResult).toHaveProperty("data");

    const deleteEventResult = await deleteEventQuery(
      getEventsResult.data[getEventsResult.data.length - 1].id
    );
    expect(deleteEventResult).toHaveProperty("data");
    expect(deleteEventResult.data).toBe("Success");
  });
});
