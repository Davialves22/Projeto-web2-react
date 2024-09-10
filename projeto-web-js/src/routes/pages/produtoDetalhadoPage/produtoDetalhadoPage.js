import React, { useState, useEffect } from 'react';
import styles from './produtoDetalhadoPage.module.css';
import { useParams } from "react-router-dom";
import ProdutoService from '../../../services/produtoService'

export function ProdutoDetalhado () {
    const { id } = useParams();
    const [produto, setProduto] = useState({ title:"", text:"", imageSrc:"", buyButtonText:"", buyButtonLink:"", cartButtonText:"", cartButtonLink:"" });

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await ProdutoService.getProdutoById(id);
            
            const productData = {
                title: response.data.nome,
                text: response.data.descricao,
                imageSrc: response.data.imagem_produto,
                buyButtonText: "Comprar",
                buyButtonLink: "#",
                cartButtonText: "bi bi-cart4",
                cartButtonLink: "#"
            }
            setProduto(productData);
          } catch (err) {
            console.log(err);
          }
        };
    
        fetchData();
    }, [id]);

    const [isZoomed, setIsZoomed] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;

        setMousePosition({ x, y });
    };

    const handleMouseEnter = () => {
        setIsZoomed(true);
    };

    const handleMouseLeave = () => {
        setIsZoomed(false);
    };

    return (
        <section className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div
                        className={styles.productImageWrapper}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                            src={produto.imageSrc}
                            alt={produto.title}
                            className={`img-fluid ${isZoomed ? styles.zoomed : ''} ${styles.productImage}`}
                            style={isZoomed ? {
                                transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`
                            } : {}}
                        />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <h1 className={styles.productTitle}>{produto.title}</h1>
                    <p className={styles.produtoDetalhado}>{produto.text}</p>
                    <div className={styles.buttonGroup}>
                        <a href={produto.buyButtonLink} className={`btn btn-primary ${styles.buyButton}`}>
                            {produto.buyButtonText}
                        </a>
                        <a href={produto.cartButtonLink} className={`btn btn-secondary ${styles.cartButton}`}>
                            <i className={produto.cartButtonText}></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
