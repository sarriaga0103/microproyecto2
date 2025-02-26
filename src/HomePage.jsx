//import React from "react";
import { Navigation } from "./Navigation";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <main className={styles.homepage}>
      <div className={styles.container}>
        <Navigation />
   
      </div>
    </main>
  );
}
