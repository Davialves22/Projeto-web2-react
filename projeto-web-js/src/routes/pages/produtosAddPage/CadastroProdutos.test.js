import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { CadastroProdutos } from "./CadastroProdutos";

describe("CadastroProdutos", () => {

    test("renders the component without errors", () => {
        render(<MemoryRouter><CadastroProdutos/></MemoryRouter>);
        expect(screen.getByText("Cadastro de Produtos")).toBeInTheDocument();
    });

});