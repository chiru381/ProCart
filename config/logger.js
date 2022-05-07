const { createLogger, transports, format } = require("winston");
require("winston-mongodb");

//In this file is using log errors
const logger = createLogger({
  transports: [
    new transports.File({
      filename: "info.log",
      level: "info",
      format: format.combine(format.timestamp(), format.json()),
    }),
    //database connection
    // new transports.MongoDB({
    //   level: "error",
    //   db: process.env.DATABASEURL,
    //   collection: "errors",
    //   format: format.combine(format.timestamp(), format.json()),
    // }),
  ],
});

module.exports = logger;
