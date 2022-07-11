const express = require("express");
const app = express();

const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const morgan = require("morgan");
const helmet = require("helmet");
const multer = require("multer");
const path = require("path");

const winston = require('winston');
const { format } = winston;
const { combine, label, json } = format;

dotenv.config({ path: "./config/config.env" });
const logger = require("./config/logger");

app.use("/images", express.static(path.join(__dirname, "/images")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

//middlewares
app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1> ProCart Application</h1>");
});
app.use("/user", require("./routes/userRouter"));
app.use("/post", require("./routes/postRouter"));
app.use("/category", require("./routes/categoryRouter"));
app.use("/product", require("./routes/productRouter"));

//winston
winston.loggers.add('user', {
  format: combine(
    label({ label: 'one' }),
    json()
  ),
  transports: [
    new winston.transports.Console({ level: 'info' }),
    new winston.transports.File({ filename: 'somefile.log' })
  ]
});

const user = winston.loggers.get('user');
user.info('logging to file and console transports');

mongoose
  .connect(process.env.DB, {
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
  logger.info(`Server Running on Port Number ... ${process.env.PORT}`);
});
