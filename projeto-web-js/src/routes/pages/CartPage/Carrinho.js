import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProdutoService from './../../../services/produtoService';
import styles from './Carrinho.module.css';

export const Carrinho = () => {
    const { id } = useParams(); // Obtém o ID do produto da URL
    const [produto, setProduto] = useState(null);

    useEffect(() => {
        const fetchProduto = async () => {
            try {
                const response = await ProdutoService.getProdutoById(id);
                setProduto(response.data);
            } catch (error) {
                console.error('Erro ao buscar produto:', error);
            }
        };

        fetchProduto();
    }, [id]);

    if (!produto) return <p>Carregando...</p>;

    return (
        <section className={`container ${styles.carrinho}`}>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className={styles.productImageWrapper}>
                        <img
                            src={produto.imagem_produto}
                            alt={produto.nome}
                            className={`img-fluid ${styles.productImage}`}
                        />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <h1 className={styles.productTitle}>{produto.nome}</h1>
                    <p className={styles.productDescription}>{produto.descricao}</p>
                    <p className={styles.productPrice}>Preço: R$ {produto.preco}</p>
                    <div className={styles.buttonGroup}>
                        <a href="#" className={`btn btn-primary ${styles.buyButton}`}>
                            Comprar
                        </a>
                        <a href="#" className={`btn btn-secondary ${styles.cartButton}`}>
                            Adicionar ao Carrinho
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
