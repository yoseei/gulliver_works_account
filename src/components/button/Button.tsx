import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface PropsTypes {
  color?: "primary" | "gray";
  border?: "none";
  onClick: React.MouseEventHandler<HTMLParagraphElement> | undefined;
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
}
const Button = ({ color, border, onClick, text, type }: PropsTypes) => {
  return (
    <button
      className={classNames(
        styles.root,
        { [styles.primary]: color === "primary" },
        { [styles.gray]: color === "gray" },
        { [styles.borderNone]: border === "none" }
      )}
      type={type}
    >
      <p onClick={onClick}>{text}</p>
    </button>
  );
};

export default Button;
