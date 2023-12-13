import express, { Application } from "express";
import cors from "cors";
import env from "dotenv";
import { mainConnection } from "./utils/dbConfig";
import { mainApp } from "./mainApp";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";
import mongoConnect from "connect-mongodb-session";

env.config();
const port: number = parseInt(process.env.PORT!);
const app: Application = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors({ origin: "*" }));
app.use(express.json());

const connect = mongoConnect(session);

app.use(
  session({
    secret: "justEnv",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 2,
      sameSite: "lax",
      secure: false,
    },
    store: new connect({
      uri: process.env.DATABASE_URL!,
      collection: "session",
    }),
  })
);

mainApp(app);
const server = app.listen(port, () => {
  mainConnection();
  console.log("server is up and running");
});

process.on("unhandledRejection", (error: Error) => {
  console.log("unhandledRejection", error);
  process.exit(1);
});

process.on("uncaughtException", (reason: any) => {
  console.log("uncaughtException", reason);

  server.close(() => {
    process.exit(1);
  });
});
