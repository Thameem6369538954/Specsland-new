// const app = require('./app');
const express = require("express");
const app = express();
const products = require("./routes/Product.js");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/Database");
dotenv.config({
  path: path.join(__dirname, "./Config/config.env"),
});

connectDB();


// app.use("/test", () => "<h1> test </h1>");
app.use(express.json());
app.use("/api/v1", products);

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});
