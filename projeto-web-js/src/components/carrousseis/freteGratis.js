import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from '../card/Card';
import styles from './CSS/FreteGratis.module.css';

export const FreteGratis = () => {
    const convertToBRL = (priceUSD) => {
        const exchangeRate = 5.00;
        return (priceUSD * exchangeRate).toFixed(2);
    };

    const extractImageId = (url) => {
        const match = url.match(/\/id\/(\d+)\//);
        return match ? match[1] : '';
    };

    const cardsData = [
        { title: "Produto 1", text: "Texto personalizado para o Card 1.", imageSrc: "https://picsum.photos/id/1011/185/132", price: 29.99, id: "" },
        { title: "Produto 2", text: "Texto personalizado para o Card 2.", imageSrc: "https://picsum.photos/id/1012/185/132", price: 49.99, id: "" },
        { title: "Produto 3", text: "Texto personalizado para o Card 3.", imageSrc: "https://picsum.photos/id/1013/185/132", price: 19.99, id: "" },
        { title: "Produto 4", text: "Texto personalizado para o Card 4.", imageSrc: "https://picsum.photos/id/1014/185/132", price: 39.99, id: "" },
        { title: "Produto 5", text: "Texto personalizado para o Card 5.", imageSrc: "https://picsum.photos/id/1011/185/132", price: 29.99, id: "" },
        { title: "Produto 6", text: "Texto personalizado para o Card 6.", imageSrc: "https://picsum.photos/id/1012/185/132", price: 49.99, id: "" },
        { title: "Produto 7", text: "Texto personalizado para o Card 7.", imageSrc: "https://picsum.photos/id/1013/185/132", price: 19.99, id: "" },
        { title: "Produto 8", text: "Texto personalizado para o Card 8.", imageSrc: "https://picsum.photos/id/1014/185/132", price: 39.99, id: "" },
        { title: "Produto 9", text: "Texto personalizado para o Card 9.", imageSrc: "https://picsum.photos/id/1015/185/132", price: 45.99, id: "" },
        { title: "Produto 10", text: "Texto personalizado para o Card 10.", imageSrc: "https://picsum.photos/id/1016/185/132", price: 35.99, id: "" }
    ];

    // Atualiza os dados com os IDs extraídos
    cardsData.forEach(card => {
        card.id = extractImageId(card.imageSrc);
    });

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
        <section className={styles.carousel}>
            <h1>Frete Grátis</h1>
            <div id="carouselThird" className="carousel slide" data-bs-ride="carousel">
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

                <button
                    className={`${styles.carouselButton} ${styles.carouselControlPrev}`}
                    type="button"
                    data-bs-target="#carouselThird"
                    data-bs-slide="prev"
                >
                    <span className={`${styles.carouselControlIcon} bi bi-caret-left-fill`} aria-hidden="true"></span>
                    <span className={styles.visuallyHidden}>Previous</span>
                </button>
                <button
                    className={`${styles.carouselButton} ${styles.carouselControlNext}`}
                    type="button"
                    data-bs-target="#carouselThird"
                    data-bs-slide="next"
                >
                    <span className={`${styles.carouselControlIcon} bi bi-caret-right-fill`} aria-hidden="true"></span>
                    <span className={styles.visuallyHidden}>Next</span>
                </button>
            </div>
        </section>
    );
};
