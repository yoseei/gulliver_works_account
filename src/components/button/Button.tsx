import React from "react";
import styles from "./Button.module.scss";

interface PropsTypes {
  onClick: React.MouseEventHandler<HTMLParagraphElement> | undefined;
  text: string;
  style?: React.CSSProperties | undefined;
}
const Button = (props: PropsTypes) => {
  return (
    <div className={styles.root} style={props.style}>
      <p onClick={props.onClick}>{props.text}</p>
    </div>
  );
};

export default Button;
