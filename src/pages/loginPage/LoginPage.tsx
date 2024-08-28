import { Link} from 'react-router-dom';
import styles from "./Login.module.css";

export function LoginPage() {

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
              <input type="email" placeholder="Email" required/>
            </section>

            <section className={styles.inputPassword}>
              <span className={`bi bi-key-fill ${styles.customIcon}`}></span>
              <input type="password" placeholder="Senha" required/>
            </section>

          </form>
        </section>

        <section className={styles.section}>
          <button type="button" className={styles.forget}>
            Esqueceu a senha?
          </button>

          <Link to="/" style={{textDecoration:'none'}}><button className={styles.enter}  >ENTRAR</button></Link>

        </section>
      </main>

      <div className={styles.cadastro}>
        <p>ou</p>
        <Link to="/Register" style={{textDecoration:'none'}}><button className={styles.enter} >CADASTRE-SE</button></Link>
      </div>
    </div>
  );
}
