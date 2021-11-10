import React from "react";
import styles from "./CreateRecruitment.module.scss";
import RecruitmentForm from "../../components/recruitmentForm/RecruitmentForm";

// #FIXME: とりあえず関数を入力している
const CreateRecruitment = (handleFunction: any) => {
  return (
    <div className={styles.root}>
      <RecruitmentForm title={"新規募集作成"} handleFunction={handleFunction} />
    </div>
  );
};

export default CreateRecruitment;
