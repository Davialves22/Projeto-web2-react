import React, { useState } from 'react';
import { CardProps } from './../../interfaces/CardProps';
import styles from './ProductDescription.module.css';
import { useParams } from 'react-router-dom';

export const ProductDescription: React.FC = () => {
    const { productId } = useParams<{ productId: string }>();
    const [isZoomed, setIsZoomed] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const productData: CardProps = {
        title: "Produto Exemplo",
        text: "Este é um exemplo de descrição detalhada do produto.",
        imageSrc: "https://picsum.photos/id//600/400",
        buyButtonText: "Comprar",
        buyButtonLink: "#",
        cartButtonText: "bi bi-cart4",
        cartButtonLink: "#"
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
                            src={productData.imageSrc}
                            alt={productData.title}
                            className={`img-fluid ${isZoomed ? styles.zoomed : ''} ${styles.productImage}`}
                            style={isZoomed ? {
                                transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`
                            } : {}}
                        />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <h1 className={styles.productTitle}>{productData.title}</h1>
                    <p className={styles.productDescription}>{productData.text}</p>
                    <div className={styles.buttonGroup}>
                        <a href={productData.buyButtonLink} className={`btn btn-primary ${styles.buyButton}`}>
                            {productData.buyButtonText}
                        </a>
                        <a href={productData.cartButtonLink} className={`btn btn-secondary ${styles.cartButton}`}>
                            <i className={productData.cartButtonText}></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
