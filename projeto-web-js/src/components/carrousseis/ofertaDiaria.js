import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import stylesFirst from './css/OfertaDaria.module.css';
import { Card } from '../card/Card';
import { Link } from 'react-router-dom';
import ProdutoService from '../../services/produtoService';

export const OfertaDiaria = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ProdutoService.getProdutos();
                setProdutos(response.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);

    const convertToBRL = (priceUSD) => {
        const exchangeRate = 5.00;
        return (priceUSD * exchangeRate).toFixed(2);
    };

    // Função para dividir os dados em grupos de tamanho específico
    const chunkArray = (arr, chunkSize) => {
        const result = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            result.push(arr.slice(i, i + chunkSize));
        }
        return result;
    };

    // Divida os dados em slides de 5 cards
    const slides = chunkArray(produtos, 5);

    return (
        <>
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
                                                    title={card.nome}
                                                    text={`${card.descricao}\nPreço: R$ ${convertToBRL(card.preco)}`}
                                                    imageSrc={card.imagem_produto}
                                                    buyButtonText="Comprar"
                                                    buyButtonLink={`Descricao/${card.produto_id}`}
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

        

        </>
    );
};
