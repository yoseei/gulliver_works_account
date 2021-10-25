import React, { useEffect, useState } from "react";
import styles from "./CompanyRegistration.module.scss";
import { HttpClient } from "../../utilities/axiosInstance";
import { useForm } from "react-hook-form";
import { CompanyDataType } from "../../data/company";
import CompanyInfoInputs from "../../components/companyinfoInputs/CompanyInfoInputs";

const CorporateRegistration = () => {
  const { reset } = useForm();

  const handleCreateCompanyInfo = async (data: CompanyDataType) => {
    try {
      const response = await HttpClient.request({
        method: "POST",
        url: `http://localhost:3000/companies`,
        data: { ...data },
      });
      console.log("成功");

      reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.root}>
      <CompanyInfoInputs
        buttonText={"作成"}
        handleFunction={handleCreateCompanyInfo}
        title={"企業登録"}
      />
    </div>
  );
};

export default CorporateRegistration;
