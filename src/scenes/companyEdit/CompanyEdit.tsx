import React from "react";
import styles from "./CompanyEdit.module.scss";
import { CompanyDataType } from "../../data/company";
import CompanyForm from "../../components/companyForm/CompanyForm";
import { HttpClient } from "../../utilities/axiosInstance";
import { notification } from "antd";
import { localHostURL } from "../../hooks/localHostURL";

const CorporateEdit = () => {
  const handleEditCompanyInfo = async (data: CompanyDataType) => {
    try {
      const response = await HttpClient.request({
        method: "PUT",
        url: `${localHostURL}/companies/1`,
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
