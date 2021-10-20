import React from "react";
import styles from "./Input.module.scss";

type PropsType = {
  name: string;
  title?: string;
  type: "text" | "number" | "radio" | "file" | undefined;
};

const Input = React.forwardRef<HTMLInputElement, PropsType>(
  ({ name, title, type }, ref) => {
    return (
      <div className={styles.root}>
        <p>{title}</p>
        <input type={type} name={name} ref={ref} />
      </div>
    );
  }
);

export default Input;
