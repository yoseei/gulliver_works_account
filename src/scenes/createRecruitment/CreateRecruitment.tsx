import React from "react";
import styles from "./CreateRecruitment.module.scss";
import CreateRecruitmentForm from "../../components/createRecruitmentForm/CreateRecruitmentForm";
import { HttpClient } from "../../utilities/axiosInstance";
import { localHostURL } from "../../hooks/localHostURL";
import { RecruitmentDataType } from "../../data/recruitment";
import { useCurrentEmployee } from "../../hooks/useCurrentEmployee";
import { useHistory } from "react-router";

const CreateRecruitment = () => {
  const { employee } = useCurrentEmployee();
  const companyId = employee?.companies[0].id;
  const history = useHistory();

  const createRecruitment = async (data: RecruitmentDataType) => {
    await HttpClient.request({
      method: "POST",
      url: `${localHostURL}/companies/${companyId}/recruitments`,
      data: {
        ...data,
        company: employee?.companies[0],
      },
    });

    alert("募集を作成しました！");
    history.push("/manage_recruitment");
  };

  return (
    <div className={styles.root}>
      <CreateRecruitmentForm
        title={"新規募集作成"}
        handleRecruitment={createRecruitment}
      />
    </div>
  );
};

export default CreateRecruitment;
