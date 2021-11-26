import React, { useEffect } from "react";
import styles from "./ApplicantRecruitment.module.scss";
import { useHistory } from "react-router";
import RecruitCard from "../../components/recruitCard/RecruitCard";
import RecruitCardSwiper from "../../components/recruitCardSwiper/RecruitCardSwiper";

const ApplicantRecruitment = () => {
  const history = useHistory();
  const token = localStorage.getItem("GULLIVER_WORKS_AUTH_TOKEN");

  useEffect(() => {
    if (!token) history.push("/signin");
  }, [token]);

  return (
    <div className={styles.root}>
      <RecruitCardSwiper />
      <RecruitCard />
    </div>
  );
};

export default ApplicantRecruitment;
