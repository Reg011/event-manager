import DatePickerInput from "../SubDatePickerInput/SubDatePickerInput";
import "./SubCreateEvent.scss";

const SubCreateEvent = ({
  handleCreateEvent,
  setTitle,
  setDescription,
  setStartDate,
  setEndDate,
  title,
  description,
  startDate,
  endDate,
}) => {
  return (
    <section className="create-events">
      <h2>Create Event</h2>
      <form onSubmit={handleCreateEvent}>
        <div>
          <label>Title</label>
          <input
            className="form-control"
            value={title}
            onChange={setTitle}
            maxlength="32"
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={setDescription}
            maxlength="200"
          />
        </div>
        <div>
          <label>Start date</label>
          <DatePickerInput
            className="form-control"
            name="startDate"
            selected={startDate}
            onChange={setStartDate}
          />
        </div>
        <div>
          <label>End date</label>
          <DatePickerInput
            className="form-control"
            name="endDate"
            selected={endDate}
            onChange={setEndDate}
          />
        </div>
        <div className="wrap-submit-button">
          <button className="btn btn-primary submit-button" type="submit">
            Create
          </button>
        </div>
      </form>
    </section>
  );
};

export default SubCreateEvent;
