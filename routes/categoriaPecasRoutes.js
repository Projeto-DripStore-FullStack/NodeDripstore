import express from "express";
import * as categoriaPecasController from "../controller/categoriaPecasController.js";

const route = express.Router();
route.get("/", categoriaPecasController.getAll);
route.get("/getone/:id", categoriaPecasController.getOne);
route.post("/", categoriaPecasController.store);
route.delete("/:id", categoriaPecasController.deletar);
route.put("/:id", categoriaPecasController.update);

export default route;
