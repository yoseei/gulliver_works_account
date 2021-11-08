import React from "react";
import styles from "./EditBiographyModal.module.scss";
import Button from "../button/Button";
import Modal from "@material-ui/core/Modal";
import { notification } from "antd";
import { ProfileType } from "../../data/profile/index";
import { useForm } from "react-hook-form";

type PropsType = {
  editBiography: (data: Inputs) => Promise<void>;
  handleCloseEditBiographyModal: () => void;
  openEditBiographyModal: boolean;
  profile: ProfileType | undefined;
};
export type Inputs = {
  biography: string;
};

const EditBiographyModal = ({
  editBiography,
  handleCloseEditBiographyModal,
  openEditBiographyModal,
  profile,
}: PropsType) => {
  const { register, handleSubmit } = useForm();

  const handleEditBiography = async (data: Inputs) => {
    try {
      await editBiography(data);
      alert("自己紹介文を編集しました！");
      handleCloseEditBiographyModal();
    } catch (err) {
      notification.error({
        message: "エラーが発生しました。",
      });
    }
  };

  const body = (
    <div className={styles.root}>
      <div className={styles.biographyContainer}>
        <h2>自己紹介</h2>

        <form onSubmit={handleSubmit(handleEditBiography)}>
          <div className={styles.biographyWrapper}>
            <textarea
              defaultValue={profile ? profile.biography : ""}
              name="biography"
              ref={register}
            />
          </div>

          <div className={styles.buttonWrapper}>
            <div className={styles.cancelButtonWrapper}>
              <Button
                color={"gray"}
                border={"none"}
                onClick={handleCloseEditBiographyModal}
                text={"キャンセル"}
                type={"button"}
              />
            </div>
            <div className={styles.updateButtonWrapper}>
              <Button
                border={"none"}
                color={"primary"}
                onClick={() => ""}
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
      open={openEditBiographyModal}
      onClose={handleCloseEditBiographyModal}
    >
      {body}
    </Modal>
  );
};

export default EditBiographyModal;
