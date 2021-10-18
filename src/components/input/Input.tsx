import React from "react";
import styles from "./Input.module.scss";

type PropsType = {
  name: string;
  title?: string;
  type: "text" | "number" | "radio" | "file" | undefined;
  ref: React.LegacyRef<HTMLInputElement> | undefined;
};

const Input = ({ name, ref, title, type }: PropsType) => {
  return (
    <div className={styles.root}>
      <p>{title}</p>
      <input type={type} name={name} ref={ref} />
    </div>
  );
};

export default Input;
