import React from "react";
import Image from "next/image";
import { MoreHorizontal, ChevronDown } from "react-feather";
import style from "./styles.module.scss";

function View({styles}) {
  return (
    <div className={style.cardProduct} style={styles}>
      <header className={style.imageInfo}>
        <Image
          src={
            "https://www.nestle-contigo.co/sites/default/files/2021-09/06.png"
          }
          alt="leche clean"
          width={80}
          height={80}
        />
        <MoreHorizontal color="#000" />
      </header>
      <spa className={style.resumeInfo}>Ristras de leche Klim con sabor a chocolate blanc..</spa>
      <section className={style.presentationInfo}>
        <span>x250</span>
        <span>x350</span>
        <span>x750</span>
      </section>
      <footer className={style.priceInfo}>
        <h1>$24.000</h1>
        <div>
          <span>12 unidades</span>
          <ChevronDown color="#000" width={20}/>
        </div>
      </footer>
    </div>
  );
}

export default View;
