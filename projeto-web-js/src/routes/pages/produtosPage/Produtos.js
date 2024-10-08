import React, { useState, useEffect, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from './../../../components/card/Card';
import ProdutoService from '../../../services/produtoService';
import { SearchInput } from '../../../components/SearchBar/SearchInput'
import classes from './Produtos.module.css'

export function Produto() {
    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('');
    const [produtos, setProdutos] = useState([]);

    const fetchData = useCallback(async () => {
        try {
            const response = await ProdutoService.getProdutos(nome, categoria);
            setProdutos(response.data);
        } catch (err) {
            console.log(err);
        }

    }, [nome, categoria]);

    const updateStates = (element) => {
        if (element.name === 'categoria') setCategoria(element.value)
        if (element.name === 'nome') setNome(element.value)
    }

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    // const convertToBRL = (priceUSD) => {
    //     const exchangeRate = 5.00; // Taxa de câmbio simulada
    //     return (priceUSD * exchangeRate).toFixed(2);
    // };

    return (
        <div className={classes.container}>
            <section className="container">
                <div className="m-5">
                    <SearchInput
                        valueCategoria={categoria}
                        valueNome={nome}
                        onChange={(search) => updateStates(search)}
                        onClick={(() => fetchData())}
                    />
                </div>

                <div className={classes.body}>

                    <div className="row g-5 p-5">
                        {produtos.map((produto) => (
                            <div key={produto.id} className="col-12 col-md-3 mb-5 d-flex justify-content-center">
                                <Card
                                    title={produto.nome}
                                    text={`Preço: R$ ${(produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))}\n${produto.descricao}`}
                                    imageSrc={produto.imagem_produto}
                                    buyButtonText="Detalhes"
                                    buyButtonLink={`/Descricao/${produto.produto_id}`}
                                    cartButtonText="bi bi-cart"
                                    cartButtonLink={`/Compra/${produto.produto_id}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}