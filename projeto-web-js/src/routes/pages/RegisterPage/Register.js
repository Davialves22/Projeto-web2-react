import style from "./Register.module.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ClienteService from "../../../services/clienteService";

export function Register() {
  const navigate = useNavigate();
  const [cliente, setClientes] = useState({
    email: "",
    senha: "",
    cpf: "",
    nome: "",
    genero: "",
    data_nasc: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const cleanValues = () => {
    setClientes({
      email: "",
      senha: "",
      cpf: "",
      nome: "",
      genero: "",
      data_nasc: "",
    });
    setConfirmPassword("");
  }

  const handleChange = (event) => {
    setClientes({ ...cliente, [event.target.name]: event.target.value });
  }

  const handlePasswordChange = (event) => {
    setClientes({ ...cliente, senha: event.target.value });
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    if (cliente.senha !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    ClienteService.register(cliente).then((data) => {
      alert("Cliente cadastrado com sucesso");
      cleanValues();
      navigate("/Login");
    }).catch((err) => {
      console.error("Erro ao cadastrar cliente", err);
      alert("Erro ao cadastrar cliente");
    })
      
  };

  return (
    <div id={style.main}>
      <h2 id={style.title}>CADASTRE-SE</h2>
      <form onSubmit={handleOnSubmit} id={style.form}>
        <div id={style.sideLeft}>
          {/* Email */}
          <div className="input-group input-group-sm mb-3">
            <span className="bi bi-envelope-fill" id="inputGroup-sizing-sm"></span>
            <input
              type="text"
              id={style.email}
              data-testid="email-input"
              onChange={handleChange}
              name="email"
              value={cliente.email}
              placeholder="E-mail"
              className="form-control"
              aria-label="Email"
              aria-describedby="inputGroup-sizing-sm"
              required
            />
          </div>

          {/* Senha */}
          <div id={style.senha}>
            <div className="input-group input-group-sm mb-3">
              <span className="bi bi-shield-lock-fill" id="inputGroup-sizing-sm"></span>
              <input
                type="password"
                id={style.inputPassword}
                data-testid="password-input"
                onChange={handlePasswordChange}
                value={cliente.senha}
                placeholder="Senha"
                className="form-control"
                aria-label="Senha"
                aria-describedby="passwordHelpInline"
                required
              />
            </div>

            <div className="input-group input-group-sm mb-3">
              <span className="bi bi-shield-lock-fill" id="inputGroup-sizing-sm"></span>
              <input
                type="password"
                id={style.inputPassword2}
                data-testid="confirm-password-input"
                onChange={handleConfirmPasswordChange}
                value={confirmPassword}
                placeholder="Repita a Senha"
                className="form-control"
                aria-label="Confirmar Senha"
                aria-describedby="passwordHelpInline"
              />
            </div>
          </div>

          {/* CPF */}
          <div className="input-group input-group-sm mb-3">
            <span className="bi bi-person-vcard-fill" id="inputGroup-sizing-sm"></span>
            <input
              type="text"
              id={style.cpf}
              data-testid="cpf-input"
              onChange={handleChange}
              name="cpf"
              value={cliente.cpf}
               maxlength="11"
              placeholder="CPF"
              className="form-control"
              aria-label="CPF"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>

          {/* Nome Completo */}
          <div className="input-group input-group-sm mb-3">
            <span className="bi bi-person-fill" id="inputGroup-sizing-sm"></span>
            <input
              type="text"
              id={style.formNome}
              data-testid="nome-input"
              onChange={handleChange}
              name="nome"
              value={cliente.nome}
              placeholder="Nome"
              className="form-control"
              aria-label="Nome Completo"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>

          {/* Gênero */}
          <div id={style.genero}>
            <strong><label>Gênero:</label></strong>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="genero"
                value="M"
                onChange={handleChange}
                checked={cliente.genero === "M"}
                id={style.flexRadioDefault1}
                data-testid="genero-masculino"
              />
              <label className="form-check-label" htmlFor={style.flexRadioDefault1}>
                Masculino
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="genero"
                value="F"
                onChange={handleChange}
                checked={cliente.genero === "F"}
                id={style.flexRadioDefault2}
                data-testid="genero-feminino"
              />
              <label className="form-check-label" htmlFor={style.flexRadioDefault2}>
                Feminino
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="genero"
                value="O"
                onChange={handleChange}
                checked={cliente.genero === "O"}
                id={style.flexRadioDefault3}
                data-testid="genero-outros"
              />
              <label className="form-check-label" htmlFor={style.flexRadioDefault3}>
                Outros
              </label>
            </div>
          </div>

          {/* Data de Nascimento */}
          <div className="input-group input-group-sm mb-3">
            <span className="bi bi-cake2-fill" id="inputGroup-sizing-sm"></span>
            <input
              type="date"
              id={style.calendar}
              data-testid="data-nasc-input"
              onChange={handleChange}
              name="data_nasc"
              value={cliente.data_nasc}
              className="form-control"
              aria-label="Data de Nascimento"
              aria-describedby="inputGroup-sizing-sm"
              required
            />
          </div>

          {/* Termos */}
          <div className="form-check">
            <input
              className="form-check-input checkbox-custom"
              type="checkbox"
              data-testid="termos-checkbox"
              value=""
              id={style.flexCheckDefault}
              required
            />
            <label className="form-check-label" htmlFor={style.flexCheckDefault}>
              Li e estou de acordo com as políticas da empresa e políticas de privacidade!
            </label>
          </div>
        </div>

        {/* Botão de Cadastro */}
        <button type="submit" className={style.btnConfirm} data-testid="submit-button">
          CADASTRAR
        </button>
      </form>
    </div>
  );
}
