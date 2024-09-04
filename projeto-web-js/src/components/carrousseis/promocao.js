import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from '../card/Card';
import stylesSecond from './CSS/Promocao.module.css';

export const Promocao = () => {
    const convertToBRL = (priceUSD) => {
        const exchangeRate = 5.00;
        return (priceUSD * exchangeRate).toFixed(2);
    };

    const cardsData = [
        { id: "1011", title: "Produto 1", text: "Texto personalizado para o Card 1.", imageSrc: "https://picsum.photos/id/1011/185/132", price: 29.99 },
        { id: "1012", title: "Produto 2", text: "Texto personalizado para o Card 2.", imageSrc: "https://picsum.photos/id/1012/185/132", price: 49.99 },
        { id: "1013", title: "Produto 3", text: "Texto personalizado para o Card 3.", imageSrc: "https://picsum.photos/id/1013/185/132", price: 19.99 },
        { id: "1014", title: "Produto 4", text: "Texto personalizado para o Card 4.", imageSrc: "https://picsum.photos/id/1014/185/132", price: 39.99 },
        { id: "1011", title: "Produto 5", text: "Texto personalizado para o Card 5.", imageSrc: "https://picsum.photos/id/1011/185/132", price: 29.99 },
        { id: "1012", title: "Produto 6", text: "Texto personalizado para o Card 6.", imageSrc: "https://picsum.photos/id/1012/185/132", price: 49.99 },
        { id: "1013", title: "Produto 7", text: "Texto personalizado para o Card 7.", imageSrc: "https://picsum.photos/id/1013/185/132", price: 19.99 },
        { id: "1014", title: "Produto 8", text: "Texto personalizado para o Card 8.", imageSrc: "https://picsum.photos/id/1014/185/132", price: 39.99 },
        { id: "1013", title: "Produto 9", text: "Texto personalizado para o Card 9.", imageSrc: "https://picsum.photos/id/1013/185/132", price: 19.99 },
        { id: "1014", title: "Produto 10", text: "Texto personalizado para o Card 10.", imageSrc: "https://picsum.photos/id/1014/185/132", price: 39.99 },
    ];

    const chunkArray = (arr, chunkSize) => {
        const result = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            result.push(arr.slice(i, i + chunkSize));
        }
        return result;
    };

    // Divida os dados em slides de 5 cards
    const slides = chunkArray(cardsData, 5);

    return (
        <section className={stylesSecond.carousel}>
            <h1>Promoções</h1>
            <div id="carouselSecond" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            className={`carousel-item ${slideIndex === 0 ? 'active' : ''}`}
                        >
                            <div className="container">
                                <div className="row justify-content-center">
                                    {slide.map((card) => (
                                        <div key={card.id} className="col-12 col-md-4 col-lg-2 mb-4 d-flex justify-content-center">
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
                        className={`${stylesSecond.carouselButton} ${stylesSecond.carouselControlPrev}`}
                        type="button"
                        data-bs-target="#carouselSecond"
                        data-bs-slide="prev"
                    >
                        <span className={`${stylesSecond.carouselControlIcon} bi bi-caret-left-fill`} aria-hidden="true"></span>
                        <span className={stylesSecond.visuallyHidden}>Previous</span>
                    </button>
                    <button
                        className={`${stylesSecond.carouselButton} ${stylesSecond.carouselControlNext}`}
                        type="button"
                        data-bs-target="#carouselSecond"
                        data-bs-slide="next"
                    >
                        <span className={`${stylesSecond.carouselControlIcon} bi bi-caret-right-fill`} aria-hidden="true"></span>
                        <span className={stylesSecond.visuallyHidden}>Next</span>
                    </button>
                </section>
            </div>
        </section>
    );
};
