import React, { useEffect } from "react";
import styles from "./ApplicantRecruitment.module.scss";
import { useHistory } from "react-router";
import RecruitCard from "../../components/recruitCard/RecruitCard";

const ApplicantRecruitment = () => {
  const history = useHistory();
  const token = localStorage.getItem("GULLIVER_WORKS_AUTH_TOKEN");

  useEffect(() => {
    if (!token) history.push("/signin");
  }, [token]);

  return (
    <div className={styles.root}>
      <RecruitCard title={"おすすめの募集"} />
      <RecruitCard title={"すべての募集"} />
    </div>
  );
};

export default ApplicantRecruitment;
