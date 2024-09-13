import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import LocalStoregeHelper from '../../../helpers/localStorage.helper';
import ClienteService from '../../../services/clienteService';

export function Login() {
    const [email, setEmail] = useState(''); // Estado para o email
    const [password, setPassword] = useState(''); // Estado para a senha
    const [emailError, setEmailError] = useState(''); // erros de email
    const [passwordError, setPasswordError] = useState(''); // erros de senha
    const navigate = useNavigate();

    const validateEmail = (value) => { 
        if (value.length === 0) {
            setEmailError('Email é obrigatório'); // Mensagem de erro se o email estiver vazio
        } else if (!/\S+@\S+\.\S+/.test(value)) {
            setEmailError('Email inválido'); // se o email for inválido
        } else {
            setEmailError(''); // Remove a mensagem de erro se o email for válido
        }
    };

    const validatePassword = (value) => {
        if (value.trim() === '') {
            setPasswordError('Senha é obrigatória'); // erro se a senha estiver vazia
        } else {
            setPasswordError(''); // Remove a mensagem se a senha for válida
        }
    };

    const handleEmailChange = (e) => { // Função para lidar com mudanças no campo de email
        const value = e.target.value;
        setEmail(value); // Atualizar o estado do email
        validateEmail(value); // Validar o email
    };

    const handlePasswordChange = (e) => { // Função para lidar com mudanças no campo de senha
        const value = e.target.value;
        setPassword(value); // Atualiza o estado da senha
        validatePassword(value); // Valida a senha
    };

    const isFormValid = () => { // Função para verificar se o formulário é válido
        return emailError === '' && passwordError === '' && email !== '' && password !== ''; // Verifica se não há erros e se todos os campos estão preenchidos
    };

    const handleSubmit = (e) => { // Função para lidar com o envio do formulário
        e.preventDefault(); // Previne o comportamento padrão de envio do formulário
        validateEmail(email); // Valida o email
        validatePassword(password); // Valida a senha

        if (email === "admin@admin.com" && password === "admin") { // Verifica credenciais de admin
            LocalStoregeHelper.logIn({ email: "admin@admin.com", nome: "Admin" }); // Faz login como admin
            navigate("/Produto-add") // Navega para a página de adicionar produto
        } else {
            ClienteService.login(email, password) // Tenta fazer login com credenciais fornecidas
                .then((data) => {
                    LocalStoregeHelper.logIn(data.data); // Armazena dados do usuário no localStorage
                    navigate("/") // Navega para a página principal
                }).catch((err) => {
                    alert("Usuário ou senha incorretos") // Exibe alerta se as credenciais estiverem incorretas
                })
        }
        }

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
