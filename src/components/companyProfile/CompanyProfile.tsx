import React from "react";
import styles from "./CompanyProfile.module.scss";
import image from "../image/Ellipse2.png";
import CircleButton from "../../components/circleButton/CircleButton";

const CompanyProfile = () => {
  return (
    <div className={styles.root}>
      <div className={styles.companyProfileContainer}>
        <h3>会社概要</h3>
        <div className={styles.companyImage_nameWrapper}>
          <img src={image} alt="企業画像" />
          <p>株式会社</p>
        </div>
        <p>2016年8月に設立</p>
        <p>東京都港区港橋町123-456-78 オフィスビル3階305</p>
        <a href="/">http://</a>
      </div>
      <CircleButton text={"応募する"} width={"100%"} />
    </div>
  );
};

export default CompanyProfile;
