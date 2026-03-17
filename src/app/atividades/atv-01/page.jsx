import Link from "next/link";
import style from "./page.module.css";
import Image from "next/image";
import salsicha from './img/cachorro.webp';

export default atividade01;


function atividade01(){
    return(
        <div className={style.stlG}>
            <h1>atividade 1</h1>
            <div className={style.stl1}>
                <h1>apenas um cachorro salsicha</h1>
                <Image src={salsicha}></Image>
                <Link href="/">voltar</Link>
            </div>
               
        </div>
    )
}