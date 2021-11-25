import React from "react";
import styles from "./NotLoggedInApplicantRecruitment.module.scss";

const NotLoggedInApplicantRecruitment = () => {
  return (
    <div className={styles.root}>
      <h1>すべての募集</h1>
      <div className={styles.recruitmentsContainer}>
        <div className={styles.recruitmentContainer}>
          <div className={styles.coverImageWrapper}>
            <img src="./Rectangle77.png" alt="cover画像" />
          </div>

          <div className={styles.titleWrapper}>
            <h3>
              募集タイトル募集タイトル募集タイトル募集タイトル募集タイトル募集タイトル募集タイトル募集タイトル募集タイトル募集タイトル募集タイトル募集タイトル募集タイトル
            </h3>
          </div>
          <div className={styles.companyNameWrapper}>
            <div className={styles.imageWrapper}>
              <img src="./Ellipse2.png" alt="image画像" />
            </div>
            <p>会社名</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotLoggedInApplicantRecruitment;
