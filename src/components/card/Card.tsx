import React from 'react';
import { CardProps } from './../../interfaces/CardProps'
import styles from './Card.module.css';
import { Link } from 'react-router-dom'


export const Card: React.FC<CardProps> = ({
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
        <div className={`card-body${styles.card_body}`}>
            <h5 className="card-title">{title}</h5>
            <p className={`card-text ${styles.card_txt}`}>{text}</p>
            <div className={styles.buttonGroup}>
                <Link to='/Descricao'>
                    <a href={buyButtonLink} className={`btn btn-primary ${styles.buyButton}`}>{buyButtonText}</a>
                </Link>
                <a href={cartButtonLink} className={`btn btn-secondary ${styles.cartButton}`}>
                    <i className={cartButtonText}></i>
                </a>
            </div>
        </div>
    </div>
);