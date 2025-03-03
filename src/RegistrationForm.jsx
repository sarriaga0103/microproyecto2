"use client";
import React from "react";
import styles from "./RegistrationForm.module.css";
import FormHeader from "./RFormHeader";
import FormInput from "./RFormInput";
import ButtonGroup from "./RButtonGroup";

const RegistrationForm = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <main className={styles.container}>
        <button className={styles.homeIcon}>
          <i className="ti ti-home" />
        </button>
        <section className={styles.content}>
          <FormHeader />
          <form className={styles.form}>
            <div className={styles.formRow}>
              <FormInput
                label="Nombre:"
                type="text"
                placeholder="Ingresa tu nombre..."
              />
              <FormInput
                label="Apellido:"
                type="text"
                placeholder="Ingresa tu apellido..."
              />
            </div>
            <div className={styles.formRow}>
              <FormInput
                label="Email (institucional):"
                type="email"
                value="info@unimet.edu.ve"
              />
              <FormInput
                label="Número de teléfono:"
                type="tel"
                value="+58 414-3686749"
              />
            </div>
            <div className={styles.formRow}>
              <FormInput
                label="Contraseña:"
                type="password"
                value="xxxxxxxxx"
              />
              <FormInput
                label="Confirma tu contraseña:"
                type="password"
                value="xxxxxxxxx"
              />
            </div>
            <ButtonGroup />
          </form>
        </section>
      </main>
    </>
  );
};

export default RegistrationForm;
