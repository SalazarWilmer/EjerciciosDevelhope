"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteById = exports.updateById = exports.create = exports.getOneById = exports.getALL = void 0;
const pg_promise_1 = __importDefault(require("pg-promise"));
const joi_1 = __importDefault(require("joi"));
const db = (0, pg_promise_1.default)()("postgres1://postgres:postgres@localhost:5432/video");
console.log(db);
const setupDb = () => __awaiter(void 0, void 0, void 0, function* () {
    yield db.none(`
  DROP TABLE IF EXISTS planets;

      CREATE TABLE planets (
      id SERIAL NOT NULL PRIMARY KEY,
      name TEXT NOT NULL
    );
    `);
    yield db.none(`INSERT  INTO planets (name) VALUES ('Earth')`);
    yield db.none(`INSERT  INTO planets (name) VALUES ('Mars')`);
    yield db.none(`INSERT  INTO planets (name) VALUES ('Jupiter')`);
});
setupDb();
const getALL = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const planets = yield db.many(`SELECT * FROM planets;`);
    res.status(200).json(planets);
});
exports.getALL = getALL;
const getOneById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const planet = yield db.oneOrNone(`SELECT * FROM planets WHERE id=$1;`, Number(id));
    res.status(200).json(planet);
});
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
    // const newPlanet: Planet = { id, name };
    // planets = [...planets, newPlanet];
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
    // planets = planets.map((p) => (p.id === Number(id) ? { ...p, name } : p));
    // console.log(planets);
    res.status(200).json({ msg: "El planeta fue actualizado" });
};
exports.updateById = updateById;
const deleteById = (req, res) => {
    const { id } = req.params;
    // planets = planets.filter((p) => p.id !== Number(id));
    // console.log(planets);
    res.status(200).json({ msg: "El planeta fue eliminado." });
};
exports.deleteById = deleteById;
