import React, { useEffect, useState } from "react";
import styles from "./RecruitmentDetail.module.scss";
import { RecruitmentDataType } from "../../data/recruitment";
import { HttpClient } from "../../utilities/axiosInstance";
import { localHostURL } from "../../hooks/localHostURL";
import { notification } from "antd";

const RecruitmentDetail = () => {
  const [recruitment, setRecruitment] = useState<
    RecruitmentDataType | undefined
  >();

  useEffect(() => {
    try {
      const fetchRecruitment = async () => {
        const res = await HttpClient.request({
          method: "GET",
          url: `${localHostURL}/recruitments/497f6eca-6276-4993-bfeb-53cbbbba6f08`,
        });
        const recruitmentData = res.data;
        setRecruitment(recruitmentData);
      };
      fetchRecruitment();
    } catch (err) {
      notification.error({
        message: "エラーが発生しました。",
      });
    }
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.mainContainer}>
        <h1>{recruitment?.title}</h1>
        <div className={styles.detailsContainer}>
          <div className={styles.lowContainerTop}>
            <div className={styles.leftWrapper}>
              <p>部署・役職名</p>
            </div>
            <div className={styles.rightWrapper}>
              <div className={styles.textWrapper}>
                <p>{recruitment?.department}</p>
              </div>
            </div>
          </div>
          <div className={styles.lowContainer}>
            <div className={styles.leftWrapper}>
              <p>職種</p>
            </div>
            <div className={styles.rightWrapper}>
              <p>{recruitment?.occupation.name}</p>
            </div>
          </div>
          <div className={styles.lowContainer}>
            <div className={styles.leftWrapper}>
              <p>業種</p>
            </div>
            <div className={styles.rightWrapper}>
              <p>{recruitment?.industry.name}</p>
            </div>
          </div>
          <div className={styles.lowContainer}>
            <div className={styles.leftWrapper}>
              <p>勤務地</p>
            </div>
            <div className={styles.rightWrapper}>
              <p>{recruitment?.workplace.name}</p>
            </div>
          </div>
          <div className={styles.jobDescription_lowContainer}>
            <div className={styles.leftWrapper}>
              <p>仕事内容</p>
            </div>
            <div className={styles.rightWrapper}>
              <p>{recruitment?.jobDescription}</p>
            </div>
          </div>
          <div className={styles.workingConditions_lowContainer}>
            <div className={styles.leftWrapper}>
              <p>労働条件</p>
            </div>
            <div className={styles.rightWrapper}>
              <p>{recruitment?.workConditions}</p>
            </div>
          </div>
          <div className={styles.lowContainer}>
            <div className={styles.leftWrapper}>
              <p>応募資格</p>
            </div>
            <div className={styles.rightWrapper}>
              <p>{recruitment?.qualificationRequirement}</p>
            </div>
          </div>
          <div className={styles.lowContainer}>
            <div className={styles.leftWrapper}>
              <p>更新日</p>
            </div>
            <div className={styles.rightWrapper}>
              <p>{recruitment?.updatedAt}</p>
            </div>
          </div>
          <div className={styles.lowContainerBottom}>
            <div className={styles.leftWrapper}>
              <p>求人番号</p>
            </div>
            <div className={styles.rightWrapper}>
              <p>{recruitment?.advertisementNumber}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentDetail;
