'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function FormComponent() {
  const [texto, setTexto] = useState('')
  const [lista, setLista] = useState([])
  const [editando, setEditando] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    if (!texto) return

    if (editando !== null) {
      const novaLista = [...lista]
      novaLista[editando] = texto
      setLista(novaLista)
      setEditando(null)
    } else {
      setLista([...lista, texto])
    }

    setTexto('')
  }

  function editarItem(index) {
    setTexto(lista[index])
    setEditando(index)
  }

  function excluirItem(index) {
    setLista(lista.filter((_, i) => i !== index))
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Atividade 5 CRUD</h1>

      <form onSubmit={handleSubmit} className={styles.formulario}>
        <input
          type="text"
          placeholder="Digite algo..."
          value={texto}
          onChange={e => setTexto(e.target.value)}
        />

        <button type="submit">
          {editando !== null ? 'Salvar' : '+ Adicionar'}
        </button>
      </form>

      <div className={styles.lista}>
        {lista.map((item, index) => (
          <div key={index} className={styles.item}>
            <span className={styles.textoItem}>{item}</span>

            <div className={styles.botoes}>
              <button onClick={() => editarItem(index)}>✏️</button>
              <button onClick={() => excluirItem(index)}>🗑️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}