import style from "./Register.module.css";
import { useState } from "react";
import axios from "axios";

export function Register() {
  const [cliente, setClientes] = useState({
    email: "",
    senha: "",
    cpf: "",
    nome: "",
    genero: "",
    data_nasc: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

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

    try {
      const res = await axios.post("http://localhost:3001/clientes/", cliente);
      console.log(res);
      alert("Cliente cadastrado com sucesso");
      setClientes({
        email: "",
        senha: "",
        cpf: "",
        nome: "",
        genero: "",
        data_nasc: "",
      });
      setConfirmPassword("");
    } catch (error) {
      console.error("Erro ao cadastrar cliente", error);
      alert("Erro ao cadastrar cliente");
    }
  };

  return (
    <div id={style.main}>
      <h2 id={style.title}>CADASTRE-SE</h2>
      <form onSubmit={handleOnSubmit} id={style.form}>
        <div id={style.sideLeft}>
          {/* email */}
          <div className="input-group input-group-sm mb-3">
            <span className="bi bi-envelope-fill" id="inputGroup-sizing-sm">
            </span>
            <input
              type="text"
              id={style.email}
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
              <span className="bi bi-shield-lock-fill" id="inputGroup-sizing-sm">
              </span>
              <input
                type="password"
                id={style.inputPassword}
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
              <span className="bi bi-shield-lock-fill" id="inputGroup-sizing-sm">
              </span>
              <input
                type="password"
                id={style.inputPassword2}
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
            <span className="bi bi-person-vcard-fill" id="inputGroup-sizing-sm">
            </span>
            <input
              type="text"
              id={style.cpf}
              onChange={handleChange}
              name="cpf"
              value={cliente.cpf}
              placeholder="CPF"
              className="form-control"
              aria-label="CPF"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>

          {/* Nome Completo */}
          <div className="input-group input-group-sm mb-3">
            <span className="bi bi-person-fill" id="inputGroup-sizing-sm">
            </span>
            <input
              type="text"
              id={style.formNome}
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
              />
              <label className="form-check-label" htmlFor={style.flexRadioDefault3}>
                Outros
              </label>
            </div>
          </div>

          {/* Data de Nascimento */}
          <div className="input-group input-group-sm mb-3">
            <span className="bi bi-cake2-fill" id="inputGroup-sizing-sm">
            </span>
            <input
              type="date"
              id={style.calendar}
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
        <button type="submit" className={style.btnConfirm}>CADASTRAR</button>
      </form>
    </div>
  );
}
