import React, { useEffect, useState } from "react";
import styles from "./RecruitCardSwiper.module.scss";
// #TODO: 次のタスク用import
// import { HttpClient } from "../../utilities/axiosInstance";
// import { localHostURL } from "../../hooks/localHostURL";
// import { RecruitmentDataType } from "../../data/recruitment";
import image from "../image/Ellipse2.png";
import coverImage from "../image/Rectangle77.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const RecruitCardSwiper = () => {
  // #TODO: 次のタスクにて、allRecruitmentをmapで取得
  // const [allRecruitment, setAllRecruitment] = useState<RecruitmentDataType[]>();

  // useEffect(() => {
  //   const fetchAllRecruitment = async () => {
  //     const res = await HttpClient.request({
  //       method: "GET",
  //       url: `${localHostURL}/recruitments`,
  //     });
  //     setAllRecruitment(res.data);
  //   };
  //   fetchAllRecruitment();
  // }, []);

  const recruitmentCards = (
    <div className={styles.recruitmentContainer}>
      <div className={styles.coverImageWrapper}>
        <img src={coverImage} alt="cover画像" />
      </div>

      <div className={styles.titleWrapper}>
        <h3>タイトルタイトルタイトルタイトル</h3>
      </div>
      <div className={styles.companyNameWrapper}>
        <div className={styles.imageWrapper}>
          <img src={image} alt="image画像" />
        </div>

        <p>本文本文本文本文本文本文本文本文本文本文本文</p>
      </div>
    </div>
  );
  return (
    <div className={styles.root}>
      <h1>おすすめの募集</h1>
      <Carousel
        autoPlay={true}
        width={"100%"}
        centerMode={true}
        centerSlidePercentage={50}
        infiniteLoop={true}
        showStatus={false}
      >
        <div className={styles.recruitmentsContainer}>{recruitmentCards}</div>
        <div className={styles.recruitmentsContainer}>{recruitmentCards}</div>
        <div className={styles.recruitmentsContainer}>{recruitmentCards}</div>
      </Carousel>
    </div>
  );
};

export default RecruitCardSwiper;
