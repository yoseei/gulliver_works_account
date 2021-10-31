import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import styles from "./CompanyDetail.module.scss";
import { CompanyDataType } from "data/company";
import { HttpClient } from "../../utilities/axiosInstance";
import { notification } from "antd";
import { localHostURL } from "../../hooks/localHostURL";

const CompanyDetail = () => {
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
        <h1>{company?.name}</h1>
        <div className={styles.detailsContainer}>
          <div className={styles.lowContainerTop}>
            <div className={styles.leftWrapper}>
              <p>事業概要</p>
            </div>
            <div className={styles.rightWrapper}>
              <div className={styles.textWrapper}>
                <p>{company?.businessSummary}</p>
              </div>
            </div>
          </div>
          <div className={styles.lowContainer}>
            <div className={styles.leftWrapper}>
              <p>所在地</p>
            </div>
            <div className={styles.rightWrapper}>
              <p>{company?.headOfficeLocation}</p>
            </div>
          </div>
          <div className={styles.lowContainer}>
            <div className={styles.leftWrapper}>
              <p>設立</p>
            </div>
            <div className={styles.rightWrapper}>
              <p>{company?.yearOfEstablishment}</p>
            </div>
          </div>
          <div className={styles.lowContainer}>
            <div className={styles.leftWrapper}>
              <p>代表者</p>
            </div>
            <div className={styles.rightWrapper}>
              <p>
                {company?.representativeLast} {company?.representativeFirst}
              </p>
            </div>
          </div>
          <div className={styles.lowContainer}>
            <div className={styles.leftWrapper}>
              <p>従業員数</p>
            </div>
            <div className={styles.rightWrapper}>
              <p>{company?.numbersOfEmployees}</p>
            </div>
          </div>
          <div className={styles.lowContainer}>
            <div className={styles.leftWrapper}>
              <p>上場市場名</p>
            </div>
            <div className={styles.rightWrapper}>
              <p>{company?.isListed}</p>
            </div>
          </div>
          <div className={styles.lowContainer}>
            <div className={styles.leftWrapper}>
              <p>資本金</p>
            </div>
            <div className={styles.rightWrapper}>
              <p>{company?.netSales}</p>
            </div>
          </div>
          <div className={styles.lowContainer}>
            <div className={styles.leftWrapper}>
              <p>平均年齢</p>
            </div>
            <div className={styles.rightWrapper}>
              <p>{company?.averageAge}</p>
            </div>
          </div>
          <div className={styles.lowContainerBottom}>
            <div className={styles.leftWrapper}>
              <p>ホームページ</p>
            </div>
            <div className={styles.rightWrapper}>
              <p>
                <a href="https://simula-labs.com" target="_blank">
                  {company?.hpUrl}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
