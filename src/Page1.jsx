import React from "react";
import styles from "./Hero.module.css";

export function Page1() {
  return (
    <>
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h2 className={styles.heading}>
            CONOCE LAS MEJORES <span className={styles.highlight}>RUTAS</span>{" "}
            DE <br />
            EL ÁVILA
          </h2>
          <a href="#routes" className={styles.ctaButton}>
            TOP RUTAS
          </a>
        </div>
        <div className={styles.imageContainer}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5edbf853a3d06887dc518f9072edab7c4b90d19123e83b44f65b40e29dec56e2?placeholderIfAbsent=true&apiKey=33a69b4c6fa34f2ba1e9b1915119a1e2"
            alt="El Ávila landscape"
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
    <section className={styles.mission}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9bc9088d77e07e4ac3cd6fabada1f049d2bc8c7a423fb9f3388677b82b529e3b?placeholderIfAbsent=true&apiKey=33a69b4c6fa34f2ba1e9b1915119a1e2"
            alt="Mission illustration"
            className={styles.missionImage}
          />
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.heading}>NUESTRA MISIÓN</h2>
          <p className={styles.description}>
            En Sendero Naranja, creemos en el poder transformador de la
            naturaleza. Nuestra misión es conectar a las personas con la
            majestuosidad del Parque Nacional El Ávila, fomentando un amor
            profundo por la biodiversidad y el medio ambiente.
            <br />
            <br />
            Ofrecemos experiencias únicas y seguras, diseñadas para todos los
            niveles de excursionistas, desde principiantes hasta aventureros
            experimentados.
            <br />
            <br />
            Únete a nosotros para explorar senderos espectaculares, descubrir la
            rica fauna y flora, y disfrutar de momentos inolvidables en la
            cumbre de Caracas.
          </p>
        </div>
      </div>
      <p className={styles.callout}>
        ¡Embárcate en una aventura con nosotros y deja que El Ávila te inspire!
      </p>
    </section>
    </>
  );
}
