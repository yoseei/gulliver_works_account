import React from "react";
import styles from "./EditWorkHistoryModal.module.scss";
import Button from "../button/Button";
import { ErrorMessage } from "@hookform/error-message";
import { Modal } from "antd";
import { notification } from "antd";
import Input from "../input/Input";
import Textarea from "../textarea/Textarea";
import { useForm } from "react-hook-form";
import { WorkHistoriesType } from "../../data/workHistory/index";

type PropsType = {
  accountId: string | undefined;
  deleteWorkHistory: (workHistory: WorkHistoriesType) => Promise<void>;
  editWorkHistory: (
    editedWorkHistory: WorkHistoriesType,
    workHistory: WorkHistoriesType
  ) => Promise<void>;
  handleCloseEditWorkHistoryModal: () => void;
  openWorkHistoryModal: boolean;
  workHistory: WorkHistoriesType;
};

const EditWorkHistoryModal = ({
  deleteWorkHistory,
  editWorkHistory,
  handleCloseEditWorkHistoryModal,
  openWorkHistoryModal,
  workHistory,
}: PropsType) => {
  const { handleSubmit, errors, register } = useForm();

  const handleEditWorkHistory = async (data: WorkHistoriesType) => {
    try {
      if (!data) return;
      await editWorkHistory(data, workHistory);
      alert("職歴を追加しました。");
      handleCloseEditWorkHistoryModal();
    } catch (err) {
      notification.error({
        message: "エラーが発生しました。",
      });
    }
  };

  const handleDeleteWorkHistory = async () => {
    try {
      if (!workHistory) return;
      await deleteWorkHistory(workHistory);
      alert("職歴を削除しました。");
      handleCloseEditWorkHistoryModal();
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
              as="p"
              className={styles.errorMessage}
              errors={errors}
              name="name"
            />
            <Input
              defaultValue={workHistory.name}
              name={"name"}
              ref={register({
                required: "※企業名を入力してください。",
              })}
              type={"text"}
              title={"企業名"}
            />

            <ErrorMessage
              as="p"
              className={styles.errorMessage}
              errors={errors}
              name="occupation"
            />
            <Input
              defaultValue={workHistory.occupation}
              name={"occupation"}
              ref={register({
                required: "※部署・役職を入力してください。",
              })}
              type={"text"}
              title={"部署・役職"}
            />

            <div className={styles.calender}>
              <Input
                defaultValue={workHistory.sinceDate}
                name={"sinceDate"}
                ref={register}
                type={"date"}
                title={"日程"}
              />
              <Input
                defaultValue={workHistory.untilDate}
                name={"untilDate"}
                ref={register}
                type={"date"}
              />
            </div>

            <ErrorMessage
              as="p"
              className={styles.errorMessage}
              errors={errors}
              name="jobSummary"
            />
            <Textarea
              defaultValue={workHistory.jobSummary}
              name={"jobSummary"}
              rows={2}
              ref={register({
                required: "※職歴を入力してください。",
              })}
              title={"職歴"}
            />
          </div>

          <div className={styles.buttonContainer}>
            <div className={styles.deleteButtonWrapper}>
              <Button
                border={"red"}
                color={"white"}
                icon={"delete"}
                onClick={handleDeleteWorkHistory}
                text={"削除する"}
              />
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
      onCancel={handleCloseEditWorkHistoryModal}
      visible={openWorkHistoryModal}
      width={600}
    >
      {body}
    </Modal>
  );
};

export default EditWorkHistoryModal;
