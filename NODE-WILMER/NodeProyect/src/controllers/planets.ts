import { Request, Response } from "express";
import pgPromise from "pg-promise";
import Joi from "joi";

const db = pgPromise()("postgres1://postgres:postgres@localhost:5432/video");

console.log(db);

const setupDb = async () => {
  await db.none(`
  DROP TABLE IF EXISTS planets;

      CREATE TABLE planets (
      id SERIAL NOT NULL PRIMARY KEY,
      name TEXT NOT NULL
    );
    `);
  await db.none(`INSERT  INTO planets (name) VALUES ('Earth')`);
  await db.none(`INSERT  INTO planets (name) VALUES ('Mars')`);
  await db.none(`INSERT  INTO planets (name) VALUES ('Jupiter')`);
};
setupDb();

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
    await db.none(`INSERT INTO planets (name) VALUES ($1) `, name);
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
  await db.none(`DELETE FROM planets WHERE id=$1`, Number(id))
  res.status(200).json({ msg: "El planeta fue eliminado." });
};

export { getALL, getOneById, create, updateById, deleteById };
