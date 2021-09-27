import React, { useState, useEffect } from "react";
import Button from "../button/Button";
import Modal from "@material-ui/core/Modal";
import styles from "./ProfileModal.module.scss";
import { HttpClient } from "../../utilities/axiosInstance";
import { ProfileType } from "../../data/profile/index";

type PropsType = {
  open: boolean;
  handleClose: React.MouseEventHandler<HTMLParagraphElement> | undefined;
};
const ProfileModal = ({ open, handleClose }: PropsType) => {
  const [profile, setProfile] = useState<ProfileType>();

  useEffect(() => {
    const fetchAccounts = async () => {
      const res = await HttpClient.request({
        method: "GET",
        url: "http://localhost:3000/accounts/1",
      });

      const profileData = res.data.profile;

      setProfile(profileData);
    };
    fetchAccounts();
  }, []);
  const body = (
    <div className={styles.root}>
      <div className={styles.profileContainer}>
        <h2>プロフィール</h2>
        <div className={styles.coverPhotoWrapper}>
          <div className={styles.coverPhoto}></div>
          <div className={styles.profilePhotoWrapper}>
            <div className={styles.profilePhoto}></div>
          </div>
        </div>
        <div className={styles.nameWrapper}>
          <p>名前</p>
          <input
            type="text"
            defaultValue={profile ? profile.lastName + profile.firstName : ""}
          />
        </div>
        <div className={styles.addressWrapper}>
          <p>住まい</p>
          <input type="text" defaultValue={profile ? profile.address : ""} />
        </div>
        <div className={styles.genderWrapper}>
          <p>性別</p>
          <input type="text" defaultValue={profile ? profile.gender : ""} />
        </div>
        <div className={styles.birthWrapper}>
          <p>生年月日</p>
          <input
            type="date"
            defaultValue={profile ? profile.dateOfBirth : ""}
          />
        </div>
        <div className={styles.buttonWrapper}>
          <div className={styles.cancelButtonWrapper}>
            <Button
              color={"gray"}
              border={"none"}
              onClick={handleClose}
              text={"キャンセル"}
            />
          </div>
          <div className={styles.updateButtonWrapper}>
            <Button
              border={"none"}
              color={"primary"}
              onClick={() => console.log("更新クリック！")}
              text={"更新"}
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal open={open} onClose={handleClose}>
      {body}
    </Modal>
  );
};

export default ProfileModal;
