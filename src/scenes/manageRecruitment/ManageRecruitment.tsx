import React, { useState, useEffect } from "react";
import styles from "./ManageRecruitment.module.scss";
import Button from "../../components/button/Button";
import CircleButton from "../../components/circleButton/CircleButton";
import { HttpClient } from "../../utilities/axiosInstance";
import { localHostURL } from "../../hooks/localHostURL";
import { notification } from "antd";
import { RecruitmentDataType } from "../../data/recruitment";
import { useHistory } from "react-router";

const ManageRecruitment = () => {
  const history = useHistory();
  const [recruitments, setRecruitments] = useState<RecruitmentDataType[]>();
  const [recruitmentType, setRecruitmentType] = useState<
    "active" | "inActive" | "draft"
  >();

  useEffect(() => {
    try {
      const fetchRecruitments = async () => {
        const res = await HttpClient.request({
          method: "GET",
          url: `${localHostURL}/recruitments`,
        });
        const recruitmentsData = res.data;
        setRecruitments(recruitmentsData);
      };
      fetchRecruitments();
    } catch (err) {
      notification.error({
        message: "エラーが発生しました。",
      });
    }
  }, []);

  const moveToEditPage = (recruitmentId: string) => {
    history.push(`/edit_recruitment/${recruitmentId}`);
  };

  const recruitingLists = (
    <>
      {recruitments?.map((recruitment, index) => (
        <div className={styles.listsContainer} key={index}>
          <div className={styles.titleWrapper}>
            【募集中】{recruitment.title}
          </div>
          <div className={styles.occupationWrapper}>
            {recruitment.occupation}
          </div>
          <div className={styles.updatedDayWrapper}>
            {recruitment.updatedAt}
          </div>
          <div className={styles.editButtonWrapper}>
            <Button
              onClick={() => moveToEditPage(recruitment.id)}
              text={"編集"}
            ></Button>
          </div>
        </div>
      ))}
    </>
  );

  const underSuspensionLists = (
    <>
      {recruitments?.map((recruitment, index) => (
        <div className={styles.listsContainer} key={index}>
          <div className={styles.titleWrapper}>
            【停止中】{recruitment.title}
          </div>
          <div className={styles.occupationWrapper}>
            {recruitment.occupation}
          </div>
          <div className={styles.updatedDayWrapper}>
            {recruitment.updatedAt}
          </div>
          <div className={styles.editButtonWrapper}>
            <Button
              onClick={() => moveToEditPage(recruitment.id)}
              text={"編集"}
            ></Button>
          </div>
        </div>
      ))}
    </>
  );

  const draftLists = (
    <>
      {recruitments?.map((recruitment, index) => (
        <div className={styles.listsContainer} key={index}>
          <div className={styles.titleWrapper}>
            【下書き】{recruitment.title}
          </div>
          <div className={styles.occupationWrapper}>
            {recruitment.occupation}
          </div>
          <div className={styles.updatedDayWrapper}>
            {recruitment.updatedAt}
          </div>
          <div className={styles.editButtonWrapper}>
            <Button
              onClick={() => moveToEditPage(recruitment.id)}
              text={"編集"}
            ></Button>
          </div>
        </div>
      ))}
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

        <CircleButton text={"新規作成"} type={"submit"} width={"200px"} linkTo={"/create_recruitment"}/>
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
