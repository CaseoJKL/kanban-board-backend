"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Initialize dotenv (process.env variables)
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Imports
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("root route");
});
app.listen(process.env.PORT, () => console.log("Listening on port " + process.env.PORT + " =>"));
