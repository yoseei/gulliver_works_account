import React from "react";
import styles from "./AcademicHistoryTable.module.scss";
import Button from "../button/Button";
import { AcademicHistoryType } from "../../data/academicHistory/index";

type AcademicHistoryTableType = {
  academicHistories: AcademicHistoryType[];
  onClick: React.MouseEventHandler<HTMLParagraphElement> | undefined;
};
const AcademicHistoryTable: React.FC<AcademicHistoryTableType> = ({
  academicHistories,
  onClick,
}) => {
  return (
    <>
      {academicHistories?.map(
        (academicHistory: AcademicHistoryType, index: number) => (
          <div className={styles.root} key={index}>
            <div className={styles.academicHistoryWrapper}>
              <div className={styles.leftWrapper}>
                <p>
                  {academicHistory.sinceDate} - {academicHistory.untilDate}
                </p>
              </div>
              <div className={styles.rightWrapper}>
                <div className={styles.academicNameWrapper}>
                  <div className={styles.leftPartWrapper}>
                    <h3>{academicHistory.name}</h3>
                    <p className={styles.facultyName}>
                      {academicHistory.faculty}
                    </p>
                  </div>
                  <div className={styles.buttonWrapper}>
                    <Button onClick={onClick} text={"編集する"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default AcademicHistoryTable;
