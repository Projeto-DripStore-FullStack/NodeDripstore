// controller/pedidosController.js
import * as pedidosRepository from "../repository/pedidosRepository.js";

export const getByUserId = async (req, res) => {
  const { usuario_id } = req.params;  // Pega o usuario_id da URL
  try {
    const pedidos = await pedidosRepository.getByUserId(usuario_id);  
    if (!pedidos || pedidos.length === 0) {
      return res.status(404).json({ message: "Nenhum pedido encontrado para este usuário." });
    }
    res.status(200).json(pedidos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar pedidos do usuário" });
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
    const body = req.body;
    console.log(body);
    
    const valorPedidoDecimal = parseFloat(body.valorpedido);
    if (isNaN(valorPedidoDecimal)) {
      return res.status(400).send("Valorpedido deve ser um número válido.");
    }

    if (!body.usuario_id) {
      return res.status(400).send("Identificador de usuário inválido.");
    }

    const pedido = await pedidosRepository.store(body);

    res.status(201).json(pedido);
  } catch (error) {
    res.status(500).send(`Erro ao criar o pedido: ${error.message}`);
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
