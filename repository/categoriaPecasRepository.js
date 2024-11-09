import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAll = async () => {
  return await prisma.categoriaPecas.findMany();
};

export const getOne = async (id) => {
  return await prisma.categoriaPecas.findUnique({
    where: { id: parseInt(id) },
  });
};

export const store = async (body) => {
  return await prisma.categoriaPecas.create({
    data: body,
  });
};

export const deletar = async (id) => {
  return await prisma.categoriaPecas.delete({
    where: { id: parseInt(id) },
  });
};

export const update = async (id, body) => {
  return await prisma.categoriaPecas.update({
    where: { id: parseInt(id) },
    data: body,
  });
};
