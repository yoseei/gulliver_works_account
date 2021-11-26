import React, { useEffect, useState } from "react";
import styles from "./RecruitCardSwiper.module.scss";
import { HttpClient } from "../../utilities/axiosInstance";
import { localHostURL } from "../../hooks/localHostURL";
import { RecruitmentDataType } from "../../data/recruitment";
import image from "../image/Ellipse2.png";
import coverImage from "../image/Rectangle77.png";

const RecruitCardSwiper = () => {
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
      <h1>おすすめの募集</h1>
      <div className={styles.recruitmentsContainer}>
        {allRecruitment?.map(
          (recruitment: RecruitmentDataType, index: number) => (
            <div className={styles.recruitmentContainer} key={index}>
              <div className={styles.coverImageWrapper}>
                <img src={coverImage} alt="cover画像" />
              </div>

              <div className={styles.titleWrapper}>
                <h3>{recruitment.title}</h3>
              </div>
              <div className={styles.companyNameWrapper}>
                <div className={styles.imageWrapper}>
                  <img src={image} alt="image画像" />
                </div>

                <p>{recruitment.company.name}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default RecruitCardSwiper;
