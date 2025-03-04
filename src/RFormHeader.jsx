import logoSI from '/logoSI.png'
import styles from "./RegistrationForm.module.css";

const FormHeader = () => {
  return (
    <header>
      <div className={styles.logo}>
        <img
          src={logoSI}
          alt="Sendero Naranja Logo"
          className={styles.img}
        />
      </div>
      <h1 className={styles.title}>Registra tu cuenta</h1>
    </header>
  );
};

export default FormHeader;
