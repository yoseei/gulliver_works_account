import React from "react";
import styles from "./RecruitmentForm.module.scss";
import Button from "../../components/button/Button";
import { CompanyDataType } from "../../data/company";
import { ErrorMessage } from "@hookform/error-message";
import Input from "../input/Input";
import IosSwitch from "../switch/Switch";
import Textarea from "../textarea/Textarea";
import { useForm } from "react-hook-form";
import { RecruitmentDataType } from "../../data/recruitment";

type PropsType = {
  handleFunction: (data: RecruitmentDataType) => Promise<void>;
  title: "募集作成" | "新規募集作成";
};

const RecruitmentForm = ({ handleFunction, title }: PropsType) => {
  const { errors, handleSubmit, register, reset } = useForm();

  const onHandleSubmit = async (data: RecruitmentDataType) => {
    await handleFunction(data);
    alert("募集を作成しました！");
    reset();
  };
  return (
    <div className={styles.root}>
      #FIXME: pushされたら消す hoge
      <h1>{title}</h1>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <ErrorMessage
          as="p"
          className={styles.errorMessage}
          errors={errors}
          name="title"
        />
        <Input
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
          <Button text={"キャンセル"} color={"gray"} border={"none"} />
          <Button text={"募集公開"} color={"primary"} border={"none"} />
        </div>
      </form>
    </div>
  );
};

export default RecruitmentForm;
