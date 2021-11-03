import React, { FC, useState } from "react";
import styles from "./WorkHistoryTable.module.scss";
import Button from "../button/Button";
import { WorkHistoriesType } from "../../data/workHistory/index";
import EditWorkHistoryModal from "../../components/editWorkHistoryModal/EditWorkHistoryModal";

export type WorkHistoryTableTypes = {
  accountId: number | undefined;
  editWorkHistory: (
    editedWorkHistory: WorkHistoriesType,
    workHistory: WorkHistoriesType
  ) => Promise<void>;
  workHistories: WorkHistoriesType[];
};

const WorkHistoryTable: FC<WorkHistoryTableTypes> = ({
  accountId,
  editWorkHistory,
  workHistories,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [workHistoryData, setWorkHistoryData] = useState<WorkHistoriesType>();
  const onEditWorkHistory = (workHistory: WorkHistoriesType) => {
    setIsOpen(true);
    setWorkHistoryData(workHistory);
  };

  return (
    <>
      {workHistories.map((workHistory, index) => (
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
                  <p className={styles.directorName}>
                    {workHistory.occupation}
                  </p>
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
          accountId={accountId}
          editWorkHistory={editWorkHistory}
          handleCloseEditWorkHistoryModal={() => setIsOpen(false)}
          openWorkHistoryModal={isOpen}
          workHistory={workHistoryData}
        />
      )}
    </>
  );
};

export default WorkHistoryTable;
