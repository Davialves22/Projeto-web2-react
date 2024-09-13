import style from "./ForgetPass.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function ForgetPass() {
  const navigate = useNavigate(); //inicializa o useNavigate para navegar entre rotas
  const [email, setEmail] = useState(""); // define o estado inicial do email como vazio 

  const handleChange = (event) => { //atualiza o estado do email quando o valor da entrada muda
    setEmail(event.target.value);
  }

  const handleRecovery = () => {
    if (!email) { //verifica se o email esta vazio
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
          <span className="bi bi-envelope-at-fill" id="inputGroup-sizing-sm">
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
