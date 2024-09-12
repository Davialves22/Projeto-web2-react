import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProdutoService from '../../../services/produtoService';
import styles from './Carrinho.module.css';

export const Carrinho = () => {
    const { id } = useParams(); // Obtém o ID do produto da URL
    const [produto, setProduto] = useState(null); // Inicializa como null
    const [loading, setLoading] = useState(true); // Estado de carregamento

    useEffect(() => {
        const fetchProduto = async () => {
            try {
                console.log('ID do produto:', id); // Log para verificar o ID
                const response = await ProdutoService.getProdutoById(id);
                
                console.log('Resposta da API:', response); // Log para verificar a resposta da API

                if (response.data) {
                    const productData = {
                        title: response.data.nome,
                        text: response.data.descricao,
                        imageSrc: response.data.imagem_produto,
                        preco: response.data.preco // Incluído preco aqui
                    };

                    setProduto(productData);
                } else {
                    console.log('Produto não encontrado na resposta da API.'); // Log para verificar resposta vazia
                }
            } catch (err) {
                console.error('Erro ao buscar produto:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProduto();
    }, [id]);

    if (loading) return <p>Carregando...</p>;
    if (!produto) return <p>Produto não encontrado</p>; // Adicionado caso o produto não seja encontrado

    return (
        <section className={`container ${styles.carrinho}`}>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className={styles.productImageWrapper}>
                        <img
                            src={produto.imageSrc}
                            alt={produto.title}
                            className={`img-fluid ${styles.productImage}`}
                        />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <h1 className={styles.productTitle}>{produto.title}</h1>
                    <p className={styles.productDescription}>{produto.text}</p>
                    <p className={styles.productPrice}>Preço: R$ {produto.preco}</p>
                    <div className={styles.buttonGroup}>
                        <a href={`/Compra/${id}`} className={`btn btn-primary ${styles.buyButton}`}>
                            Comprar
                        </a>
                        <a href={`/Carrinho/${id}`} className={`btn btn-secondary ${styles.cartButton}`}>
                            Adicionar ao Carrinho
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
