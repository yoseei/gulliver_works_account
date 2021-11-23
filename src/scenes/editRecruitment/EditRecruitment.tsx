import React, { useState, useEffect } from "react";
import styles from "./EditRecruitment.module.scss";
import RecruitmentForm from "../../components/recruitmentForm/RecruitmentForm";
import { HttpClient } from "../../utilities/axiosInstance";
import { localHostURL } from "../../hooks/localHostURL";
import { RecruitmentDataType } from "../../data/recruitment";
import { useCurrentEmployee } from "../../hooks/useCurrentEmployee";
import { useCurrentRecruitment } from "../../hooks/useCurrentRecruitment";
import { useHistory } from "react-router";

const EditRecruitment = () => {
  const { recruitment } = useCurrentRecruitment();
  const { employee } = useCurrentEmployee();
  const companyId = employee?.companies[0].id;
  const history = useHistory();

  const editRecruitment = async (data: RecruitmentDataType) => {
    await HttpClient.request({
      method: "PUT",
      url: `${localHostURL}/recruitments/${recruitment?.id}`,
      data: {
        ...data,
        companyId: companyId,
      },
    });
    alert("募集を更新しました！");
    history.push("/manage_recruitment");
  };

  return (
    <div className={styles.root}>
      <RecruitmentForm
        handleRecruitment={editRecruitment}
        showDeleteButton
        title={"募集更新"}
      />
    </div>
  );
};

export default EditRecruitment;
