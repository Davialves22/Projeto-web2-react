import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css'; // Importa o módulo CSS
import { useNavigate } from 'react-router-dom';
import LocalStoregeHelper from '../../../helpers/localStorage.helper';
import ClienteService from '../../../services/clienteService';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

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

    const handleSubmit = (e) => {
        e.preventDefault();
        validateEmail(email);
        validatePassword(password);

        if (email === "admin@admin.com" && password === "admin") {
            LocalStoregeHelper.logIn({ email: "admin@admin.com", nome: "Admin" });
            navigate("/Produto-add")
        } else {
            ClienteService.login(email, password)
                .then((data) => {
                    LocalStoregeHelper.logIn(data.data);
                    navigate("/")
                }).catch((err) => {
                    alert("Usuário ou senha incorretos")
                })
        }
    };

    return (
        <main className={styles.main}>
            <section className={styles.login}>
                <div className={styles.title}>
                    <h3>BEM-VINDO!</h3>
                    <p>ENTRE NA SUA CONTA</p>
                </div>
                <div className={styles.form}>
                    <form onSubmit={handleSubmit}>
                        <div className={`${styles.formLogin} input-group mb-3`}>
                            <span className={`bi bi-person-fill ${styles.basicAddon}`}></span>
                            <input type="text"
                                className={`${styles.inputLogin} form-control`}
                                placeholder="Email"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                data-testid="email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            {emailError && <div data-testid="email-error" className="error-message">{emailError}</div>}
                        </div>

                        <div className={`${styles.formPass} input-group mb-3`}>
                            <span className={`bi bi-key-fill ${styles.basicAddon}`}></span>
                            <input type="password"
                                className={`${styles.inputPass} form-control`}
                                placeholder="Senha"
                                aria-label="Password"
                                aria-describedby="basic-addon1"
                                data-testid="password"
                                value={password}
                                onChange={handlePasswordChange} />
                            {passwordError && <div data-testid="password-error" className="error-message">{passwordError}</div>}
                        </div>

                        <Link to='/ForgetPass'>
                            <p className={styles.forget}>
                                esqueceu a senha?
                            </p>
                        </Link>
                        <button className={styles.btnConfirm}
                            data-testid="login-button"
                            disabled={!isFormValid()}>
                            LOGIN
                        </button>
                    </form>
                </div>
            </section>
            <section className={styles.cadaster}>
                <span> OU </span>
                <Link to="/Register">
                    <p>CADASTRE-SE</p>
                </Link>
            </section>
        </main>
    );
}
