import React from "react";
import * as ReactDOM from "react-dom";
import Skeleton from "react-loading-skeleton";
import { MoreVertical } from "react-feather";
import style from "./styles.module.scss";
import ModalOptions from "../ModalOptions/ModalOptions";

function View({
  personData,
  isLoading,
  options,
  modalState,
  changeModalState,
  children,
  onClick
}) {
  return !isLoading?(
    <div className={style.cardContainer} onClick={onClick}>
      {modalState &&
        document &&
        ReactDOM.createPortal(
          <ModalOptions changeStateModal={changeModalState}>
            {children}
          </ModalOptions>,
          document.getElementById("modalContainer")
        )}
      <img
        src={personData.imageURL}
        alt="Image profile"
        width={50}
        height={50}
        style={{ borderRadius: "50%" }}
      />
      <div className={style.infoPerson}>
        <h1>{personData.name} {personData.surname}</h1>
        <span>{personData.info}</span>
      </div>
      {options && 
        <div className={style.options}>
          <MoreVertical onClick={changeModalState}/>
        </div>}
    </div>
  ):(
    <Skeleton count={5}/>
  )
}

export default View;
