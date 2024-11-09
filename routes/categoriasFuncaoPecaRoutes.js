import express from "express";
import * as categoriasFuncaoPecaController from "../controller/categoriasFuncaoPecaController.js";

const route = express.Router();
route.get("/", categoriasFuncaoPecaController.getAll);
route.get("/getone/:id", categoriasFuncaoPecaController.getOne);
route.post("/", categoriasFuncaoPecaController.store);
route.delete("/:id", categoriasFuncaoPecaController.deletar);
route.put("/:id", categoriasFuncaoPecaController.update);

export default route;
