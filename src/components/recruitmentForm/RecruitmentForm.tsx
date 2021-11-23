import React from "react";
import styles from "./RecruitmentForm.module.scss";
import Button from "../../components/button/Button";
import DeleteButton from "../../components/deleteButton/DeleteButton";
import { ErrorMessage } from "@hookform/error-message";
import Input from "../input/Input";
import IosSwitch from "../switch/Switch";
import Textarea from "../textarea/Textarea";
import { useForm } from "react-hook-form";
import { RecruitmentDataType } from "../../data/recruitment";
import { useCurrentRecruitment } from "../../hooks/useCurrentRecruitment";

type PropsType = {
  handleRecruitment: (data: RecruitmentDataType) => Promise<void>;
  showDeleteButton?: boolean;
  title: "募集更新" | "新規募集作成";
};

const RecruitmentForm = ({
  handleRecruitment,
  title,
  showDeleteButton,
}: PropsType) => {
  const { recruitment } = useCurrentRecruitment();
  const { errors, handleSubmit, register, reset } = useForm();

  const onHandleRecruitment = async (data: RecruitmentDataType) => {
    await handleRecruitment(data);
    reset();
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
                <option value=""></option>
                <option value="sample1">東京</option>
                <option value="sample2">神奈川</option>
                <option value="sample3">千葉</option>
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
                <option value=""></option>
                <option value="1">フロントエンドエンジニア</option>
                <option value="2">バックエンドエンジニア</option>
                <option value="3">ドラマー</option>
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
                <option value=""></option>
                <option value="1">銀行</option>
                <option value="2">IT</option>
                <option value="3">ミュージシャン</option>
              </select>
            </div>
          </div>
        </div>

        <ErrorMessage
          as="p"
          className={styles.errorMessage}
          errors={errors}
          name="businessSummery"
        />
        <Textarea
          defaultValue={recruitment?.jobDescription}
          name={"businessSummery"}
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
              <DeleteButton />
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
