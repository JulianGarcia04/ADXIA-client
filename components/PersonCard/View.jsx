import React from "react";
import Link from "next/link";
import * as ReactDOM from "react-dom";
import Image from "next/image";
import { MoreVertical, Edit3, Trash, Shield } from "react-feather";
import style from "./styles.module.scss";
import ModalOptions from "../ModalOptions/ModalOptions";

function View({ options, modalState, changeModalState, idPerson, employee }) {
  return (
    <div className={style.cardContainer}>
      {modalState &&
        document &&
        ReactDOM.createPortal(
          <ModalOptions changeStateModal={changeModalState}>
            {
              employee
              &&
              <div>
                <Shield width={27} height={27}/>
                <span>Credenciales de acceso</span>
              </div>
            }
            <Link href={`/clients/edit/${idPerson}`}>
              <div>
                <Edit3 width={27} height={27} />
                <span>Editar cliente</span>
              </div>
            </Link>
            <div>
              <Trash width={27} height={27} />
              <span>Eliminar cliente</span>
            </div>
          </ModalOptions>,
          document.getElementById("modalContainer")
        )}
      <Image
        src={
          "https://i.pinimg.com/564x/40/13/3d/40133de3f92c8419729ace7dfc882c40.jpg"
        }
        alt="Image profile"
        width={50}
        height={50}
        style={{ borderRadius: "50%" }}
      />
      <div className={style.infoPerson}>
        <h1>Andres Camilo Hernandez</h1>
        <span>Vendedor</span>
      </div>
      {options && <MoreVertical onClick={changeModalState} />}
    </div>
  );
}

export default View;
