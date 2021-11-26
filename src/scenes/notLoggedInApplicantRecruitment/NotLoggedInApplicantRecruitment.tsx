import React from "react";
import styles from "./NotLoggedInApplicantRecruitment.module.scss";
import RecruitCard from "../../components/recruitCard/RecruitCard";

const NotLoggedInApplicantRecruitment = () => {
  return (
    <div className={styles.root}>
      <RecruitCard />
    </div>
  );
};

export default NotLoggedInApplicantRecruitment;
