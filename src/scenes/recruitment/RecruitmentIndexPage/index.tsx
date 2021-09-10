import React from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

const RecruitmentIndexPage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.text}>
        全ての募集
        <Link to="/signin">ログイン</Link>
      </div>
      <div className={styles.recruitmentProfileContainer}>
        <p className={styles.recruitmentLink}>募集一覧</p>

        <p className={styles.profileLink}>
          <Link to="/profile">マイページ</Link>
        </p>
      </div>
    </div>
  );
};

export default RecruitmentIndexPage;
