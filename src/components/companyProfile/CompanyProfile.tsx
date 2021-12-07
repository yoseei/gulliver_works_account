import React, {FC, useState} from "react";
import styles from "./CompanyProfile.module.scss";
import image from "../image/Ellipse2.png";
import CircleButton from "../../components/circleButton/CircleButton";
import {RecruitmentDataType} from "../../data/recruitment";
import {Modal} from "antd";
import 'antd/dist/antd.css';
import Button from "../button/Button";
import {HttpClient} from "../../utilities/axiosInstance";
import {localHostURL} from "../../hooks/localHostURL";
import { useCurrentAccount } from "../../hooks/useCurrentAccount";
import {useParams} from "react-router-dom";
import {useHistory} from "react-router";

interface PropsType {
  onClick?: () => void;
  recruitment: RecruitmentDataType | undefined;
}

const CompanyProfile: FC<PropsType> = ({onClick, recruitment}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {account, setAccount} = useCurrentAccount()
  const {id} = useParams<{ id: string }>();
  const history = useHistory()

  const handleIsModalOpen = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const addRecruitmentId = async() => {
    const res = await HttpClient.request({
      method: "PUT",
      url: `${localHostURL}/recruitments/${id}`,
      data: {
        ...recruitment,
        accountId: account?.id
      }
    })
    setAccount(res.data)
    setIsModalVisible(false);
    alert("応募しました！")
    history.push("/")
  }

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
      {recruitment?.id && recruitment?.accountId ?
      <CircleButton text={"応募する"} type={"button"} width={"100%"} disabled/>
      : <CircleButton text={"応募する"} type={"button"} width={"100%"} onClick={handleIsModalOpen}/>
      }

      {isModalVisible ?
        <Modal visible={isModalVisible} onCancel={handleCancel} footer={null} closable={false} className={styles.modal}>
          <div className={styles.modalWrapper}>
            <p>
              「{recruitment?.title}」に応募しますか？
            </p>
            <div className={styles.buttonContainer}>
              <Button border={"none"} text={"キャンセル"} color={"gray"} onClick={handleCancel}/>
              <Button border={"none"} text={"応募する"} color={"primary"} onClick={addRecruitmentId}/>
            </div>
          </div>
        </Modal>
        : ""}
    </div>
  );
};

export default CompanyProfile;
