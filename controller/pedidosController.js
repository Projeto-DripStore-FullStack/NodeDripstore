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
    const body = req.body;
    await pedidosRepository.store(body);
    res.status(201).send("Pedido cadastrado com sucesso");
  } catch (error) {
    res.status(500).send(`O erro foi ${error.message}`);
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
