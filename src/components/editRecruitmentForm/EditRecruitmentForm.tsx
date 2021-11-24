import React from "react";
import styles from "./EditRecruitmentForm.module.scss";
import Button from "../../components/button/Button";
import DeleteButton from "../../components/deleteButton/DeleteButton";
import { ErrorMessage } from "@hookform/error-message";
import Input from "../input/Input";
import IosSwitch from "../switch/Switch";
import Textarea from "../textarea/Textarea";
import { useForm } from "react-hook-form";
import { RecruitmentDataType } from "../../data/recruitment";
import { HttpClient } from "../../utilities/axiosInstance";
import { localHostURL } from "../../hooks/localHostURL";
import { useHistory } from "react-router";

type PropsType = {
  handleRecruitment: (data: RecruitmentDataType) => Promise<void>;
  recruitment: RecruitmentDataType | undefined;
  showDeleteButton?: boolean;
  title: "募集更新" | "新規募集作成";
};

const RecruitmentForm = ({
  handleRecruitment,
  recruitment,
  showDeleteButton,
  title,
}: PropsType) => {
  const { errors, handleSubmit, register, reset } = useForm();
  const history = useHistory();

  const onHandleRecruitment = async (data: RecruitmentDataType) => {
    await handleRecruitment(data);
    reset();
  };

  const deleteRecruitment = async () => {
    await HttpClient.request({
      method: "DELETE",
      url: `${localHostURL}/recruitments/${recruitment?.id}`,
    });
    alert("募集を削除しました。");
    history.push("/manage_recruitment");
  };

  return (
    <div className={styles.root}>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit(onHandleRecruitment)}>
        <ErrorMessage
          as="p"
          className={styles.errorMessage}
          errors={errors}
          name="title"
        />
        <Input
          defaultValue={recruitment?.title}
          name={"title"}
          ref={register({
            required: "※タイトルを入力してください。",
          })}
          type={"text"}
          title={"タイトル"}
        />

        <ErrorMessage
          as="p"
          className={styles.errorMessage}
          errors={errors}
          name="workPlace"
        />
        <div className={styles.selectBoxContainer}>
          <p>勤務地</p>
          <div>
            <div className={styles.selectBox}>
              <select
                name="workPlace"
                ref={register({
                  required: "※勤務地を選択してください。",
                })}
              >
                <option value="">{recruitment?.workPlace}</option>
                <option value="東京">東京</option>
                <option value="神奈川">神奈川</option>
                <option value="千葉">千葉</option>
              </select>
            </div>
          </div>
        </div>

        <ErrorMessage
          as="p"
          className={styles.errorMessage}
          errors={errors}
          name="occupation"
        />
        <div className={styles.selectBoxContainer}>
          <p>職種</p>
          <div className={styles.selectBoxWrapper}>
            <div className={styles.selectBox}>
              <select
                name="occupation"
                ref={register({
                  required: "※職種を選択してください。",
                })}
              >
                <option value="">{recruitment?.occupation}</option>
                <option value="フロントエンドエンジニア">
                  フロントエンドエンジニア
                </option>
                <option value="バックエンドエンジニア">
                  バックエンドエンジニア
                </option>
                <option value="ドラマー">ドラマー</option>
              </select>
            </div>
          </div>
        </div>

        <ErrorMessage
          as="p"
          className={styles.errorMessage}
          errors={errors}
          name="industry"
        />
        <div className={styles.selectBoxContainer}>
          <p>業種</p>
          <div className={styles.selectBoxWrapper}>
            <div className={styles.selectBox}>
              <select
                name="industry"
                ref={register({
                  required: "※業種を選択してください。",
                })}
              >
                <option value="">{recruitment?.industry}</option>
                <option value="銀行">銀行</option>
                <option value="IT">IT</option>
                <option value="ミュージシャン">ミュージシャン</option>
              </select>
            </div>
          </div>
        </div>

        <ErrorMessage
          as="p"
          className={styles.errorMessage}
          errors={errors}
          name="businessSummary"
        />
        <Textarea
          defaultValue={recruitment?.businessSummary}
          name={"businessSummary"}
          rows={3}
          ref={register({
            required: "※仕事内容を入力してください。",
          })}
          title={"仕事内容"}
        />

        <ErrorMessage
          as="p"
          className={styles.errorMessage}
          errors={errors}
          name="workConditions"
        />
        <Textarea
          defaultValue={recruitment?.workConditions}
          name={"workConditions"}
          rows={3}
          ref={register({
            required: "※労働条件を入力してください。",
          })}
          title={"労働条件"}
        />

        <ErrorMessage
          as="p"
          className={styles.errorMessage}
          errors={errors}
          name="qualificationRequirement"
        />
        <Textarea
          defaultValue={recruitment?.qualificationRequirement}
          name={"qualificationRequirement"}
          rows={3}
          ref={register({
            required: "※応募資格を入力してください。",
          })}
          title={"応募資格"}
        />

        <div className={styles.publishingContainer}>
          <p className={styles.title}>公開設定</p>
          <IosSwitch />
          <p>非公開設定をONにすると通常の検索には表示されません。</p>
        </div>

        <div className={styles.buttonContainer}>
          {showDeleteButton ? (
            <div className={styles.leftButtonWrapper}>
              <DeleteButton onClick={deleteRecruitment} />
            </div>
          ) : (
            ""
          )}

          <div className={styles.rightButtonWrapper}>
            <Button text={"キャンセル"} color={"gray"} border={"none"} />
            <Button text={"募集公開"} color={"primary"} border={"none"} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default RecruitmentForm;
