import express from "express"
import * as pedidosController from "../controller/pedidosController.js"


const route = express.Router()
route.get('/pedidos/getByUserId/:usuario_id', pedidosController.getByUserId);
route.get('/',pedidosController.getAll)
route.get('/getone/:id',pedidosController.getOne)
route.delete('/:id',pedidosController.deletar)
route.post('/',pedidosController.store)
route.put('/:id',pedidosController.update)
export default route