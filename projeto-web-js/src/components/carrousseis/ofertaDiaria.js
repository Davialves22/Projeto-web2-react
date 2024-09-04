import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from '../card/Card';
import stylesFirst from './CSS/OfertaDaria.module.css';
import { Link } from 'react-router-dom';

export const OfertaDiaria = () => {
    const convertToBRL = (priceUSD) => {
        const exchangeRate = 5.00;
        return (priceUSD * exchangeRate).toFixed(2);
    };

    const cardsData = [
        { id: "1011", title: "Produto 1", text: "Texto personalizado para o Card 1.", imageSrc: "https://picsum.photos/id/1011/185/132", price: 29.99 },
        { id: "1012", title: "Produto 2", text: "Texto personalizado para o Card 2.", imageSrc: "https://picsum.photos/id/1012/185/132", price: 49.99 },
        { id: "1013", title: "Produto 3", text: "Texto personalizado para o Card 3.", imageSrc: "https://picsum.photos/id/1013/185/132", price: 19.99 },
        { id: "1014", title: "Produto 4", text: "Texto personalizado para o Card 4.", imageSrc: "https://picsum.photos/id/1014/185/132", price: 39.99 },
        { id: "1015", title: "Produto 5", text: "Texto personalizado para o Card 5.", imageSrc: "https://picsum.photos/id/1015/185/132", price: 29.99 },
        { id: "1016", title: "Produto 6", text: "Texto personalizado para o Card 6.", imageSrc: "https://picsum.photos/id/1016/185/132", price: 59.99 },
        { id: "1017", title: "Produto 7", text: "Texto personalizado para o Card 7.", imageSrc: "https://picsum.photos/id/107/185/132", price: 15.99 },
        { id: "1018", title: "Produto 8", text: "Texto personalizado para o Card 8.", imageSrc: "https://picsum.photos/id/1018/185/132", price: 25.99 },
        { id: "1019", title: "Produto 9", text: "Texto personalizado para o Card 9.", imageSrc: "https://picsum.photos/id/1019/185/132", price: 45.99 },
        { id: "1020", title: "Produto 10", text: "Texto personalizado para o Card 10.", imageSrc: "https://picsum.photos/id/1020/185/132", price: 35.99 }
    ];

    // Função para dividir os dados em grupos de tamanho específico
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
        <section className={stylesFirst.carousel}>
            <h1><strong>Oferta Diária</strong></h1>
            <div id="carouselFirst" className={`carousel slide`} data-bs-ride="carousel">
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

                {/* Controles do carrossel */}
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
            </div>

            <Link to='/Produto' className={stylesFirst.vejaMais}><p>Veja mais...</p></Link>
        </section>
    );
};
