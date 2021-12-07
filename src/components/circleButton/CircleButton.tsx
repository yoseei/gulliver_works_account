import React, {FC} from "react";
import Button from "../../components/button/Button";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";

type PropsType = {
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLParagraphElement> | undefined;
  text: "応募する" | "更新" | "作成" | "新規作成";
  type: "submit" | "button";
  width?: string;
};
const CircleButton: FC<PropsType> = ({disabled, onClick, text, type, width}) => {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <Link
        to={
          text === "新規作成"
            ? "/create_recruitment"
            : "" || text === "更新"
              ? "/edit_recruitment"
              : "" || text === "応募する" ? `/applicant_recruitment/${id}/detail` : ""
        }
      >
        <Button
          alignItems={"center"}
          border={"none"}
          borderRadius={"30px"}
          color={"primary"}
          disabled={disabled}
          fontSize={"1rem"}
          onClick={onClick}
          text={text}
          type={type}
          width={width}
        />
      </Link>
    </>
  );
};
export default CircleButton;
