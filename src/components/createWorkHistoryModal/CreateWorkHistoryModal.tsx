import React from "react";
import styles from "./CreateWorkHistoryModal.module.scss";
import { WorkHistoriesType } from "../../data/workHistory/index";
import Button from "../button/Button";
import { ErrorMessage } from "@hookform/error-message";
import Input from "../input/Input";
import Modal from "@material-ui/core/Modal";
import { useForm } from "react-hook-form";
import Textarea from "../textarea/Textarea";

type PropsType = {
  addWorkHistory: (workHistory: WorkHistoriesType) => void;
  openWorkHistoryModal: boolean;
  closeWorkHistoryModal: () => void;
  workHistories?: WorkHistoriesType[];
};

const CreateWorkHistoryModal = ({
  addWorkHistory,
  closeWorkHistoryModal,
  openWorkHistoryModal,
}: PropsType) => {
  const { register, handleSubmit, errors } = useForm();

  const handleWorkHistory = async (data: WorkHistoriesType) => {
    addWorkHistory(data);
    if (data) {
      closeModal();
    }
  };

  const closeModal = () => {
    closeWorkHistoryModal();
  };

  const body = (
    <div className={styles.root}>
      <div className={styles.academicHistoryContainer}>
        <h2>職歴</h2>

        <form onSubmit={handleSubmit(handleWorkHistory)}>
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
                onClick={closeWorkHistoryModal}
                text={"キャンセル"}
                type={"button"}
              />
            </div>
            <div className={styles.updateButtonWrapper}>
              <Button
                border={"none"}
                color={"primary"}
                onClick={() => alert("職歴を追加しました。")}
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
    <Modal open={openWorkHistoryModal} onClose={closeWorkHistoryModal}>
      {body}
    </Modal>
  );
};

export default CreateWorkHistoryModal;
