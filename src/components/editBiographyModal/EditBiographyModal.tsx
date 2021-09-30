import React from "react";
import Button from "../button/Button";
import Modal from "@material-ui/core/Modal";
import styles from "./EditBiographyModal.module.scss";
import { HttpClient } from "../../utilities/axiosInstance";
import { ProfileType } from "../../data/profile/index";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

type PropsType = {
  openEditBiographyModal: boolean;
  handleCloseEditBiographyModal:
    | React.MouseEventHandler<HTMLParagraphElement>
    | undefined;
  profile: ProfileType | undefined;
  accountId: number;
};
type Inputs = {
  profileBiography: string;
};

const EditBiographyModal = ({
  openEditBiographyModal,
  handleCloseEditBiographyModal,
  profile,
  accountId,
}: PropsType) => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const handleEditBiography = async (data: Inputs) => {
    try {
      const res = await HttpClient.request({
        method: "PUT",
        url: `http://localhost:3000/profiles/${profile ? profile.id : ""}`,
        data: {
          id: profile ? profile.id : "",
          name: profile ? profile.name : "",
          nameKana: profile ? profile.nameKana : "",
          gender: profile ? profile.gender : "",
          phone: profile ? profile.phone : "",
          postalCode: profile ? profile.postalCode : "",
          address: profile ? profile.address : "",
          dateOfBirth: profile ? profile.dateOfBirth : "",
          biography: data.profileBiography,
          accountId: accountId,
        },
      });

      alert("プロフィールを編集しました。");
      history.push("/");
    } catch (err) {
      console.log(err);
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
              name="profileBiography"
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
                onClick={() => handleCloseEditBiographyModal}
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
