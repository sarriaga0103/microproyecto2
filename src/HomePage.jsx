"use client";

import React from "react";
import { Navigation } from "./Navigation";
import { Page1 } from "./Page1";
import { Footer } from "./Footer";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <main className={styles.homepage}>
      <div className={styles.container}>
        <Navigation />
        <Page1/>
        <Footer />
      </div>
    </main>
  );
}
