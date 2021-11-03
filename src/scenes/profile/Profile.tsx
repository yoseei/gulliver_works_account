import React, { useEffect, useState } from "react";
import styles from "./Profile.module.scss";

import { AccountType } from "../../data/account/index";
import { AcademicHistoryType } from "../../data/academicHistory/index";
import AcademicHistoryTable from "../../components/academicHistoryTable/AcademicHistoryTable";
import AcademicHistoryModal from "../../components/academicHistoryModal/AcademicHistoryModal";
import Button from "../../components/button/Button";
import EditBiographyModal from "../../components/editBiographyModal/EditBiographyModal";
import { HttpClient } from "../../utilities/axiosInstance";
import { localHostURL } from "../../hooks/localHostURL";
import { notification } from "antd";
import ProfileImage from "../../components/profileImage/ProfileImage";
import ProfileMainImage from "../../components/profileMainImage/ProfileMainImage";
import ProfileModal from "../../components/profileModal/ProfileModal";
import { ProfileType } from "../../data/profile/index";
import { WorkHistoriesType } from "../../data/workHistory/index";
import WorkHistoryTable from "../../components/workHistoryTable/WorkHistoryTable";
import CreateWorkHistoryModal from "../../components/createWorkHistoryModal/CreateWorkHistoryModal";

