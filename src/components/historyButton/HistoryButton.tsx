import React from "react";
import styles from "./HistoryButton.module.scss";

interface PropsTypes {
  onClick: React.MouseEventHandler<HTMLParagraphElement> | undefined;
  text: string;
}
const HistoryButton = (props: PropsTypes) => {
  return (
    <div className={styles.root}>
      <p onClick={props.onClick}>{props.text}</p>
    </div>
  );
};

export default HistoryButton;
