import React, { FC } from "react";
import styles from "./WorkHistoryTable.module.scss";
import Button from "../button/Button";
import { WorkHistoryType } from "../../data/workHistory/index";

interface onClick {
  onClick: React.MouseEventHandler<HTMLParagraphElement> | undefined;
}

type WorkHistoryTypes = WorkHistoryType & onClick;
const WorkHistoryTable: FC<WorkHistoryTypes> = ({
  sinceDate,
  untilDate,
  name,
  position,
  jobSummary,
  onClick,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.workHistoryWrapper}>
        <div className={styles.leftWrapper}>
          <p>
            {sinceDate} - {untilDate}
          </p>
        </div>
        <div className={styles.rightWrapper}>
          <div className={styles.companyNameWrapper}>
            <div className={styles.leftPartWrapper}>
              <h3>{name}</h3>
              <p className={styles.directorName}>{position}</p>
            </div>
            <div className={styles.buttonWrapper}>
              <Button onClick={onClick} text={"編集する"} />
            </div>
          </div>
          <div className={styles.aboutWrapper}>
            <p>{jobSummary}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkHistoryTable;
