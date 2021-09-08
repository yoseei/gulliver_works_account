import React from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

const RecruitmentIndexPage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.text}>
        全ての募集
        <Link to="/sign_in">ログイン</Link>
      </div>
      <div className={styles.recruitment_profile_container}>
        <p className={styles.recruitment_link}>募集一覧</p>

        <p className={styles.profile_link}>
          <Link to="/profile">マイページ</Link>
        </p>
      </div>
    </div>
  );
};

export default RecruitmentIndexPage;
