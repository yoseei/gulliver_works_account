import React from "react";
import styles from "./CorporateRegistration.module.scss";
import SideBar from "../../components/sideBar/SideBar";
import Input from "../../components/input/Input";
import Textarea from "../../components/textarea/Textarea";
import CircleButton from "../../components/circleButton/CircleButton";
import { HttpClient } from "../../utilities/axiosInstance";
import { useForm } from "react-hook-form";
import { CompanyDataType } from "../../data/company";

const CorporateRegistration = () => {
  const { register, handleSubmit } = useForm();

  const handleCreateCompanyInfo = async (data: CompanyDataType) => {
    try {
      const res = await HttpClient.request({
        method: "PUT",
        url: `http://localhost:3000/companies/1`,
        data: {
          id: "1",
          name: data.name,
          nameKana: data.nameKana,
          headOfficeLocation: data.headOfficeLocation,
          yearOfEstablishment: data.yearOfEstablishment,
          hpUrl: data.hpUrl,
          phone: data.phone,
          capital: data.capital,
          isListed: data.isListed,
          representativeLast: data.representativeLast,
          representativeFirst: data.representativeFirst,
          representativeKanaLast: data.representativeKanaLast,
          representativeKanaFirst: data.representativeKanaFirst,
          netSales: data.netSales,
          numbersOfEmployees: data.numbersOfEmployees,
          averageAge: data.averageAge,
          businessSummary: data.businessSummary,
          corporatePr: data.corporatePr,
        },
      });
      console.log(res);
      alert("test");
    } catch (err) {
      console.log(err);
    }
  };

  const ref = React.createRef();

  return (
    <div className={styles.root}>
      <div className={styles.sideContainer}>
        <SideBar textA={"企業詳細"} textB={"募集管理"} />
      </div>
      <form onSubmit={handleSubmit(handleCreateCompanyInfo)}>
        <div className={styles.mainContainer}>
          <h1>企業登録</h1>

          <Input type={"text"} title={"法人名"} name="name" ref={register} />

          <Input
            type={"text"}
            title={"法人名（ふりがな）"}
            name={"nameKana"}
            ref={register}
          />

          <div className={styles.selectBoxContainer}>
            <p>本店所在地</p>
            <div>
              <div className={styles.selectBox}>
                <select name="headOfficeLocation" ref={register}>
                  <option value=""></option>
                  <option value="sample1">サンプル1</option>
                  <option value="sample2">サンプル2</option>
                  <option value="sample3">サンプル3</option>
                </select>
              </div>
            </div>
          </div>

          <div className={styles.selectBoxContainer}>
            <p>設立年</p>
            <div className={styles.selectBoxWrapper}>
              <div className={styles.selectBox}>
                <select name="yearOfEstablishment" ref={register}>
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
                value="listed"
                defaultChecked
                ref={register}
              />
              <p>上場</p>
            </div>
            <div className={styles.listedWrapper}>
              <input
                type="radio"
                name="isListed"
                value="unlisted"
                ref={register}
              />
              <p>非上場</p>
            </div>
          </div>

          <div className={styles.representativeNameContainer}>
            <p>代表氏名</p>
            <div className={styles.inputContainer}>
              <div className={styles.leftWrapper}>
                <p>姓</p>
                <Input type={"text"} name={"lastName"} ref={register} />
              </div>
              <div className={styles.rightWrapper}>
                <p>名</p>
                <Input type={"text"} name={"firstName"} ref={register} />
              </div>
            </div>
          </div>

          <div className={styles.representativeNameContainer}>
            <p>代表氏名（ふりがな）</p>
            <div className={styles.inputContainer}>
              <div className={styles.leftWrapper}>
                <p>姓</p>
                <Input type={"text"} name={"lastNameKana"} ref={register} />
              </div>
              <div className={styles.rightWrapper}>
                <p>名</p>
                <Input type={"text"} name={"firstNamekana"} ref={register} />
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

          <Textarea rows={3} name={"businessSummery"} title={"事業概要"} />
          <Textarea
            name={"corporatePr"}
            placeholder="アカウント作成後でも入力・更新いただけます&#13;&#10;※1. 求人応募の際は、本項目への入力は必須です&#13;&#10;※2. 内容を充実させることで、スカウト受信・選考通過の可能性が高まります"
            rows={4}
            title={"企業PR（５００文字）"}
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
            <CircleButton
            // onClick={() => alert("投稿しました")}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CorporateRegistration;
