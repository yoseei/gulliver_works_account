import SideBar from "../../components/sideBar/SideBar";
import React from "react";
import styles from "./CompanyDetail.module.scss";

const CompanyDetail = () => {
  return (
    <div className={styles.root}>
      <div className={styles.sideBar}>
        <SideBar textA={"企業詳細"} textB={"募集管理"} />
      </div>
      <div className={styles.mainContainer}>
        <h1>株式会社ダミー</h1>
        <div className={styles.detailsContainer}>
          <div className={styles.lowContainerTop}>
            <div className={styles.leftWrapper}>
              <p>事業概要</p>
            </div>
            <div className={styles.rightWrapper}>
              <div className={styles.textWrapper}>
                <p>Coadmap開発・運営事業</p>
                <p>受託事業</p>
              </div>
            </div>
          </div>
          <div className={styles.lowContainer}>
            <div className={styles.leftWrapper}>
              <p>所在地</p>
            </div>
            <div className={styles.rightWrapper}>
              <p>東京都世田谷区新町1-32-16</p>
            </div>
          </div>
          <div className={styles.lowContainer}>
            <div className={styles.leftWrapper}>
              <p>設立</p>
            </div>
            <div className={styles.rightWrapper}>
              <p>2016年8月</p>
            </div>
          </div>
          <div className={styles.lowContainer}>
            <div className={styles.leftWrapper}>
              <p>代表者</p>
            </div>
            <div className={styles.rightWrapper}>
              <p>牧野暉弘</p>
            </div>
          </div>
          <div className={styles.lowContainer}>
            <div className={styles.leftWrapper}>
              <p>従業員数</p>
            </div>
            <div className={styles.rightWrapper}>
              <p>12名</p>
            </div>
          </div>
          <div className={styles.lowContainer}>
            <div className={styles.leftWrapper}>
              <p>上場市場名</p>
            </div>
            <div className={styles.rightWrapper}>
              <p>非上場</p>
            </div>
          </div>
          <div className={styles.lowContainer}>
            <div className={styles.leftWrapper}>
              <p>資本金</p>
            </div>
            <div className={styles.rightWrapper}>
              <p>1520万（資本準備金を含む）</p>
            </div>
          </div>
          <div className={styles.lowContainer}>
            <div className={styles.leftWrapper}>
              <p>平均年齢</p>
            </div>
            <div className={styles.rightWrapper}>
              <p>26歳</p>
            </div>
          </div>
          <div className={styles.lowContainerBottom}>
            <div className={styles.leftWrapper}>
              <p>ホームページ</p>
            </div>
            <div className={styles.rightWrapper}>
              <p>
                <a href="https://simula-labs.com" target="_blank">
                  https://simula-labs.com
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
