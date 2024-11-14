// repository/pedidosRepository.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAll = async () => {
  return await prisma.pedidos.findMany({
    include: {
      usuario: true, // Inclui dados do usuário associado ao pedido
    },
  });
};

export const getOne = async (id) => {

  return await prisma.pedidos.findUnique({
    where: { id: parseInt(id) },
    include: {
      usuario: true, // Inclui dados do usuário associado ao pedido
    },
  });
};

export const store = async (body) => {
  console.log(body)
  return await prisma.pedidos.create({
    data: {
      numeroPedido: body.numeroPedido,
      formapagamento: body.formapagamento,
      valorpedido: parseFloat(body.valorpedido), // Garantir que o valor seja float
      usuario_id: body.usuario_id, // Inclui dados do usuário
    },
  });
};

export const deletar = async (id) => {
  return await prisma.pedidos.update({
    where: { id: parseInt(id) },
    data: { deleted: true }, // Marca o pedido como deletado
  });
};

export const update = async (id, body) => {
  return await prisma.pedidos.update({
    where: { id: parseInt(id) },
    data: {
      formapagamento: body.formapagamento,
      valorpedido: body.valorpedido,
    },
  });
};
