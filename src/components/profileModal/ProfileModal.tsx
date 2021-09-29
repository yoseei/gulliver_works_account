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
type Inputs = {
  profileName: string;
  profileGender: string;
  profileAddress: string;
  profileDateOfBirth: string;
};

const ProfileModal = ({ open, handleClose }: PropsType) => {
  const { register, handleSubmit, reset } = useForm();

  const [profile, setProfile] = useState<ProfileType>();
  const history = useHistory();
  useEffect(() => {
    const fetchProfile = async () => {
      const res = await HttpClient.request({
        method: "GET",
        url: "http://localhost:3000/profiles/1",
      });

      const profileData = res.data;

      setProfile(profileData);
    };
    fetchProfile();
  }, []);

  const handleEditProfile = async (data: Inputs) => {
    try {
      const res = await HttpClient.request({
        method: "PUT",
        url: "http://localhost:3000/profiles/1",
        data: {
          id: profile ? profile.id : "",
          name: data.profileName,
          nameKana: profile ? profile.nameKana : "",
          gender: data.profileGender,
          phone: profile ? profile.phone : "",
          postalCode: profile ? profile.postalCode : "",
          address: data.profileAddress,
          dateOfBirth: data.profileDateOfBirth,
          biography: profile ? profile.biography : "",
        },
      });
      console.log(res);
      alert("プロフィールを編集しました。");
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
              defaultValue={profile ? profile.name : ""}
              name="profileName"
              ref={register}
            />
          </div>
          <div className={styles.addressWrapper}>
            <p>住まい</p>
            <input
              type="text"
              name="profileAddress"
              ref={register}
              defaultValue={profile ? profile.address : ""}
            />
          </div>
          <div className={styles.genderWrapper}>
            <p>性別</p>
            <input
              type="text"
              name="profileGender"
              ref={register}
              defaultValue={profile ? profile.gender : ""}
            />
          </div>
          <div className={styles.birthWrapper}>
            <p>生年月日</p>
            <input
              type="date"
              name="profileDateOfBirth"
              ref={register}
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
                type={"button"}
              />
            </div>
            <div className={styles.updateButtonWrapper}>
              <Button
                border={"none"}
                color={"primary"}
                onClick={() => handleClose}
                text={"更新"}
                type={"submit"}
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
