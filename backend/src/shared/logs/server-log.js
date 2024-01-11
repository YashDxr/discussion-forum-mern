import fs from "fs";

export const serverLogStream = () =>
  fs.createWriteStream(process.env.SERVER_LOG_PATH + "/server.log", {
    interval: "7d", // rotate weekly
  });
