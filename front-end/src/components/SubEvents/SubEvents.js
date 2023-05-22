import moment from "moment";
import { FaTrash } from "react-icons/fa";
import "./SubEvents.scss";

const Events = ({ events, deleteEvent }) => {
  return (
    <section className="events">
      <h2>All Events</h2>
      {events?.length ? (
        <table className="table table-responsive">
          <tbody>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th></th>
            </tr>
            {events?.map((event, index) => (
              <tr key={index}>
                <td>{event.title}</td>
                <td>{event.description}</td>
                <td>
                  {`${moment(event.start_date)
                    .local()
                    .format("MM/DD/YYYY, h:mm A")}`}
                </td>
                <td>
                  {`${moment(event.end_date)
                    .local()
                    .format("MM/DD/YYYY, h:mm A")}`}
                </td>
                <td>
                  <button
                    onClick={() => deleteEvent(event.id, event.title)}
                    className="btn btn-danger"
                  >
                    Delete <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No events</p>
      )}
    </section>
  );
};

export default Events;
