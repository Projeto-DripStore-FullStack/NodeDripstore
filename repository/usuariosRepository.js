import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const getAll = async () => {
  return await prisma.usuarios.findMany();
};

export const getOne = async (id) => {
  return await prisma.usuarios.findUnique({
    where: { id: parseInt(id) },
  });
};

export const deletar = async (id) => {
  return await prisma.usuarios.delete({
    where: { id: parseInt(id) },
  });
};

export const store = async (body) => {
  const hashedPassword = await bcrypt.hash(body.password, 10);
  body.password = hashedPassword;

  return await prisma.usuarios.create({
    data: body,
  });
};

export const update = async (id, body) => {
  return await prisma.usuarios.update({
    where: { id: parseInt(id) },
    data: body,
  });
};

export const login = async (email, password) => {
  const usuario = await prisma.usuarios.findFirst({
    where: { email: email },
  });

  if (!usuario) {
    throw new Error("Usuário não encontrado");
  }

  const isPasswordValid = await bcrypt.compare(password, usuario.password);
  if (!isPasswordValid) {
    throw new Error("Senha inválida");
  }

  return usuario;
};

// Função para buscar usuário pelo email
export const getByEmail = async (email) => {
  return await prisma.usuarios.findUnique({
    where: { email },
  });
};
