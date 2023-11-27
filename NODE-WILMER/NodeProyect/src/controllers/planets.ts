import { Request, Response } from "express";
import Joi from "joi";
type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

let planets: Planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

const getALL = (req: Request, res: Response) => {
  res.status(200).json(planets);
};

const getOneById = (req: Request, res: Response) => {
  const { id } = req.params;
  const planet = planets.find((p) => p.id === Number(id));
  res.status(200).json(planet);
};

const planetSchema = Joi.object({
  id: Joi.number().integer().required(),
  name: Joi.string().required(),
});

const create = (req: Request, res: Response) => {
  const { id, name } = req.body;

  const validationResult = planetSchema.validate({ id, name });
  if (validationResult.error) {
    return res.status(400).json({ error: validationResult.error.message });
  }

  const newPlanet: Planet = { id, name };
  planets = [...planets, newPlanet];

  res.status(201).json({ msg: "El nuevo planeta fue creado." });
};

const updateById = (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;

  const validationResult = planetSchema.validate({ id: Number(id), name });
  if (validationResult.error) {
    return res.status(400).json({ error: validationResult.error.message });
  }

  planets = planets.map((p) => (p.id === Number(id) ? { ...p, name } : p));

  console.log(planets);

  res.status(200).json({ msg: "El planeta fue actualizado" });
};
const deleteById = (req: Request, res: Response) => {
  const { id } = req.params;
  planets = planets.filter((p) => p.id !== Number(id));

  console.log(planets);
  res.status(200).json({ msg: "El planeta fue eliminado." });
};

export { getALL, getOneById, create, updateById, deleteById };
