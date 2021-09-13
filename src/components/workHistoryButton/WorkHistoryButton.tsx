import React from "react";
import styles from "./WorkHistoryButton.module.scss";

interface PropsTypes {
  onClick: React.MouseEventHandler<HTMLParagraphElement> | undefined;
  text: string;
}
const WorkHistoryButton = (props: PropsTypes) => {
  return (
    <div className={styles.root}>
      <p onClick={props.onClick}>{props.text}</p>
    </div>
  );
};

export default WorkHistoryButton;
