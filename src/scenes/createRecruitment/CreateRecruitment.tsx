import React, { useEffect, useState } from "react";
import styles from "./CreateRecruitment.module.scss";
import RecruitmentForm from "../../components/recruitmentForm/RecruitmentForm";
import { HttpClient } from "../../utilities/axiosInstance";
import { localHostURL } from "../../hooks/localHostURL";
import { RecruitmentDataType } from "../../data/recruitment";
import { CompanyDataType } from "data/company";

const CreateRecruitment = () => {
  const [currentCompany, setCurrentCompany] = useState<CompanyDataType>();
  useEffect(() => {
    const fetchCurrentCompany = async () => {
      const res = await HttpClient.request({
        method: "GET",
        url: `${localHostURL}/companies/1`,
      });
      setCurrentCompany(res.data);
    };
    fetchCurrentCompany();
  }, []);

  const createRecruitment = async (data: RecruitmentDataType) => {
    await HttpClient.request({
      method: "POST",
      url: `${localHostURL}/companies/${currentCompany?.id}/recruitments`,
      data: {
        ...data,
      },
    });
  };

  return (
    <div className={styles.root}>
      <RecruitmentForm
        title={"新規募集作成"}
        createRecruitment={createRecruitment}
      />
    </div>
  );
};

export default CreateRecruitment;
