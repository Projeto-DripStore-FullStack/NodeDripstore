import * as categoriaPecasRepository from "../repository/categoriaPecasRepository.js";

export const getAll = async (req, res) => {
  try {
    const pecas = await categoriaPecasRepository.getAll();
    res.status(200).send(pecas);
  } catch (error) {
    res.status(500).send(`O erro foi ${error}`);
  }
};

export const getOne = async (req, res) => {
  try {
    let { id } = req.params;
    const peca = await categoriaPecasRepository.getOne(id);
    res.status(200).send(peca);
  } catch (error) {
    res.status(500).send(`O erro foi ${error}`);
  }
};

export const store = async (req, res) => {
  try {
    let body = req.body;
    await categoriaPecasRepository.store(body);
    res.status(200).send("Categoria de Peça cadastrada com sucesso!");
  } catch (error) {
    res.status(500).send(`O erro foi ${error}`);
  }
};

export const deletar = async (req, res) => {
  try {
    let { id } = req.params;
    await categoriaPecasRepository.deletar(id);
    res.status(200).send("Categoria de Peça deletada com sucesso!");
  } catch (error) {
    res.status(500).send(`O erro foi ${error}`);
  }
};

export const update = async (req, res) => {
  try {
    let { id } = req.params;
    let body = req.body;
    await categoriaPecasRepository.update(id, body);
    res.status(200).send("Categoria de Peça atualizada com sucesso!");
  } catch (error) {
    res.status(500).send(`O erro foi ${error}`);
  }
};
