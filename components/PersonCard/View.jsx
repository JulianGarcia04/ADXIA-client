import React from "react";
import Link from "next/link";
import * as ReactDOM from "react-dom";
import Image from "next/image";
import { MoreVertical, Edit3, Trash, Shield } from "react-feather";
import style from "./styles.module.scss";
import ModalOptions from "../ModalOptions/ModalOptions";

function View({
  img,
  title,
  subtitle,
  options,
  modalState,
  changeModalState,
  children,
}) {
  return (
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
          "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1629254a9dfa66d90aa6ebda8c2d6a5f~c5_100x100.jpeg?x-expires=1670691600&x-signature=%2BDXCJKsp3dK4ZX%2BG4A9964%2BCub8%3D"
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
