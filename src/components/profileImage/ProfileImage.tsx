import React from "react";
import styles from "./ProfileImage.module.scss";
const ProfileImage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.coverPhotoWrapper}>
        <div className={styles.topWrapper}>
          <div className={styles.whiteBlock}></div>
          <div className={styles.blackBlock}></div>
          <div className={styles.whiteBlock}></div>
          <div className={styles.blackBlock}></div>
        </div>
        <div className={styles.bottomWrapper}>
          <div className={styles.blackBlock}></div>
          <div className={styles.whiteBlock}></div>
          <div className={styles.blackBlock}></div>
          <div className={styles.whiteBlock}></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
