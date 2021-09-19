import React from "react";
import styles from "./HistoryTable.module.scss";
import Button from "../button/Button";

interface WorkHistories {
  id?: string;
  isEmployed?: string;
  occupation?: {
    id: string;
    name: string;
  };
  industry?: {
    id: string;
    name: string;
  };
  position?: string;
  annualIncome?: number;
  managementExperience?: number;
  jobSummary?: string;
  sinceDate: string;
  untilDate: string;
  name: string;
}
interface AcademicHistories {
  id?: string;
  name: string;
  faculty?: string;
  sinceDate: string;
  untilDate: string;
  type?: string;
  onClick: React.MouseEventHandler<HTMLParagraphElement> | undefined;
}

type HistoriesType = WorkHistories & AcademicHistories;
const HistoryTable = (props: HistoriesType) => {
  return (
    <div className={styles.root}>
      <div className={styles.workHistoryWrapper}>
        <div className={styles.leftWrapper}>
          <p>
            {props.sinceDate} - {props.untilDate}
          </p>
        </div>
        <div className={styles.rightWrapper}>
          <div className={styles.companyNameWrapper}>
            <div className={styles.leftPartWrapper}>
              <h3>{props.name}</h3>
              <p className={styles.directorName}>{props.position}</p>
            </div>
            <div className={styles.buttonWrapper}>
              <Button onClick={props.onClick} text={"編集する"} />
            </div>
          </div>
          <div className={styles.aboutWrapper}>
            <p>{props.jobSummary}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryTable;
