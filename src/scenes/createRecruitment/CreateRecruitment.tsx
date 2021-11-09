import React from "react";
import styles from "./CreateRecruitment.module.scss";
import RecruitmentForm from "../../components/recruitmentForm/RecruitmentForm";

const CreateRecruitment = (handleFunction: any) => {
  return (
    <div className={styles.root}>
      test
      <RecruitmentForm title={"新規募集作成"} handleFunction={handleFunction} />
    </div>
  );
};

export default CreateRecruitment;
