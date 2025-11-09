"use client"

import styles from "./page.module.css";
import WebApp from "./components/WebApp";

export default function Home() {
    return (
        <div className={styles.page}>
            <h1>web page</h1>
            <WebApp />
        </div>
    );
}