const Profile = () => {
  const [account, setAccount] = useState<AccountType>();
  const [academicHistories, setAcademicHistories] =
    useState<AcademicHistoryType[]>();
  const [finalEducation, setFinalEducation] = useState<string | undefined>();
  const [profile, setProfile] = useState<ProfileType>();
  const [openAcademicHistoryModal, setOpenAcademicHistoryModal] =
    useState(false);
  const [openWorkHistoryModal, setOpenWorkHistoryModal] = useState(false);
  const [openProfileModal, setOpenProfileModal] = useState(false);
  const [openEditBiographyModal, setOpenEditBiographyModal] = useState(false);
  const [untilDate, setUntilDate] = useState<string>();
  const [workHistories, setWorkHistories] = useState<
    WorkHistoriesType[] | undefined
  >();

  const accountId = account?.id;

  const handleToggleProfileModal = () => {
    setOpenProfileModal(!openProfileModal);
  };

  const handleToggleEditBiographyModal = () => {
    setOpenEditBiographyModal(!openEditBiographyModal);
  };

  const handleToggleAcademicHistoryModal = () => {
    setOpenAcademicHistoryModal(!openAcademicHistoryModal);
  };

  const handleToggleWorkHistoryModal = () => {
    setOpenWorkHistoryModal(!openWorkHistoryModal);
  };

  const addWorkHistory = async (workHistory: WorkHistoriesType) => {
    if (!workHistories) return;
    try {
      await HttpClient.request({
        method: "POST",
        url: `${localHostURL}/work_histories`,
        data: {
          ...workHistory,
          accountId: accountId,
        },
      });
      const fetchWorkHistories = async () => {
        const res = await HttpClient.request({
          method: "GET",
          url: `${localHostURL}/accounts/${accountId}/work_histories`,
        });
        const workHistories = res.data;
        setWorkHistories(workHistories);
      };
      fetchWorkHistories();
    } catch (err) {
      notification.error({
        message: "エラーが発生しました。",
      });
    }
  };

  const addAcademicHistory = async (academicHistory: AcademicHistoryType) => {
    if (!academicHistories) return;
    try {
      await HttpClient.request({
        method: "POST",
        url: `${localHostURL}/academic_histories`,
        data: {
          ...academicHistory,
          accountId: accountId,
        },
      });

      const fetchAcademicHistories = async () => {
        const res = await HttpClient.request({
          method: "GET",
          url: `${localHostURL}/accounts/${accountId}/academic_histories`,
        });
        const academicHistories = res.data;
        setAcademicHistories(academicHistories);
      };
      fetchAcademicHistories();
    } catch (err) {
      notification.error({
        message: "エラーが発生しました。",
      });
    }
    setAcademicHistories([...academicHistories, academicHistory]);
  };

  const editWorkHistory = async (
    editedWorkHistory: WorkHistoriesType,
    workHistory: WorkHistoriesType
  ) => {
    if (!editedWorkHistory) return;
    console.log(editedWorkHistory);

    const res = await HttpClient.request({
      method: "PUT",
      url: `${localHostURL}/work_histories/${workHistory?.id}`,
      data: {
        ...editedWorkHistory,
        accountId: accountId,
      },
    });
    const fetchWorkHistories = async () => {
      const res = await HttpClient.request({
        method: "GET",
        url: `${localHostURL}/accounts/${accountId}/work_histories`,
      });
      const workHistories = res.data;
      setWorkHistories(workHistories);
    };
    fetchWorkHistories();
  };

  const editAcademicHistory = async (
    editedAcademicHistory: AcademicHistoryType,
    academicHistory: AcademicHistoryType
  ) => {
    const res = await HttpClient.request({
      method: "PUT",
      url: `${localHostURL}/academic_histories/${academicHistory?.id}`,
      data: {
        ...editedAcademicHistory,
        accountId: accountId,
      },
    });
    // 学歴編集後stateを更新 //
    const fetchAcademicHistories = async () => {
      const res = await HttpClient.request({
        method: "GET",
        url: `${localHostURL}/accounts/${accountId}/academic_histories`,
      });
      const academicHistories = res.data;
      setAcademicHistories(academicHistories);
    };
    fetchAcademicHistories();
  };

  const deleteAcademicHistory = async (
    academicHistory: AcademicHistoryType
  ) => {
    try {
      await HttpClient.request({
        method: "DELETE",
        url: `${localHostURL}/academic_histories/${academicHistory?.id}`,
      });

      const fetchAcademicHistories = async () => {
        const res = await HttpClient.request({
          method: "GET",
          url: `${localHostURL}/accounts/${accountId}/academic_histories`,
        });
        const academicHistories = res.data;
        setAcademicHistories(academicHistories);
      };
      fetchAcademicHistories();
    } catch (err) {
      notification.error({
        message: "エラーが発生しました。",
      });
    }
  };

  const deleteWorkHistory = async (workHistory: WorkHistoriesType) => {
    try {
      if (!workHistory) return;
      await HttpClient.request({
        method: "DELETE",
        url: `${localHostURL}/work_histories/${workHistory?.id}`,
      });

      const fetchWorkHistories = async () => {
        const res = await HttpClient.request({
          method: "GET",
          url: `${localHostURL}/accounts/${accountId}/work_histories`,
        });
        const workHistories = res.data;
        setWorkHistories(workHistories);
      };
      fetchWorkHistories();
    } catch (err) {
      notification.error({
        message: "エラーが発生しました。",
      });
    }
  };

  useEffect(() => {
    const fetchAccounts = async () => {
      const res = await HttpClient.request({
        method: "GET",
        url: `${localHostURL}/accounts/1`,
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
        url: `${localHostURL}/accounts/${accountId}/profiles`,
      });

      const profileData = res.data[0];
      setProfile(profileData);
    };
    fetchProfile();
  }, [account]);

  useEffect(() => {
    const fetchWorkHistories = async () => {
      const res = await HttpClient.request({
        method: "GET",
        url: `${localHostURL}/accounts/${accountId}/work_histories`,
      });
      const workHistories = res.data;
      setWorkHistories(workHistories);
    };
    fetchWorkHistories();
  }, [accountId]);

  useEffect(() => {
    const fetchAcademicHistories = async () => {
      const res = await HttpClient.request({
        method: "GET",
        url: `${localHostURL}/accounts/${accountId}/academic_histories`,
      });
      const academicHistories = res.data;
      setAcademicHistories(academicHistories);
    };
    fetchAcademicHistories();
  }, [accountId]);

  useEffect(() => {
    if (!academicHistories?.length) return;
    const length = academicHistories.length;
    for (let i = 0; i < length; i++) {
      setUntilDate(academicHistories[i].untilDate);
    }
  }, [academicHistories]);

  // untilDateの降順をconsole.logで取得しようとしています
  useEffect(() => {
    if (!academicHistories?.length) return;
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
              onClick={() => handleToggleProfileModal()}
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
                onClick={() => handleToggleEditBiographyModal()}
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
              {workHistories && (
                <WorkHistoryTable
                  accountId={accountId}
                  deleteWorkHistory={deleteWorkHistory}
                  editWorkHistory={editWorkHistory}
                  workHistories={workHistories}
                />
              )}
            </div>

            <div className={styles.buttonWrapper}>
              <Button
                text={"職歴を追加する"}
                onClick={() => handleToggleWorkHistoryModal()}
              />
            </div>
          </div>

          <div className={styles.studyHistoryWrapper}>
            <h1 className={styles.studyHistoryTitle}>学歴</h1>

            <div className={styles.companyWrapper}>
              {academicHistories && (
                //------- AcademicHistoryTable ------//
                <AcademicHistoryTable
                  academicHistories={academicHistories}
                  accountId={accountId}
                  deleteAcademicHistory={deleteAcademicHistory}
                  editAcademicHistory={editAcademicHistory}
                />
              )}
            </div>

            <div className={styles.buttonWrapper}>
              <Button
                text={"学歴を追加する"}
                onClick={() => handleToggleAcademicHistoryModal()}
              />
            </div>
          </div>
          <div className={styles.bottomSpace}></div>
        </div>

        {/* //----------- Create Modals -------------// */}
        {openProfileModal && (
          <div className={styles.profileModalContainer}>
            {accountId && profile && (
              <ProfileModal
                openProfileModal={openProfileModal}
                handleCloseProfileModal={handleToggleProfileModal}
                accountId={accountId}
                profile={profile}
              />
            )}
          </div>
        )}

        {openEditBiographyModal && accountId && (
          <EditBiographyModal
            openEditBiographyModal={openEditBiographyModal}
            handleCloseEditBiographyModal={handleToggleEditBiographyModal}
            profile={profile}
            accountId={accountId}
          />
        )}

        {openAcademicHistoryModal && accountId && (
          <AcademicHistoryModal
            addAcademicHistory={addAcademicHistory}
            handleCloseAcademicHistoryModal={handleToggleAcademicHistoryModal}
            openAcademicHistoryModal={openAcademicHistoryModal}
          />
        )}
        {openWorkHistoryModal && accountId && (
          <CreateWorkHistoryModal
            addWorkHistory={addWorkHistory}
            closeWorkHistoryModal={handleToggleWorkHistoryModal}
            openWorkHistoryModal={openWorkHistoryModal}
          />
        )}
      </div>
    </div>
  );
};

export default Profile;
