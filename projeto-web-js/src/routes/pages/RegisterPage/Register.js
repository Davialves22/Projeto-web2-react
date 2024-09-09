import { Link } from "react-router-dom";
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
      const res = await axios.post("http://localhost:3001/clientes", cliente);
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
            <span className="input-group-text" id="inputGroup-sizing-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#254682"
                className="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
              </svg>
            </span>
            <input
              type="text"
              id={style.email}
              onChange={handleChange}
              name="email"
              value={cliente.email}
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              required
            />
          </div>

          {/* Senha */}
          <div id={style.senha}>
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#254682"
                  className="bi bi-key"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5" />
                  <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg>
              </span>

              <input
                type="password"
                id={style.inputPassword}
                onChange={handlePasswordChange}
                value={cliente.senha}
                className="form-control"
                aria-describedby="passwordHelpInline"
                required
              />
            </div>

            <div className="input-group input-group-sm mb-3">
              <input
                type="password"
                id={style.inputPassword2}
                onChange={handleConfirmPasswordChange}
                value={confirmPassword}
                className="form-control"
                aria-describedby="passwordHelpInline"
              />
            </div>
          </div>

          {/* CPF */}
          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#254682"
                className="bi bi-person-vcard-fill"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm9 1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5M9 8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4A.5.5 0 0 0 9 8m1 2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5m-1 2C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 0 2 13h6.96q.04-.245.04-.5M7 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0" />
              </svg>
            </span>
            <input
              type="text"
              id={style.cpf}
              onChange={handleChange}
              name="cpf"
              value={cliente.cpf}
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>

          {/* Nome Completo */}
          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#254682"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>
            </span>
            <input
              type="text"
              id={style.formNome}
              onChange={handleChange}
              name="nome"
              value={cliente.nome}
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>

          {/* Gênero */}
          <div id={style.genero}>
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
            <span className="input-group-text" id="inputGroup-sizing-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#254682"
                className="bi bi-calendar"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
              </svg>
            </span>
            <input
              type="date"
              id={style.calendar}
              onChange={handleChange}
              name="data_nasc"
              value={cliente.data_nasc}
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
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
            <label
              className="form-check-label"
              htmlFor={style.flexCheckDefault}
            >
              Li e estou de acordo com as políticas da empresa e políticas de
              privacidade!
            </label>
          </div>
        </div>

        {/* Botão de Cadastro */}
        <Link to="/">
          <button type="submit" className={style.btnConfirm}>CADASTRAR</button>
        </Link>
      </form>
    </div>
  );
}
