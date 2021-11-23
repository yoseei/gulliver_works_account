import React from "react";
import styles from "./CreateRecruitment.module.scss";
import RecruitmentForm from "../../components/recruitmentForm/RecruitmentForm";
import { HttpClient } from "../../utilities/axiosInstance";
import { localHostURL } from "../../hooks/localHostURL";
import { RecruitmentDataType } from "../../data/recruitment";
import { useCurrentEmployee } from "../../hooks/useCurrentEmployee";

const CreateRecruitment = () => {
  const { employee } = useCurrentEmployee();
  const companyId = employee?.companies[0].id;

  const createRecruitment = async (data: RecruitmentDataType) => {
    await HttpClient.request({
      method: "POST",
      url: `${localHostURL}/companies/${companyId}/recruitments`,
      data: {
        ...data,
      },
    });
  };

  return (
    <div className={styles.root}>
      <RecruitmentForm
        title={"新規募集作成"}
        handleRecruitment={createRecruitment}
      />
    </div>
  );
};

export default CreateRecruitment;
