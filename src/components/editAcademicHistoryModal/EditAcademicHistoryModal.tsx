import React from "react";
import styles from "./EditAcademicHistoryModal.module.scss";
import { AcademicHistoryType } from "../../data/academicHistory/index";
import Button from "../button/Button";
import { ErrorMessage } from "@hookform/error-message";
import DeleteButton from "../../components/deleteButton/DeleteButton";
import { HttpClient } from "../../utilities/axiosInstance";
import Input from "../input/Input";
import Modal from "@material-ui/core/Modal";
import { useForm } from "react-hook-form";

type PropsType = {
  openEditAcademicHistoryModal: boolean;
  handleCloseEditAcademicHistoryModal:
    | React.MouseEventHandler<HTMLParagraphElement>
    | undefined;
  academicHistories?: AcademicHistoryType[];
  accountId: number;
};

const EditAcademicHistoryModal = ({
  handleCloseEditAcademicHistoryModal,
  openEditAcademicHistoryModal,
}: PropsType) => {
  const { register, handleSubmit, errors } = useForm();

  const handleAcademicHistory = async (data: AcademicHistoryType) => {
    try {
      if (!data) return;

      const res = await HttpClient.request({
        method: "POST",
        url: `http://localhost:3000/academic_histories`,
        data: {
          ...data,
        },
      });
      alert("プロフィールを編集しました。");
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteAcademicHistory = async () => {
    try {
      await HttpClient.request({
        method: "DELETE",
        url: `http://localhost:3000/academic_histories`,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const body = (
    <div className={styles.root}>
      <div className={styles.academicHistoryContainer}>
        <h2>学歴</h2>

        <form onSubmit={handleSubmit(handleAcademicHistory)}>
          <div className={styles.formContainer}>
            <ErrorMessage
              className={styles.errorMessage}
              errors={errors}
              name="name"
              as="p"
            />
            <Input
              name={"name"}
              ref={register({
                required: "※学校名を入力してください。",
              })}
              type={"text"}
              title={"学校名"}
            />

            <ErrorMessage
              className={styles.errorMessage}
              errors={errors}
              name="faculty"
              as="p"
            />
            <Input
              name={"faculty"}
              ref={register({
                required: "※学部/学科を入力してください。",
              })}
              type={"text"}
              title={"学部/学科"}
            />

            <div className={styles.calender}>
              <Input
                name={"sinceDate"}
                ref={register}
                type={"date"}
                title={"日程"}
              />
              <Input name={"untilDate"} ref={register} type={"date"} />
            </div>
          </div>

          <div className={styles.buttonContainer}>
            <div className={styles.deleteButtonWrapper}>
              <DeleteButton onClick={() => handleDeleteAcademicHistory()} />
            </div>
            <div className={styles.rightButtonWrapper}>
              <div className={styles.cancelButtonWrapper}>
                <Button
                  color={"gray"}
                  border={"none"}
                  onClick={handleCloseEditAcademicHistoryModal}
                  text={"キャンセル"}
                  type={"button"}
                />
              </div>
              <div className={styles.updateButtonWrapper}>
                <Button
                  border={"none"}
                  color={"primary"}
                  onClick={() => handleCloseEditAcademicHistoryModal}
                  text={"更新"}
                  type={"submit"}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <Modal
      open={openEditAcademicHistoryModal}
      onClose={handleCloseEditAcademicHistoryModal}
    >
      {body}
    </Modal>
  );
};

export default EditAcademicHistoryModal;
