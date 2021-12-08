import React, {FC} from "react";
import Button from "../../components/button/Button";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";

type PropsType = {
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLParagraphElement>;
  linkTo?: string;
  text: string;
  type: "submit" | "button";
  width?: string;
};
const CircleButton: FC<PropsType> = ({disabled, onClick, linkTo, text, type, width}) => {
  const {id} = useParams<{ id: string }>();
  return (
    <>
      {linkTo ?
        <Link
          to={linkTo}
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
        :
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
      }
    </>
  );
};
export default CircleButton;
