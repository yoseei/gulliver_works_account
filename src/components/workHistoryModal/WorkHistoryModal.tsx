import React from "react";
import styles from "./WorkHistoryModal.module.scss";
import { WorkHistoryType } from "../../data/workHistory/index";
import Button from "../button/Button";
import { ErrorMessage } from "@hookform/error-message";
import { HttpClient } from "../../utilities/axiosInstance";
import Input from "../input/Input";
import Modal from "@material-ui/core/Modal";
import { notification } from "antd";
import { useForm } from "react-hook-form";
import { localHostURL } from "../../hooks/localHostURL";
import Textarea from "../../components/textarea/Textarea";

type PropsType = {
  openWorkHistoryModal: boolean;
  handleCloseWorkHistoryModal:
    | React.MouseEventHandler<HTMLParagraphElement>
    | undefined;
  workHistories?: WorkHistoryType[];
  accountId: number;
};

const WorkHistoryModal = ({
  handleCloseWorkHistoryModal,
  openWorkHistoryModal,
  accountId,
}: PropsType) => {
  const { register, handleSubmit, errors } = useForm();

  const handleAcademicHistory = async (data: WorkHistoryType) => {
    try {
      if (!data) return;

      const res = await HttpClient.request({
        method: "POST",
        url: `${localHostURL}/work_histories`,
        data: {
          ...data,
          accountId: accountId,
        },
      });
      alert("職歴を追加しました。");
    } catch (err) {
      notification.error({
        message: "エラーが発生しました。",
      });
    }
  };

  const body = (
    <div className={styles.root}>
      <div className={styles.academicHistoryContainer}>
        <h2>職歴</h2>

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
                required: "※企業名を入力してください。",
              })}
              type={"text"}
              title={"企業名"}
            />

            <ErrorMessage
              className={styles.errorMessage}
              errors={errors}
              name="occupation"
              as="p"
            />
            <Input
              name={"occupation"}
              ref={register({
                required: "※部署・役職を入力してください。",
              })}
              type={"text"}
              title={"部署・役職"}
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

            <ErrorMessage
              className={styles.errorMessage}
              errors={errors}
              name="jobSummary"
              as="p"
            />
            <Textarea
              name={"jobSummary"}
              rows={2}
              title={"職歴"}
              ref={register({
                required: "※職歴を入力してください。",
              })}
            />
          </div>

          <div className={styles.buttonWrapper}>
            <div className={styles.cancelButtonWrapper}>
              <Button
                color={"gray"}
                border={"none"}
                onClick={handleCloseWorkHistoryModal}
                text={"キャンセル"}
                type={"button"}
              />
            </div>
            <div className={styles.updateButtonWrapper}>
              <Button
                border={"none"}
                color={"primary"}
                onClick={() => handleCloseWorkHistoryModal}
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
    <Modal open={openWorkHistoryModal} onClose={handleCloseWorkHistoryModal}>
      {body}
    </Modal>
  );
};

export default WorkHistoryModal;
