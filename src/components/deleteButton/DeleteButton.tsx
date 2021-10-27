import React from "react";
import Button from "../../components/button/Button";

type PropsType = {
  onClick?: React.MouseEventHandler<HTMLParagraphElement> | undefined;
};
const DeleteButton = ({ onClick }: PropsType) => {
  return (
    <Button
      color={"white"}
      border={"red"}
      onClick={onClick}
      text={"削除する"}
      type={"submit"}
    />
  );
};
export default DeleteButton;
