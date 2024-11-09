import * as categoriasFuncaoPecaRepository from "../repository/categoriasFuncaoPecaRepository.js";

export const getAll = async (req, res) => {
  try {
    const funcoes = await categoriasFuncaoPecaRepository.getAll();
    res.status(200).send(funcoes);
  } catch (error) {
    res.status(500).send(`O erro foi ${error}`);
  }
};

export const getOne = async (req, res) => {
  try {
    let { id } = req.params;
    const funcao = await categoriasFuncaoPecaRepository.getOne(id);
    res.status(200).send(funcao);
  } catch (error) {
    res.status(500).send(`O erro foi ${error}`);
  }
};

export const store = async (req, res) => {
  try {
    let body = req.body;
    await categoriasFuncaoPecaRepository.store(body);
    res.status(200).send("Função de Categoria cadastrada com sucesso!");
  } catch (error) {
    res.status(500).send(`O erro foi ${error}`);
  }
};

export const deletar = async (req, res) => {
  try {
    let { id } = req.params;
    await categoriasFuncaoPecaRepository.deletar(id);
    res.status(200).send("Função de Categoria deletada com sucesso!");
  } catch (error) {
    res.status(500).send(`O erro foi ${error}`);
  }
};

export const update = async (req, res) => {
  try {
    let { id } = req.params;
    let body = req.body;
    await categoriasFuncaoPecaRepository.update(id, body);
    res.status(200).send("Função de Categoria atualizada com sucesso!");
  } catch (error) {
    res.status(500).send(`O erro foi ${error}`);
  }
};
