import React from "react";
import styles from "./Textarea.module.scss";

type PropsType = {
  name: string;
  placeholder?: string;
  rows: number;
  title: string;
};
const Textarea = React.forwardRef<HTMLTextAreaElement, PropsType>(
  ({ name, placeholder, rows, title }, ref) => {
    return (
      <div className={styles.root}>
        <p>{title}</p>
        <textarea
          rows={rows}
          name={name}
          placeholder={placeholder}
          ref={ref}
        ></textarea>
      </div>
    );
  }
);
export default Textarea;
