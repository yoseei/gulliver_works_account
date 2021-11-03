import React, { useState } from "react";
import styles from "./AcademicHistoryModal.module.scss";
import { AcademicHistoryType } from "../../data/academicHistory/index";
import Button from "../button/Button";
import { ErrorMessage } from "@hookform/error-message";
import { HttpClient } from "../../utilities/axiosInstance";
import Input from "../input/Input";
import Modal from "@material-ui/core/Modal";
import { notification } from "antd";
import { useForm } from "react-hook-form";
import { localHostURL } from "../../hooks/localHostURL";

type PropsType = {
  openAcademicHistoryModal: boolean;
  handleCloseAcademicHistoryModal:
    | React.MouseEventHandler<HTMLParagraphElement>
    | undefined;
  academicHistories?: AcademicHistoryType[];
  accountId: number;
};

const AcademicHistoryModal = ({
  handleCloseAcademicHistoryModal,
  openAcademicHistoryModal,
  accountId,
}: PropsType) => {
  const { register, handleSubmit, errors, reset } = useForm();

  const handleAcademicHistory = async (data: AcademicHistoryType) => {
    try {
      if (!data) return;

      const res = await HttpClient.request({
        method: "POST",
        url: `${localHostURL}/academic_histories`,
        data: {
          ...data,
          accountId: accountId,
        },
      });
      reset();
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
      open={openAcademicHistoryModal}
      onClose={handleCloseAcademicHistoryModal}
    >
      {body}
    </Modal>
  );
};

export default AcademicHistoryModal;
