import React from "react";
import styles from "./RecruitmentForm.module.scss";
import { CompanyDataType } from "../../data/company";
import { ErrorMessage } from "@hookform/error-message";
import Input from "../input/Input";
import Textarea from "../textarea/Textarea";
import { useForm } from "react-hook-form";
import Button from "../../components/button/Button";
import IosSwitch from "../switch/Switch";

type PropsType = {
  title: "企業登録" | "企業更新" | "新規募集作成";
  handleFunction: (data: CompanyDataType) => Promise<void>;
};

const RecruitmentForm = ({ title, handleFunction }: PropsType) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <div className={styles.root}>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit(handleFunction)}>
        <ErrorMessage
          className={styles.errorMessage}
          errors={errors}
          name="name"
          as="p"
        />
        <Input
          type={"text"}
          title={"タイトル"}
          name={"name"}
          ref={register({
            required: "※法人名を入力してください。",
          })}
        />

        <ErrorMessage
          className={styles.errorMessage}
          errors={errors}
          name="headOfficeLocation"
          as="p"
        />
        <div className={styles.selectBoxContainer}>
          <p>勤務地</p>
          <div>
            <div className={styles.selectBox}>
              <select
                name="headOfficeLocation"
                ref={register({
                  required: "※本店所在地を選択してください。",
                })}
              >
                <option value=""></option>
                <option value="sample1">サンプル1</option>
                <option value="sample2">サンプル2</option>
                <option value="sample3">サンプル3</option>
              </select>
            </div>
          </div>
        </div>

        <ErrorMessage
          className={styles.errorMessage}
          errors={errors}
          name="yearOfEstablishment"
          as="p"
        />
        <div className={styles.selectBoxContainer}>
          <p>職種</p>
          <div className={styles.selectBoxWrapper}>
            <div className={styles.selectBox}>
              <select
                name="yearOfEstablishment"
                ref={register({
                  required: "※設立年を選択してください。",
                })}
              >
                <option value=""></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
        </div>

        <ErrorMessage
          className={styles.errorMessage}
          errors={errors}
          name="yearOfEstablishment"
          as="p"
        />
        <div className={styles.selectBoxContainer}>
          <p>業種</p>
          <div className={styles.selectBoxWrapper}>
            <div className={styles.selectBox}>
              <select
                name="yearOfEstablishment"
                ref={register({
                  required: "※設立年を選択してください。",
                })}
              >
                <option value=""></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
        </div>

        <ErrorMessage
          className={styles.errorMessage}
          errors={errors}
          name="businessSummery"
          as="p"
        />
        <Textarea
          rows={3}
          name={"businessSummery"}
          title={"仕事内容"}
          ref={register({
            required: "※事業概要を入力してください。",
          })}
        />

        <ErrorMessage
          className={styles.errorMessage}
          errors={errors}
          name="businessSummery"
          as="p"
        />
        <Textarea
          rows={3}
          name={"businessSummery"}
          title={"労働条件"}
          ref={register({
            required: "※事業概要を入力してください。",
          })}
        />

        <ErrorMessage
          className={styles.errorMessage}
          errors={errors}
          name="businessSummery"
          as="p"
        />
        <Textarea
          rows={3}
          name={"businessSummery"}
          title={"応募資格"}
          ref={register({
            required: "※事業概要を入力してください。",
          })}
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
