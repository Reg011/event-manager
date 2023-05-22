const { pool } = require("./connection.js");

const sendQuery = (builder, values = null) => {
  const promise = new Promise(function (resolve, reject) {
    pool.query(builder, values, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.rows);
      }
    });
  });

  return promise;
};

// fun fact: PostGRE automatically sanitize all input when passed as parameters

const getEvents = () => {
  const query = "select * from events;";
  return sendQuery(query);
};

const createEvent = (title, description, startDate, endDate) => {
  const query =
    "insert into events(title, description, start_date, end_date) values($1, $2, $3, $4);";
  return sendQuery(query, [title, description, startDate, endDate]);
};

// bonus request
const deleteEvent = (id) => {
  const query = "delete from events where id = $1";
  return sendQuery(query, [id]);
};

module.exports = {
  getEvents,
  createEvent,
  deleteEvent,
};
