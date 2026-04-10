'use client'

import { useState } from 'react';

import Botao from './botao';

import styles from './page.module.css';

function Exemplo04() {
    
    const [txt, Settxt] = useState('');

    const cadastrar = () => Settxt('cadastrar');
    const editar = () => Settxt('editar');
    const listar = () => Settxt('listar');
    const excluir = () => Settxt('excluir');
    const cancelar = () => Settxt('cancelar');

    return (
        <div >
            <h1>Atividade 3</h1>
            <h2>Ação selecionada: {txt}</h2>

         <div className={styles.Botao}>
            <Botao texto="cadastrar" aoClicar={cadastrar} acao={'cadastrar'}/>
            <Botao texto="editar" aoClicar={editar} acao={'editar'}/>
            <Botao texto="listar" aoClicar={listar} acao={'listar'}/>
            <Botao texto="excluir" aoClicar={excluir} acao={'excluir'}/>
            <Botao texto="cancelar" aoClicar={cancelar} acao={'-'} />
            </div>
        </div>
    );
}

export default Exemplo04;