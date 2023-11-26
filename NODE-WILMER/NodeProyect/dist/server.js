"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const morgan_1 = __importDefault(require("morgan"));
const joi_1 = __importDefault(require("joi"));
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
const port = process.env.PORT || 3000;
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
const planetSchema = joi_1.default.object({
    id: joi_1.default.number().required(),
    name: joi_1.default.string().required(),
});
app.get("/api/planets", (req, res) => {
    res.status(200).json(planets);
});
app.get("/api/planets/:id", (req, res) => {
    const { id } = req.params;
    const planet = planets.find((p) => p.id === Number(id));
    res.status(200).json(planet);
});
app.post("/api/planets", (req, res) => {
    const { id, name } = req.body;
    // Validate the request body
    const validationResult = planetSchema.validate({ id, name });
    if (validationResult.error) {
        return res.status(400).json({ error: validationResult.error.message });
    }
    const newPlanet = { id, name };
    planets = [...planets, newPlanet];
    console.log(planets);
    res.status(201).json({ msg: "El nuevo planeta fue creado." });
});
app.put("/api/planets/:id", (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const validationResult = planetSchema.validate({ id: Number(id), name });
    if (validationResult.error) {
        return res.status(400).json({ error: validationResult.error.message });
    }
    planets = planets.map((p) => (p.id === Number(id) ? Object.assign(Object.assign({}, p), { name }) : p));
    console.log(planets);
    res.status(200).json({ msg: "El planeta fue actualizado" });
});
app.delete("/api/planets/:id", (req, res) => {
    const { id } = req.params;
    planets = planets.filter((p) => p.id !== Number(id));
    console.log(planets);
    res.status(200).json({ msg: "El planeta fue eliminado." });
});
app.listen(port, () => {
    console.log(`Se inicializa el puerto: http://localhost:${port}`);
});
