import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";

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
        if (!value) {
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

    return (
        <main>
            <section id="login">
                <h3>BEM-VINDO!</h3>
                <p>ENTRE NA SUA CONTA</p>
                <div id="form">
                    <div id="form-login" className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                            </svg>
                        </span>

                        <input type="text"
                            id="input-login"
                            className="form-control"
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            data-testid="email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>

                    <div id="form-pass" className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">@</span>
                        <input type="password"
                            id="input-pass"
                            className="form-control"
                            placeholder="Password"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            data-testid="password"
                            value={password}
                            onChange={handlePasswordChange} />
                    </div>

                    <Link to="/">
                        <button className="btnConfirm"
                            type="button"
                            data-testid="login-button"
                            disabled={!isFormValid()}>
                            LOGIN
                        </button>
                    </Link>
                </div>
            </section>
            <section id="cadaster">
                <span> OU </span>
                <Link to="/Register">
                    <a href='#' id="link-register">CADASTRE-SE</a>
                </Link>
            </section>
        </main>
    );
}
