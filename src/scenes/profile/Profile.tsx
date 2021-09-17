import React, { useEffect, useState } from "react";
import styles from "./Profile.module.scss";
import Modal from "@material-ui/core/Modal";
import ProfileImage from "../../components/profileImage/ProfileImage";
import ProfileMainImage from "../../components/profileMainImage/ProfileMainImage";
import EditButton from "../../components/editButton/EditButton";
import HistoryTable from "../../components/historyTable/HistoryTable";
import HistoryButton from "../../components/historyButton/HistoryButton";
import axios from "axios";
import { HttpClient } from "../../utilities/axiosInstance";

type ProfileType = {
  id: string;
  firstName: string;
  lastName: string;
  firstNameKana: string;
  lastNameKana: string;
  gender: string;
  phone: string;
  postalCode: string;
  address: string;
  dateOfBirth: string;
  biography: string;
};

type WorkHistories = {
  id: string;
  isEmployed: string;
  occupation: {
    id: string;
    name: string;
  };
  industry: {
    id: string;
    name: string;
  };
  position: string;
  annualIncome: number;
  managementExperience: number;
  jobSummary: string;
  sinceDate: string;
  untilDate: string;
  name: string;
};

type AcademicHistories = {
  id: string;
  name: string;
  faculty: string;
  sinceDate: string;
  untilDate: string;
  type: string;
};

const Profile = () => {
  const [profile, setProfile] = useState<ProfileType>({
    id: "",
    firstName: "",
    lastName: "",
    firstNameKana: "",
    lastNameKana: "",
    gender: "",
    phone: "",
    postalCode: "",
    address: "",
    dateOfBirth: "",
    biography: "",
  });
  const [workHistories, setWorkHistories] = useState<WorkHistories>({
    id: "",
    isEmployed: "",
    occupation: {
      id: "",
      name: "",
    },
    industry: {
      id: "",
      name: "",
    },
    position: "",
    annualIncome: 0,
    managementExperience: 0,
    jobSummary: "",
    sinceDate: "",
    untilDate: "",
    name: "",
  });

  const [academicHistories, setAcademicHistories] = useState<AcademicHistories>(
    {
      id: "",
      name: "",
      faculty: "",
      sinceDate: "",
      untilDate: "",
      type: "",
    }
  );
  // const [name, setName] = useState(""),
  // const [address, setAddress] = useState("");
  // const [academicName, setAcademicName] = useState("");
  // const [biography, setBiography] = useState("");
  // const [companyName, setCompanyName] = useState("");
  // const [position, setPosition] = useState("");
  // const [jobSummary, setJobSummary] = useState("");
  // const [workSinceDate, setWorkSinceDate] = useState("");
  // const [workUntilDate, setWorkUntilDate] = useState("");
  // const [academicSinceDate, setAcademicSinceDate] = useState("");
  // const [academicUntilDate, setAcademicUntilDate] = useState("");
  // const [schoolName, setSchoolName] = useState("");
  // const [faculty, setFaculty] = useState("");

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchAccounts = async () => {
      const res = await HttpClient.request({
        method: "GET",
        url: "http://localhost:3000/accounts",
      });
      console.log(res.data);

      const profileData = res.data[0].profile;
      const workHistoriesData = res.data[0].workHistories[0];
      const academicHistoriesData = res.data[0].academicHistories[0];
      setProfile(profileData);
      setWorkHistories(workHistoriesData);
      setAcademicHistories(academicHistoriesData);
    };
    fetchAccounts();
  }, []);
  console.log(profile);

  // プロフィール編集モーダル
  const body = (
    <div className={styles.modalRoot}>
      <div className={styles.modalProfileContainer}>
        <p>プロフィール</p>
        <div className={styles.modalCoverPhotoWrapper}>カバー画像</div>
        <div className={styles.modalProfilePhoto}>プロフィール画像</div>
        <div className={styles.modalNameWrapper}>
          <p>名前</p>
          <input type="text" />
        </div>
        <div className={styles.modalAddressWrapper}>
          <p>住まい</p>
          <input type="text" />
        </div>
        <div className={styles.modalGenderWrapper}>
          <p>性別</p>
          <input type="text" />
        </div>
        <div className={styles.modalNameWrapper}>
          <p>生年月日</p>
          <input type="text" />
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.root}>
      <div className={styles.profileContainer}>
        <div className={styles.profileImageWrapper}>
          <ProfileImage />
          <div className={styles.buttonWrapper}>
            <EditButton onClick={handleOpen} text={"プロフィールを編集"} />
          </div>

          <div className={styles.basicInfoContainer}>
            <div className={styles.leftWrapper}>
              <ProfileMainImage />
            </div>
            <div className={styles.rightWrapper}>
              <div className={styles.nameAgeWrapper}>
                <h2>{profile.lastName + profile.firstName}(59)</h2>
              </div>
              <div className={styles.addressWrapper}>
                <div className={styles.leftWrapper}>
                  <p>住まい</p>
                </div>
                <p>{profile.address}</p>
              </div>
              <div className={styles.educationalBackgroundWrapper}>
                <p className={styles.leftWrapper}>最終学歴</p>
                <p>{}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.selfIntroductionContainer}>
          <div className={styles.topWrapper}>
            <h1>自己紹介</h1>
            <div className={styles.buttonWrapper}>
              <EditButton
                onClick={() => console.log("編集くりっく！")}
                text={"編集する"}
              />
            </div>
          </div>
          <div className={styles.mainWrapper}>
            <p>{profile.biography}</p>
          </div>

          <div className={styles.workHistoryWrapper}>
            <h1 className={styles.workHistoryTitle}>職歴</h1>

            <div className={styles.companyWrapper}>
              <HistoryTable
                workingPeriod={`${workHistories.sinceDate} - ${workHistories.untilDate}`}
                companyName={workHistories.name}
                directorName={workHistories.position}
                about={workHistories.jobSummary}
                onClick={() => console.log("編集ボタンクリック！")}
                buttonText={"編集する"}
              />
            </div>
          </div>

          <div className={styles.studyHistoryWrapper}>
            <h1 className={styles.studyHistoryTitle}>学歴</h1>

            <div className={styles.companyWrapper}>
              <HistoryTable
                workingPeriod={`${academicHistories.sinceDate} - ${academicHistories.untilDate}`}
                companyName={academicHistories.name}
                directorName={academicHistories.faculty}
                onClick={() => console.log("編集ボタンクリック！")}
                buttonText={"編集する"}
              />
            </div>

            <div className={styles.buttonWrapper}>
              <HistoryButton
                text={"学歴を追加する"}
                onClick={() => console.log("クリック")}
              />
            </div>
          </div>
          <div className={styles.bottomSpace}></div>
        </div>

        {open ? (
          <>
            <Modal open={open} onClose={handleClose}>
              {body}
            </Modal>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Profile;
