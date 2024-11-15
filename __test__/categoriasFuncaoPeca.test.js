// import * as categoriasFuncaoPecaController from "../controller/categoriasFuncaoPecaController";
// import * as categoriasFuncaoPecaRepository from "../repository/categoriasFuncaoPecaRepository";

// jest.mock("../repository/categoriasFuncaoPecaRepository");

// describe("Testando a funcionalidade de Categorias função por peça", () => {
//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   test("Deve retornar todas as Categorias função por peça", async () => {
//     const categoriasFuncaoPeca = [{ funcao: "Esporte" }, { funcao: "Corrida" }];
    
//     categoriasFuncaoPecaRepository.getAll.mockResolvedValue(categoriasFuncaoPeca);

//     const req = {};
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await categoriasFuncaoPecaController.getAll(req, res);

//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.send).toHaveBeenCalledWith(categoriasFuncaoPeca);
//   });

//   test("Deve retornar uma Categoria função por peça", async () => {
//     const categoriasFuncaoPeca = { id: 1, funcao: "Esporte" };

//     categoriasFuncaoPecaRepository.getOne.mockResolvedValue(categoriasFuncaoPeca);

//     const req = { params: { id: 1 } };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await categoriasFuncaoPecaController.getOne(req, res);

//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.send).toHaveBeenCalledWith(categoriasFuncaoPeca);
//   });

//   test("Deve deletar uma Categoria função por peça", async () => {
//     categoriasFuncaoPecaRepository.deletar.mockResolvedValue();

//     const req = { params: { id: 1 } };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await categoriasFuncaoPecaController.deletar(req, res);

//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.send).toHaveBeenCalledWith("Categoria função por peça deletada com sucesso");
//   });

//   test("Deve cadastrar uma Categoria função por peça", async () => {
//     const body = { funcao: "Jiujitsu" };

//     const req = { body };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     categoriasFuncaoPecaRepository.store.mockResolvedValue(body);

//     await categoriasFuncaoPecaController.store(req, res);

//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.send).toHaveBeenCalledWith("Categoria função por peça cadastrada com sucesso");
//   });

//   test("Deve atualizar uma Categoria função por peça", async () => {
//     const body = { funcao: "jiu-jitsu" };

//     categoriasFuncaoPecaRepository.update.mockResolvedValue(body);

//     const req = { params: { id: 5 }, body };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await categoriasFuncaoPecaController.update(req, res);

//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.send).toHaveBeenCalledWith("Categoria função por peça atualizada com sucesso");
//   });

//   // Testes de erro

//   test("Deve dar erro ao retornar todas as Categorias função por peça", async () => {
//     categoriasFuncaoPecaRepository.getAll.mockRejectedValue(new Error("Erro ao buscar categorias"));

//     const req = {};
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await categoriasFuncaoPecaController.getAll(req, res);

//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.send).toHaveBeenCalledWith("Erro ao buscar categorias");
//   });

//   test("Deve dar erro ao retornar uma Categoria função por peça", async () => {
//     categoriasFuncaoPecaRepository.getOne.mockRejectedValue(new Error("Erro ao buscar categoria"));

//     const req = { params: { id: 1 } };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await categoriasFuncaoPecaController.getOne(req, res);

//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.send).toHaveBeenCalledWith("Erro ao buscar categoria");
//   });

//   test("Deve dar erro ao deletar uma Categoria função por peça", async () => {
//     categoriasFuncaoPecaRepository.deletar.mockRejectedValue(new Error("Erro ao deletar categoria"));

//     const req = { params: { id: 1 } };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await categoriasFuncaoPecaController.deletar(req, res);

//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.send).toHaveBeenCalledWith("Erro ao deletar categoria");
//   });

//   test("Deve dar erro ao cadastrar uma Categoria função por peça", async () => {
//     const body = { funcao: "teste" };

//     const req = { body };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     categoriasFuncaoPecaRepository.store.mockRejectedValue(new Error("Erro ao cadastrar categoria"));

//     await categoriasFuncaoPecaController.store(req, res);

//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.send).toHaveBeenCalledWith("Erro ao cadastrar categoria");
//   });

//   test("Deve dar erro ao atualizar uma Categoria função por peça", async () => {
//     const body = { funcao: "Uniade 1", endereco: "Endereço 1" };

//     categoriasFuncaoPecaRepository.update.mockRejectedValue(new Error("Erro ao atualizar categoria"));

//     const req = { params: { id: 1 }, body };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await categoriasFuncaoPecaController.update(req, res);

//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.send).toHaveBeenCalledWith("Erro ao atualizar categoria");
//   });
// });
