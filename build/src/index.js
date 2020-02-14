"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
//import { router } from "./routes/loginRoutes";
var AppRouter_1 = require("./AppRouter");
var body_parser_1 = __importDefault(require("body-parser"));
require("./controllers/LoginController");
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(AppRouter_1.AppRouter.getInstance());
app.listen(3000, function () {
    console.log("Listening on server");
});
