import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface PropsTypes {
  backgroundColor?: "primary" | "gray";
  border?: "none";
  fontWeight?: "bold";
  textColor?: "white" | "black";
  onClick: React.MouseEventHandler<HTMLParagraphElement> | undefined;
  text: string;
}
const Button = ({
  backgroundColor,
  border,
  fontWeight,
  onClick,
  text,
  textColor,
}: PropsTypes) => {
  return (
    <div
      className={classNames(
        styles.root,
        { [styles.primary]: backgroundColor === "primary" },
        { [styles.gray]: backgroundColor === "gray" },
        { [styles.borderNone]: border === "none" },
        { [styles.fontWeight]: fontWeight === "bold" },
        { [styles.black]: textColor === "black" },
        { [styles.white]: textColor === "white" }
      )}
    >
      <p onClick={onClick}>{text}</p>
    </div>
  );
};

export default Button;
