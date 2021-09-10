import React from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import SideBar from "../../../components/sideBar/SideBar";
const RecruitmentIndexPage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.text}>
        <h1>すべての募集</h1>
      </div>
      <SideBar textA={"募集一覧"} textB={"マイページ"} />
      <Link to="/signin">ログイン</Link>
    </div>
  );
};

export default RecruitmentIndexPage;
