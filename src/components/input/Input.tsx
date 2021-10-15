import React from "react";
import styles from "./Input.module.scss";

type PropsType = {
  title?: string;
  type: "text" | "number" | "radio" | undefined;
};

const Input = ({ title, type }: PropsType) => {
  return (
    <div className={styles.root}>
      <p>{title}</p>
      <input type={type} />
    </div>
  );
};

export default Input;
