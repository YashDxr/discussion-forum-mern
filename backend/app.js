// Represent an Application
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { createConnection } from "./src/shared/db/connection.js";
import { userRoute } from "./src/modules/user/routes/user-route.js";
import { ErrorHandler } from "./src/shared/middlewares/error-handler.js";
import { serverLogStream } from "./src/shared/logs/server-log.js";
import { commentRoutes } from "./src/modules/comment/routes/comment-routes.js";
import { postRoutes } from "./src/modules/post/routes/post-routes.js";
process.on("uncaughtException", (err) => {
  console.log("Some issue Arrived", err);
});
const app = express();
app.use(cors());
dotenv.config();
app.use(morgan("combined", { stream: serverLogStream() }));

app.use(express.json());
app.use("/", userRoute);
app.use("/", commentRoutes);
app.use("/", postRoutes);

app.use(ErrorHandler);

const promise = createConnection();
promise
  .then((data) => {
    console.log("DB Connection Done...");
    app.listen(1234, (err) => {
      if (err) {
        console.log("Server Crash ", err);
      } else {
        console.log("Server Up and Running");
      }
    });
  })
  .catch((err) => {
    console.log("Error in DB Connection ", err);
  });
