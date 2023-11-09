const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoSanitize = require("express-mongo-sanitize");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const hpp = require("hpp");
const Routes = require("./src/Routes/api");

const app = express();

const Limiter = rateLimit({});

app.use(express.json());
app.use(Limiter);
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(cors());

app.use(Routes);

app.use((req, res, next) => {
  res.status(404).json({
    status: "error",
    data: "Route not found",
  });
});

module.exports = app;
