// basic
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
// config
// const config = require("./config");
const cookieParser = require("cookie-parser");
require("dotenv/config");
require("express-async-errors");
// db
const { connectDB_offline } = require("./db/connect");
// setup

app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

// middlewares
const notFoundMiddleware = require("./middlewares/not-found");
const errorHandlerMiddlewar = require("./middlewares/error-hander");
// routesMiddlewares
const authRoutes = require("./routes/auth");
// routesSetup
app.use("/api/v1/auth", authRoutes);
// middlewaresSetup
app.use(notFoundMiddleware);
app.use(errorHandlerMiddlewar);

// START
const _ = async () => {
  try {
    await connectDB_offline();
    app.listen(port, () => console.log(`http://localhost:${port}`));
  } catch (err) {
    console.log(`err while app start ${err}`);
  }
};

_();
