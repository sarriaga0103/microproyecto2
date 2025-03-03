import React from "react";
import styles from "./RegistrationForm.module.css";

const FormInput = ({ label, type, placeholder, value }) => {
  return (
    <div className={styles.formGroup}>
      <label className={styles.label}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        className={styles.input}
      />
    </div>
  );
};

export default FormInput;
