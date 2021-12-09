import React, { useEffect, useState } from "react";
import styles from "./ApplicantRecruitmentDetail.module.scss";
import coverImage from "../../components/image/Rectangle77.png";
import JobDescription from "../../components/jobDescription/JobDescription";
import CompanyProfile from "../../components/companyProfile/CompanyProfile";
import { useParams } from "react-router-dom";
import { HttpClient } from "../../utilities/axiosInstance";
import { localHostURL } from "../../hooks/localHostURL";
import { RecruitmentDataType } from "../../data/recruitment";

const ApplecantRecruitmentDetail = () => {
  const [recruitment, setRecruitment] = useState<
    RecruitmentDataType | undefined
  >();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const recruitment = async () => {
      const res = await HttpClient.request({
        url: `${localHostURL}/recruitments/${id}`,
        method: "GET",
      });
      setRecruitment(res.data);
    };
    recruitment();
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <img src={coverImage} alt="カバー画像" />
          <h1>{recruitment?.title}</h1>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.leftSideContainer}>
            <div className={styles.prContainer}>
              <p>
                弊社で求めらる能力は、「カタチにする力」です。それはグラフィックだけでなく、言葉も含まれます。分析の力で新しい価値を生み出していきましょう！
              </p>
            </div>
            <JobDescription recruitment={recruitment} />
          </div>
          <div className={styles.rightSideContainer}>
            <CompanyProfile recruitment={recruitment}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplecantRecruitmentDetail;
