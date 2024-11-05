import * as usuariosRepository from "../repository/usuariosRepository.js";
import bcrypt from "bcrypt";

export const getAll = async (req, res) => {
  try {
    const usuarios = await usuariosRepository.getAll();
    res.status(200).send(usuarios);
  } catch (error) {
    res.status(500).send(`O erro foi ${error}`);
  }
};

export const getOne = async (req, res) => {
  try {
    let { id } = req.params;
    const usuario = await usuariosRepository.getOne(id);
    res.status(200).send(usuario);
  } catch (error) {
    res.status(500).send(`O erro foi ${error}`);
  }
};

export const store = async (req, res) => {
  try {
    let { password, ...otherData } = req.body;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const userData = { ...otherData, password: hashedPassword };

    await usuariosRepository.store(userData);
    res.status(201).send("Usuário cadastrado com sucesso");
  } catch (error) {
    res.status(500).send(`O erro foi ${error}`);
  }
};

export const loginUser = async (req, res) => {
  console.log("Tentativa de login:", req.body);

  try {
    let { email, password } = req.body;

    // Recuperar o usuário pelo email
    const usuario = await usuariosRepository.getByEmail(email);
    if (!usuario) {
      return res.status(404).send("Usuário não encontrado");
    }

    console.log("Senha do usuário (hash):", usuario.password);

    const isPasswordValid = await bcrypt.compare(password, usuario.password);
    console.log("Senha fornecida:", password);

    if (!isPasswordValid) {
      console.log("Senha incorreta para o email:", email);
      return res.status(401).send("Senha incorreta");
    }

    console.log("Usuário logado com sucesso:", email);
    res.status(200).send("Usuário logado com sucesso");
  } catch (error) {
    console.error(`Erro ao logar o usuário: ${error}`);
    res.status(500).send(`Erro ao logar o usuário: ${error}`);
  }
};

export const deletar = async (req, res) => {
  try {
    let { id } = req.params;
    await usuariosRepository.deletar(id);
    res.status(200).send("usuario deletado com sucesso");
  } catch (error) {
    res.status(500).send(`O erro foi ${error}`);
  }
};

export const update = async (req, res) => {
  try {
    let { id } = req.params;
    let body = req.body;
    await usuariosRepository.update(id, body);
    res.status(200).send("usuario atualizado com sucesso");
  } catch (error) {
    res.status(500).send(`O erro foi ${error}`);
  }
};
