import { Link } from 'react-router-dom';
import styles from "./registro.module.css";

export function ResgisterPage() {

    return (
        <div className={styles.container}>
            <main className={styles.centralize}>

                <section className={styles.section}>
                    <div className={styles.text}>
                        <h3>CADASTRE-SE</h3>
                    </div>
                </section>

                <section className={styles.section}>
                    <form className={styles.form}>
                        <section className={styles.inputNome}>
                            <span className={`bi bi-person-fill ${styles.customIcons}`}></span>
                            <input type="email" placeholder="Digite o seu Nome Completo" />
                        </section>

                        <section className={styles.inputCpf}>
                            <span className={`bi bi-key-fill ${styles.customIcon}`}></span>
                            <input type="text" placeholder="Digite seu CPF" required />
                        </section>

                        <section className={styles.inputBirth}>
                            <span className={`bi bi-key-fill ${styles.customIcon}`}></span>
                            <input type="date" />
                        </section>

                        <section className={styles.inputGender}>
                            <input type="radio" name="genderMas" />Masculino
                            <input type="radio" name="genderFem" />Feminino
                        </section>

                        <section className={styles.inputEmail}>
                            <input type="text" placeholder="exemple@exemple.com" />
                        </section>

                        <section className={styles.inputCellphone}>
                            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                        </section>

                        <section className={styles.inputPassword}>
                            <span className={`bi bi-key-fill ${styles.customIcon}`}></span>
                            <input type="password" placeholder="Senha" />
                        </section>

                        <section className={styles.inputPassword}>
                            <span className={`bi bi-key-fill ${styles.customIcon}`}></span>
                            <input type="password" placeholder="Confirme sua senha" />
                        </section>

                        <Link to="/" ><button className={styles.enter} >ENTRAR</button></Link>

                    </form>
                </section>

            </main>
        </div>
    );
}
