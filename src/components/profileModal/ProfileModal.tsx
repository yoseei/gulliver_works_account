import React from "react";
import styles from "./ProfileModal.module.scss";
import Button from "../button/Button";
import { HttpClient } from "../../utilities/axiosInstance";
import Modal from "@material-ui/core/Modal";
import { notification } from "antd";
import { ProfileType } from "../../data/profile/index";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { localHostURL } from "../../hooks/localHostURL";

type PropsType = {
  openProfileModal: boolean;
  handleCloseProfileModal:
    | React.MouseEventHandler<HTMLParagraphElement>
    | undefined;
  accountId: number;
  profile: ProfileType;
};
type Inputs = {
  profileName: string;
  profileGender: string;
  profileAddress: string;
  profileDateOfBirth: string;
};

const ProfileModal = ({
  openProfileModal,
  handleCloseProfileModal,
  accountId,
  profile,
}: PropsType) => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

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
                onClick={handleCloseProfileModal}
                text={"キャンセル"}
                type={"button"}
              />
            </div>
            <div className={styles.updateButtonWrapper}>
              <Button
                border={"none"}
                color={"primary"}
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
    <Modal open={openProfileModal} onClose={handleCloseProfileModal}>
      {body}
    </Modal>
  );
};

export default ProfileModal;
