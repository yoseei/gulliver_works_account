import React, {FC} from "react";
import styles from "./styles.module.scss";
import CircleButton from "../circleButton/CircleButton";
import {CompanyDataType} from "../../data/company";
import {ErrorMessage} from "@hookform/error-message";
import Input from "../input/Input";
import Textarea from "../textarea/Textarea";
import {useForm} from "react-hook-form";

type CompanyInfoFormPropsType = {
  buttonText: "作成" | "更新";
  company?: CompanyDataType;
  onSubmit: (data: CompanyDataType) => Promise<void>;
  linkTo: string;
  title: "企業登録" | "企業更新";
};

const CompanyInfoForm: FC<CompanyInfoFormPropsType> = ({
                                                           buttonText,
                                                           onSubmit,
                                                           linkTo,
                                                           company,
                                                           title,
                                                         }) => {
  const {register, handleSubmit, errors} = useForm();

  return (
    <div className={styles.mainContainer}>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ErrorMessage
          as="p"
          className={styles.errorMessage}
          errors={errors}
          name="name"
        />
        <Input
          defaultValue={company?.name}
          name={"name"}
          ref={register({
            required: "※法人名を入力してください。",
          })}
          type={"text"}
          title={"法人名"}
        />

        <ErrorMessage
          as="p"
          className={styles.errorMessage}
          errors={errors}
          name="nameKana"
        />
        <Input
          defaultValue={company?.nameKana}
          name={"nameKana"}
          ref={register({
            required: "※法人名（ふりがな）を入力してください。",
          })}
          type={"text"}
          title={"法人名（ふりがな）"}
        />

        <ErrorMessage
          as="p"
          className={styles.errorMessage}
          errors={errors}
          name="headOfficeLocation"
        />
        <div className={styles.selectBoxContainer}>
          <p>本店所在地</p>
          <div>
            <div className={styles.selectBox}>
              <select
                name="headOfficeLocation"
                ref={register({
                  required: "※本店所在地を選択してください。",
                })}
              >
                <option value="">{company?.headOfficeLocation}</option>
                <option value="sample1">サンプル1</option>
                <option value="sample2">サンプル2</option>
                <option value="sample3">サンプル3</option>
              </select>
            </div>
          </div>
        </div>

        <ErrorMessage
          as="p"
          className={styles.errorMessage}
          errors={errors}
          name="yearOfEstablishment"
        />
        <div className={styles.selectBoxContainer}>
          <p>設立年</p>
          <div className={styles.selectBoxWrapper}>
            <div className={styles.selectBox}>
              <select
                name="yearOfEstablishment"
                ref={register({
                  required: "※設立年を選択してください。",
                })}
              >
                <option value="">{company?.yearOfEstablishment}</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <p>年</p>
          </div>
        </div>

        <Input defaultValue={company?.hpUrl}
               type={"text"} title={"HPのURL"} name={"hpUrl"} ref={register}/>

        <Input
          defaultValue={company?.phone}
          type={"text"} title={"電話番号"} name={"phone"} ref={register}/>

        <div className={styles.listedContainer}>
          <p className={styles.title}>上場/非上場</p>
          <div className={styles.listedWrapper}>
            <input
              defaultChecked
              name="isListed"
              ref={register}
              type="radio"
              value="上場"
            />
            <p>上場</p>
          </div>
          <div className={styles.listedWrapper}>
            <input type="radio" name="isListed" value="非上場" ref={register}/>
            <p>非上場</p>
          </div>
        </div>

        <div className={styles.representativeNameContainer}>
          <p>代表氏名</p>
          <div className={styles.inputContainer}>
            <div className={styles.leftWrapper}>
              <ErrorMessage
                as="p"
                className={styles.errorMessage}
                errors={errors}
                name="representativeLast"
              />
              <p>姓</p>
              <Input
                defaultValue={company?.representativeLast}
                name={"representativeLast"}
                ref={register({
                  required: "※姓を入力してください。",
                })}
                type={"text"}
              />
            </div>

            <div className={styles.rightWrapper}>
              <ErrorMessage
                as="p"
                className={styles.errorMessage}
                errors={errors}
                name="representativeFirst"
              />
              <p>名</p>
              <Input
                defaultValue={company?.representativeFirst}
                name={"representativeFirst"}
                ref={register({
                  required: "※名を入力してください。",
                })}
                type={"text"}
              />
            </div>
          </div>
        </div>

        <div className={styles.representativeNameContainer}>
          <p>代表氏名（ふりがな）</p>
          <div className={styles.inputContainer}>
            <div className={styles.leftWrapper}>
              <ErrorMessage
                as="p"
                className={styles.errorMessage}
                errors={errors}
                name="representativeKanaLast"
              />
              <p>姓</p>
              <Input
                defaultValue={company?.representativeKanaLast}
                name={"representativeKanaLast"}
                ref={register({
                  required: "※姓(ふりがな)を入力してください。",
                })}
                type={"text"}
              />
            </div>

            <div className={styles.rightWrapper}>
              <ErrorMessage
                as="p"
                className={styles.errorMessage}
                errors={errors}
                name="representativeKanaFirst"
              />
              <p>名</p>
              <Input
                defaultValue={company?.representativeKanaFirst}
                name={"representativeKanaFirst"}
                ref={register({
                  required: "※名(ふりがな)を入力してください。",
                })}
                type={"text"}
              />
            </div>
          </div>
        </div>

        <Input
          defaultValue={company?.netSales}
          name={"netSales"}
          ref={register}
          type={"text"}
          title={"前年度の売上高"}
        />

        <Input
          defaultValue={company?.numbersOfEmployees}
          name={"numbersOfEmployees"}
          ref={register}
          type={"text"}
          title={"従業員数"}
        />

        <Input
          defaultValue={company?.averageAge}
          name={"averageAge"}
          ref={register}
          type={"text"}
          title={"平均年齢"}
        />

        <ErrorMessage
          as="p"
          className={styles.errorMessage}
          errors={errors}
          name="businessSummery"
        />
        <Textarea
          defaultValue={company?.businessSummary}
          name={"businessSummery"}
          rows={3}
          ref={register({
            required: "※事業概要を入力してください。",
          })}
          title={"事業概要"}
        />

        <Textarea
          defaultValue={company?.corporatePr}
          name={"corporatePr"}
          placeholder="アカウント作成後でも入力・更新いただけます&#13;&#10;※1. 求人応募の際は、本項目への入力は必須です&#13;&#10;※2. 内容を充実させることで、スカウト受信・選考通過の可能性が高まります"
          rows={4}
          ref={register}
          title={"企業PR（５００文字）"}
        />

        <div className={styles.logoContainer}>
          <label>
            <Input
              name={"logoImage"}
              ref={register}
              title={"企業ロゴ"}
              type={"file"}
            />
            <div className={styles.logoWrapper}>
              <div className={styles.image}></div>
              <p className={styles.explanation}>
                アップロードする画像を選択してください
              </p>
            </div>
          </label>
        </div>

        <div className={styles.buttonContainer}>
          <CircleButton text={buttonText} type={"submit"} linkTo={linkTo} width={"200px"}/>
        </div>
      </form>
    </div>
  );
};

export default CompanyInfoForm;
