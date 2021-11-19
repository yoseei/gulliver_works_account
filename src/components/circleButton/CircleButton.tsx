import React from "react";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";

type PropsType = {
  onClick?: React.MouseEventHandler<HTMLParagraphElement> | undefined;
  text: "更新" | "作成" | "新規作成";
};
const CircleButton = ({ onClick, text }: PropsType) => {
  return (
    <>
      <Link
        to={
          text === "新規作成"
            ? "/create_recruitment"
            : "" || text === "更新"
            ? "/edit_recruitment"
            : ""
        }
      >
        <Button
          alignItems={"center"}
          border={"none"}
          borderRadius={"30px"}
          color={"primary"}
          fontSize={"1rem"}
          onClick={onClick}
          text={text}
          type={"submit"}
          width={"25%"}
        />
      </Link>
    </>
  );
};
export default CircleButton;
