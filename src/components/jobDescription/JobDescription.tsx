import { RecruitmentDataType } from "../../data/recruitment";
import React from "react";
import styles from "./JobDescription.module.scss";

type PropsType = {
  recruitment: RecruitmentDataType | undefined;
};
const JobDescription = ({ recruitment }: PropsType) => {
  return (
    <div className={styles.root}>
      <h3>募集要項</h3>
      <div className={styles.detailsContainer}>
        <div className={styles.mainContainer}>
          <h1></h1>
          <div className={styles.detailsContainer}>
            <div className={styles.lowContainerTop}>
              <div className={styles.leftWrapper}>
                <p>給与</p>
              </div>
              <div className={styles.rightWrapper}>
                <div className={styles.textWrapper}>
                  <p>年収100万</p>
                </div>
              </div>
            </div>
            <div className={styles.lowContainer}>
              <div className={styles.leftWrapper}>
                <p>職種</p>
              </div>
              <div className={styles.rightWrapper}>
                <p>{recruitment?.occupation}</p>
              </div>
            </div>
            <div className={styles.lowContainer}>
              <div className={styles.leftWrapper}>
                <p>業種</p>
              </div>
              <div className={styles.rightWrapper}>
                <p>{recruitment?.industry}</p>
              </div>
            </div>
            <div className={styles.lowContainer}>
              <div className={styles.leftWrapper}>
                <p>勤務地</p>
              </div>
              <div className={styles.rightWrapper}>
                <p>{recruitment?.workPlace}</p>
              </div>
            </div>
            <div className={styles.jobDescription_lowContainer}>
              <div className={styles.leftWrapper}>
                <p>仕事内容</p>
              </div>
              <div className={styles.rightWrapper}>
                <p>{recruitment?.businessSummary}</p>
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
            <div className={styles.lowContainerBottom}>
              <div className={styles.leftWrapper}>
                <p>応募資格</p>
              </div>
              <div className={styles.rightWrapper}>
                <p>{recruitment?.qualificationRequirement}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
