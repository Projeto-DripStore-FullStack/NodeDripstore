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
  return await prisma.pedidos.create({
    data: {
      vendedor: body.vendedor,
      cliente: body.cliente,
      formapagamento: body.formapagamento,
      valorpedido: body.valorpedido,
      deleted: false, // Define o pedido como não deletado
      usuario: { connect: { id: body.usuario_id } }, // Associa ao usuário via chave estrangeira
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
      vendedor: body.vendedor,
      cliente: body.cliente,
      formapagamento: body.formapagamento,
      valorpedido: body.valorpedido,
    },
  });
};
