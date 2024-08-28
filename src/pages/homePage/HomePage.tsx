import styles from "./CSS/Home.module.css";
import { OfertaDiaria } from './../../components/carroussel/OfertaDiaria'
import { PromocaoCards } from './../../components/carroussel/PromocaoCards';
import { CarouselSlides } from './../../components/carroussel/carrousseSlides'
import {FreteGratis} from './../../components/carroussel/freteGratis'
import {Link} from 'react-router-dom'



export function HomePage() {
  return (
    <>
      <h1>HomePage</h1>
      <CarouselSlides />

      <section className="container">
        <div className={styles.container}>
          <OfertaDiaria />

          <section className={styles.Itens}>
            <ul>

              <Link to ='/Produto'>
              <li><span className="bi bi-nut-fill"/></li>
              </Link>
              
              <li>item 2</li>
              <li>item 3</li>
              <li>item 4</li>
              <li>item 5</li>
            </ul>

          </section>

          <PromocaoCards /><br />
          <FreteGratis/>
        </div>
      </section>
    </>
  );
}
