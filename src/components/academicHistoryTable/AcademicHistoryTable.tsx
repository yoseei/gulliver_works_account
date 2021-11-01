import React, { useState } from "react";
import styles from "./AcademicHistoryTable.module.scss";
import Button from "../button/Button";
import { AcademicHistoryType } from "../../data/academicHistory/index";
import EditAcademicHistoryModal from "../editAcademicHistoryModal/EditAcademicHistoryModal";

type AcademicHistoryTableType = {
  academicHistories: AcademicHistoryType[];
};
const AcademicHistoryTable: React.FC<AcademicHistoryTableType> = ({
  academicHistories,
}) => {
  const [openEditAcademicHistoryModal, setOpenEditAcademicHistoryModal] =
    useState(false);

  const [selectedHistory, selectHistory] = useState<AcademicHistoryType>();

  const onEditHistory = (selectedItem: AcademicHistoryType) => {
    selectHistory(selectedItem);
    setOpenEditAcademicHistoryModal(true);
  };
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
                    <Button
                      onClick={() => onEditHistory(academicHistory)}
                      text={"編集する"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
      {openEditAcademicHistoryModal && (
        <div className={styles.academicHistoryModalContainer}>
          <EditAcademicHistoryModal
            openEditAcademicHistoryModal={openEditAcademicHistoryModal}
            handleCloseEditAcademicHistoryModal={() =>
              setOpenEditAcademicHistoryModal(false)
            }
            academicHistoryData={selectedHistory}
          />
        </div>
      )}
    </>
  );
};

export default AcademicHistoryTable;
