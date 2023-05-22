import "bootstrap/dist/css/bootstrap.css";
import "./SmartApp.scss";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import { createEventQuery, deleteEventQuery, getEventsQuery } from "./requests";
import moment from "moment";
import Events from "./components/SubEvents/SubEvents";
import CreateEvent from "./components/SubCreateEvent/SubCreateEvent";

const App = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = () => {
    getEventsQuery().then((results) => {
      setEvents(results.data);
    });
  };

  const handleCreateEvent = (event) => {
    event.preventDefault();

    createEventQuery({
      title,
      description,
      startDate: moment.utc(startDate),
      endDate: moment.utc(endDate),
    }).then(() => {
      loadEvents();
    });
  };

  const deleteEvent = (id, title) => {
    if (window.confirm(`Delete event ${title} ?`)) {
      deleteEventQuery(id).then(() => loadEvents());
    }
  };

  return (
    <div className="app" data-testid="app">
      <div className="container">
        <header>
          <h1>Event Manager</h1>
        </header>
        <CreateEvent
          handleCreateEvent={handleCreateEvent}
          setTitle={(e) => setTitle(e.target.value)}
          setDescription={(e) => setDescription(e.target.value)}
          setStartDate={(e) => setStartDate(e || "")}
          setEndDate={(e) => setEndDate(e || "")}
          title={title}
          description={description}
          startDate={startDate}
          endDate={endDate}
        />
        <Events events={events} deleteEvent={deleteEvent} />
      </div>
    </div>
  );
};

export default App;
