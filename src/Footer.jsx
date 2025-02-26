import React from "react";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.branding}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/257fb5f7f1c538bdf52379a75a8b5ad29b2adf210b4d54a5fb07c44f107bf46a?placeholderIfAbsent=true&apiKey=33a69b4c6fa34f2ba1e9b1915119a1e2"
            alt="Footer logo"
            className={styles.logo}
          />
          <p className={styles.copyright}>
            Copyright © 2025 - Universidad Metropolitana.
            <br />
            Todos los derechos reservados.
          </p>
          <div className={styles.social}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cc478620ff4f6d52baa833edc309b5e74caf9c60d6c3f2c0175631507c228b9?placeholderIfAbsent=true&apiKey=33a69b4c6fa34f2ba1e9b1915119a1e2"
              alt="Social icon"
              className={styles.socialIcon}
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/95aedaf9a9b5b6fb11d6ef4dc4d7ea92c8b6b1501bb8e27ececd12286a2a00e7?placeholderIfAbsent=true&apiKey=33a69b4c6fa34f2ba1e9b1915119a1e2"
              alt="Social icon"
              className={styles.socialIcon}
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a23055cf4593aa205ec3213a729842214713960356cfdb043da946db105cb05e?placeholderIfAbsent=true&apiKey=33a69b4c6fa34f2ba1e9b1915119a1e2"
              alt="Social icon"
              className={styles.socialIcon}
            />
          </div>
        </div>

        <div className={styles.links}>
          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>Destinos</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="#sabas">Sabas Nieves</a>
              </li>
              <li>
                <a href="#quebrada">Quebrada Quintero</a>
              </li>
              <li>
                <a href="#lagunazo">El Lagunazo</a>
              </li>
              <li>
                <a href="#naiguata">Pico Naiguata</a>
              </li>
              <li>
                <a href="#vivero">Visita al vivero</a>
              </li>
            </ul>
          </div>

          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>Sección Informativa</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="#galeria">Galeria</a>
              </li>
              <li>
                <a href="#parque">Parque Nacional Waraira Repano</a>
              </li>
              <li>
                <a href="#preservacion">Preservación</a>
              </li>
            </ul>
          </div>

          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>Sobre Nosotros</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="#mision">Misión y Visión</a>
              </li>
              <li>
                <a href="#proyecto">Proyecto Avila</a>
              </li>
              <li>
                <a href="#unimet">UNIMET Sostenible</a>
              </li>
              <li>
                <a href="#contactos">Contactos</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
