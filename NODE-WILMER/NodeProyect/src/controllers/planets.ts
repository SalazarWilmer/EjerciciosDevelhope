import { Request, Response } from "express";
import Joi from "joi";
import {db} from "./../db.js"


const getALL = async (req: Request, res: Response) => {
  const planets = await db.many(`SELECT * FROM planets;`);
  res.status(200).json(planets);
};
const getOneById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const planet = await db.oneOrNone(
    `SELECT * FROM planets WHERE id=$1;`,
    Number(id)
  );
  res.status(200).json(planet);
};

const planetSchema = Joi.object({
  id: Joi.number().integer().required(),
  name: Joi.string().required(),
});

const create = async (req: Request, res: Response) => {
  const { name } = req.body;
  const newPlanet = { name };

  const validationResult = planetSchema.validate({ name });
  if (validationResult.error) {
    return res.status(400).json({ error: validationResult.error.message });
  } else {
    await db.none(`INSERT INTO planets (name) VALUES ($1)`, [name]);

    res.status(201).json({ msg: "El nuevo planeta fue creado." });
  }
};

const updateById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;

  await db.none(`UPDATE planets SET name=$2 WHERE id=$1`, [id, name]);

  res.status(200).json({ msg: "El planeta fue actualizado" });
};
const deleteById = async (req: Request, res: Response) => {
  const { id } = req.params;
  await db.none(`DELETE FROM planets WHERE id=$1`, Number(id));
  res.status(200).json({ msg: "El planeta fue eliminado." });
};

const createImage = async (req: Request, res: Response) => {
  const { id } = req.params;
  const fileName = req.file?.path;

  if (fileName) {
    await db.none(`UPDATE planets SET image=$2 WHERE id=$1`, [id, fileName]);
    res.status(201).json({ msg: "Imagen del planeta subida exitosamente." });
  } else {
    res.status(400).json({ msg: "Imagen del Planeta fallo la subida" });
  }
};

export { getALL, getOneById, create, updateById, deleteById, createImage };
