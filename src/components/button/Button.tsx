import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface PropsTypes {
  color?: "primary" | "gray";
  border?: "none";
  onClick: React.MouseEventHandler<HTMLParagraphElement> | undefined;
  text: string;
}
const Button = ({ color, border, onClick, text }: PropsTypes) => {
  return (
    <div
      className={classNames(
        styles.root,
        { [styles.primary]: color === "primary" },
        { [styles.gray]: color === "gray" },
        { [styles.borderNone]: border === "none" }
      )}
    >
      <p onClick={onClick}>{text}</p>
    </div>
  );
};

export default Button;
