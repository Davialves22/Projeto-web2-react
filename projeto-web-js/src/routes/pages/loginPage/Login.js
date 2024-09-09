import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";

// NÃO EXCLUAM ALGO NA TELA SEM REFAZER O TESTID, PARA NÃO DAR ERRO

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateEmail = (value) => {
        if (value.length === 0) {
            setEmailError('Email é obrigatório');
        } else if (!/\S+@\S+\.\S+/.test(value)) {
            setEmailError('Email inválido');
        } else {
            setEmailError('');
        }
    };

    const validatePassword = (value) => {
        if (value.trim() === '') {
            setPasswordError('Senha é obrigatória');
        } else {
            setPasswordError('');
        }
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        validateEmail(value);
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        validatePassword(value);
    };

    const isFormValid = () => {
        return emailError === '' && passwordError === '' && email !== '' && password !== '';
    };

    // Habilita a usar os testes no DOM
    const handleSubmit = (e) => {
        e.preventDefault();
        validateEmail(email);
        validatePassword(password);
    };

    // Trechos como esse: {emailError && <div data-testid="email-error" className="error-message">{emailError}</div>} implementam o teste no DOM (NÃO EXCLUIR)

    return (
        <main>
            <section id="login">
                <div id='title'>
                    <h3>BEM-VINDO!</h3>
                    <p>ENTRE NA SUA CONTA</p>
                </div>
                <div id="form">
                    <form onSubmit={handleSubmit}>
                        <div id="form-login" className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                </svg>
                            </span>
                            <input type="text"
                                id="input-login"
                                className="form-control"
                                placeholder="Email"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                data-testid="email"
                                value={email}
                                onChange={handleEmailChange}
                            />

                            {emailError && <div data-testid="email-error" className="error-message">{emailError}</div>}
                            {emailError && <div data-testid="email-required" className="error-message">{emailError}</div>}
                        </div>

                        <div id="form-pass" className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">@</span>
                            <input type="password"
                                id="input-pass"
                                className="form-control"
                                placeholder="Senha"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                data-testid="password"
                                value={password}
                                onChange={handlePasswordChange} />
                            {passwordError && <div data-testid="password-error" className="error-message">{passwordError}</div>}
                        </div>

                        <Link to="/">
                            <button className="btnConfirm"
                                data-testid="login-button"
                                disabled={!isFormValid()}>
                                LOGIN
                            </button>
                        </Link>

                    </form>
                </div>
            </section>
            <section id="cadaster">
                <span> OU </span>
                <Link to="/Register">
                    <a href='/' id="link-register">CADASTRE-SE</a>
                </Link>
            </section>
        </main>
    );
}
