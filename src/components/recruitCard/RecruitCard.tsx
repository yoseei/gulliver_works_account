import React, { useEffect, useState } from "react";
import styles from "./RecruitCard.module.scss";
import { HttpClient } from "../../utilities/axiosInstance";
import { localHostURL } from "../../hooks/localHostURL";
import { RecruitmentDataType } from "data/recruitment";

type PropsType = {
  title: "すべての募集" | "おすすめの募集";
};
const RecruitCard = ({ title }: PropsType) => {
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

  console.log(allRecruitment);

  return (
    <div className={styles.root}>
      <h1>{title}</h1>
      <div className={styles.recruitmentsContainer}>
        {allRecruitment?.map(
          (recruitment: RecruitmentDataType, index: number) => (
            <div className={styles.recruitmentContainer} key={index}>
              <div className={styles.coverImageWrapper}>
                <img src="./Rectangle77.png" alt="cover画像" />
              </div>

              <div className={styles.titleWrapper}>
                <h3>{recruitment.title}</h3>
              </div>
              <div className={styles.companyNameWrapper}>
                <div className={styles.imageWrapper}>
                  <img src="./Ellipse2.png" alt="image画像" />
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

export default RecruitCard;
