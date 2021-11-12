import React from "react";
import styles from "./EditAcademicHistoryModal.module.scss";
import { AcademicHistoryType } from "../../data/academicHistory/index";
import Button from "../button/Button";
import DeleteButton from "../../components/deleteButton/DeleteButton";
import { ErrorMessage } from "@hookform/error-message";
import Input from "../input/Input";
import { Modal, notification } from "antd";
import { useForm } from "react-hook-form";

type PropsType = {
  academicHistory?: AcademicHistoryType;
  accountId: number | undefined;
  deleteAcademicHistory: (
    academicHistory: AcademicHistoryType
  ) => Promise<void>;
  editAcademicHistory: (
    editedAcademicHistory: AcademicHistoryType,
    academicHistory: AcademicHistoryType
  ) => Promise<void>;
  handleCloseEditAcademicHistoryModal: () => void;
  openEditAcademicHistoryModal: boolean;
};

const EditAcademicHistoryModal = ({
  academicHistory,
  deleteAcademicHistory,
  editAcademicHistory,
  handleCloseEditAcademicHistoryModal,
  openEditAcademicHistoryModal,
}: PropsType) => {
  const { errors, handleSubmit, register } = useForm();

  const handleEditAcademicHistory = async (data: AcademicHistoryType) => {
    try {
      if (!data) return;
      if (!academicHistory) return;
      await editAcademicHistory(data, academicHistory);
      alert("学歴を編集しました。");
      handleCloseEditAcademicHistoryModal();
    } catch (err) {
      notification.error({
        message: "エラーが発生しました。",
      });
    }
  };

  const handleDeleteAcademicHistory = async () => {
    try {
      if (!academicHistory) return;
      await deleteAcademicHistory(academicHistory);
      alert("学歴を削除しました。");
      handleCloseEditAcademicHistoryModal();
    } catch (err) {
      notification.error({
        message: "エラーが発生しました。",
      });
    }
  };

  const body = (
    <div className={styles.root}>
      <div className={styles.academicHistoryContainer}>
        <h2>学歴</h2>

        <form onSubmit={handleSubmit(handleEditAcademicHistory)}>
          <div className={styles.formContainer}>
            <ErrorMessage
              as="p"
              className={styles.errorMessage}
              errors={errors}
              name="name"
            />
            <Input
              defaultValue={academicHistory?.name}
              name={"name"}
              ref={register({
                required: "※学校名を入力してください。",
              })}
              type={"text"}
              title={"学校名"}
            />

            <ErrorMessage
              as="p"
              className={styles.errorMessage}
              errors={errors}
              name="faculty"
            />
            <Input
              defaultValue={academicHistory?.faculty}
              name={"faculty"}
              ref={register({
                required: "※学部/学科を入力してください。",
              })}
              type={"text"}
              title={"学部/学科"}
            />

            <div className={styles.calender}>
              <Input
                defaultValue={academicHistory?.sinceDate}
                name={"sinceDate"}
                ref={register}
                type={"date"}
                title={"日程"}
              />
              <Input
                defaultValue={academicHistory?.untilDate}
                name={"untilDate"}
                ref={register}
                type={"date"}
              />
            </div>
          </div>

          <div className={styles.buttonContainer}>
            <div className={styles.deleteButtonWrapper}>
              <DeleteButton onClick={() => handleDeleteAcademicHistory()} />
            </div>
            <div className={styles.rightButtonWrapper}>
              <div className={styles.cancelButtonWrapper}>
                <Button
                  border={"none"}
                  color={"gray"}
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
      closable={false}
      footer={null}
      onCancel={handleCloseEditAcademicHistoryModal}
      visible={openEditAcademicHistoryModal}
      width={600}
    >
      {body}
    </Modal>
  );
};

export default EditAcademicHistoryModal;
