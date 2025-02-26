"use client";

import React from "react";
import styles from "./Navigation.module.css";

export function Navigation() {
  return (
    <nav className={styles.navigation}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/40e2acb50a9b6d3793edab16c714eb089ed277a9834a24577a08dcead2efab4f?placeholderIfAbsent=true&apiKey=33a69b4c6fa34f2ba1e9b1915119a1e2"
        alt="Logo"
        className={styles.logo}
      />
      <h1 className={styles.brand}>Sendero Naranja</h1>
      <ul className={styles.navLinks}>
        <li>
          <a href="#destinations" className={styles.navLink}>
            Destinos
          </a>
        </li>
        <li>
          <a href="#about" className={styles.navLink}>
            Sobre Nosotros
          </a>
        </li>
        <li>
          <a href="#gallery" className={styles.navLink}>
            Galeria
          </a>
        </li>
        <li>
          <a href="#register" className={styles.navLink}>
            Registrarte
          </a>
        </li>
      </ul>
      <div className={styles.authContainer}>
        <button className={styles.loginButton}>Iniciar Sesión</button>
      </div>
    </nav>
  );
}
