// repository/categoriasRepository.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAll = async () => {
  return await prisma.categoria.findMany();
};

export const getOne = async (id) => {
  return await prisma.categoria.findUnique({
    where: { id: parseInt(id) },
  });
};

export const deletar = async (id) => {
  try {
    // Deletar a categoria pelo ID
    return await prisma.categoria.delete({
      where: { id: parseInt(id) },
    });
  } catch (error) {
    console.error("Erro ao deletar a categoria:", error);
    throw error;
  }
};

export const store = async (body) => {
  return await prisma.categoria.create({
    data: body,
  });
};

export const update = async (id, body) => {
  return await prisma.categoria.update({
    where: { id: parseInt(id) },
    data: body,
  });
};
