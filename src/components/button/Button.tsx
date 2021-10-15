import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface PropsTypes {
  color?: "primary" | "gray";
  border?: "none";
  borderRadius?: "15px";
  onClick: React.MouseEventHandler<HTMLParagraphElement> | undefined;
  padding?: "10px";
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  width?: "30%";
}
const Button = ({
  color,
  border,
  borderRadius,
  onClick,
  padding,
  text,
  type,
  width,
}: PropsTypes) => {
  return (
    <button
      className={classNames(
        styles.root,
        { [styles.borderNone]: border === "none" },
        { [styles.borderRadius]: borderRadius === "15px" },
        { [styles.gray]: color === "gray" },
        { [styles.primary]: color === "primary" },
        { [styles.padding]: padding === "10px" },
        { [styles.width]: width === "30%" }
      )}
      type={type}
    >
      <p onClick={onClick}>{text}</p>
    </button>
  );
};

export default Button;
