// controller/pedidosController.js
import * as pedidosRepository from "../repository/pedidosRepository.js";

export const getAll = async (req, res) => {
  try {
    const pedidos = await pedidosRepository.getAll();
    res.status(200).json(pedidos);
  } catch (error) {
    res.status(500).send(`O erro foi ${error.message}`);
  }
};

export const getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const pedido = await pedidosRepository.getOne(id);
    if (pedido) {
      res.status(200).json(pedido);
    } else {
      res.status(404).send("Pedido não encontrado");
    }
  } catch (error) {
    res.status(500).send(`O erro foi ${error.message}`);
  }
};

export const store = async (req, res) => {
  try {
    const  body  = req.body;
console.log(body)
    const valorPedidoDecimal = parseFloat(body.valorpedido);

    if (isNaN(valorPedidoDecimal)) {
      return res.status(400).send("Valorpedido deve ser um número válido.");
    }

    // Verificar se o usuario_id foi fornecido
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
