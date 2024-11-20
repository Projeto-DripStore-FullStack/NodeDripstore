// repository/pedidosRepository.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getByUserId = async (usuarioId) => {
  try {
    const usuarioComPedidos = await prisma.usuarios.findUnique({
      where: { id: parseInt(usuarioId) },
      include: {
        pedidos: {
          include: {
            produtos: {
              include: {
                produto: true,
              },
            },
          },
        },
      },
    });

    console.log("usuarioComPedidos:", usuarioComPedidos); 

    return usuarioComPedidos;
  } catch (error) {
    console.error("Erro ao buscar os pedidos:", error);
    throw new Error("Erro ao buscar os pedidos");
  }
};


export const getAll = async () => {
  return await prisma.pedidos.findMany({
    include: {
      usuario: true,
      produtos: {
        include: {
          produto: true,
        },
      },
    },
  });
};

export const getOne = async (id) => {
  try {
    return await prisma.pedidos.findUnique({
      where: { id: parseInt(id) },
      include: {
        usuario: true, // Inclui dados do usuário associado ao pedido
        produtos: {
          // Inclui os produtos do pedido
          include: {
            produto: true,
          },
        },
      },
    });
  } catch (error) {
    console.error("Erro ao buscar pedido:", error);
    throw new Error("Erro ao buscar pedido");
  }
};

export const store = async (body) => {
  console.log(body);
  return await prisma.pedidos.create({
    data: {
      numeroPedido: body.numeroPedido,
      formapagamento: body.formapagamento,
      valorpedido: parseFloat(body.valorpedido),
      status: body.status,
      usuario_id: body.usuario_id,
      nomeCartao: body.nomeCartao,
      validadeCartao: body.validadeCartao,
      cvvCartao: body.cvvCartao,
      numeroCartao: body.numeroCartao,
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
