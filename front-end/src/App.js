import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import DatePickerInput from "./components/DatePickerInput/DatePickerInput";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const createEvent = (event) => {
    event.preventDefault();
  };

  return (
    <div className="app">
      <div className="container">
        <header>
          <h1>Event Manager</h1>
        </header>
        <section>
          <form onSubmit={createEvent}>
            <div>
              <label>Title</label>
              <input value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
              <label>Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <label>Start date</label>
              <DatePickerInput
                name="startDate"
                selected={startDate}
                onChange={(e) => setStartDate(e || "")}
              />
            </div>
            <div>
              <label>End date</label>
              <DatePickerInput
                name="endDate"
                selected={endDate}
                onChange={(e) => setEndDate(e || "")}
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Create
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default App;
