import styles from './index.module.css';

function Botao({ texto, aoClicar, acao }) {
    return (
        <button
            className={`${styles.botao} ${acao === 'cadastrar' ? styles.cadastrar :acao==='editar' ?  styles.editar : acao === 'listar' ? styles.listar : acao === 'excluir' ? styles.excluir : acao === 'cancelar' ? styles.cancelar : styles.cancelar }`}
            onClick={aoClicar}
        >
            {texto}
        </button>
    );
}

export default Botao;