import React from "react";
import styles from "./RegistrationForm.module.css";

const FormHeader = () => {
  return (
    <header>
      <div className={styles.logo}>
        <img
          src="https://placehold.co/100x60/2D5A27/2D5A27"
          alt="Sendero Naranja Logo"
          className={styles.img}
        />
      </div>
      <h1 className={styles.title}>Registra tu cuenta</h1>
    </header>
  );
};

export default FormHeader;
