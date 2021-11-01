import React from "react";
import styles from "./Input.module.scss";

type PropsType = {
  name: string;
  defaultValue?: string;
  title?: string;
  type: "text" | "number" | "radio" | "file" | "date" | undefined;
};

const Input = React.forwardRef<HTMLInputElement, PropsType>(
  ({ name, defaultValue, title, type }, ref) => {
    return (
      <div className={styles.root}>
        <p>{title}</p>
        <input type={type} name={name} defaultValue={defaultValue} ref={ref} />
      </div>
    );
  }
);

export default Input;
