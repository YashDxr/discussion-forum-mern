import winston from "winston";
const { timestamp, label, combine, printf, colorize } = winston.format;
const customFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});
//11/12/23 10:10PM DB Down Connection.js
export const myLogger = (moduleName) => {
  return winston.createLogger({
    level: process.env.NODE_ENV === "DEV" ? "debug" : "error",
    format: combine(
      label({ label: moduleName }),
      timestamp(),
      customFormat,
      colorize()
    ),
    //format:winston.format.json(),
    transports: [
      //
      // - Write all logs with level `error` and below to `error.log`
      // - Write all logs with level `info` and below to `combined.log`
      //
      new winston.transports.File({
        filename: process.env.SERVER_LOG_PATH + "/error.log",
        level: "error",
        colorize: true,
        maxsize: 20971520, // 20 MB
        maxFiles: 5,
      }),
      new winston.transports.File({
        filename: process.env.SERVER_LOG_PATH + "/combined.log",
        colorize: true,
        maxsize: 20971520, // 20 MB
        maxFiles: 5,
      }),
    ],
  });
};
