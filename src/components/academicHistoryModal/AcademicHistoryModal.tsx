import React from "react";
import styles from "./AcademicHistoryModal.module.scss";
import { AcademicHistoryType } from "../../data/academicHistory/index";
import Button from "../button/Button";
import { ErrorMessage } from "@hookform/error-message";
import Input from "../input/Input";
import { Modal, notification } from "antd";
import { useForm } from "react-hook-form";

type PropsType = {
  addAcademicHistory: (academicHistory: AcademicHistoryType) => Promise<void>;
  handleCloseAcademicHistoryModal: () => void;
  openAcademicHistoryModal: boolean;
};

const AcademicHistoryModal = ({
  addAcademicHistory,
  handleCloseAcademicHistoryModal,
  openAcademicHistoryModal,
}: PropsType) => {
  const { register, handleSubmit, errors } = useForm();

  const onAcademicHistorySubmit = async (data: AcademicHistoryType) => {
    try {
      if (!data) return;
      addAcademicHistory(data);
      if (data) {
        handleCloseAcademicHistoryModal();
      }
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

        <form onSubmit={handleSubmit(onAcademicHistorySubmit)}>
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

          <div className={styles.buttonWrapper}>
            <div className={styles.cancelButtonWrapper}>
              <Button
                color={"gray"}
                border={"none"}
                onClick={handleCloseAcademicHistoryModal}
                text={"キャンセル"}
                type={"button"}
              />
            </div>
            <div className={styles.updateButtonWrapper}>
              <Button
                border={"none"}
                color={"primary"}
                onClick={() => alert("学歴を追加しました。")}
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
      visible={openAcademicHistoryModal}
      width={600}
      onCancel={handleCloseAcademicHistoryModal}
    >
      {body}
    </Modal>
  );
};

export default AcademicHistoryModal;
