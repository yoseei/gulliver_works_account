import React from "react";
import styles from "./CompanyRegistration.module.scss";
import "antd/dist/antd.css";
import CompanyForm from "../../components/companyForm/CompanyForm";
import { CompanyDataType } from "../../data/company";
import { HttpClient } from "../../utilities/axiosInstance";
import { notification } from "antd";
import { useForm } from "react-hook-form";
import { localHostURL } from "../../hooks/localHostURL";

const CompanyRegistration = () => {
  const { reset } = useForm();

  const handleCreateCompanyInfo = async (data: CompanyDataType) => {
    try {
      const response = await HttpClient.request({
        method: "POST",
        url: `${localHostURL}/companies`,
        data: { ...data },
      });
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
        title={"企業登録"}
      />
    </div>
  );
};

export default CompanyRegistration;
