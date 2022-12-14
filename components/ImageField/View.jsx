import React from "react";
import { Plus, Camera } from "react-feather";
import styles from "./styles.module.scss";

function View({ onChange, alt, src }) {
  return (
    <label className={styles.inputContainer}>
      {src ? (
        <img
          src={src}
          alt={alt}
          width={120}
          height={140}
          style={{ borderRadius: 10 }}
        />
      ) : (
        <Plus color="#01237A" width={50} height={50} />
      )}
      <input
        type={"file"}
        name="imageInput"
        accept=".jpg, .jpeg, .png, .svg"
        onChange={onChange}
      />
      <div className={styles.iconContainer}>
        <Camera color="#01237A" width={17} height={17} />
      </div>
    </label>
  );
}

export default View;
