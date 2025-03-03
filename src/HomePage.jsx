//import React from "react";
import { Navigation1 } from "./Navigation1";
import { Page1 } from "./Page1";
import { Footer } from "./Footer";
import styles from "./HomePage.module.css";
import Login from "./Login";
import Registration from "./RegistrationForm"

export default function HomePage() {

  return (
    <main className={styles.homepage}>
      <div className={styles.container}>
        <Navigation1 />
        <Page1/>
        <Footer/>
        <Login/>
        <Registration/>
      </div>
    </main>
  );
}
