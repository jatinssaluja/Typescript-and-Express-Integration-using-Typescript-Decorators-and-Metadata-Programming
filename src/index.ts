import express from "express";
import { AppRouter } from "./AppRouter";
import bodyparser from "body-parser";
import cookieSession from "cookie-session";
import "./controllers/LoginController";
import "./controllers/RootController";

const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["gjhgho"] }));
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log("Listening on server");
});
