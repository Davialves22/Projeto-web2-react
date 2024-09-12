import { Link, Navigate } from "react-router-dom";
import style from "./ForgetPass.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function ForgetPass() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  }

  const handleRecovery = () => {
    if (!email) {
      alert("Por favor, insira um email válido.");
      return;
    }
    alert("Senha recuperada com sucesso");
    navigate("/Login");
  };

  return (
    <div id={style.main}>
      <h2 id={style.title}>RECUPERAR SENHA</h2>
      <div id={style.form}>
        <label>Enviaremos o código de recuperação para seu email</label>
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
            type="email"
            id={style.email}
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <button className={style.btnConfirm} onClick={handleRecovery}>
          RECUPERAR
        </button>
      </div>
    </div>
  );
}
