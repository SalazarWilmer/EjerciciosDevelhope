import express from "express";
import "express-async-errors";
import morgan from "morgan";
import {
  getALL,
  getOneById,
  create,
  updateById,
  deleteById,
} from "./controllers/planets.js";

import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.json());

app.get("/api/planets", getALL);

app.get("/api/planets/:id", getOneById);

app.post("/api/planets", create);

app.put("/api/planets/:id", updateById);

app.delete("/api/planets/:id", deleteById);

app.listen(port, () => {
  console.log(`Se inicializa el puerto: http://localhost:${port}`);
});
