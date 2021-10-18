import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface PropsTypes {
  color?: "primary" | "gray";
  border?: "none";
  onClick: React.MouseEventHandler<HTMLParagraphElement> | undefined;
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  style?: React.CSSProperties | undefined;
  width?: string;
  borderRadius?: string;
  padding?: string;
}
const Button = ({
  color,
  border,
  onClick,
  text,
  type,
  width,
  borderRadius,
  padding,
}: PropsTypes) => {
  return (
    <button
      className={classNames(
        styles.root,
        { [styles.borderNone]: border === "none" },
        { [styles.gray]: color === "gray" },
        { [styles.primary]: color === "primary" }
      )}
      style={{ width: width, borderRadius: borderRadius, padding: padding }}
      type={type}
    >
      <p onClick={onClick}>{text}</p>
    </button>
  );
};

export default Button;
