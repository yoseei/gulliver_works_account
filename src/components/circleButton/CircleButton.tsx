import React from "react";
import Button from "../../components/button/Button";

const CircleButton = () => {
  return (
    <Button
      color={"primary"}
      border={"none"}
      onClick={() => console.log("動作チェック")}
      text={"次へ"}
      type={"submit"}
      width={"30%"}
      borderRadius={"15px"}
      padding={"10px"}
    />
  );
};

export default CircleButton;
