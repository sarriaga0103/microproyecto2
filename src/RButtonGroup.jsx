import React from "react";
import styles from "./RegistrationForm.module.css";

const ButtonGroup = () => {
  return (
    <>
      <div className={styles.registerAs}>
        <label className={styles.label}>Registrar como:</label>
        <div className={styles.buttonGroup}>
          <button type="button" className={styles.btnPrimary}>
            Estudiante
          </button>
          <button type="button" className={styles.btnPrimary}>
            Guía
          </button>
        </div>
      </div>
      <div className={styles.socialButtons}>
        <button type="button" className={styles.btnGoogle}>
          <i className="ti ti-brand-google" />
          <span>Usar Google</span>
        </button>
        <button type="button" className={styles.btnFacebook}>
          <i className="ti ti-brand-facebook" />
          <span>Usar Facebook</span>
        </button>
      </div>
    </>
  );
};

export default ButtonGroup;
