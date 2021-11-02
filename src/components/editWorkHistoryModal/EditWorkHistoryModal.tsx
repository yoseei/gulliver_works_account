import React from "react";
import styles from "./EditWorkHistoryModal.module.scss";
import Button from "../button/Button";
import DeleteButton from "../deleteButton/DeleteButton";
import { ErrorMessage } from "@hookform/error-message";
import { HttpClient } from "../../utilities/axiosInstance";
import Input from "../input/Input";
import { localHostURL } from "../../hooks/localHostURL";
import Modal from "@material-ui/core/Modal";
import { notification } from "antd";
import Textarea from "../textarea/Textarea";
import { useForm } from "react-hook-form";
import { WorkHistoryType } from "../../data/workHistory/index";

type PropsType = {
  openWorkHistoryModal: boolean;
  handleCloseEditWorkHistoryModal:
    | React.MouseEventHandler<HTMLParagraphElement>
    | undefined;
  workHistory: WorkHistoryType;
  accountId: number | undefined;
};

const EditWorkHistoryModal = ({
  handleCloseEditWorkHistoryModal,
  openWorkHistoryModal,
  accountId,
  workHistory,
}: PropsType) => {
  const { register, handleSubmit, errors } = useForm();

  const handleEditWorkHistory = async (data: WorkHistoryType) => {
    try {
      if (!data) return;

      const res = await HttpClient.request({
        method: "PUT",
        url: `${localHostURL}/work_histories/${workHistory?.id}`,
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

  const handleDeleteWorkHistory = async () => {
    try {
      if (!workHistory) return;
      await HttpClient.request({
        method: "DELETE",
        url: `${localHostURL}/work_histories/${workHistory?.id}`,
      });
      alert("職歴を削除しました。");
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

        <form onSubmit={handleSubmit(handleEditWorkHistory)}>
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
              defaultValue={workHistory.name}
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
              defaultValue={workHistory.occupation}
            />

            <div className={styles.calender}>
              <Input
                name={"sinceDate"}
                ref={register}
                type={"date"}
                title={"日程"}
                defaultValue={workHistory.sinceDate}
              />
              <Input
                name={"untilDate"}
                ref={register}
                type={"date"}
                defaultValue={workHistory.untilDate}
              />
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
              defaultValue={workHistory.jobSummary}
            />
          </div>

          <div className={styles.buttonContainer}>
            <div className={styles.deleteButtonWrapper}>
              <DeleteButton onClick={() => handleDeleteWorkHistory()} />
            </div>
            <div className={styles.rightButtonWrapper}>
              <div className={styles.cancelButtonWrapper}>
                <Button
                  color={"gray"}
                  border={"none"}
                  onClick={handleCloseEditWorkHistoryModal}
                  text={"キャンセル"}
                  type={"button"}
                />
              </div>
              <div className={styles.updateButtonWrapper}>
                <Button
                  border={"none"}
                  color={"primary"}
                  onClick={() => handleCloseEditWorkHistoryModal}
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
      open={openWorkHistoryModal}
      onClose={handleCloseEditWorkHistoryModal}
    >
      {body}
    </Modal>
  );
};

export default EditWorkHistoryModal;
