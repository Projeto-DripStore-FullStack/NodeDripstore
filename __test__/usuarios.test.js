// import * as usuariosController from "../controller/usuariosController";
// import * as usuariosRepository from "../repository/usuariosRepository";

// jest.mock("../repository/usuariosRepository");

// describe("Testando a funcionalidade de Usuários", () => {
//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   test("Deve retornar todos os usuários", async () => {
//     const usuarios = [
//       {
//         id: 1,
//         nome: "João Silva",
//         cpf: "12345678901",
//         telefone: "(11) 98765-4321",
//         email: "joao.silva@example.com",
//         password: "senha123",
//         endereco: "Rua A, 123",
//         bairro: "Centro",
//         cidade: "São Paulo",
//         complemento: "",
//         cep: "01001000"
//       },
//       {
//         id: 2,
//         nome: "Maria Oliveira",
//         cpf: "98765432109",
//         telefone: "(21) 91234-5678",
//         email: "maria.oliveira@example.com",
//         password: "senha456",
//         endereco: "Avenida B, 456",
//         bairro: "Jardins",
//         cidade: "Rio de Janeiro",
//         complemento: "Apto 101",
//         cep: "20020000"
//       },
//       {
//         id: 3,
//         nome: "Giovanni Azevedo",
//         cpf: "03558639367",
//         telefone: "85998577082",
//         email: "gg.santos.neto02@gmail.com",
//         password: "$2b$10$mFPH3n34kC6RHqL4ntlLSOdd6TaoracSjNMU.Y14jnSxHQ.IBLfsy",
//         endereco: "Rua john lennon 13",
//         bairro: "messejana",
//         cidade: "fortaleza",
//         complemento: "perto da cavalaria",
//         cep: "12324235"
//       }
//     ];

//     usuariosRepository.getAll.mockResolvedValue(usuarios);

//     const req = {};
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await usuariosController.getAll(req, res);

//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.send).toHaveBeenCalledWith(usuarios);
//   });

//   test("Deve retornar um usuário específico", async () => {
//     const usuario = {
//       id: 1,
//       nome: "João Silva",
//       cpf: "12345678901",
//       telefone: "(11) 98765-4321",
//       email: "joao.silva@example.com",
//       password: "senha123",
//       endereco: "Rua A, 123",
//       bairro: "Centro",
//       cidade: "São Paulo",
//       complemento: "",
//       cep: "01001000"
//     };

//     usuariosRepository.getOne.mockResolvedValue(usuario);

//     const req = { params: { id: 1 } };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await usuariosController.getOne(req, res);

//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.send).toHaveBeenCalledWith(usuario);
//   });

//   test("Deve cadastrar um novo usuário", async () => {
//     const body = {
//       nome: "Samuel",
//       cpf: "12345678912",
//       telefone: "85999999999",
//       email: "samuel@gmail.com",
//       password: "senha789",
//       endereco: "Rua Desembargador Leite Albuquerque 635",
//       bairro: "Messejana",
//       cidade: "Fortaleza",
//       complemento: "Perto da Cavalaria",
//       cep: "12324235"
//     };

//     const req = { body };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     usuariosRepository.store.mockResolvedValue(body);

//     await usuariosController.store(req, res);

//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.send).toHaveBeenCalledWith("usuario cadastrado com sucesso"); // Corrigido o texto da resposta
//   });

//   test("Deve atualizar um usuário", async () => {
//     const body = {
//       nome: "João Silva Atualizado",
//       cpf: "12345678901",
//       telefone: "(11) 98765-4321",
//       email: "joao.silva@atualizado.com",
//       password: "novaSenha123",
//       endereco: "Rua A, 123",
//       bairro: "Centro",
//       cidade: "São Paulo",
//       complemento: "",
//       cep: "01001000"
//     };

//     usuariosRepository.update.mockResolvedValue(body);

//     const req = { params: { id: 1 }, body };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await usuariosController.update(req, res);

//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.send).toHaveBeenCalledWith("usuario atualizado com sucesso"); // Corrigido o texto da resposta
//   });

//   test("Deve deletar um usuário", async () => {
//     usuariosRepository.deletar.mockResolvedValue();

//     const req = { params: { id: 1 } };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await usuariosController.deletar(req, res);

//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.send).toHaveBeenCalledWith("usuario deletado com sucesso"); // Corrigido o texto da resposta
//   });

//   // Testes de erro

//   test("Erro ao retornar todos os usuários", async () => {
//     usuariosRepository.getAll.mockRejectedValue(new Error("Erro ao buscar usuários"));

//     const req = {};
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await usuariosController.getAll(req, res);

//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.send).toHaveBeenCalledWith("O erro foi Error: Erro ao buscar usuários"); // Corrigido o texto de erro
//   });

//   test("Erro ao retornar um usuário específico", async () => {
//     usuariosRepository.getOne.mockRejectedValue(new Error("Erro ao buscar usuário"));

//     const req = { params: { id: 1 } };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await usuariosController.getOne(req, res);

//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.send).toHaveBeenCalledWith("O erro foi Error: Erro ao buscar usuário"); // Corrigido o texto de erro
//   });

//   test("Erro ao cadastrar um usuário", async () => {
//     const body = {
//       nome: "Samuel",
//       cpf: "12345678912",
//       telefone: "85999999999",
//       email: "samuel@gmail.com",
//       password: "senha789",
//       endereco: "Rua Desembargador Leite Albuquerque 635",
//       bairro: "Messejana",
//       cidade: "Fortaleza",
//       complemento: "Perto da Cavalaria",
//       cep: "12324235"
//     };

//     const req = { body };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     usuariosRepository.store.mockRejectedValue(new Error("Erro ao cadastrar usuário"));

//     await usuariosController.store(req, res);

//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.send).toHaveBeenCalledWith("O erro foi Error: Erro ao cadastrar usuário"); // Corrigido o texto de erro
//   });

//   test("Erro ao atualizar um usuário", async () => {
//     const body = {
//       nome: "João Silva Atualizado",
//       cpf: "12345678901",
//       telefone: "(11) 98765-4321",
//       email: "joao.silva@atualizado.com",
//       password: "novaSenha123",
//       endereco: "Rua A, 123",
//       bairro: "Centro",
//       cidade: "São Paulo",
//       complemento: "",
//       cep: "01001000"
//     };

//     usuariosRepository.update.mockRejectedValue(new Error("Erro ao atualizar usuário"));

//     const req = { params: { id: 1 }, body };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await usuariosController.update(req, res);

//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.send).toHaveBeenCalledWith("O erro foi Error: Erro ao atualizar usuário"); // Corrigido o texto de erro
//   });

//   test("Erro ao deletar um usuário", async () => {
//     usuariosRepository.deletar.mockRejectedValue(new Error("Erro ao deletar usuário"));

//     const req = { params: { id: 1 } };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await usuariosController.deletar(req, res);

//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.send).toHaveBeenCalledWith("O erro foi Error: Erro ao deletar usuário"); // Corrigido o texto de erro
//   });
// });
