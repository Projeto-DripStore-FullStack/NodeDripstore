// import * as pedidosController from "../controller/pedidosController";
// import * as pedidosRepository from "../repository/pedidosRepository";

// jest.mock("../repository/pedidosRepository");

// describe("Testando a funcionalidade de Pedidos", () => {
//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   test("Deve retornar todos os pedidos", async () => {
//     const pedidos = [
//       {
//         id: 1,
//         numeroPedido: "PED001",
//         formapagamento: "Cartão de Crédito",
//         valorpedido: 159.90,
//         status: "Finalizado",
//         usuarioId: 1,
//         createdAt: "2024-11-09 16:27:57",
//         updatedAt: "2024-11-09 16:27:57",
//       },
//       {
//         id: 2,
//         numeroPedido: "PED002",
//         formapagamento: "Boleto",
//         valorpedido: 70.00,
//         status: "Encaminhado",
//         usuarioId: 2,
//         createdAt: "2024-11-09 16:27:57",
//         updatedAt: "2024-11-09 16:27:57",
//       },
//     ];

//     pedidosRepository.getAll.mockResolvedValue(pedidos);

//     const req = {};
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await pedidosController.getAll(req, res);

//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.send).toHaveBeenCalledWith(pedidos);
//   });

//   test("Deve retornar um pedido específico", async () => {
//     const pedido = {
//       id: 1,
//       numeroPedido: "PED001",
//       formapagamento: "Cartão de Crédito",
//       valorpedido: 159.90,
//       status: "Finalizado",
//       usuarioId: 1,
//       createdAt: "2024-11-09 16:27:57",
//       updatedAt: "2024-11-09 16:27:57",
//     };

//     pedidosRepository.getOne.mockResolvedValue(pedido);

//     const req = { params: { id: 1 } };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await pedidosController.getOne(req, res);

//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.send).toHaveBeenCalledWith(pedido);
//   });

//   test("Deve cadastrar um novo pedido", async () => {
//     const body = {
//       numeroPedido: "PED003",
//       formapagamento: "Pix",
//       valorpedido: 120.00,
//       status: "Aguardando",
//       usuarioId: 3,
//     };

//     const req = { body };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     pedidosRepository.store.mockResolvedValue(body);

//     await pedidosController.store(req, res);

//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.send).toHaveBeenCalledWith("Pedido cadastrado com sucesso");
//   });

//   test("Deve atualizar um pedido", async () => {
//     const body = {
//       numeroPedido: "PED001",
//       formapagamento: "Cartão de Débito",
//       valorpedido: 159.90,
//       status: "Cancelado",
//       usuarioId: 1,
//     };

//     pedidosRepository.update.mockResolvedValue(body);

//     const req = { params: { id: 1 }, body };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await pedidosController.update(req, res);

//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.send).toHaveBeenCalledWith("Pedido atualizado com sucesso");
//   });

//   test("Deve deletar um pedido", async () => {
//     pedidosRepository.deletar.mockResolvedValue();

//     const req = { params: { id: 1 } };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await pedidosController.deletar(req, res);

//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.send).toHaveBeenCalledWith("Pedido deletado com sucesso");
//   });

//   // Testes de erro

//   test("Erro ao retornar todos os pedidos", async () => {
//     pedidosRepository.getAll.mockRejectedValue(new Error("Erro ao buscar pedidos"));

//     const req = {};
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await pedidosController.getAll(req, res);

//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.send).toHaveBeenCalledWith("Erro ao buscar pedidos");
//   });

//   test("Erro ao retornar um pedido específico", async () => {
//     pedidosRepository.getOne.mockRejectedValue(new Error("Erro ao buscar pedido"));

//     const req = { params: { id: 1 } };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await pedidosController.getOne(req, res);

//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.send).toHaveBeenCalledWith("Erro ao buscar pedido");
//   });

//   test("Erro ao cadastrar um pedido", async () => {
//     const body = {
//       numeroPedido: "PED004",
//       formapagamento: "Transferência",
//       valorpedido: 200.00,
//       status: "Aguardando",
//       usuarioId: 4,
//     };

//     const req = { body };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     pedidosRepository.store.mockRejectedValue(new Error("Erro ao cadastrar pedido"));

//     await pedidosController.store(req, res);

//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.send).toHaveBeenCalledWith("Erro ao cadastrar pedido");
//   });

//   test("Erro ao atualizar um pedido", async () => {
//     const body = {
//       numeroPedido: "PED002",
//       formapagamento: "Boleto",
//       valorpedido: 70.00,
//       status: "Cancelado",
//       usuarioId: 2,
//     };

//     pedidosRepository.update.mockRejectedValue(new Error("Erro ao atualizar pedido"));

//     const req = { params: { id: 2 }, body };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await pedidosController.update(req, res);

//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.send).toHaveBeenCalledWith("Erro ao atualizar pedido");
//   });

//   test("Erro ao deletar um pedido", async () => {
//     pedidosRepository.deletar.mockRejectedValue(new Error("Erro ao deletar pedido"));

//     const req = { params: { id: 1 } };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await pedidosController.deletar(req, res);

//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.send).toHaveBeenCalledWith("Erro ao deletar pedido");
//   });
// });
