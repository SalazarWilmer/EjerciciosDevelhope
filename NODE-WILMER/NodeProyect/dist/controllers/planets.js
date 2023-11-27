"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteById = exports.updateById = exports.create = exports.getOneById = exports.getALL = void 0;
const joi_1 = __importDefault(require("joi"));
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
const getALL = (req, res) => {
    res.status(200).json(planets);
};
exports.getALL = getALL;
const getOneById = (req, res) => {
    const { id } = req.params;
    const planet = planets.find((p) => p.id === Number(id));
    res.status(200).json(planet);
};
exports.getOneById = getOneById;
const planetSchema = joi_1.default.object({
    id: joi_1.default.number().integer().required(),
    name: joi_1.default.string().required(),
});
const create = (req, res) => {
    const { id, name } = req.body;
    const validationResult = planetSchema.validate({ id, name });
    if (validationResult.error) {
        return res.status(400).json({ error: validationResult.error.message });
    }
    const newPlanet = { id, name };
    planets = [...planets, newPlanet];
    res.status(201).json({ msg: "El nuevo planeta fue creado." });
};
exports.create = create;
const updateById = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const validationResult = planetSchema.validate({ id: Number(id), name });
    if (validationResult.error) {
        return res.status(400).json({ error: validationResult.error.message });
    }
    planets = planets.map((p) => (p.id === Number(id) ? Object.assign(Object.assign({}, p), { name }) : p));
    console.log(planets);
    res.status(200).json({ msg: "El planeta fue actualizado" });
};
exports.updateById = updateById;
const deleteById = (req, res) => {
    const { id } = req.params;
    planets = planets.filter((p) => p.id !== Number(id));
    console.log(planets);
    res.status(200).json({ msg: "El planeta fue eliminado." });
};
exports.deleteById = deleteById;
