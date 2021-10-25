import React from "react";
import Button from "../../components/button/Button";

type PropsType = {
  onClick?: React.MouseEventHandler<HTMLParagraphElement> | undefined;
  text: "更新" | "作成";
};
const CircleButton = ({ onClick, text }: PropsType) => {
  return (
    <Button
      color={"primary"}
      border={"none"}
      onClick={onClick}
      text={text}
      type={"submit"}
      width={"30%"}
      borderRadius={"15px"}
      padding={"10px"}
    />
  );
};
export default CircleButton;
