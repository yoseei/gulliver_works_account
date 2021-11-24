import React, { useEffect, useState } from "react";
import styles from "./EditRecruitment.module.scss";
import EditRecruitmentForm from "../../components/editRecruitmentForm/EditRecruitmentForm";
import { HttpClient } from "../../utilities/axiosInstance";
import { localHostURL } from "../../hooks/localHostURL";
import { RecruitmentDataType } from "../../data/recruitment";
import { useCurrentEmployee } from "../../hooks/useCurrentEmployee";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";

const EditRecruitment = () => {
  const { employee } = useCurrentEmployee();
  const companyId = employee?.companies[0].id;
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [recruitment, setRecruitment] = useState<RecruitmentDataType>();

  const editRecruitment = async (data: RecruitmentDataType) => {
    await HttpClient.request({
      method: "PUT",
      url: `${localHostURL}/recruitments/${id}`,
      data: {
        ...data,
        companyId: companyId,
      },
    });
    alert("募集を更新しました！");
    history.push("/manage_recruitment");
  };

  useEffect(() => {
    const fetchRecruitment = async () => {
      const res = await HttpClient.request({
        method: "GET",
        url: `${localHostURL}/recruitments/${id}`,
      });
      setRecruitment(res.data);
    };
    fetchRecruitment();
  }, []);

  return (
    <div className={styles.root}>
      <EditRecruitmentForm
        handleRecruitment={editRecruitment}
        recruitment={recruitment}
        showDeleteButton
        title={"募集更新"}
      />
    </div>
  );
};

export default EditRecruitment;
