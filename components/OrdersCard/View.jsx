import React from "react";
import * as ReactDOM from "react-dom";
import ProductCard from "../ProductCard/ProductCard";
import ModalOptions from "../ModalOptions/ModalOptions";
import PersonCard from "../PersonCard/PersonCard";
import { MoreVertical, Edit3, Trash } from "react-feather";
import style from "./styles.module.scss";

function View({ moreOption, stateModal }) {
  return (
    <div className={style.orderCard}>
      {stateModal &&
        document &&
        ReactDOM.createPortal(
          <ModalOptions changeStateModal={moreOption}>
            <div>
              <Edit3 width={27} height={27} />
              <span>Editar pedido</span>
            </div>
            <div>
              <Trash width={27} height={27} />
              <span>Eliminar pedido</span>
            </div>
          </ModalOptions>,
          document.getElementById("modalContainer")
        )}
      <div className={style.clientInfo}>
        <PersonCard />
        <MoreVertical onClick={moreOption} />
      </div>
      <div className={style.sectionProduct}>
        <ProductCard border />
        <ProductCard border />
      </div>
      <button className={style.button}>Ver todo el pedido</button>
    </div>
  );
}

export default View;
