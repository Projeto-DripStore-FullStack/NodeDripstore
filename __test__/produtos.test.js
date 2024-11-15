// import * as produtosController from "../controller/produtosController";
// import * as produtosRepository from "../repository/produtosRepository";

// jest.mock("../repository/produtosRepository");

// describe("Testando a funcionalidade de Produtos", () => {
//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   test("Deve retornar todos os produtos", async () => {
//     const produtos = [
//       {
//         id: 1,
//         subtitle: "Calça de Treino",
//         title: "Calça Esportiva",
//         subtitle2: "Modelo confortável",
//         price: 120.00,
//         promotion: 20.00,
//         base_url: "https://example.com/calca.jpg",
//         cor: "Preto",
//         tamanho: "M",
//         genero: "Masculino",
//         marca: "Nike",
//         categoriaPeca_id: 1,
//         categoriaFuncaoPeca_id: 1,
//       },
//       {
//         id: 2,
//         subtitle: "Boné Casual",
//         title: "Boné Estiloso",
//         subtitle2: "Design casual",
//         price: 50.00,
//         promotion: 10.00,
//         base_url: "https://example.com/bone.jpg",
//         cor: "Azul",
//         tamanho: "G",
//         genero: "Unissex",
//         marca: "Adidas",
//         categoriaPeca_id: 2,
//         categoriaFuncaoPeca_id: 4,
//       },
//       {
//         id: 3,
//         subtitle: "Camiseta Corrida",
//         title: "Camiseta Leve",
//         subtitle2: "Ideal para corridas",
//         price: 70.00,
//         promotion: 60.00,
//         base_url: "https://example.com/camiseta.jpg",
//         cor: "Vermelho",
//         tamanho: "P",
//         genero: "Feminino",
//         marca: "Puma",
//         categoriaPeca_id: 3,
//         categoriaFuncaoPeca_id: 3,
//       },
//     ];

//     produtosRepository.getAll.mockResolvedValue(produtos);

//     const req = {};
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await produtosController.getAll(req, res);

//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.send).toHaveBeenCalledWith(produtos);
//   });

//   test("Deve retornar um produto específico", async () => {
//     const produto = {
//       id: 1,
//       subtitle: "Calça de Treino",
//       title: "Calça Esportiva",
//       subtitle2: "Modelo confortável",
//       price: 120.00,
//       promotion: 20.00,
//       base_url: "https://example.com/calca.jpg",
//       cor: "Preto",
//       tamanho: "M",
//       genero: "Masculino",
//       marca: "Nike",
//       categoriaPeca_id: 1,
//       categoriaFuncaoPeca_id: 1,
//     };

//     produtosRepository.getOne.mockResolvedValue(produto);

//     const req = { params: { id: 1 } };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await produtosController.getOne(req, res);

//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.send).toHaveBeenCalledWith(produto);
//   });

//   test("Deve cadastrar um novo produto", async () => {
//     const body = {
//       subtitle: "Shorts Esportivo",
//       title: "Shorts de Corrida",
//       subtitle2: "Confortável e leve",
//       price: 80.00,
//       promotion: 15.00,
//       base_url: "https://example.com/shorts.jpg",
//       cor: "Cinza",
//       tamanho: "M",
//       genero: "Masculino",
//       marca: "Under Armour",
//       categoriaPeca_id: 4,
//       categoriaFuncaoPeca_id: 2,
//     };

//     const req = { body };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     produtosRepository.store.mockResolvedValue(body);

//     await produtosController.store(req, res);

//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.send).toHaveBeenCalledWith("Produto cadastrado com sucesso");
//   });

//   test("Deve atualizar um produto", async () => {
//     const body = {
//       subtitle: "Calça de Treino Atualizada",
//       title: "Calça Esportiva",
//       subtitle2: "Modelo super confortável",
//       price: 130.00,
//       promotion: 10.00,
//       base_url: "https://example.com/calca-atualizada.jpg",
//       cor: "Preto",
//       tamanho: "M",
//       genero: "Masculino",
//       marca: "Nike",
//       categoriaPeca_id: 1,
//       categoriaFuncaoPeca_id: 1,
//     };

//     produtosRepository.update.mockResolvedValue(body);

//     const req = { params: { id: 1 }, body };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await produtosController.update(req, res);

//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.send).toHaveBeenCalledWith("Produto atualizado com sucesso");
//   });

//   test("Deve deletar um produto", async () => {
//     produtosRepository.deletar.mockResolvedValue();

//     const req = { params: { id: 1 } };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await produtosController.deletar(req, res);

//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.send).toHaveBeenCalledWith("Produto deletado com sucesso");
//   });

//   // Testes de erro

//   test("Erro ao retornar todos os produtos", async () => {
//     produtosRepository.getAll.mockRejectedValue(new Error("Erro ao buscar produtos"));

//     const req = {};
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await produtosController.getAll(req, res);

//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.send).toHaveBeenCalledWith("Erro ao buscar produtos");
//   });

//   test("Erro ao retornar um produto específico", async () => {
//     produtosRepository.getOne.mockRejectedValue(new Error("Erro ao buscar produto"));

//     const req = { params: { id: 1 } };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await produtosController.getOne(req, res);

//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.send).toHaveBeenCalledWith("Erro ao buscar produto");
//   });

//   test("Erro ao cadastrar um produto", async () => {
//     const body = {
//       subtitle: "Shorts Fitness",
//       title: "Shorts de Academia",
//       subtitle2: "Leve e confortável",
//       price: 60.00,
//       promotion: 10.00,
//       base_url: "https://example.com/shorts.jpg",
//       cor: "Preto",
//       tamanho: "G",
//       genero: "Unissex",
//       marca: "Nike",
//       categoriaPeca_id: 4,
//       categoriaFuncaoPeca_id: 2,
//     };

//     const req = { body };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     produtosRepository.store.mockRejectedValue(new Error("Erro ao cadastrar produto"));

//     await produtosController.store(req, res);

//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.send).toHaveBeenCalledWith("Erro ao cadastrar produto");
//   });

//   test("Erro ao atualizar um produto", async () => {
//     const body = {
//       subtitle: "Boné Atualizado",
//       title: "Boné Casual",
//       subtitle2: "Novo design casual",
//       price: 55.00,
//       promotion: 5.00,
//       base_url: "https://example.com/bone-atualizado.jpg",
//       cor: "Azul",
//       tamanho: "M",
//       genero: "Unissex",
//       marca: "Adidas",
//       categoriaPeca_id: 2,
//       categoriaFuncaoPeca_id: 4,
//     };

//     produtosRepository.update.mockRejectedValue(new Error("Erro ao atualizar produto"));

//     const req = { params: { id: 2 }, body };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await produtosController.update(req, res);

//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.send).toHaveBeenCalledWith("Erro ao atualizar produto");
//   });

//   test("Erro ao deletar um produto", async () => {
//     produtosRepository.deletar.mockRejectedValue(new Error("Erro ao deletar produto"));

//     const req = { params: { id: 1 } };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await produtosController.deletar(req, res);

//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.send).toHaveBeenCalledWith("Erro ao deletar produto");
//   });
// });
