import React from "react";
import styles from "./AcademicHistoryTable.module.scss";
import Button from "../button/Button";
import { AcademicHistoryType } from "../../data/academicHistory/index";

interface OnClickType {
  onClick: React.MouseEventHandler<HTMLParagraphElement> | undefined;
}

type AcademicHistoryTableType = AcademicHistoryType & OnClickType;
const AcademicHistoryTable: React.FC<AcademicHistoryTableType> = ({
  sinceDate,
  untilDate,
  name,
  faculty,
  onClick,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.academicHistoryWrapper}>
        <div className={styles.leftWrapper}>
          <p>
            {sinceDate} - {untilDate}
          </p>
        </div>
        <div className={styles.rightWrapper}>
          <div className={styles.academicNameWrapper}>
            <div className={styles.leftPartWrapper}>
              <h3>{name}</h3>
              <p className={styles.facultyName}>{faculty}</p>
            </div>
            <div className={styles.buttonWrapper}>
              <Button onClick={onClick} text={"編集する"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicHistoryTable;
