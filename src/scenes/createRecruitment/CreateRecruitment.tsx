import React from "react";
import styles from "./CreateRecruitment.module.scss";
import RecruitmentForm from "../../components/recruitmentForm/RecruitmentForm";
import { HttpClient } from "../../utilities/axiosInstance";
import { localHostURL } from "../../hooks/localHostURL";
import { RecruitmentDataType } from "../../data/recruitment";

const CreateRecruitment = () => {
  const handleCreateRecruitment = async (data: RecruitmentDataType) => {
    const res = await HttpClient.request({
      method: "POST",
      url: `${localHostURL}/recruitments`,
      data: { ...data },
    });
  };

  return (
    <div className={styles.root}>
      <RecruitmentForm
        title={"新規募集作成"}
        handleFunction={handleCreateRecruitment}
      />
    </div>
  );
};

export default CreateRecruitment;
