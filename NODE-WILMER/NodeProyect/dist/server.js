"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const morgan_1 = __importDefault(require("morgan"));
const multer_1 = __importDefault(require("multer"));
const planets_js_1 = require("./controllers/planets.js");
require("dotenv/config");
const path = require("path");
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "uploads"));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
const upload = (0, multer_1.default)({ storage });
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use("/dist/uploads", express_1.default.static("uploads"));
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.get("/api/planets", planets_js_1.getALL);
app.get("/api/planets/:id", planets_js_1.getOneById);
app.post("/api/planets", planets_js_1.create);
app.put("/api/planets/:id", planets_js_1.updateById);
app.delete("/api/planets/:id", planets_js_1.deleteById);
app.post("/api/planets/:id/image", upload.single("image"), planets_js_1.createImage);
app.listen(port, () => {
    console.log(`Se inicializa el puerto: http://localhost:${port}`);
});
