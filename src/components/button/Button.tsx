import React, {FC, ReactNode} from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface PropsType {
  alignItems?: "center";
  border?: "none" | "red";
  borderRadius?: string;
  color?: "primary" | "gray" | "white";
  disabled?: boolean;
  fontSize?: string;
  icon?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLParagraphElement> | undefined;
  padding?: string;
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  style?: React.CSSProperties | undefined;
  width?: string;
}

const Button: FC<PropsType> = ({
  alignItems,
  borderRadius,
  border,
  color,
  disabled,
  fontSize,
  icon,
  onClick,
  padding,
  text,
  type,
  width,
}) => {
  return (
    <button
      className={classNames(
        styles.root,
        { [styles.borderNone]: border === "none" },
        { [styles.borderRed]: border === "red" },
        { [styles.gray]: color === "gray" },
        { [styles.primary]: color === "primary" },
        { [styles.white]: color === "white" },
        { [styles.disabled]: disabled }
      )}
      style={{
        alignItems: alignItems,
        borderRadius: borderRadius,
        fontSize: fontSize,
        padding: padding,
        width: width,
      }}
      type={type}
    >
      <span>{icon}</span>
      <p onClick={onClick}>{text}</p>
    </button>
  );
};

export default Button;
