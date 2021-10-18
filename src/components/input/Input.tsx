import React from "react";
import styles from "./Input.module.scss";

type PropsType = {
  name: string;
  title?: string;
  type: "text" | "number" | "radio" | "file" | undefined;
};

const Input = ({ name, title, type }: PropsType) => {
  return (
    <div className={styles.root}>
      <p>{title}</p>
      <input type={type} name={name} />
    </div>
  );
};

export default Input;
