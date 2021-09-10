import React from "react";
import styles from "./ProfileMainImage.module.scss";

const ProfileMainImage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.mainPhotoWrapper}>
        <div className={styles.firstLineWrapper}>
          <div className={styles.whiteBlock}></div>
          <div className={styles.blackBlock}></div>
          <div className={styles.whiteBlock}></div>
          <div className={styles.blackBlock}></div>
        </div>
        <div className={styles.secondLineWrapper}>
          <div className={styles.blackBlock}></div>
          <div className={styles.whiteBlock}></div>
          <div className={styles.blackBlock}></div>
          <div className={styles.whiteBlock}></div>
        </div>
        <div className={styles.thirdLineWrapper}>
          <div className={styles.whiteBlock}></div>
          <div className={styles.blackBlock}></div>
          <div className={styles.whiteBlock}></div>
          <div className={styles.blackBlock}></div>
        </div>
        <div className={styles.fourthLineWrapper}>
          <div className={styles.blackBlock}></div>
          <div className={styles.whiteBlock}></div>
          <div className={styles.blackBlock}></div>
          <div className={styles.whiteBlock}></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMainImage;
