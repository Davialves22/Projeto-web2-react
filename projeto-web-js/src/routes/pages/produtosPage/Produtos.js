import React, { useState, useEffect, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from './../../../components/card/Card';
import ProdutoService from '../../../services/produtoService';
import { SearchInput } from '../../../components/SearchBar/SearchInput'

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
        if(element.name === 'categoria') setCategoria(element.value)
        if(element.name === 'nome') setNome(element.value)
    }

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const convertToBRL = (priceUSD) => {
        const exchangeRate = 5.00; // Taxa de câmbio simulada
        return (priceUSD * exchangeRate).toFixed(2);
    };

    return (
        <section className="container">
            <div className="m-5">
                <SearchInput
                    valueCategoria={categoria}
                    valueNome={nome}
                    onChange={(search) => updateStates(search)}
                    onClick={(() => fetchData())}
                />
            </div>

            <div className="row g-5 p-5">
                {produtos.map((produto) => (
                    <div key={produto.id} className="col-12 col-md-3 mb-5 d-flex justify-content-center">
                        <Card
                            title={produto.nome}
                            text={`Preço: R$ ${convertToBRL(produto.preco)}\n${produto.descricao}`} // Você pode querer ajustar a formatação aqui
                            imageSrc={produto.imagem_produto}
                            buyButtonText="Comprar"
                            buyButtonLink={`Descricao/${produto.id}`} // Corrigido para usar o ID do produto
                            cartButtonText="bi bi-cart"
                            cartButtonLink={`Carrinho/${produto.id}`} // Corrigido para usar o ID do produto
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}