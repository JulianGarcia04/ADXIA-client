import React from "react";
import * as ReactDOM from "react-dom";
import Image from "next/image";
import { MoreHorizontal, ChevronDown, Edit3, Trash } from "react-feather";
import style from "./styles.module.scss";
import ModalOptions from "../ModalOptions/ModalOptions";
import OptionsModalCard from "../OptionsModalCard/OptionsModalCard";

function View({
  idProduct,
  stateModal,
  methodChangeStateModal,
  options,
  styles,
}) {
  return (
    <div className={style.cardProduct} style={styles}>
      <header className={style.imageInfo}>
        {stateModal &&
          document &&
          ReactDOM.createPortal(
            <ModalOptions changeStateModal={methodChangeStateModal}>
              <OptionsModalCard
                href={`/products/edit/${idProduct}`}
                icon={<Edit3 width={27} height={27} />}
                message="Editar producto"
              />
              <OptionsModalCard
                icon={<Trash width={27} height={27} />}
                message="Eliminar producto"
              />
            </ModalOptions>,
            document.getElementById("modalContainer")
          )}
        <Image
          src={
            "https://www.nestle-contigo.co/sites/default/files/2021-09/06.png"
          }
          alt="leche clean"
          width={80}
          height={80}
        />
        {options && (
          <MoreHorizontal color="#000" onClick={methodChangeStateModal} />
        )}
      </header>
      <span className={style.resumeInfo}>
        Ristras de leche Klim con sabor a chocolate blanc..
      </span>
      <section className={style.presentationInfo}>
        <span>x250</span>
      </section>
      <footer className={style.priceInfo}>
        <h1>$24.000</h1>
        <div>
          <span>12 unidades</span>
        </div>
      </footer>
    </div>
  );
}

export default View;
