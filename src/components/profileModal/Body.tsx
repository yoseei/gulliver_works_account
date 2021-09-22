import React from "react";
import styles from "./Body.module.scss";
import Button from "../button/Button";
import ProfileImage from "../../components/profileImage/ProfileImage";
import ProfileMainImage from "../../components/profileMainImage/ProfileMainImage";
const Body = () => {
  return (
    <div className={styles.root}>
      <div className={styles.profileContainer}>
        <h2>プロフィール</h2>
        <div className={styles.coverPhotoWrapper}>
          <div className={styles.coverPhoto}></div>
        </div>
        <div className={styles.profilePhotoWrapper}>
          <div className={styles.profilePhoto}></div>
        </div>
        <div className={styles.nameWrapper}>
          <p>名前</p>
          <input type="text" />
        </div>
        <div className={styles.addressWrapper}>
          <p>住まい</p>
          <input type="text" />
        </div>
        <div className={styles.genderWrapper}>
          <p>性別</p>
          <input type="text" />
        </div>
        <div className={styles.birthWrapper}>
          <p>生年月日</p>
          <input type="date" />
        </div>
        <div className={styles.buttonWrapper}>
          <Button
            onClick={() => console.log("キャンセルクリック！")}
            text={"キャンセル"}
          />
          <Button onClick={() => console.log("更新クリック！")} text={"更新"} />
        </div>
      </div>
    </div>
  );
};

export default Body;
