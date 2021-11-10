import React from "react";
import styles from "./ManageRecruitment.module.scss";
import Button from "../../components/button/Button";
import CircleButton from "../../components/circleButton/CircleButton";

const ManageRecruitment = () => {
  const recruitmentLists = (
    <>
      <div className={styles.listsContainer}>
        <div className={styles.titleWrapper}>
          技術好きの集まる職場で周りより圧倒的に成長したい駆け出しエンジニア募集！
        </div>
        <div className={styles.occupationWrapper}>Webエンジニア</div>
        <div className={styles.updatedDayWrapper}>2020/5/24</div>
        <div className={styles.editButtonWrapper}>
          <Button text={"編集"}></Button>
        </div>
      </div>
      <div className={styles.listsContainer}>
        <div className={styles.titleWrapper}>
          技術好きの集まる職場で周りより圧倒的に成長したい駆け出しエンジニア募集！
        </div>
        <div className={styles.occupationWrapper}>Webエンジニア</div>
        <div className={styles.updatedDayWrapper}>2020/5/24</div>
        <div className={styles.editButtonWrapper}>
          <Button text={"編集"}></Button>
        </div>
      </div>
      <div className={styles.listsContainer}>
        <div className={styles.titleWrapper}>
          技術好きの集まる職場で周りより圧倒的に成長したい駆け出しエンジニア募集！
        </div>
        <div className={styles.occupationWrapper}>Webエンジニア</div>
        <div className={styles.updatedDayWrapper}>2020/5/24</div>
        <div className={styles.editButtonWrapper}>
          <Button text={"編集"}></Button>
        </div>
      </div>
      <div className={styles.listsContainer}>
        <div className={styles.titleWrapper}>
          技術好きの集まる職場で周りより圧倒的に成長したい駆け出しエンジニア募集！
        </div>
        <div className={styles.occupationWrapper}>Webエンジニア</div>
        <div className={styles.updatedDayWrapper}>2020/5/24</div>
        <div className={styles.editButtonWrapper}>
          <Button text={"編集"}></Button>
        </div>
      </div>
    </>
  );

  return (
    <div className={styles.root}>
      {/* TODO: 後で消す */}
      push要記述
      <div className={styles.topContainer}>
        <h1>募集管理</h1>
        <CircleButton text={"新規作成"} />
      </div>
      <div className={styles.recruitingContainer}>
        <div className={styles.wrapper}>
          <p>募集中</p>
          <p>停止中</p>
          <p>下書き</p>
        </div>
      </div>
      <div className={styles.recruitmentListContainer}>
        <div className={styles.titlesContainer}>
          <div className={styles.titleWrapper}>タイトル</div>
          <div className={styles.occupationWrapper}>職種</div>
          <div className={styles.updatedDayWrapper}>編集日</div>
          <div className={styles.editButtonWrapper}></div>
        </div>
        {recruitmentLists}
      </div>
    </div>
  );
};

export default ManageRecruitment;
