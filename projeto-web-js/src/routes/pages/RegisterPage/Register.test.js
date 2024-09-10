import { render, screen, fireEvent } from "@testing-library/react";
import axios from "axios";
import { Register } from "./Register";

// Mock da requisição axios para evitar chamadas reais à API
jest.mock("axios");

describe("Componente Register", () => {
    test("renderiza todos os campos de entrada e o botão de cadastro", () => {
        render(<Register />);

        // Verifica se os campos de entrada estão sendo renderizados
        expect(screen.getByPlaceholderText("E-mail")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Senha")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Repita a Senha")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("CPF")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Nome")).toBeInTheDocument();
        expect(screen.getByLabelText("Masculino")).toBeInTheDocument();
        expect(screen.getByLabelText("Feminino")).toBeInTheDocument();
        expect(screen.getByLabelText("Outros")).toBeInTheDocument();
        expect(screen.getByLabelText("Data de Nascimento")).toBeInTheDocument();
        expect(screen.getByText("CADASTRAR")).toBeInTheDocument();
    });

    test("exibe erro se as senhas não coincidirem", () => {
        render(<Register />);

        // Preenche os campos de senha e repetir senha com valores diferentes
        fireEvent.change(screen.getByPlaceholderText("Senha"), { target: { value: "senha123" } });
        fireEvent.change(screen.getByPlaceholderText("Repita a Senha"), { target: { value: "senha321" } });

        // Simula o clique no botão de cadastrar
        fireEvent.click(screen.getByText("CADASTRAR"));

        // Verifica se o alerta de senhas diferentes foi mostrado
        expect(screen.getByText("As senhas não coincidem!")).toBeInTheDocument();
    });

    test("submete o formulário com dados corretos", async () => {
        // Mockando o axios para simular um cadastro bem-sucedido
        axios.post.mockResolvedValue({ data: { message: "Cliente cadastrado com sucesso" } });

        render(<Register />);

        // Preenche os campos de entrada
        fireEvent.change(screen.getByPlaceholderText("E-mail"), { target: { value: "test@test.com" } });
        fireEvent.change(screen.getByPlaceholderText("Senha"), { target: { value: "senha123" } });
        fireEvent.change(screen.getByPlaceholderText("Repita a Senha"), { target: { value: "senha123" } });
        fireEvent.change(screen.getByPlaceholderText("CPF"), { target: { value: "123.456.789-00" } });
        fireEvent.change(screen.getByPlaceholderText("Nome"), { target: { value: "Test User" } });
        fireEvent.change(screen.getByLabelText("Masculino"), { target: { value: "M" } });
        fireEvent.change(screen.getByLabelText("Data de Nascimento"), { target: { value: "1990-01-01" } });

        // Simula o clique no botão de cadastrar
        fireEvent.click(screen.getByText("CADASTRAR"));

        // Espera que a requisição seja enviada e o alerta de sucesso apareça
        expect(axios.post).toHaveBeenCalledWith("http://localhost:3001/clientes/", {
            email: "test@test.com",
            senha: "senha123",
            cpf: "123.456.789-00",
            nome: "Test User",
            genero: "M",
            data_nasc: "1990-01-01",
        });
        expect(await screen.findByText("Cliente cadastrado com sucesso")).toBeInTheDocument();
    });

    test("exibe erro quando a requisição à API falha", async () => {
        // Mockando o axios para simular um erro de cadastro
        axios.post.mockRejectedValue(new Error("Erro ao cadastrar cliente"));

        render(<Register />);

        // Preenche os campos de entrada
        fireEvent.change(screen.getByPlaceholderText("E-mail"), { target: { value: "test@test.com" } });
        fireEvent.change(screen.getByPlaceholderText("Senha"), { target: { value: "senha123" } });
        fireEvent.change(screen.getByPlaceholderText("Repita a Senha"), { target: { value: "senha123" } });
        fireEvent.change(screen.getByPlaceholderText("CPF"), { target: { value: "123.456.789-00" } });
        fireEvent.change(screen.getByPlaceholderText("Nome"), { target: { value: "Test User" } });
        fireEvent.change(screen.getByLabelText("Masculino"), { target: { value: "M" } });
        fireEvent.change(screen.getByLabelText("Data de Nascimento"), { target: { value: "1990-01-01" } });

        // Simula o clique no botão de cadastrar
        fireEvent.click(screen.getByText("CADASTRAR"));

        // Verifica se o alerta de erro foi mostrado
        expect(await screen.findByText("Erro ao cadastrar cliente")).toBeInTheDocument();
    });
});
