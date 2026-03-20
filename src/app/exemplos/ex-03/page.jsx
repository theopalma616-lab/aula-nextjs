'use client'

import { useState } from "react";
import styles from "./page.module.css"

export default function Exemplo03() {  

    const [num, setNum] = useState(0);

    function handleIncrementa () {
        setNum(num + 1);
    }

    return (
        <div className={styles.container}>
            <label>{`Contador de cliques: ${num}`}</label>            
            <button onClick={() => handleIncrementa()} className={styles.button}>+1</button>
        </div>
    );
}