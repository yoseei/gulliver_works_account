import React from "react";
import styles from "./EditAcademicHistoryModal.module.scss";
import "antd/dist/antd.css";
import { AcademicHistoryType } from "../../data/academicHistory/index";
import Button from "../button/Button";
import DeleteButton from "../../components/deleteButton/DeleteButton";
import { ErrorMessage } from "@hookform/error-message";
import { HttpClient } from "../../utilities/axiosInstance";
import Input from "../input/Input";
import Modal from "@material-ui/core/Modal";
import { notification } from "antd";
import { useForm } from "react-hook-form";
import { localHostURL } from "../../hooks/localHostURL";

type PropsType = {
  openEditAcademicHistoryModal: boolean;
  handleCloseEditAcademicHistoryModal:
    | React.MouseEventHandler<HTMLParagraphElement>
    | undefined;
  academicHistoryData?: AcademicHistoryType;
};

const EditAcademicHistoryModal = ({
  handleCloseEditAcademicHistoryModal,
  openEditAcademicHistoryModal,
  academicHistoryData,
}: PropsType) => {
  const { register, handleSubmit, errors } = useForm();

  const handleAcademicHistory = async (data: AcademicHistoryType) => {
    try {
      if (!data) return;

      const res = await HttpClient.request({
        method: "PUT",
        url: `${localHostURL}/academic_histories/${academicHistoryData?.id}`,
        data: {
          ...data,
        },
      });
      alert("学歴を編集しました。");
      location.reload();
    } catch (err) {
      notification.error({
        message: "エラーが発生しました。",
      });
    }
  };

  const handleDeleteAcademicHistory = async () => {
    try {
      if (!academicHistoryData) return;
      await HttpClient.request({
        method: "DELETE",
        url: `${localHostURL}/academic_histories/${academicHistoryData?.id}`,
      });
      alert("学歴を削除しました。");
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
              defaultValue={academicHistoryData?.name}
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
              defaultValue={academicHistoryData?.faculty}
            />

            <div className={styles.calender}>
              <Input
                defaultValue={academicHistoryData?.sinceDate}
                name={"sinceDate"}
                ref={register}
                type={"date"}
                title={"日程"}
              />
              <Input
                defaultValue={academicHistoryData?.untilDate}
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
