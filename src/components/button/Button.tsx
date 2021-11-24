import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";
import { DeleteOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";

interface PropsTypes {
  alignItems?: "center";
  border?: "none" | "red";
  borderRadius?: string;
  color?: "primary" | "gray" | "white";
  fontSize?: string;
  icon?: "edit" | "delete";
  onClick?: React.MouseEventHandler<HTMLParagraphElement> | undefined;
  padding?: string;
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  style?: React.CSSProperties | undefined;
  width?: string;
}
const Button = ({
  alignItems,
  borderRadius,
  border,
  color,
  fontSize,
  icon,
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
        { [styles.borderRed]: border === "red" },
        { [styles.gray]: color === "gray" },
        { [styles.primary]: color === "primary" },
        { [styles.white]: color === "white" }
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
      <span>
        {icon === "delete" ? (
          <DeleteOutlined />
        ) : "" || icon === "edit" ? (
          <EditOutlined />
        ) : (
          ""
        )}
      </span>
      <p onClick={onClick}>{text}</p>
    </button>
  );
};

export default Button;
