"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const morgan_1 = __importDefault(require("morgan"));
require("dotenv/config");
let planets = [
    {
        id: 1,
        name: "Earth",
    },
    {
        id: 2,
        name: "Mars",
    },
];
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, morgan_1.default)("dev"));
app.get("/", (req, res) => {
    res.status(200).json(planets);
});
app.listen(port, () => {
    console.log(`Se inicializa el puerto: http://localhost:${port}/`);
});
