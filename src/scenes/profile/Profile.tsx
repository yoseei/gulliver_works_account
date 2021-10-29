import React, { useEffect, useState } from "react";
import styles from "./Profile.module.scss";

import Button from "../../components/button/Button";
import { HttpClient } from "../../utilities/axiosInstance";
import ProfileImage from "../../components/profileImage/ProfileImage";
import ProfileMainImage from "../../components/profileMainImage/ProfileMainImage";
import { ProfileType } from "../../data/profile/index";
import { AccountType } from "../../data/account/index";
import { WorkHistoryType } from "../../data/workHistory/index";
import { AcademicHistoryType } from "../../data/academicHistory/index";
import WorkHistoryTable from "../../components/workHistoryTable/WorkHistoryTable";
import AcademicHistoryTable from "../../components/academicHistoryTable/AcademicHistoryTable";
import ProfileModal from "../../components/profileModal/ProfileModal";
import EditBiographyModal from "../../components/editBiographyModal/EditBiographyModal";
import AcademicHistoryModal from "../../components/academicHistoryModal/AcademicHistoryModal";
import EditAcademicHistoryModal from "../../components/editAcademicHistoryModal/EditAcademicHistoryModal";

const Profile = () => {
  const [account, setAccount] = useState<AccountType>();
  const [academicHistories, setAcademicHistories] =
    useState<AcademicHistoryType[]>();
  const [finalEducation, setFinalEducation] = useState<string | undefined>();
  const [profile, setProfile] = useState<ProfileType>();
  const [openAcademicHistoryModal, setOpenAcademicHistoryModal] =
    useState(false);
  // const [openEditAcademicHistoryModal, setOpenEditAcademicHistoryModal] =
  //   useState(false);
  const [openProfileModal, setOpenProfileModal] = useState(false);
  const [openEditBiographyModal, setOpenEditBiographyModal] = useState(false);
  const [untilDate, setUntilDate] = useState<string>();
  const [workHistory, setWorkHistory] = useState<WorkHistoryType>();

  const accountId = account?.id;

  const handleOpenProfileModal = () => {
    setOpenProfileModal(true);
  };
  const handleCloseProfileModal = () => {
    setOpenProfileModal(false);
  };

  const handleOpenEditBiographyModal = () => {
    setOpenEditBiographyModal(true);
  };
  const handleCloseEditBiographyModal = () => {
    setOpenEditBiographyModal(false);
  };

  const handleOpenAcademicHistoryModal = () => {
    setOpenAcademicHistoryModal(true);
  };
  const handleCloseAcademicHistoryModal = () => {
    setOpenAcademicHistoryModal(false);
  };

  // const handleOpenEditAcademicHistoryModal = () => {
  //   setOpenEditAcademicHistoryModal(true);
  // };
  // const handleCloseEditAcademicHistoryModal = () => {
  //   setOpenEditAcademicHistoryModal(false);
  // };

  useEffect(() => {
    const fetchAccounts = async () => {
      const res = await HttpClient.request({
        method: "GET",
        url: "http://localhost:3000/accounts/1",
      });

      const accountData = res.data;
      setAccount(accountData);
    };
    fetchAccounts();
  }, []);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await HttpClient.request({
        method: "GET",
        url: `http://localhost:3000/accounts/${accountId}/profiles`,
      });

      const profileData = res.data[0];
      setProfile(profileData);
    };
    fetchProfile();
  }, [account]);

  useEffect(() => {
    const fetchWorkHistory = async () => {
      const res = await HttpClient.request({
        method: "GET",
        url: "http://localhost:3000/work_histories/1",
      });

      const workHistoryData = res.data;
      setWorkHistory(workHistoryData);
    };
    fetchWorkHistory();
  }, []);

  useEffect(() => {
    const fetchAcademicHistory = async () => {
      const res = await HttpClient.request({
        method: "GET",
        url: "http://localhost:3000/academic_histories/",
      });
      const academicHistories = res.data;

      setAcademicHistories(academicHistories);
    };
    fetchAcademicHistory();
  }, []);

  useEffect(() => {
    if (!academicHistories) return;
    const length = academicHistories.length;
    for (let i = 0; i < length; i++) {
      setUntilDate(academicHistories[i].untilDate);
    }
  }, [academicHistories]);

  // untilDateの降順をconsole.logで取得しようとしています
  useEffect(() => {
    if (!academicHistories) return;
    const newAcademicHistories = academicHistories.sort(function (
      a: AcademicHistoryType,
      b: AcademicHistoryType
    ) {
      if (a.untilDate > b.untilDate) return -1;
      if (b.untilDate > a.untilDate) return 1;
      return 0;
    });
    // 最終学歴をstateに代入
    setFinalEducation(newAcademicHistories[0].name);
    if (newAcademicHistories[0].untilDate === null) {
      setFinalEducation(newAcademicHistories[1].name);
    }
  }, [academicHistories, untilDate]);

  return (
    <div className={styles.root}>
      <div className={styles.profileContainer}>
        <div className={styles.profileImageWrapper}>
          <ProfileImage />
          <div className={styles.buttonWrapper}>
            <Button
              onClick={handleOpenProfileModal}
              text={"プロフィールを編集"}
            />
          </div>

          <div className={styles.basicInfoContainer}>
            <div className={styles.leftWrapper}>
              <ProfileMainImage />
            </div>
            <div className={styles.rightWrapper}>
              <div className={styles.nameAgeWrapper}>
                <h2>{profile?.name}(59)</h2>
              </div>
              <div className={styles.addressWrapper}>
                <div className={styles.leftWrapper}>
                  <p>住まい</p>
                </div>
                <p>{profile?.address}</p>
              </div>
              <div className={styles.educationalBackgroundWrapper}>
                <p className={styles.leftWrapper}>最終学歴</p>
                {finalEducation ? <p>{finalEducation}</p> : ""}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.selfIntroductionContainer}>
          <div className={styles.topWrapper}>
            <h1>自己紹介</h1>
            <div className={styles.buttonWrapper}>
              <Button
                onClick={handleOpenEditBiographyModal}
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
              {academicHistories && (
                <AcademicHistoryTable
                  academicHistories={academicHistories}
                  // onClick={() => handleOpenEditAcademicHistoryModal()}
                />
              )}
            </div>

            <div className={styles.buttonWrapper}>
              <Button
                text={"学歴を追加する"}
                onClick={() => handleOpenAcademicHistoryModal()}
              />
            </div>
          </div>
          <div className={styles.bottomSpace}></div>
        </div>

        {openProfileModal && (
          <div className={styles.profileModalContainer}>
            {accountId && profile && (
              <ProfileModal
                openProfileModal={openProfileModal}
                handleCloseProfileModal={handleCloseProfileModal}
                accountId={accountId}
                profile={profile}
              />
            )}
          </div>
        )}

        {openEditBiographyModal && (
          <div className={styles.profileModalContainer}>
            {accountId && (
              <EditBiographyModal
                openEditBiographyModal={openEditBiographyModal}
                handleCloseEditBiographyModal={handleCloseEditBiographyModal}
                profile={profile}
                accountId={accountId}
              />
            )}
          </div>
        )}

        {openAcademicHistoryModal && (
          <div className={styles.academicHistoryModalContainer}>
            {accountId && (
              <AcademicHistoryModal
                openAcademicHistoryModal={openAcademicHistoryModal}
                handleCloseAcademicHistoryModal={
                  handleCloseAcademicHistoryModal
                }
                academicHistories={academicHistories}
                accountId={accountId}
              />
            )}
          </div>
        )}

        {/* {openEditAcademicHistoryModal && (
          <div className={styles.academicHistoryModalContainer}>
            {accountId && (
              <EditAcademicHistoryModal
                openEditAcademicHistoryModal={openEditAcademicHistoryModal}
                handleCloseEditAcademicHistoryModal={
                  handleCloseEditAcademicHistoryModal
                }
                academicHistories={academicHistories}
                accountId={accountId}
              />
            )}
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Profile;
