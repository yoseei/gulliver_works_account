import React, { useState } from "react";
import styles from "./ManageRecruitment.module.scss";
import Button from "../../components/button/Button";
import CircleButton from "../../components/circleButton/CircleButton";

const ManageRecruitment = () => {
  const [recruitmentType, setRecruitmentType] = useState<
    "active" | "inActive" | "draft"
  >();

  const recruitingLists = (
    <>
      <div className={styles.listsContainer}>
        <div className={styles.titleWrapper}>
          【募集中】技術好きの集まる職場で周りより圧倒的に成長したい駆け出しエンジニア募集！
        </div>
        <div className={styles.occupationWrapper}>Webエンジニア</div>
        <div className={styles.updatedDayWrapper}>2020/5/24</div>
        <div className={styles.editButtonWrapper}>
          <Button text={"編集"}></Button>
        </div>
      </div>
    </>
  );

  const underSuspensionLists = (
    <>
      <div className={styles.listsContainer}>
        <div className={styles.titleWrapper}>
          【停止中】技術好きの集まる職場で周りより圧倒的に成長したい駆け出しエンジニア募集！
        </div>
        <div className={styles.occupationWrapper}>Webエンジニア</div>
        <div className={styles.updatedDayWrapper}>2020/5/24</div>
        <div className={styles.editButtonWrapper}>
          <Button text={"編集"}></Button>
        </div>
      </div>
    </>
  );

  const draftLists = (
    <>
      <div className={styles.listsContainer}>
        <div className={styles.titleWrapper}>
          【下書き】技術好きの集まる職場で周りより圧倒的に成長したい駆け出しエンジニア募集！
        </div>
        <div className={styles.occupationWrapper}>Webエンジニア</div>
        <div className={styles.updatedDayWrapper}>2020/5/24</div>
        <div className={styles.editButtonWrapper}>
          <Button text={"編集"}></Button>
        </div>
      </div>
    </>
  );

  const handleIsRecruiting = () => {
    setRecruitmentType("active");
  };

  const handleIsUnderSuspension = () => {
    setRecruitmentType("inActive");
  };

  const handleIsDraft = () => {
    setRecruitmentType("draft");
  };

  return (
    <div className={styles.root}>
      <div className={styles.topContainer}>
        <h1>募集管理</h1>
        <CircleButton text={"新規作成"} />
      </div>
      <div className={styles.recruitingContainer}>
        <div className={styles.recruitingWrapper}>
          <p onClick={handleIsRecruiting} tabIndex={-1}>
            募集中
          </p>
          <p onClick={handleIsUnderSuspension} tabIndex={-1}>
            停止中
          </p>
          <p onClick={handleIsDraft} tabIndex={-1}>
            下書き
          </p>
        </div>
      </div>
      <div className={styles.recruitmentListContainer}>
        <div className={styles.titlesContainer}>
          <div className={styles.titleWrapper}>タイトル</div>
          <div className={styles.occupationWrapper}>職種</div>
          <div className={styles.updatedDayWrapper}>編集日</div>
          <div className={styles.editButtonWrapper}></div>
        </div>

        {recruitmentType === "active" && recruitingLists}
        {recruitmentType === "inActive" && underSuspensionLists}
        {recruitmentType === "draft" && draftLists}
      </div>
    </div>
  );
};

export default ManageRecruitment;
