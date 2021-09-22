import React, { useEffect, useState } from "react";
import styles from "./Profile.module.scss";

import Button from "../../components/button/Button";
import { HttpClient } from "../../utilities/axiosInstance";
import ProfileImage from "../../components/profileImage/ProfileImage";
import ProfileMainImage from "../../components/profileMainImage/ProfileMainImage";
import { ProfileType } from "../../data/profile/index";
import { WorkHistoryType } from "../../data/workHistory/index";
import { AcademicHistoryType } from "../../data/academicHistory/index";
import WorkHistoryTable from "../../components/workHistoryTable/WorkHistoryTable";
import AcademicHistoryTable from "../../components/academicHistoryTable/AcademicHistoryTable";
import ProfileModal from "../../components/profileModal/ProfileModal";

const Profile = () => {
  const [profile, setProfile] = useState<ProfileType>();
  const [workHistory, setWorkHistory] = useState<WorkHistoryType>();
  const [academicHistory, setAcademicHistory] = useState<AcademicHistoryType>();
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
        url: "http://localhost:3000/accounts/497f6eca-6276-4993-bfeb-53cbbbba6f08",
      });

      const profileData = res.data.profile;
      const workHistoryData = res.data.workHistories[0];
      const academicHistoryData = res.data.academicHistories[0];
      setProfile(profileData);
      setWorkHistory(workHistoryData);
      setAcademicHistory(academicHistoryData);
    };
    fetchAccounts();
  }, []);

  console.log(open);

  return (
    <div className={styles.root}>
      <div className={styles.profileContainer}>
        <div className={styles.profileImageWrapper}>
          <ProfileImage />
          <div className={styles.buttonWrapper}>
            <Button onClick={handleOpen} text={"プロフィールを編集"} />
          </div>

          <div className={styles.basicInfoContainer}>
            <div className={styles.leftWrapper}>
              <ProfileMainImage />
            </div>
            <div className={styles.rightWrapper}>
              <div className={styles.nameAgeWrapper}>
                <h2>
                  {profile ? profile.lastName + profile.firstName : ""}(59)
                </h2>
              </div>
              <div className={styles.addressWrapper}>
                <div className={styles.leftWrapper}>
                  <p>住まい</p>
                </div>
                <p>{profile?.address}</p>
              </div>
              <div className={styles.educationalBackgroundWrapper}>
                <p className={styles.leftWrapper}>最終学歴</p>
                <p>{academicHistory?.name}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.selfIntroductionContainer}>
          <div className={styles.topWrapper}>
            <h1>自己紹介</h1>
            <div className={styles.buttonWrapper}>
              <Button
                onClick={() => console.log("編集くりっく！")}
                text={"編集する"}
              />
            </div>
          </div>
          <div className={styles.mainWrapper}>
            <p>{profile?.biography}</p>
          </div>

          <div className={styles.workHistoryWrapper}>
            <h1 className={styles.workHistoryTitle}>職歴</h1>

            <div className={styles.companyWrapper}>
              {workHistory && (
                <WorkHistoryTable
                  workHistory={workHistory}
                  onClick={() => console.log("職歴編集クリック！")}
                />
              )}
            </div>

            <div className={styles.buttonWrapper}>
              <Button
                text={"職歴を追加する"}
                onClick={() => console.log("クリック")}
              />
            </div>
          </div>

          <div className={styles.studyHistoryWrapper}>
            <h1 className={styles.studyHistoryTitle}>学歴</h1>

            <div className={styles.companyWrapper}>
              {academicHistory && (
                <AcademicHistoryTable
                  academicHistory={academicHistory}
                  onClick={() => console.log("編集ボタンクリック！")}
                />
              )}
            </div>

            <div className={styles.buttonWrapper}>
              <Button
                text={"学歴を追加する"}
                onClick={() => console.log("クリック")}
              />
            </div>
          </div>
          <div className={styles.bottomSpace}></div>
        </div>

        {open ? (
          <div className={styles.profileModalContainer}>
            <ProfileModal open={open} handleClose={handleClose} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Profile;
