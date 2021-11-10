import React from "react";
import Button from "../../components/button/Button";

type PropsType = {
  onClick?: React.MouseEventHandler<HTMLParagraphElement> | undefined;
  text: "更新" | "作成" | "新規作成";
};
const CircleButton = ({ onClick, text }: PropsType) => {
  return (
    <Button
      alignItems={"center"}
      color={"primary"}
      border={"none"}
      fontSize={"1rem"}
      onClick={onClick}
      text={text}
      type={"submit"}
      width={"25%"}
      borderRadius={"30px"}
    />
  );
};
export default CircleButton;
