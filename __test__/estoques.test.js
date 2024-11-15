// import * as estoqueController from "../controller/estoqueController";
// import * as estoqueRepository from "../repository/estoquesRepository";

// jest.mock("../repository/estoqueRepository");

// describe("Testando a funcionalidade de Estoque", () => {
//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   test("Deve retornar todos os itens do Estoque", async () => {
//     const estoque = [
//       { id: 1, nome: "Calça Esportiva", quantidade: 50, produto_id: 1 },
//       { id: 2, nome: "Boné Estiloso", quantidade: 30, produto_id: 2 },
//       { id: 3, nome: "Camiseta Leve", quantidade: 20, produto_id: 3 },
//     ];

//     estoqueRepository.getAll.mockResolvedValue(estoque);

//     const req = {};
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await estoqueController.getAll(req, res);

//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.send).toHaveBeenCalledWith(estoque);
//   });

//   test("Deve retornar um item do Estoque", async () => {
//     const itemEstoque = { id: 1, nome: "Calça Esportiva", quantidade: 50, produto_id: 1 };

//     estoqueRepository.getOne.mockResolvedValue(itemEstoque);

//     const req = { params: { id: 1 } };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await estoqueController.getOne(req, res);

//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.send).toHaveBeenCalledWith(itemEstoque);
//   });

//   test("Deve deletar um item do Estoque", async () => {
//     estoqueRepository.deletar.mockResolvedValue();

//     const req = { params: { id: 1 } };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await estoqueController.deletar(req, res);

//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.send).toHaveBeenCalledWith("Item do estoque deletado com sucesso");
//   });

//   test("Deve cadastrar um novo item no Estoque", async () => {
//     const body = { nome: "Shorts Esportivo", quantidade: 25, produto_id: 4 };

//     const req = { body };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     estoqueRepository.store.mockResolvedValue(body);

//     await estoqueController.store(req, res);

//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.send).toHaveBeenCalledWith("Item do estoque cadastrado com sucesso");
//   });

//   test("Deve atualizar um item do Estoque", async () => {
//     const body = { nome: "Camiseta Nova", quantidade: 15, produto_id: 3 };

//     estoqueRepository.update.mockResolvedValue(body);

//     const req = { params: { id: 3 }, body };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await estoqueController.update(req, res);

//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.send).toHaveBeenCalledWith("Item do estoque atualizado com sucesso");
//   });

//   // Testes de erro

//   test("Erro ao retornar todos os itens do Estoque", async () => {
//     estoqueRepository.getAll.mockRejectedValue(new Error("Erro ao buscar itens no estoque"));

//     const req = {};
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await estoqueController.getAll(req, res);

//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.send).toHaveBeenCalledWith("Erro ao buscar itens no estoque");
//   });

//   test("Erro ao retornar um item do Estoque", async () => {
//     estoqueRepository.getOne.mockRejectedValue(new Error("Erro ao buscar item no estoque"));

//     const req = { params: { id: 1 } };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await estoqueController.getOne(req, res);

//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.send).toHaveBeenCalledWith("Erro ao buscar item no estoque");
//   });

//   test("Erro ao deletar um item do Estoque", async () => {
//     estoqueRepository.deletar.mockRejectedValue(new Error("Erro ao deletar item do estoque"));

//     const req = { params: { id: 1 } };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await estoqueController.deletar(req, res);

//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.send).toHaveBeenCalledWith("Erro ao deletar item do estoque");
//   });

//   test("Erro ao cadastrar um item no Estoque", async () => {
//     const body = { nome: "Tênis Esportivo", quantidade: 40, produto_id: 5 };

//     const req = { body };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     estoqueRepository.store.mockRejectedValue(new Error("Erro ao cadastrar item no estoque"));

//     await estoqueController.store(req, res);

//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.send).toHaveBeenCalledWith("Erro ao cadastrar item no estoque");
//   });

//   test("Erro ao atualizar um item do Estoque", async () => {
//     const body = { nome: "Camiseta Esportiva", quantidade: 10, produto_id: 3 };

//     estoqueRepository.update.mockRejectedValue(new Error("Erro ao atualizar item no estoque"));

//     const req = { params: { id: 1 }, body };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await estoqueController.update(req, res);

//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.send).toHaveBeenCalledWith("Erro ao atualizar item no estoque");
//   });
// });
