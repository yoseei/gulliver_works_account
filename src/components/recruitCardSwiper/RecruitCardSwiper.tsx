import React, { useEffect, useState } from "react";
import styles from "./RecruitCardSwiper.module.scss";
import { HttpClient } from "../../utilities/axiosInstance";
import { localHostURL } from "../../hooks/localHostURL";
import { RecruitmentDataType } from "data/recruitment";
import image from "../image/Ellipse2.png";
import coverImage from "../image/Rectangle77.png";
import { Carousel } from "antd";
import "antd/dist/antd.css";

type PropsType = {
  title: "すべての募集" | "おすすめの募集";
};
const RecruitCardSwiper = ({ title }: PropsType) => {
  const [allRecruitment, setAllRecruitment] = useState<RecruitmentDataType[]>();

  useEffect(() => {
    const fetchAllRecruitment = async () => {
      const res = await HttpClient.request({
        method: "GET",
        url: `${localHostURL}/recruitments`,
      });
      setAllRecruitment(res.data);
    };
    fetchAllRecruitment();
  }, []);

  return (
    <div className={styles.root}>
      <h1>{title}</h1>
      <div className={styles.recruitmentsContainer}>
        {/* {allRecruitment?.map(
          (recruitment: RecruitmentDataType, index: number) => ( */}
        <Carousel autoplay>
          {/* <div className={styles.recruitmentContainer} key={index}> */}
          <div className={styles.recruitmentContainer}>
            <div className={styles.coverImageWrapper}>
              <img src={coverImage} alt="cover画像" />
            </div>

            <div className={styles.titleWrapper}>
              <h3>エンジニア募集！！</h3>
            </div>
            <div className={styles.companyNameWrapper}>
              <div className={styles.imageWrapper}>
                <img src={image} alt="image画像" />
              </div>
              <p>株式会社ほげほげ</p>
            </div>
          </div>

          <div className={styles.recruitmentContainer}>
            <div className={styles.coverImageWrapper}>
              <img src={coverImage} alt="cover画像" />
            </div>
            <div className={styles.titleWrapper}>
              <h3>エンジニア募集！！</h3>
            </div>
            <div className={styles.companyNameWrapper}>
              <div className={styles.imageWrapper}>
                <img src={image} alt="image画像" />
              </div>
              <p>株式会社ほげほげ</p>
            </div>
          </div>

          <div className={styles.recruitmentContainer}>
            <div className={styles.coverImageWrapper}>
              <img src={coverImage} alt="cover画像" />
            </div>
            <div className={styles.titleWrapper}>
              <h3>エンジニア募集！！</h3>
            </div>
            <div className={styles.companyNameWrapper}>
              <div className={styles.imageWrapper}>
                <img src={image} alt="image画像" />
              </div>
              <p>株式会社ほげほげ</p>
            </div>
          </div>
        </Carousel>
        {/* )
        )} */}
      </div>
    </div>
  );
};

export default RecruitCardSwiper;
