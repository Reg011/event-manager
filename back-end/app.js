if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

app.set("port", process.env.PORT || 8000);

const allowedOrigins = [
  // Client development origin
  "http://localhost:3000",
  // Server development origin
  "http://localhost:8000", // might not be needed
];

const getCORSOrigin = (origin, callback) => {
  if (!origin || allowedOrigins.indexOf(origin) !== -1) {
    callback(null, true);
  } else {
    callback(new Error(`Origin "${origin}" is not allowed by CORS`));
  }
};

app.use(
  cors({
    origin: getCORSOrigin,
    credentials: true,
  })
);

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./requests")(app);
