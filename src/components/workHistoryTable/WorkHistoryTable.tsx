import React, { FC, useState } from "react";
import styles from "./WorkHistoryTable.module.scss";
import Button from "../button/Button";
import { WorkHistoryType } from "../../data/workHistory/index";
import EditWorkHistoryModal from "../../components/editWorkHistoryModal/EditWorkHistoryModal";

export type WorkHistoryTableTypes = {
  workHistories: WorkHistoryType[];
};

const WorkHistoryTable: FC<WorkHistoryTableTypes> = ({ workHistories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [workHistoryData, setWorkHistoryData] = useState<WorkHistoryType>();
  const onEditWorkHistory = (workHistory: WorkHistoryType) => {
    setIsOpen(true);
    setWorkHistoryData(workHistory);
  };

  return (
    <>
      {workHistories.map((workHistory: WorkHistoryType, index: number) => (
        <div className={styles.root} key={index}>
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
                  <Button
                    onClick={() => onEditWorkHistory(workHistory)}
                    text={"編集する"}
                  />
                </div>
              </div>
              <div className={styles.aboutWrapper}>
                <p>{workHistory.jobSummary}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      {workHistoryData && (
        <EditWorkHistoryModal
          handleCloseEditWorkHistoryModal={() => setIsOpen(false)}
          openWorkHistoryModal={isOpen}
          // accountId={accountId}
          workHistory={workHistoryData}
        />
      )}
    </>
  );
};

export default WorkHistoryTable;
