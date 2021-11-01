import React from "react";
import styles from "./Textarea.module.scss";

type PropsType = {
  defaultValue?: string;
  name: string;
  placeholder?: string;
  rows: number;
  title: string;
};
const Textarea = React.forwardRef<HTMLTextAreaElement, PropsType>(
  ({ defaultValue, name, placeholder, rows, title }, ref) => {
    return (
      <div className={styles.root}>
        <p>{title}</p>
        <textarea
          defaultValue={defaultValue}
          name={name}
          placeholder={placeholder}
          rows={rows}
          ref={ref}
        ></textarea>
      </div>
    );
  }
);
export default Textarea;
