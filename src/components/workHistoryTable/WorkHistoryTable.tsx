import React, { FC } from "react";
import styles from "./WorkHistoryTable.module.scss";
import Button from "../button/Button";
import { WorkHistoryType } from "../../data/workHistory/index";
import WorkHistoryModal from "../workHistoryModal/WorkHistoryModal";

export type WorkHistoryTableTypes = {
  workHistory: WorkHistoryType;
  onClick: React.MouseEventHandler<HTMLParagraphElement> | undefined;
};
const WorkHistoryTable: FC<WorkHistoryTableTypes> = ({
  workHistory,
  onClick,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.workHistoryWrapper}>
        <div className={styles.leftWrapper}>
          <p>
            {workHistory.sinceDate} - {workHistory.untilDate}
          </p>
        </div>
        <div className={styles.rightWrapper}>
          <div className={styles.companyNameWrapper}>
            <div className={styles.leftPartWrapper}>
              <h3>{workHistory.name}</h3>
              <p className={styles.directorName}>{workHistory.position}</p>
            </div>
            <div className={styles.buttonWrapper}>
              <Button onClick={onClick} text={"編集する"} />
            </div>
          </div>
          <div className={styles.aboutWrapper}>
            <p>{workHistory.jobSummary}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkHistoryTable;
