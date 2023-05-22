const { getEvents, createEvent, deleteEvent } = require("./queries");

module.exports = (app) => {
  app.get("/getEvents", function (req, response, next) {
    getEvents()
      .then((result) => {
        response.send(result);
      })
      .catch((err) => {
        next(err);
      });
  });

  app.post("/createEvent", function (req, response, next) {
    createEvent(
      req.body.title,
      req.body.description,
      req.body.startDate,
      req.body.endDate
    )
      .then(() => {
        response.status(200).send("Success");
      })
      .catch((err) => {
        next(err);
      });
  });

  app.post("/deleteEvent", function (req, response, next) {
    deleteEvent(req.body.id)
      .then(() => {
        response.status(200).send("Success");
      })
      .catch((err) => {
        next(err);
      });
  });
};
