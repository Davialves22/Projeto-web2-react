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

                    {/* <section className={styles.Itens}>
                        <ul>

                            <Link to='/Produto'>
                                <li><span className="bi bi-nut-fill" /></li>
                            </Link>

                            <li>item 2</li>
                            <li>item 3</li>
                            <li>item 4</li>
                            <li>item 5</li>
                        </ul>

                    </section> */}
                </div>

                <section id='produtos'>
                    <h1>Produtos</h1>
                    <Produto/>
                </section>

            </section>
        </>
    );
}
