import React, { useEffect } from "react";
import styles from "./style.module.scss";
import SideBar from "../../components/sideBar/SideBar";
import { useHistory } from "react-router";

const ApplicantRecruitment = () => {
  const history = useHistory();
  const token = localStorage.getItem("GULLIVER_WORKS_AUTH_TOKEN");

  useEffect(() => {
    if (!token) history.push("/signin");
  }, [token]);

  return (
    <div className={styles.root}>
      <div className={styles.text}>
        <h1>すべての募集</h1>
      </div>
      <SideBar textA={"募集一覧"} textB={"マイページ"} textC={"サインアウト"} />
    </div>
  );
};

export default ApplicantRecruitment;
