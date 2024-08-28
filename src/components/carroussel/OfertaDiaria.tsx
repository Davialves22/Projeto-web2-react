import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from '../card/Card';
import stylesFirst from './CSS/carrouselFirst.module.css';
import { CardData } from '../../interfaces/CardData';
import { Link } from 'react-router-dom';

export const OfertaDiaria: React.FC = () => {
    const convertToBRL = (priceUSD: number) => {
        const exchangeRate = 5.00;
        return (priceUSD * exchangeRate).toFixed(2);
    };

    const cardsData: CardData[] = [
        { id: "1011", title: "Produto 1", text: "Texto personalizado para o Card 1.", imageSrc: "https://picsum.photos/id/1011/185/132", price: 29.99 },
        { id: "1012", title: "Produto 2", text: "Texto personalizado para o Card 2.", imageSrc: "https://picsum.photos/id/1012/185/132", price: 49.99 },
        { id: "1013", title: "Produto 3", text: "Texto personalizado para o Card 3.", imageSrc: "https://picsum.photos/id/1013/185/132", price: 19.99 },
        { id: "1014", title: "Produto 4", text: "Texto personalizado para o Card 4.", imageSrc: "https://picsum.photos/id/1014/185/132", price: 39.99 },
        { id: "1011", title: "Produto 5", text: "Texto personalizado para o Card 5.", imageSrc: "https://picsum.photos/id/1011/185/132", price: 29.99 },
        { id: "1012", title: "Produto 6", text: "Texto personalizado para o Card 6.", imageSrc: "https://picsum.photos/id/1012/185/132", price: 49.99 },
        { id: "1013", title: "Produto 7", text: "Texto personalizado para o Card 7.", imageSrc: "https://picsum.photos/id/1013/185/132", price: 19.99 },
        { id: "1014", title: "Produto 8", text: "Texto personalizado para o Card 8.", imageSrc: "https://picsum.photos/id/1014/185/132", price: 39.99 },
    ];

    // Função para dividir os dados em grupos de tamanho específico
    const chunkArray = (arr: CardData[], chunkSize: number): CardData[][] => {
        const result: CardData[][] = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            result.push(arr.slice(i, i + chunkSize));
        }
        return result;
    };

    // Divida os dados em slides
    const slides = chunkArray(cardsData, 4); // 4 cards por slide

    return (
        <section className={stylesFirst.carousel}>
            <h1><strong>Oferta Diária</strong></h1>
            <div id="carouselFirst" className={`carousel slide`} data-bs-ride="carousel">
                <div className="carousel-inner">
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            className={`carousel-item ${slideIndex === 0 ? 'active' : ''} ${stylesFirst.carouselItem}`}
                        >
                            <div className="container">
                                <div className="row">
                                    {slide.map((card: CardData, index: number) => (
                                        <div key={index} className="col-12 col-md-3 mb-4">
                                            <Card
                                                title={card.title}
                                                text={`${card.text}\nPreço: R$ ${convertToBRL(card.price)}`}
                                                imageSrc={card.imageSrc}
                                                buyButtonText="Comprar"
                                                buyButtonLink="#"
                                                cartButtonText="bi bi-cart4"
                                                cartButtonLink="#"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <section>
                    <button
                        className={`${stylesFirst.carouselButton} ${stylesFirst.carouselControlPrev}`}
                        type="button"
                        data-bs-target="#carouselFirst"
                        data-bs-slide="prev"
                    >
                        <span className={`${stylesFirst.carouselControlIcon} bi bi-caret-left-fill`} aria-hidden="true"></span>
                        <span className={stylesFirst.visuallyHidden}>Previous</span>
                    </button>
                    <button
                        className={`${stylesFirst.carouselButton} ${stylesFirst.carouselControlNext}`}
                        type="button"
                        data-bs-target="#carouselFirst"
                        data-bs-slide="next"
                    >
                        <span className={`${stylesFirst.carouselControlIcon} bi bi-caret-right-fill`} aria-hidden="true"></span>
                        <span className={stylesFirst.visuallyHidden}>Next</span>
                    </button>
                </section>
            </div>

            <Link to='/Produto' className={stylesFirst.vejaMais}><p>Veja mais...</p></Link>

        </section>
    );
};
