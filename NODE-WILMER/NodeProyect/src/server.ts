import express from "express";
import "express-async-errors";
import morgan from "morgan";
import Joi from "joi";
import "dotenv/config";

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

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.json());

const planetSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
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

  planets = planets.map((p) => (p.id === Number(id) ? { ...p, name } : p));

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
