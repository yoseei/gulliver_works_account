import React, { useEffect } from "react";
import styles from "./CorporateRegistration.module.scss";
import SideBar from "../../components/sideBar/SideBar";
import Input from "../../components/input/Input";
import Textarea from "../../components/textarea/Textarea";
import CircleButton from "../../components/circleButton/CircleButton";
import { HttpClient } from "../../utilities/axiosInstance";

const CorporateRegistration = () => {
  const handleCreateCompanyInfo = async () => {
    try {
      const res = await HttpClient.request({
        method: "PUT",
        url: `http://localhost:3000/companies/1`,
        data: {
          id: "1",
          name: "株式会社SIMULA Labs",
          nameKana: "test ",
          headOfficeLocation: "東京都港区元赤坂1-7-18",
          yearOfEstablishment: "2015",
          hpUrl: "https://simula-labs.com/",
          phone: "03-1234-5678",
          capital: 1520,
          isListed: "false",
          representative: "牧野暉弘",
          representativeKana: "まきのあきひろ",
          netSales: "5000",
          numbersOfEmployees: "20",
          averageAge: 28,
          businessSummary: "事業概要",
          corporatePr:
            "ヒトが生涯の中で最も長く過ごす「働く」という時間。 日本の場合、この働く時間をどう過ごすかはほとんど就活の間に決まってしまっていると言ってもいいでしょう。",
        },
      });
      console.log(res);
      alert("test");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.sideContainer}>
        <SideBar textA={"企業詳細"} textB={"募集管理"} />
      </div>
      <form action="">
        <div className={styles.mainContainer}>
          <h1>企業登録</h1>

          <Input type={"text"} title={"法人名"} name={"corporateName"} />
          <Input
            type={"text"}
            title={"法人名（ふりがな）"}
            name={"corporateNameKana"}
          />

          <div className={styles.selectBoxContainer}>
            <p>本店所在地</p>
            <div>
              <div className={styles.selectBox}>
                <select name="HeadOfficeLocation">
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
                <select name="HeadOfficeLocation">
                  <option value=""></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <p>年</p>
            </div>
          </div>

          <Input type={"text"} title={"HPのURL"} name={"url"} />
          <Input type={"text"} title={"電話番号"} name={"phoneNumber"} />

          <div className={styles.listedContainer}>
            <p className={styles.title}>上場/非上場</p>
            <div className={styles.listedWrapper}>
              <input type="radio" name="listed" value="listed" defaultChecked />
              <p>上場</p>
            </div>
            <div className={styles.listedWrapper}>
              <input type="radio" name="listed" value="unlisted" />
              <p>非上場</p>
            </div>
          </div>

          <div className={styles.representativeNameContainer}>
            <p>代表氏名</p>
            <div className={styles.inputContainer}>
              <div className={styles.leftWrapper}>
                <p>姓</p>
                <Input type={"text"} name={"lastName"} />
              </div>
              <div className={styles.rightWrapper}>
                <p>名</p>
                <Input type={"text"} name={"firstName"} />
              </div>
            </div>
          </div>

          <div className={styles.represTentativeNameContainer}>
            <p>代表氏名（ふりがな）</p>
            <div className={styles.inputContainer}>
              <div className={styles.leftWrapper}>
                <p>姓</p>
                <Input type={"text"} name={"lastNameKana"} />
              </div>
              <div className={styles.rightWrapper}>
                <p>名</p>
                <Input type={"text"} name={"firstNamekana"} />
              </div>
            </div>
          </div>

          <Input
            type={"text"}
            title={"前年度の売上高"}
            name={"amountOfSales"}
          />
          <Input type={"text"} title={"従業員数"} name={"numberOfEmployees"} />
          <Input type={"text"} title={"平均年齢"} name={"averageAge"} />

          <Textarea rows={3} name={"businessSummery"} title={"事業概要"} />
          <Textarea
            name={"businessSummery"}
            placeholder="アカウント作成後でも入力・更新いただけます&#13;&#10;※1. 求人応募の際は、本項目への入力は必須です&#13;&#10;※2. 内容を充実させることで、スカウト受信・選考通過の可能性が高まります"
            rows={4}
            title={"企業PR（５００文字）"}
          />
          <div className={styles.logoContainer}>
            <label>
              <Input type={"file"} title={"企業ロゴ"} name={"logoImage"} />
              <div className={styles.logoWrapper}>
                <div className={styles.image}></div>
                <p className={styles.explanation}>
                  アップロードする画像を選択してください
                </p>
              </div>
            </label>
          </div>

          <div className={styles.buttonContainer}>
            <CircleButton onClick={handleCreateCompanyInfo} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CorporateRegistration;
