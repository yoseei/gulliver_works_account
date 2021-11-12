import React from "react";
import styles from "./Input.module.scss";

type PropsType = {
  defaultValue?: string;
  name: string;
  title?: string;
  type: "date" | "file" | "number" | "radio" | "text" | undefined;
};

const Input = React.forwardRef<HTMLInputElement, PropsType>(
  ({ defaultValue, name, title, type }, ref) => {
    return (
      <div className={styles.root}>
        <p>{title}</p>
        <input defaultValue={defaultValue} name={name} ref={ref} type={type} />
      </div>
    );
  }
);

export default Input;
