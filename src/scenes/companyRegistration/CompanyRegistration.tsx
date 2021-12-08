import React from "react";
import styles from "./CompanyRegistration.module.scss";
import CompanyForm from "../../components/companyForm/CompanyForm";
import { CompanyDataType } from "../../data/company";
import { HttpClient } from "../../utilities/axiosInstance";
import { localHostURL } from "../../hooks/localHostURL";
import { notification } from "antd";
import { useForm } from "react-hook-form";

const CompanyRegistration = () => {
  const { reset } = useForm();

  const handleCreateCompanyInfo = async (data: CompanyDataType) => {
    try {
      await HttpClient.request({
        method: "POST",
        url: `${localHostURL}/companies`,
        data: { ...data },
      });
      alert("企業を登録しました！");
      reset();
    } catch (err) {
      notification.error({
        message: "エラーが発生しました。",
      });
    }
  };

  return (
    <div className={styles.root}>
      <CompanyForm
        buttonText={"作成"}
        handleFunction={handleCreateCompanyInfo}
        linkTo={"manage_recruitment"}
        title={"企業登録"}
      />
    </div>
  );
};

export default CompanyRegistration;
