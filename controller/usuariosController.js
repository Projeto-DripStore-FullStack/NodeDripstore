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

    // Hash da senha com 10 salt rounds
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Crie o objeto com os dados do usuário, incluindo a senha hash
    const userData = { ...otherData, password: hashedPassword };

    // Salve os dados com a senha hash
    await usuariosRepository.store(userData);
    res.status(200).send("Usuário cadastrado com sucesso");
  } catch (error) {
    res.status(500).send(`O erro foi ${error}`);
  }
};

export const loginUser = async (req, res) => {
    console.log("Tentativa de login:", req.body);
  try {
    let { email, password } = req.body;
    const usuario = await usuariosRepository.getByEmail(email);

    if (!usuario) {
      return res.status(404).send("Usuário não encontrado");
    }

    const isPasswordValid = await bcrypt.compare(password, usuario.password);
    if (!isPasswordValid) {
      return res.status(401).send("Senha incorreta");
    }

    res.status(200).send("Usuário logado com sucesso");
  } catch (error) {
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
