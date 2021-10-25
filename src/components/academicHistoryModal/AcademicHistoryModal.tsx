import React from "react";
import styles from "./AcademicHistoryModal.module.scss";
import Button from "../button/Button";
import Modal from "@material-ui/core/Modal";
import { HttpClient } from "../../utilities/axiosInstance";
import Input from "../input/Input";
import { AcademicHistoryType } from "../../data/academicHistory/index";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

type PropsType = {
  openAcademicHistoryModal: boolean;
  handleCloseAcademicHistoryModal:
    | React.MouseEventHandler<HTMLParagraphElement>
    | undefined;
  academicHistories: AcademicHistoryType | undefined;
  accountId: number;
};
type Inputs = {
  profileBiography: string;
};

const AcademicHistoryModal = ({
  accountId,
  handleCloseAcademicHistoryModal,
  openAcademicHistoryModal,
  academicHistories,
}: PropsType) => {
  const { register, handleSubmit } = useForm();
  // const history = useHistory();

  const handleAcademicHistory = async (data: AcademicHistoryType) => {
    try {
      if (!data) return;

      const res = await HttpClient.request({
        method: "POST",
        url: `http://localhost:3000/academic_histories`,
        data: {
          // id: accountId,
          name: data.name,
          faculty: data.faculty,
          since_date: data.sinceDate,
          until_date: data.untilDate,
          type: data.type,
        },
      });

      alert("プロフィールを編集しました。");
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
            <Input
              name={"name"}
              ref={register}
              type={"text"}
              title={"学校名"}
            />
            <Input
              name={"faculty"}
              ref={register}
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
                onClick={() => handleCloseAcademicHistoryModal}
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
