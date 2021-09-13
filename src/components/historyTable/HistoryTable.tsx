import React from "react";
import styles from "./HistoryTable.module.scss";
import EditButton from "../editButton/EditButton";
interface PropsTypes {
  workHistoryTitle?: string;
  workingPeriod: string;
  companyName: string;
  directorName: string;
  about?: string;
  onClick: React.MouseEventHandler<HTMLParagraphElement> | undefined;
  buttonText: string;
}

const HistoryTable = (props: PropsTypes) => {
  return (
    <div className={styles.root}>
      {/* <h1 className={styles.workHistoryTitle}>{props.workHistoryTitle}</h1> */}
      <div className={styles.workHistoryWrapper}>
        <div className={styles.leftWrapper}>
          <p>{props.workingPeriod}</p>
        </div>
        <div className={styles.rightWrapper}>
          <div className={styles.companyNameWrapper}>
            <div className={styles.leftPartWrapper}>
              <h3>{props.companyName}</h3>
              <p className={styles.directorName}>{props.directorName}</p>
            </div>
            <div className={styles.buttonWrapper}>
              <EditButton onClick={props.onClick} text={props.buttonText} />
            </div>
          </div>
          <div className={styles.aboutWrapper}>
            <p>{props.about}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryTable;