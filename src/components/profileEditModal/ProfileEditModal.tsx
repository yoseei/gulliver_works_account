import React from "react";
import styles from "./ProfileEditModal.module.scss";

const ProfileEditModal = () => {
  return (
    <div className={styles.root}>
      <h1>自己紹介</h1>
      <textarea name="" id="" cols={30} rows={10}></textarea>
    </div>
  );
};

export default ProfileEditModal;
