import React, { useEffect, useState } from "react";
import styles from "./RecruitCard.module.scss";
import { HttpClient } from "../../utilities/axiosInstance";
import { localHostURL } from "../../hooks/localHostURL";
import { RecruitmentDataType } from "../../data/recruitment";
import image from "../image/Ellipse2.png";
import coverImage from "../image/Rectangle77.png";
import { useHistory } from "react-router";

const RecruitCard = () => {
  const [allRecruitment, setAllRecruitment] = useState<RecruitmentDataType[]>();
  const history = useHistory();

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

  const moveToApplicantRecruitmentDetail = (id: string) => {
    history.push(`/applicant_recruitment/${id}/detail`);
  };

  console.log();

  return (
    <div className={styles.root}>
      <h1>すべての募集</h1>
      <div className={styles.recruitmentsContainer}>
        {allRecruitment?.map(
          (recruitment: RecruitmentDataType, index: number) => (
            <div
              className={styles.recruitmentContainer}
              key={index}
              onClick={() => moveToApplicantRecruitmentDetail(recruitment.id)}
            >
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

export default RecruitCard;
