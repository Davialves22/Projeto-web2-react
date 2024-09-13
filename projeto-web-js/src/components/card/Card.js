// Card.js
import React from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';

export const Card = ({
    title,
    text,
    imageSrc,
    buyButtonText,
    buyButtonLink,
    cartButtonText,
    cartButtonLink
}) => (
    <div className={`card ${styles.Card}`}>
        <img src={imageSrc} className="card-img-top" alt={title} />
        <div className={`card-body ${styles.card_body}`}>
            <h5 className="card-title">{title}</h5>
            <p className={`card-text ${styles.card_txt}`}>{text}</p>
            <div className={styles.buttonGroup}>
                <Link to={buyButtonLink} className={`btn btn-primary ${styles.buyButton}`}>
                    {buyButtonText}
                </Link>
                <Link to={cartButtonLink} className={`btn btn-secondary ${styles.cartButton}`}>
                    <i className={cartButtonText}></i> {/* Adiciona o ícone no botão */}
                </Link>
            </div>
        </div>
    </div>
);
