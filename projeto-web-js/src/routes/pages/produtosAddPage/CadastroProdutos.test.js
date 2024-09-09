import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios'; 
import { CadastroProdutos } from "./CadastroProdutos";

// Mock da chamada axios.post
jest.mock('axios');
const mockedAxios = axios;

describe("CadastroProdutos", () => {

  beforeEach(() => {
    // Reseta os mocks antes de cada teste
    mockedAxios.post.mockReset();
  });

  test("renders the component without errors", () => {
    render(<MemoryRouter><CadastroProdutos/></MemoryRouter>);
    expect(screen.getByText("Cadastro de Produtos")).toBeInTheDocument();
  });

  test("form inputs are working correctly", () => {
    render(<MemoryRouter><CadastroProdutos/></MemoryRouter>);

    // Simula a entrada de dados em cada campo
    userEvent.type(screen.getByLabelText(/Nome do Produto/i), 'Produto Teste');
    userEvent.type(screen.getByLabelText(/Descrição do Produto/i), 'Descrição do Teste');
    userEvent.type(screen.getByLabelText(/Preço do Produto/i), '99.99');
    userEvent.type(screen.getByLabelText(/Link imagem do Produto/i), 'http://example.com/image.jpg');
    userEvent.type(screen.getByLabelText(/Categoria do Produto/i), 'Categoria Teste');
    userEvent.type(screen.getByLabelText(/Quantidade do Produto/i), '10');

    // Verifica se os campos foram preenchidos corretamente
    expect(screen.getByLabelText(/Nome do Produto/i)).toHaveValue('Produto Teste');
    expect(screen.getByLabelText(/Descrição do Produto/i)).toHaveValue('Descrição do Teste');
    expect(screen.getByLabelText(/Preço do Produto/i)).toHaveValue('99.99');
    expect(screen.getByLabelText(/Link imagem do Produto/i)).toHaveValue('http://example.com/image.jpg');
    expect(screen.getByLabelText(/Categoria do Produto/i)).toHaveValue('Categoria Teste');
    expect(screen.getByLabelText(/Quantidade do Produto/i)).toHaveValue('10');
  });

  test("submits the form successfully", async () => {
    render(<MemoryRouter><CadastroProdutos/></MemoryRouter>);

    // Simula a entrada de dados
    userEvent.type(screen.getByLabelText(/Nome do Produto/i), 'Produto Teste');
    userEvent.type(screen.getByLabelText(/Descrição do Produto/i), 'Descrição do Teste');
    userEvent.type(screen.getByLabelText(/Preço do Produto/i), '99.99');
    userEvent.type(screen.getByLabelText(/Link imagem do Produto/i), 'http://example.com/image.jpg');
    userEvent.type(screen.getByLabelText(/Categoria do Produto/i), 'Categoria Teste');
    userEvent.type(screen.getByLabelText(/Quantidade do Produto/i), '10');

    // Mock da resposta da API
    mockedAxios.post.mockResolvedValue({ data: { success: true } });

    // Submete o formulário
    userEvent.click(screen.getByRole('button', { name: /Cadastrar/i }));

    // Aguarda e verifica se o alerta de sucesso é mostrado
    await waitFor(() => expect(screen.getByText(/Produto cadastrado com sucesso/i)).toBeInTheDocument());
  });

  test("handles submit errors", async () => {
    render(<MemoryRouter><CadastroProdutos/></MemoryRouter>);

    // Simula a entrada de dados
    userEvent.type(screen.getByLabelText(/Nome do Produto/i), 'Produto Teste');
    userEvent.type(screen.getByLabelText(/Descrição do Produto/i), 'Descrição do Teste');
    userEvent.type(screen.getByLabelText(/Preço do Produto/i), '99.99');
    userEvent.type(screen.getByLabelText(/Link imagem do Produto/i), 'http://example.com/image.jpg');
    userEvent.type(screen.getByLabelText(/Categoria do Produto/i), 'Categoria Teste');
    userEvent.type(screen.getByLabelText(/Quantidade do Produto/i), '10');

    // Mock da resposta da API com erro
    mockedAxios.post.mockRejectedValue(new Error('Erro ao cadastrar produto'));

    // Submete o formulário
    userEvent.click(screen.getByRole('button', { name: /Cadastrar/i }));

    // Aguarda e verifica se o alerta de erro é mostrado
    await waitFor(() => expect(screen.getByText(/Erro ao cadastrar produto/i)).toBeInTheDocument());
  });

});
