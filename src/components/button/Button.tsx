import React from "react";
import styles from "./Button.module.scss";

interface PropsTypes {
  color?: string;
  border?: string;
  onClick: React.MouseEventHandler<HTMLParagraphElement> | undefined;
  text: string;
}
const Button = ({ color, border, onClick, text }: PropsTypes) => {
  return (
    <div className={styles.root} style={{ color: color, border: border }}>
      <p onClick={onClick}>{text}</p>
    </div>
  );
};

export default Button;
