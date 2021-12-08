import React from "react";
import styles from "./CompanyEdit.module.scss";
import { CompanyDataType } from "../../data/company";
import CompanyForm from "../../components/companyForm/CompanyForm";
import { HttpClient } from "../../utilities/axiosInstance";
import { notification } from "antd";
import { localHostURL } from "../../hooks/localHostURL";
import {useCurrentEmployee} from "../../hooks/useCurrentEmployee";

const CorporateEdit = () => {
  const {employee} = useCurrentEmployee();
  const company = employee?.companies[0]

  const handleEditCompanyInfo = async (data: CompanyDataType) => {
    try {
      await HttpClient.request({
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
        linkTo={"/manage_recruitment"}
        company={company}
        title={"企業更新"}
      />
    </div>
  );
};

export default CorporateEdit;
