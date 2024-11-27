// controller/pedidosController.js
import * as pedidosRepository from "../repository/pedidosRepository.js";

export const getByUserId = async (req, res) => {
  const { usuario_id } = req.params; // Pega o ID do usuário da URL
  console.log(usuario_id)
  try {
    const usuarioComPedidos = await pedidosRepository.getByUserId(usuario_id);
    console.log("usuarioComPedidos no controlador:", usuarioComPedidos); // Verifique a estrutura do retorno

    if (!usuarioComPedidos || !usuarioComPedidos.pedidos || usuarioComPedidos.pedidos.length === 0) {
      return res.status(404).json({ message: "Nenhum pedido encontrado para este usuário." });
    }

    // Retorna apenas os pedidos com os dados necessários
    res.status(200).json(usuarioComPedidos.pedidos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar pedidos do usuário." });
  }
};


export const getAll = async (req, res) => {
  try {
    const pedidos = await pedidosRepository.getAll();
    res.status(200).json(pedidos);
  } catch (error) {
    res.status(500).send(`O erro foi ${error.message}`);
  }
};

export const getOne = async (req, res) => {
  const { id } = req.params;  
  try {
    const pedido = await pedidosRepository.getOne(id);  
    if (!pedido) {
      return res.status(404).json({ message: "Pedido não encontrado" });
    }
    res.status(200).json(pedido);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar o pedido" });
  }
};

export const store = async (req, res) => {
  try {
    const { usuario_id, produtos, ...pedidoData } = req.body;

    if (!usuario_id || !produtos || produtos.length === 0) {
      return res.status(400).json({ message: "Usuário ou produtos inválidos." });
    }

    const pedido = await pedidosRepository.store({
      ...pedidoData,
      usuario_id,
      produtos,
    });

    res.status(201).json(pedido);
  } catch (error) {
    console.error("Erro ao criar pedido:", error);
    res.status(500).json({ message: "Erro ao criar pedido." });
  }
};


export const deletar = async (req, res) => {
  try {
    const { id } = req.params;
    await pedidosRepository.deletar(id);
    res.status(200).send("Pedido deletado com sucesso");
  } catch (error) {
    res.status(500).send(`O erro foi ${error.message}`);
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    await pedidosRepository.update(id, body);
    res.status(200).send("Pedido atualizado com sucesso");
  } catch (error) {
    res.status(500).send(`O erro foi ${error.message}`);
  }
};
