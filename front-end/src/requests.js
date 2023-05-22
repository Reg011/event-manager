import axios from "axios";

export const getEventsQuery = () => {
  return axios.get("http://localhost:8000/getEvents");
};

export const deleteEventQuery = (id) => {
  return axios.post("http://localhost:8000/deleteEvent", {
    id,
  });
};

export const createEventQuery = (values) => {
  return axios.post("http://localhost:8000/createEvent", values);
};
