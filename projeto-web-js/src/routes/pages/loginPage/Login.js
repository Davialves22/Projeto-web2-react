import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./Login.module.css";

export function Login() {
    // Estado para armazenar os valores dos campos e mensagens de erro
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    // Função para validar o email
    const validateEmail = (value) => {
        if (value.length === 0) {
            setEmailError('Email é obrigatório');
        } else if (!/\S+@\S+\.\S+/.test(value)) {
            setEmailError('Email inválido');
        } else {
            setEmailError('');
        }
    };

    // Função para validar a senha
    const validatePassword = (value) => {
        if (!value) {
            setPasswordError('Senha é obrigatória');
        } else {
            setPasswordError('');
        }
    };

    // Função chamada quando o email muda
    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        validateEmail(value);
    };

    // Função chamada quando a senha muda
    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        validatePassword(value);
    };

    // Função para verificar se o formulário está válido
    const isFormValid = () => {
        return emailError === '' && passwordError === '' && email !== '' && password !== '';
    };

    return (
        <div className={styles.container}>
            <main className={styles.centralize}>
                <section className={styles.section}>
                    <div className={styles.text}>
                        <h3>BEM-VINDO!</h3>
                        <p>ENTRE NA SUA CONTA</p>
                    </div>
                </section>

                <section className={styles.section}>
                    <form className={styles.form}>
                        <section className={styles.inputEmail}>
                            <span className={`bi bi-person-fill ${styles.customIcons}`}></span>
                            <input
                                type="email"
                                placeholder="Email"
                                required
                                data-testid="email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            {emailError && (
                                <div data-testid="email-required" className={styles.error}>
                                    {emailError}
                                </div>
                            )}
                        </section>

                        <section className={styles.inputPassword}>
                            <span className={`bi bi-key-fill ${styles.customIcon}`}></span>
                            <input
                                type="password"
                                placeholder="Senha"
                                required
                                data-testid="password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            {passwordError && (
                                <div data-testid="password-required" className={styles.error}>
                                    {passwordError}
                                </div>
                            )}
                        </section>

                        <button
                            type="button"
                            className={styles.forget}
                            data-testid="recover-password-button"
                            disabled={emailError !== '' || email === ''}
                        >
                        <Link to="/ForgetPass">
                            Esqueceu a senha?
                        </Link>
                        </button>

                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <button
                                className={styles.enter}
                                data-testid="login-button"
                                disabled={!isFormValid()}
                            >
                                ENTRAR
                            </button>
                        </Link>
                    </form>
                </section>
            </main>

            <div className={styles.cadastro}>
                <p>ou</p>
                <Link to="/Register" style={{ textDecoration: 'none' }}>
                    <button className={styles.enter}>
                        CADASTRE-SE
                    </button>
                </Link>
            </div>
        </div>
    );
}
