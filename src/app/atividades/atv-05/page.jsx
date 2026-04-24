import { useState } from "react";
import styles from "./page.module.css";

export default function Page() {
  const [itens, setItens] = useState([]);
  const [texto, setTexto] = useState("");

  function adicionar() {
    if (texto.trim() === "") return;
    setItens([...itens, texto]);
    setTexto("");
  }

  function remover(index) {
    setItens(itens.filter((_, i) => i !== index));
  }

  function editar(index) {
    const novoTexto = prompt("Editar item:", itens[index]);
    if (novoTexto && novoTexto.trim() !== "") {
      const copia = [...itens];
      copia[index] = novoTexto;
      setItens(copia);
    }
  }

  return (
    <div className={styles.container}>
      <h1>Mockup CRUD Vite</h1>

      <input
        type="text"
        placeholder="Digite algo..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <button className={styles.btnAdd} onClick={adicionar}>
        + Adicionar
      </button>

      <ul className={styles.list}>
        {itens.map((item, index) => (
          <li key={index} className={styles.item}>
            <span>{item}</span>

            <div className={styles.actions}>
              <button onClick={() => editar(index)}>✏️</button>
              <button
                className={styles.delete}
                onClick={() => remover(index)}
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}