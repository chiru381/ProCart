const express = require("express");
const app = express();

const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const morgan = require("morgan");
const helmet = require("helmet");

dotenv.config({ path: "./config/config.env" });
const logger = require("./config/logger");

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1> ProCart Application</h1>");
});
app.use("/user", require("./routes/userRouter"));
app.use("/product", require("./routes/productRouter"));

mongoose
  .connect(process.env.DATABASEURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Mongo DB - Connected Successfully");
  })
  .catch((err) => {
    logger.error(err);
  });

app.listen(process.env.PORT, (err) => {
  if (err) throw err;
  console.log(`server connected ${process.env.PORT}`);
  logger.error(`Server Running on Port Number ... ${process.env.PORT}`);
});
