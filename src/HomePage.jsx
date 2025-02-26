//import React from "react";
import { Navigation1 } from "./Navigation1";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <main className={styles.homepage}>
      <div className={styles.container}>
        <Navigation1 />
   
      </div>
    </main>
  );
}
