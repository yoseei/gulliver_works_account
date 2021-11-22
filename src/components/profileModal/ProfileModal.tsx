import React from "react";
import styles from "./ProfileModal.module.scss";
import Button from "../button/Button";
import { HttpClient } from "../../utilities/axiosInstance";
import { localHostURL } from "../../hooks/localHostURL";
import { Modal, notification } from "antd";
import { ProfileType } from "../../data/profile/index";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

type PropsType = {
  accountId: string;
  handleCloseProfileModal: () => void;
  openProfileModal: boolean;
  profile: ProfileType;
};
type Inputs = {
  profileName: string;
  profileGender: string;
  profileAddress: string;
  profileDateOfBirth: string;
};

const ProfileModal = ({
  accountId,
  handleCloseProfileModal,
  openProfileModal,
  profile,
}: PropsType) => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const handleEditProfile = async (data: Inputs) => {
    try {
      const res = await HttpClient.request({
        method: "PUT",
        url: `${localHostURL}/profiles/1`,
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
          accountId: accountId,
        },
      });
      alert("プロフィールを編集しました。");
      history.push("/");
    } catch (err) {
      notification.error({
        message: "エラーが発生しました。",
      });
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
              defaultValue={profile ? profile.name : ""}
              name="profileName"
              ref={register}
              type="text"
            />
          </div>
          <div className={styles.addressWrapper}>
            <p>住まい</p>
            <input
              defaultValue={profile ? profile.address : ""}
              name="profileAddress"
              ref={register}
              type="text"
            />
          </div>
          <div className={styles.genderWrapper}>
            <p>性別</p>
            <input
              defaultValue={profile ? profile.gender : ""}
              name="profileGender"
              ref={register}
              type="text"
            />
          </div>
          <div className={styles.birthWrapper}>
            <p>生年月日</p>
            <input
              defaultValue={profile ? profile.dateOfBirth : ""}
              name="profileDateOfBirth"
              ref={register}
              type="date"
            />
          </div>
          <div className={styles.buttonWrapper}>
            <div className={styles.cancelButtonWrapper}>
              <Button
                color={"gray"}
                border={"none"}
                onClick={handleCloseProfileModal}
                text={"キャンセル"}
                type={"button"}
              />
            </div>
            <div className={styles.updateButtonWrapper}>
              <Button
                color={"primary"}
                border={"none"}
                onClick={() => handleCloseProfileModal}
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
    <Modal
      closable={false}
      footer={null}
      onCancel={handleCloseProfileModal}
      visible={openProfileModal}
      width={600}
    >
      {body}
    </Modal>
  );
};

export default ProfileModal;
