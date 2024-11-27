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

    return usuarioComPedidos ? usuarioComPedidos.pedidos : []; // Retorna os pedidos ou um array vazio
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
  try {
    const pedido = await prisma.pedidos.create({
      data: {
        numeroPedido: body.numeroPedido,
        formapagamento: body.formapagamento,
        valorpedido: parseFloat(body.valorpedido),
        status: body.status || "Encaminhado",
        usuario_id: body.usuario_id,
        nomeCartao: body.nomeCartao,
        validadeCartao: body.validadeCartao,
        cvvCartao: body.cvvCartao,
        numeroCartao: body.numeroCartao,
      },
    });

    if (body.produtos && body.produtos.length > 0) {
      const pedidosProdutosData = body.produtos.map((produto) => ({
        pedido_id: pedido.id,
        produto_id: produto.produto_id,
        quantidade: produto.quantidade,
      }));
      await prisma.pedidosProdutos.createMany({
        data: pedidosProdutosData,
      });
    }

    return pedido;
  } catch (error) {
    console.error("Erro ao armazenar pedido:", error);
    throw new Error("Erro ao criar pedido.");
  }
};

export const deletar = async (id) => {
  return await prisma.pedidos.update({
    where: { id: parseInt(id) },
    data: { deleted: true },
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
