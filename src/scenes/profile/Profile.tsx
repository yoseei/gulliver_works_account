import React, { useEffect, useState } from "react";
import styles from "./Profile.module.scss";
import Modal from "@material-ui/core/Modal";
import ProfileImage from "../../components/profileImage/ProfileImage";
import ProfileMainImage from "../../components/profileMainImage/ProfileMainImage";
import EditButton from "../../components/editButton/EditButton";
import HistoryTable from "../../components/historyTable/HistoryTable";
import HistoryButton from "../../components/historyButton/HistoryButton";
import axios from "axios";

const Profile = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [academicName, setAcademicName] = useState("");
  const [biography, setBiography] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [jobSummary, setJobSummary] = useState("");
  const [workSinceDate, setWorkSinceDate] = useState("");
  const [workUntilDate, setWorkUntilDate] = useState("");
  const [academicSinceDate, setAcademicSinceDate] = useState("");
  const [academicUntilDate, setAcademicUntilDate] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [faculty, setFaculty] = useState("");

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleOpenModalEdit = () => {

  // }

  useEffect(() => {
    const init = async () => {
      const env = process.env.REACT_APP_APPLICATION_API_HOST;

      const res = await axios.get(env + "/accounts");
      console.log(res.data);
      const data = res.data;
      const profile = res.data.profile;
      const workHistories = res.data.work_histories[0];
      const academicHistories = res.data.academic_histories[0];

      setName(profile.last_name + profile.first_name);
      setAddress(profile.address);
      setAcademicName(data.academic_histories[0].name);
      setBiography(profile.biography);
      setCompanyName(workHistories.name);
      setPosition(workHistories.position);
      setJobSummary(workHistories.job_summary);
      setWorkSinceDate(workHistories.since_date);
      setWorkUntilDate(workHistories.until_date);
      setAcademicSinceDate(academicHistories.since_date);
      setAcademicUntilDate(academicHistories.until_date);
      setSchoolName(academicHistories.name);
      setFaculty(academicHistories.faculty);
    };
    init();
  }, []);
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
                <h2>{name}(59)</h2>
              </div>
              <div className={styles.addressWrapper}>
                <div className={styles.leftWrapper}>
                  <p>住まい</p>
                </div>
                <p>{address}</p>
              </div>
              <div className={styles.educationalBackgroundWrapper}>
                <p className={styles.leftWrapper}>最終学歴</p>
                <p>{academicName}</p>
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
            <p>{biography}</p>
          </div>

          <div className={styles.workHistoryWrapper}>
            <h1 className={styles.workHistoryTitle}>職歴</h1>

            <div className={styles.companyWrapper}>
              <HistoryTable
                workingPeriod={`${workSinceDate} - ${workUntilDate}`}
                companyName={companyName}
                directorName={position}
                about={jobSummary}
                onClick={() => console.log("編集ボタンクリック！")}
                buttonText={"編集する"}
              />
            </div>

            {/* <div className={styles.companyWrapper}>
              <HistoryTable
                workingPeriod={"2020-01 - 2021-07"}
                companyName={"株式会社サイバーエージェンス"}
                directorName={"企画広報の係長"}
                about={"大手広告のコンサルティングを担当。"}
                onClick={() => console.log("編集ボタンクリック！")}
                buttonText={"編集する"}
              />
            </div>
            <div className={styles.buttonWrapper}>
              <HistoryButton
                text={"職歴を追加する"}
                onClick={() => console.log("クリック")}
              />
            </div> */}
          </div>

          <div className={styles.studyHistoryWrapper}>
            <h1 className={styles.studyHistoryTitle}>学歴</h1>

            <div className={styles.companyWrapper}>
              <HistoryTable
                workingPeriod={`${academicSinceDate} - ${academicUntilDate}`}
                companyName={schoolName}
                directorName={faculty}
                onClick={() => console.log("編集ボタンクリック！")}
                buttonText={"編集する"}
              />
            </div>

            {/* <div className={styles.companyWrapper}>
              <HistoryTable
                workingPeriod={"2020-01 - 2021-07"}
                companyName={"虎ノ門大学"}
                directorName={"虎学部"}
                onClick={() => console.log("編集ボタンクリック！")}
                buttonText={"編集する"}
              />
            </div> */}
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
