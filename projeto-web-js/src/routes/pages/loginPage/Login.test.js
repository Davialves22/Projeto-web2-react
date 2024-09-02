import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Login } from './Login';

describe("Login", () => {
    test("dado o email, quando estiver vazio, então exibe a mensagem de erro obrigatória", async () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );

        const email = screen.getByTestId("email",);
        await userEvent.type(email, "qualquerValor"); // Simula a exclusão do valor do email
        await userEvent.clear(email);

        // Aguarda e verifica se a mensagem de erro é exibida
        const emailError = await waitFor(() => screen.findByTestId("email-required"));
        expect(emailError).toBeInTheDocument();
        expect(emailError).toHaveTextContent("Email é obrigatório");
        });

    test("dado o email, quando for inválido, então exibe a mensagem de erro de email inválido", async () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );

        const email = screen.getByTestId("email");
        await userEvent.type(email, "invalid-email");

        // Aguarda e verifica se a mensagem de erro é exibida
        const invalidEmailError = await waitFor(() => screen.findByTestId("email-required"));
        expect(invalidEmailError).toBeInTheDocument();
        expect(invalidEmailError).toHaveTextContent("Email inválido");
    });

    test("dado a senha, quando estiver vazia, então exibe a mensagem de erro obrigatória", async () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );

        const password = screen.getByTestId("password");
        await userEvent.type(password, "qualquerValor"); // Simula a exclusão do valor da senha
        await userEvent.clear(password);

        // Aguarda e verifica se a mensagem de erro é exibida
        const passwordError = await waitFor(() => screen.findByTestId("password-required"));
        expect(passwordError).toBeInTheDocument();
        expect(passwordError).toHaveTextContent("Senha é obrigatória");
    });

    test("dado a senha, quando tiver valor, então esconde a mensagem de erro obrigatória", async () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );

        const password = screen.getByTestId("password");
        await userEvent.type(password, "anyValue");

        // Aguarda e verifica se a mensagem de erro desapareceu
        await waitFor(() => {
            const passwordError = screen.queryByTestId("password-required");
            expect(passwordError).not.toBeInTheDocument();
        });
    });

    test("dado o email, quando for válido, então ativa o botão de recuperar senha", async () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );

        const email = screen.getByTestId('email');
        await userEvent.type(email, "valid@email.com");

        // Verifique se o botão de recuperar senha está ativado
        const recoverButton = screen.getByTestId('recover-password-button');
        expect(recoverButton).not.toBeDisabled();
    });

    test("dado o formulário válido, então ativa o botão de login", async () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );

        const email = screen.getByTestId('email');
        const password = screen.getByTestId('password');
        await userEvent.type(email, "valid@email.com");
        await userEvent.type(password, "validPassword");

        // Verifique se o botão de login está ativado
        const loginButton = screen.getByTestId('login-button');
        expect(loginButton).not.toBeDisabled();
    });
});
