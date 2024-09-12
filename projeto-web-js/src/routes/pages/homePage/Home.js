import { OfertaDiaria } from './../../../components/carrousseis/ofertaDiaria'
import { Slides } from '../../../components/carrousseis/Slides'
import styles from "./Home.module.css";
import { Produto } from '../produtosPage/Produtos';



export function Home() {
    return (
        <>
            <Slides />

            <section className="container">
                <div className={styles.container}>
                    <OfertaDiaria />
                </div>

                <section id='produtos'>
                    <Produto/>
                </section>

            </section>
        </>
    );
}
