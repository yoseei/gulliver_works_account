import React from "react";
import { ScriptSnapshot } from "typescript";
import styles from "./Profile.module.scss";
const Profile = () => {
  return (
    <div className={styles.root}>
      <div className={styles.profile_container}>
        <div className={styles.coverPhoto_wrapper}>
          <div className={styles.edit_profile_wrapper}>
            <p>プロフィールを編集</p>
          </div>
        </div>
        <div className={styles.basicInfo_container}>
          <div className={styles.left_wrapper}>
            <div className={styles.profilePhoto_wrapper}>
              <img src="" alt="写真" />
            </div>
          </div>
          <div className={styles.right_wrapper}>
            <div className={styles.nameAge_wrapper}>
              <h2>甲斐義隆(34)</h2>
            </div>
            <div className={styles.address_wrapper}>
              <div className={styles.left_wrapper}>
                <p>住まい</p>
              </div>
              <p>千葉県我孫子市</p>
            </div>
            <div className={styles.educationalBackground_wrapper}>
              <p className={styles.left_wrapper}>最終学歴</p>
              <p>雄城台高等学校</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
