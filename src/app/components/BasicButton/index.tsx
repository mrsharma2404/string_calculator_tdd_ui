import React from "react";
import styles from "./index.module.css";

interface IBasicButton {
  onClickFun: () => void;
  label: string;
}
const BasicButton = ({ onClickFun, label }: IBasicButton) => {
  return (
    <div onClick={onClickFun} className={styles.btn}>
      {label}
    </div>
  );
};

export default BasicButton;
