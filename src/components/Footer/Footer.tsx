import React from "react";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <span>Auto PeçaSeguro</span> @ 2024
      </p>
    </footer>
  );
};
