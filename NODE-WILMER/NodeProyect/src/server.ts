import express from "express";
import "express-async-errors";
import morgan from "morgan";
import multer from "multer";
import {
  getALL,
  getOneById,
  create,
  updateById,
  deleteById,
  createImage,
} from "./controllers/planets.js";
import "dotenv/config";

const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer ({ storage });

const app = express();
const port = process.env.PORT || 3000;

app.use("/dist/uploads", express.static("uploads"));

app.use(morgan("dev"));
app.use(express.json());

app.get("/api/planets", getALL);

app.get("/api/planets/:id", getOneById);

app.post("/api/planets", create);

app.put("/api/planets/:id", updateById);

app.delete("/api/planets/:id", deleteById);


app.post("/api/planets/:id/image", upload.single("image"), createImage)

app.listen(port, () => {
  console.log(`Se inicializa el puerto: http://localhost:${port}`);
});
