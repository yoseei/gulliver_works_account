import React, {FC, useState} from "react";
import styles from "./CompanyProfile.module.scss";
import image from "../image/Ellipse2.png";

import CircleButton from "../../components/circleButton/CircleButton";
import {RecruitmentDataType} from "../../data/recruitment";
import {Modal} from "antd";
import 'antd/dist/antd.css';
import Button from "../button/Button";

interface PropsType {
  onClick: () => void;
  recruitment: RecruitmentDataType | undefined;
}

const CompanyProfile: FC<PropsType> = ({onClick, recruitment}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleIsModalOpen = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false);
    alert("応募しました！")
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={styles.root}>
      <div className={styles.companyProfileContainer}>
        <h3>会社概要</h3>
        <div className={styles.companyImage_nameWrapper}>
          <img src={image} alt="企業画像"/>
          <p>{recruitment?.company.name}</p>
        </div>
        <p>{recruitment?.company.yearOfEstablishment}に設立</p>
        <p>{recruitment?.company.headOfficeLocation}</p>
        <a href="/">{recruitment?.company.hpUrl}</a>
      </div>
      <CircleButton text={"応募する"} type={"button"} width={"100%"} onClick={handleIsModalOpen}/>

      {isModalVisible ?
        <Modal visible={isModalVisible} onCancel={handleCancel} footer={null} closable={false} className={styles.modal}>
          <div className={styles.modalWrapper}>
            <p>
              「3度の飯よりReact！フロントエンドのエキスパートになりたいエンジニア募集！」に応募しますか？
            </p>
            <div className={styles.buttonContainer}>
              <Button border={"none"} text={"キャンセル"} color={"gray"} onClick={handleCancel}/>
              <Button border={"none"} text={"応募する"} color={"primary"} onClick={handleOk}/>
            </div>
          </div>
        </Modal>
        : ""}
    </div>
  );
};

export default CompanyProfile;
