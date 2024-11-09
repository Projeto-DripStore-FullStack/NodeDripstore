import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAll = async () => {
  return await prisma.categoriasFuncaoPeca.findMany();
};

export const getOne = async (id) => {
  return await prisma.categoriasFuncaoPeca.findUnique({
    where: { id: parseInt(id) },
  });
};

export const store = async (body) => {
  return await prisma.categoriasFuncaoPeca.create({
    data: body,
  });
};

export const deletar = async (id) => {
  return await prisma.categoriasFuncaoPeca.delete({
    where: { id: parseInt(id) },
  });
};

export const update = async (id, body) => {
  return await prisma.categoriasFuncaoPeca.update({
    where: { id: parseInt(id) },
    data: body,
  });
};
