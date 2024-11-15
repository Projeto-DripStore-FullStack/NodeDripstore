import * as categoriaPecasController from "../controller/categoriaPecasController";
import * as categoriaPecasRepository from "../repository/categoriaPecasRepository";
import { pool } from "../database"; // Dependendo de como você conecta ao banco

jest.mock("../repository/categoriaPecasRepository");

describe("Testando a funcionalidade de Categoria Peças", () => {
  beforeAll(async () => {
    // Insere dados no banco antes de começar os testes
    await pool.query(`
      INSERT INTO categoriaPecas (tipo) VALUES ('Calças'), ('Bonés'), ('Camisetas'), ('Tênis'), ('Headphones');
    `);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(async () => {
    // Limpa dados ou faz rollback se necessário
    await pool.query("DELETE FROM categoriaPecas");
  });

  test("Deve retornar todas as Categorias de Peças", async () => {
    const categoriaPecas = [
      { id: 1, tipo: "Calças" },
      { id: 2, tipo: "Bonés" },
      { id: 3, tipo: "Camisetas" },
      { id: 4, tipo: "Tênis" },
      { id: 5, tipo: "Headphones" },
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
    const categoriaPeca = { id: 1, tipo: "Relógios" };

    const req = { body: categoriaPeca };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    categoriaPecasRepository.update.mockResolvedValue(categoriaPeca);

    await categoriaPecasController.update(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith("Categoria de Peça atualizada com sucesso");
  });

  test("Erro ao buscar todas as Categorias de Peças", async () => {
    const errorMessage = "Erro ao buscar categorias";

    categoriaPecasRepository.getAll.mockRejectedValue(new Error(errorMessage));

    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    await categoriaPecasController.getAll(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith(errorMessage);
  });

  test("Erro ao buscar uma Categoria de Peça", async () => {
    const errorMessage = "Erro ao buscar categoria";

    categoriaPecasRepository.getOne.mockRejectedValue(new Error(errorMessage));

    const req = { params: { id: 1 } };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    await categoriaPecasController.getOne(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith(errorMessage);
  });

  test("Erro ao deletar uma Categoria de Peça", async () => {
    const errorMessage = "Erro ao deletar categoria";

    categoriaPecasRepository.deletar.mockRejectedValue(new Error(errorMessage));

    const req = { params: { id: 1 } };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    await categoriaPecasController.deletar(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith(errorMessage);
  });

  test("Erro ao cadastrar uma Categoria de Peça", async () => {
    const errorMessage = "Erro ao cadastrar categoria";

    const req = { body: { tipo: "Relógios" } };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    categoriaPecasRepository.store.mockRejectedValue(new Error(errorMessage));

    await categoriaPecasController.store(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith(errorMessage);
  });

  test("Erro ao atualizar uma Categoria de Peça", async () => {
    const errorMessage = "Erro ao atualizar categoria";

    const req = {
      params: { id: 1 },
      body: { tipo: "Relógios" },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    categoriaPecasRepository.update.mockRejectedValue(new Error(errorMessage));

    await categoriaPecasController.update(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith(errorMessage);
  });
});
