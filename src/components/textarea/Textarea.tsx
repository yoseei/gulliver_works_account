import React from "react";
import styles from "./Textarea.module.scss";

type PropsType = {
  name: string;
  placeholder?: string;
  rows: number;
  title: string;
};
const Textarea = ({ name, placeholder, rows, title }: PropsType) => {
  return (
    <div className={styles.root}>
      <p>{title}</p>
      <textarea rows={rows} name={name} placeholder={placeholder} />
    </div>
  );
};

export default Textarea;
