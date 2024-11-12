import * as categoriaPecasController from "../controller/categoriaPecasController";
import * as categoriaPecasRepository from "../repository/categoriaPecasRepository";

jest.mock("../repository/categoriaPecasRepository");

describe("Testando a funcionalidade de Categoria Peças", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Deve retornar todas as Categorias de Peças", async () => {
    const categoriaPecas = [
      { id: 1, tipo: "Calças" },
      { id: 2, tipo: "Bonés" },
      { id: 3, tipo: "Camisetas" },
      { id: 4, tipo: "Bermudas" },
      { id: 5, tipo: "Fones" },
    ];

    categoriaPecasRepository.getAll.mockResolvedValue(categoriaPecas);

    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    await categoriaPecasController.getAll(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(categoriaPecas);
  });

  test("Deve retornar uma Categoria de Peça", async () => {
    const categoriaPeca = { id: 1, tipo: "Calças" };

    categoriaPecasRepository.getOne.mockResolvedValue(categoriaPeca);

    const req = { params: { id: 1 } };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    await categoriaPecasController.getOne(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(categoriaPeca);
  });

  test("Deve deletar uma Categoria de Peça", async () => {
    categoriaPecasRepository.deletar.mockResolvedValue();

    const req = { params: { id: 1 } };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    await categoriaPecasController.deletar(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith("Categoria de Peça deletada com sucesso");
  });

  test("Deve cadastrar uma nova Categoria de Peça", async () => {
    const body = { tipo: "Relógios" };

    const req = { body };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    categoriaPecasRepository.store.mockResolvedValue(body);

    await categoriaPecasController.store(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith("Categoria de Peça cadastrada com sucesso");
  });

  test("Deve atualizar uma Categoria de Peça", async () => {
    const body = { tipo: "Pulseiras" };

    categoriaPecasRepository.update.mockResolvedValue(body);

    const req = { params: { id: 5 }, body };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    await categoriaPecasController.update(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith("Categoria de Peça atualizada com sucesso");
  });

  // Testes de erro

  test("Erro ao retornar todas as Categorias de Peças", async () => {
    categoriaPecasRepository.getAll.mockRejectedValue(new Error("Erro ao buscar categorias"));

    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    await categoriaPecasController.getAll(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith("Erro ao buscar categorias");
  });

  test("Erro ao retornar uma Categoria de Peça", async () => {
    categoriaPecasRepository.getOne.mockRejectedValue(new Error("Erro ao buscar categoria"));

    const req = { params: { id: 1 } };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    await categoriaPecasController.getOne(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith("Erro ao buscar categoria");
  });

  test("Erro ao deletar uma Categoria de Peça", async () => {
    categoriaPecasRepository.deletar.mockRejectedValue(new Error("Erro ao deletar categoria"));

    const req = { params: { id: 1 } };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    await categoriaPecasController.deletar(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith("Erro ao deletar categoria");
  });

  test("Erro ao cadastrar uma Categoria de Peça", async () => {
    const body = { tipo: "teste" };

    const req = { body };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    categoriaPecasRepository.store.mockRejectedValue(new Error("Erro ao cadastrar categoria"));

    await categoriaPecasController.store(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith("Erro ao cadastrar categoria");
  });

  test("Erro ao atualizar uma Categoria de Peça", async () => {
    const body = { tipo: "Relógios" };

    categoriaPecasRepository.update.mockRejectedValue(new Error("Erro ao atualizar categoria"));

    const req = { params: { id: 1 }, body };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    await categoriaPecasController.update(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith("Erro ao atualizar categoria");
  });
});
