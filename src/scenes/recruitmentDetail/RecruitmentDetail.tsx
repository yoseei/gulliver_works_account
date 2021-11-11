import React, { useEffect, useState } from "react";
import styles from "./RecruitmentDetail.module.scss";
import { CompanyDataType } from "data/company";
import { HttpClient } from "../../utilities/axiosInstance";
import { notification } from "antd";
import { localHostURL } from "../../hooks/localHostURL";

const RecruitmentDetail = () => {
  const [company, setCompany] = useState<CompanyDataType | undefined>();

  useEffect(() => {
    try {
      const fetchCompany = async () => {
        const res = await HttpClient.request({
          method: "GET",
          url: `${localHostURL}/companies/1`,
        });
        const companyData = res.data;
        setCompany(companyData);
      };
      fetchCompany();
    } catch (err) {
      notification.error({
        message: "エラーが発生しました。",
      });
    }
  }, []);
  return (
    <div className={styles.root}>
      <div className={styles.mainContainer}>
        {/* FIXME: コメントは、この後に値を挿入するためのもの */}
        test2
        {/* <h1>{company?.name}</h1> */}
        <h1>三度の飯よりReact！そんなGeekなあなたへ</h1>
        <div className={styles.detailsContainer}>
          <div className={styles.lowContainerTop}>
            <div className={styles.leftWrapper}>
              <p>部署・役職名</p>
            </div>
            <div className={styles.rightWrapper}>
              <div className={styles.textWrapper}>
                {/* <p>{company?.businessSummary}</p> */}
                <p>開発部</p>
              </div>
            </div>
          </div>
          <div className={styles.lowContainer}>
            <div className={styles.leftWrapper}>
              <p>職種</p>
            </div>
            <div className={styles.rightWrapper}>
              <p>フロントサイドエンジニア</p>
              {/* <p>{company?.headOfficeLocation}</p> */}
            </div>
          </div>
          <div className={styles.lowContainer}>
            <div className={styles.leftWrapper}>
              <p>業種</p>
            </div>
            <div className={styles.rightWrapper}>
              <p>インターネットサービス</p>
              {/* <p>{company?.yearOfEstablishment}</p> */}
            </div>
          </div>
          <div className={styles.lowContainer}>
            <div className={styles.leftWrapper}>
              <p>勤務地</p>
            </div>
            <div className={styles.rightWrapper}>
              <p>
                東京都
                {/* {company?.representativeLast} {company?.representativeFirst} */}
              </p>
            </div>
          </div>
          <div className={styles.jobDescription_lowContainer}>
            <div className={styles.leftWrapper}>
              <p>仕事内容</p>
            </div>
            <div className={styles.rightWrapper}>
              <p>
                AI事業部のトップとして事業部全体の統括をしていただきます。ご自身でも手を動かしながら、経営視点でのマネジメントに携わり、自社プロダクトのユーザビリティ向上に貢献していただくことを期待してます。
              </p>
              {/* <p>{company?.numbersOfEmployees}</p> */}
            </div>
          </div>
          <div className={styles.workingConditions_lowContainer}>
            <div className={styles.leftWrapper}>
              <p>労働条件</p>
            </div>
            <div className={styles.rightWrapper}>
              <p>
                <p>フレックス制度</p>
                <p>リモートワーク可（申請制）</p>
                <p>有給休（10日〜）</p>
                <p>定期1on 1　など</p>
                <p></p>

                <p>交通費支給</p>
                <p>各種社会保険完備</p>
                <p>Macbook支給</p>
              </p>
              {/* <p>{company?.isListed}</p> */}
            </div>
          </div>
          <div className={styles.lowContainer}>
            <div className={styles.leftWrapper}>
              <p>応募資格</p>
            </div>
            <div className={styles.rightWrapper}>
              <p>フロントサイドエンジニア2年以上の実務経験</p>
              {/* <p>{company?.netSales}</p> */}
            </div>
          </div>
          <div className={styles.lowContainer}>
            <div className={styles.leftWrapper}>
              <p>更新日</p>
            </div>
            <div className={styles.rightWrapper}>
              <p>2020年5月24日</p>
              {/* <p>{company?.averageAge}</p> */}
            </div>
          </div>
          <div className={styles.lowContainerBottom}>
            <div className={styles.leftWrapper}>
              <p>求人番号</p>
            </div>
            <div className={styles.rightWrapper}>
              <p>1734927</p>
              {/* <p>{company?.hpUrl}</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentDetail;
