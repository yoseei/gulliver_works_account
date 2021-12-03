import React, { useEffect, useState } from "react";
import styles from "./RecruitCardSwiper.module.scss";
import { Carousel } from "react-responsive-carousel";
import coverImage from "../image/Rectangle77.png";
import { HttpClient } from "../../utilities/axiosInstance";
import image from "../image/Ellipse2.png";
import { localHostURL } from "../../hooks/localHostURL";
import { RecruitmentDataType } from "../../data/recruitment";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useHistory } from "react-router";

const RecruitCardSwiper = () => {
  const [allRecruitments, setAllRecruitments] =
    useState<RecruitmentDataType[]>();
  const history = useHistory();

  useEffect(() => {
    const fetchAllRecruitment = async () => {
      const res = await HttpClient.request({
        method: "GET",
        url: `${localHostURL}/recruitments`,
      });
      setAllRecruitments(res.data);
    };
    fetchAllRecruitment();
  }, []);

  const moveToApplicantRecruitmentDetail = (id: string) => {
    history.push(`/applicant_recruitment/${id}/detail`);
  };

  const recruitmentCards = allRecruitments?.map((recruitment) => (
    <div
      className={styles.recruitmentsContainer}
      key={recruitment.id}
      onClick={() => moveToApplicantRecruitmentDetail(recruitment.id)}
    >
      <div className={styles.recruitmentContainer}>
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
    </div>
  ));
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
        showThumbs={false}
      >
        {recruitmentCards}
      </Carousel>
    </div>
  );
};

export default RecruitCardSwiper;
