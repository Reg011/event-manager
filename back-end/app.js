if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const port = process.env.PORT || 8000;
app.set("port", port);

const allowedOrigins = [
  // Client development origin (unsecure)
  "http://localhost:3000",
  // Jest origin (unsecure)
  "http://localhost",
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

require("./routes")(app);

app.listen(port, () => {
  console.log(`server listening at ${port}`);
});
