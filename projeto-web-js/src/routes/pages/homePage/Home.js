import { OfertaDiaria } from './../../../components/carrousseis/ofertaDiaria'
import { Promocao } from '../../../components/carrousseis/promocao';
import { Slides } from '../../../components/carrousseis/Slides'
import { FreteGratis } from './../../../components/carrousseis/freteGratis'
import { Link } from 'react-router-dom'
import styles from "./Home.module.css";



export function Home() {
    return (
        <>
            <h1>HomePage</h1>
            <Slides />

            <section className="container">
                <div className={styles.container}>
                    <OfertaDiaria />

                    <section className={styles.Itens}>
                        <ul>

                            <Link to='/Produto'>
                                <li><span className="bi bi-nut-fill" /></li>
                            </Link>

                            <li>item 2</li>
                            <li>item 3</li>
                            <li>item 4</li>
                            <li>item 5</li>
                        </ul>

                    </section>

                    <Promocao /><br />
                    <FreteGratis />
                </div>
            </section>
        </>
    );
}
