import React, { useState, useEffect } from "react";
import Button from "../button/Button";
import Modal from "@material-ui/core/Modal";
import styles from "./ProfileModal.module.scss";
import { HttpClient } from "../../utilities/axiosInstance";
import { ProfileType } from "../../data/profile/index";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

type PropsType = {
  open: boolean;
  handleClose: React.MouseEventHandler<HTMLParagraphElement> | undefined;
};
const ProfileModal = ({ open, handleClose }: PropsType) => {
  // const { register, handleSubmit, reset } = useForm<SignInParams>();
  const { register, handleSubmit, reset } = useForm();
  const history = useHistory();

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
  console.log(profile);

  const handleEditProfile = async (data: any) => {
    try {
      const res = await HttpClient.request<any>({
        method: "PUT",
        url: "http://localhost:3000/accounts/1",
        data,
      });
      reset();
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };
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
        <form onSubmit={handleSubmit(handleEditProfile)}>
          <div className={styles.nameWrapper}>
            <p>名前</p>
            <input
              type="text"
              defaultValue={profile ? profile.lastName + profile.firstName : ""}
              {...(register("name"), { required: true })}
            />
          </div>
          <div className={styles.addressWrapper}>
            <p>住まい</p>
            <input
              type="text"
              {...(register("address"), { required: true })}
              defaultValue={profile ? profile.address : ""}
            />
          </div>
          <div className={styles.genderWrapper}>
            <p>性別</p>
            <input
              type="text"
              {...(register("gender"), { required: true })}
              defaultValue={profile ? profile.gender : ""}
            />
          </div>
          <div className={styles.birthWrapper}>
            <p>生年月日</p>
            <input
              type="date"
              {...(register("dateOfBirth"), { required: true })}
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
                onClick={() => alert("更新しました")}
                text={"更新"}
              />
            </div>
          </div>
        </form>
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
