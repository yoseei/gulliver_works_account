import React from "react";
import styles from "./NotLoggedInApplicantRecruitment.module.scss";
import RecruitCard from "../../components/recruitCard/RecruitCard";

const NotLoggedInApplicantRecruitment = () => {
  return (
    <div className={styles.root}>
      <RecruitCard title={"すべての募集"} />
    </div>
  );
};

export default NotLoggedInApplicantRecruitment;
