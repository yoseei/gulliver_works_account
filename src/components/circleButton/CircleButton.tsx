import React from "react";
import Button from "../../components/button/Button";
import styles from "./CircleButton.module.scss";

const CircleButton = () => {
  return (
    <Button
      color={"primary"}
      border={"none"}
      onClick={() => console.log("動作チェック")}
      text={"次へ"}
      type={"submit"}
      style={{ borderRadius: "15px", padding: "10px", width: "30%" }}
    />
  );
};

export default CircleButton;
