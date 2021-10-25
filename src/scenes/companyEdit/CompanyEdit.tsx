import React, { useEffect, useState } from "react";
import styles from "./CompanyEdit.module.scss";
// import Input from "../../components/input/Input";
// import Textarea from "../../components/textarea/Textarea";
// import CircleButton from "../../components/circleButton/CircleButton";
import { HttpClient } from "../../utilities/axiosInstance";
// import { useForm } from "react-hook-form";
import { CompanyDataType } from "../../data/company";
import CompanyInfoInputs from "../../components/companyinfoInputs/CompanyInfoInputs";
// import { ErrorMessage } from "@hookform/error-message";

const CorporateEdit = () => {
  const handleEditCompanyInfo = async (data: CompanyDataType) => {
    try {
      const response = await HttpClient.request({
        method: "PUT",
        url: `http://localhost:3000/companies/1`,
        data: { ...data },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.root}>
      <CompanyInfoInputs
        buttonText={"更新"}
        handleFunction={handleEditCompanyInfo}
        title={"企業更新"}
      />
      {/* <form onSubmit={handleSubmit(handleEditCompanyInfo)}>
        <div className={styles.mainContainer}>
          <h1>企業更新</h1>

          <ErrorMessage
            className={styles.errorMessage}
            errors={errors}
            name="name"
            as="p"
          />
          <Input
            type={"text"}
            title={"法人名"}
            name={"name"}
            ref={register({
              required: "※法人名を入力してください。",
            })}
          />

          <ErrorMessage
            className={styles.errorMessage}
            errors={errors}
            name="nameKana"
            as="p"
          />
          <Input
            type={"text"}
            title={"法人名（ふりがな）"}
            name={"nameKana"}
            ref={register({
              required: "※法人名（ふりがな）を入力してください。",
            })}
          />

          <ErrorMessage
            className={styles.errorMessage}
            errors={errors}
            name="headOfficeLocation"
            as="p"
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
            <p>設立年</p>
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
              <p>年</p>
            </div>
          </div>

          <Input
            type={"text"}
            title={"HPのURL"}
            name={"hpUrl"}
            ref={register}
          />

          <Input
            type={"text"}
            title={"電話番号"}
            name={"phone"}
            ref={register}
          />

          <div className={styles.listedContainer}>
            <p className={styles.title}>上場/非上場</p>
            <div className={styles.listedWrapper}>
              <input
                type="radio"
                name="isListed"
                value="上場"
                defaultChecked
                ref={register}
              />
              <p>上場</p>
            </div>
            <div className={styles.listedWrapper}>
              <input
                type="radio"
                name="isListed"
                value="非上場"
                ref={register}
              />
              <p>非上場</p>
            </div>
          </div>

          <div className={styles.representativeNameContainer}>
            <p>代表氏名</p>
            <div className={styles.inputContainer}>
              <div className={styles.leftWrapper}>
                <ErrorMessage
                  className={styles.errorMessage}
                  errors={errors}
                  name="representativeLast"
                  as="p"
                />
                <p>姓</p>
                <Input
                  type={"text"}
                  name={"representativeLast"}
                  ref={register({
                    required: "※姓を入力してください。",
                  })}
                />
              </div>

              <div className={styles.rightWrapper}>
                <ErrorMessage
                  className={styles.errorMessage}
                  errors={errors}
                  name="representativeFirst"
                  as="p"
                />
                <p>名</p>
                <Input
                  type={"text"}
                  name={"representativeFirst"}
                  ref={register({
                    required: "※名を入力してください。",
                  })}
                />
              </div>
            </div>
          </div>

          <div className={styles.representativeNameContainer}>
            <p>代表氏名（ふりがな）</p>
            <div className={styles.inputContainer}>
              <div className={styles.leftWrapper}>
                <ErrorMessage
                  className={styles.errorMessage}
                  errors={errors}
                  name="representativeKanaLast"
                  as="p"
                />
                <p>姓</p>
                <Input
                  type={"text"}
                  name={"representativeKanaLast"}
                  ref={register({
                    required: "※姓(ふりがな)を入力してください。",
                  })}
                />
              </div>

              <div className={styles.rightWrapper}>
                <ErrorMessage
                  className={styles.errorMessage}
                  errors={errors}
                  name="representativeKanaFirst"
                  as="p"
                />
                <p>名</p>
                <Input
                  type={"text"}
                  name={"representativeKanaFirst"}
                  ref={register({
                    required: "※名(ふりがな)を入力してください。",
                  })}
                />
              </div>
            </div>
          </div>

          <Input
            type={"text"}
            title={"前年度の売上高"}
            name={"netSales"}
            ref={register}
          />

          <Input
            type={"text"}
            title={"従業員数"}
            name={"numbersOfEmployees"}
            ref={register}
          />

          <Input
            type={"text"}
            title={"平均年齢"}
            name={"averageAge"}
            ref={register}
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
            title={"事業概要"}
            ref={register({
              required: "※事業概要を入力してください。",
            })}
          />

          <Textarea
            name={"corporatePr"}
            placeholder="アカウント作成後でも入力・更新いただけます&#13;&#10;※1. 求人応募の際は、本項目への入力は必須です&#13;&#10;※2. 内容を充実させることで、スカウト受信・選考通過の可能性が高まります"
            rows={4}
            title={"企業PR（５００文字）"}
            ref={register}
          />

          <div className={styles.logoContainer}>
            <label>
              <Input
                type={"file"}
                title={"企業ロゴ"}
                name={"logoImage"}
                ref={register}
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
            <CircleButton text={"更新"} />
          </div>
        </div>
      </form> */}
    </div>
  );
};

export default CorporateEdit;
