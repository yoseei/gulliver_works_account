import React from "react";
import styles from "./CompanyEdit.module.scss";
import "antd/dist/antd.css";
import { CompanyDataType } from "../../data/company";
import CompanyForm from "../../components/companyForm/CompanyForm";
import { HttpClient } from "../../utilities/axiosInstance";
import { notification } from "antd";

const CorporateEdit = () => {
  const handleEditCompanyInfo = async (data: CompanyDataType) => {
    try {
      const response = await HttpClient.request({
        method: "PUT",
        url: `http://localhost:3000/companies/1`,
        data: { ...data },
      });
    } catch (err) {
      notification.error({
        message: "エラーが発生しました。",
      });
    }
  };

  return (
    <div className={styles.root}>
      <CompanyForm
        buttonText={"更新"}
        handleFunction={handleEditCompanyInfo}
        title={"企業更新"}
      />
    </div>
  );
};

export default CorporateEdit;
