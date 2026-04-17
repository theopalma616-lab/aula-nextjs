'use client'

import { use, useState } from 'react';

import styles from './page.module.css';

export default function FormComponent() {

    const [produto, setproduto] = useState('');
    const [qtd, setqtd] = useState('');

    const [historico, setHistorico] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (produto && qtd) {
        const horario = new Date();
        const novaEntrada = `${produto} -  ${qtd}x`;
        setHistorico([...historico, novaEntrada]);
    }
    };




    return (
        <div className={styles.container}>

            <h1>Atividade 4 - Compras</h1>

            <form onSubmit={handleSubmit} className={styles.formulario}>
                <input
                    name="produto"
                    type="text"
                    placeholder='Produto'
                    onChange={e => setproduto(e.target.value)}
               
                />
                <input
                    name="quantidade"
                    type="number"
                    placeholder='Quantidade'
                    onChange={e => setqtd(e.target.value)}
                
                />
                <button type="submit">enviar</button>
            </form>

            <div className={styles.historico}>
                <h3>Carrinho de Compras</h3>
                
                {
                    historico.map( item => 
                        <p key={item}>{item}</p>
                    )
                }

            </div>
        </div>
    );
}