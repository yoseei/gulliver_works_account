import React from "react";
import Button from "../../components/button/Button";

type PropsType = {
  onClick?: React.MouseEventHandler<HTMLParagraphElement> | undefined;
};
const CircleButton = ({ onClick }: PropsType) => {
  return (
    <Button
      color={"primary"}
      border={"none"}
      onClick={onClick}
      text={"次へ"}
      type={"submit"}
      width={"30%"}
      borderRadius={"15px"}
      padding={"10px"}
    />
  );
};
export default CircleButton;
