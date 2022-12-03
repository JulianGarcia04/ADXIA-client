import React from "react";
import * as ReactDOM from "react-dom";
import Skeleton from "react-loading-skeleton";
import Image from "next/image";
import { MoreVertical } from "react-feather";
import style from "./styles.module.scss";
import ModalOptions from "../ModalOptions/ModalOptions";

function View({
  img,
  title,
  subtitle,
  isLoading,
  options,
  modalState,
  changeModalState,
  children,
}) {
  return !isLoading?(
    <div className={style.cardContainer}>
      {modalState &&
        document &&
        ReactDOM.createPortal(
          <ModalOptions changeStateModal={changeModalState}>
            {children}
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
  ):(
    <Skeleton count={5}/>
  )
}

export default View;
