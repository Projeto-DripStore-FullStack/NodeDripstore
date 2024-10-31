import express from "express";
import categoriasRoutes from "./routes/categoriasRoutes.js";
import estoquesRoutes from "./routes/estoquesRoutes.js"
import pedidosRoutes from "./routes/pedidosRoutes.js";
import produtosRoutes from "./routes/produtosRoutes.js";
// import usuariosRoutes from "./routes/usuariosRoutes.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use("/categorias", categoriasRoutes);
app.use("/estoques", estoquesRoutes);
app.use("/pedidos", pedidosRoutes);
app.use("/produtos", produtosRoutes);
// app.use("/usuarios", usuariosRoutes);

app.listen(PORT, () => {
  console.log(`Aplicação rodando em http://localhost:${PORT}`);
});
