import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from './../../../components/card/Card';
import ProdutoService from '../../../services/produtoService';

export function Produto() {
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
        const exchangeRate = 5.00; // Taxa de câmbio simulada
        return (priceUSD * exchangeRate).toFixed(2);
    };

    return (
        <section className="container">
            <div className="row g-5 my-5 p-5">
                {produtos.map((produto) => (
                    <div key={produto.id} className="col-12 col-md-3 mb-5 d-flex justify-content-center">
                        <Card
                            title={produto.nome}
                            text={`Preço: R$ ${convertToBRL(produto.preco)}\n${produto.descricao}`}
                            imageSrc={produto.imagem_produto}
                            buyButtonText="Comprar"
                            buyButtonLink={`Descricao/${produto.id}`}
                            cartButtonText="bi bi-cart4"
                            cartButtonLink="#"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
