import React from "react";
import styles from "./Profile.module.scss";
import Modal from "@material-ui/core/Modal";
import ProfileImage from "../../components/profileImage/ProfileImage";
import ProfileMainImage from "../../components/profileMainImage/ProfileMainImage";
import EditButton from "../../components/editButton/EditButton";
import WorkHistoryTable from "../../components/workHistoryTable/WorkHistoryTable";
import WorkHistoryButton from "../../components/workHistoryButton/WorkHistoryButton";

const Profile = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
                <h2>牧野暉弘(59)</h2>
              </div>
              <div className={styles.addressWrapper}>
                <div className={styles.leftWrapper}>
                  <p>住まい</p>
                </div>
                <p>東京都</p>
              </div>
              <div className={styles.educationalBackgroundWrapper}>
                <p className={styles.leftWrapper}>最終学歴</p>
                <p>青山学院大学大学院</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.selfIntroductionContainer}>
          <div className={styles.topWrapper}>
            <h1>自己紹介</h1>
            <div className={styles.buttonWrapper}>
              <EditButton
                onClick={() => console.log("自己紹介編集ボタンクリック！")}
                text={"編集する"}
              />
            </div>
          </div>
          <div className={styles.mainWrapper}>
            <p>
              高校では、表現活動に挑戦したく、演劇部・美術部・放送部（映像制作）・軽音部の4つの部活に所属していました。作り上げるものは異なりましたが、「観てくれる人のために部員と共に試行錯誤を繰り返すこと」は全ての部活で共通していました。
              大学入学時には体験型デジタルアートを通してものづくりを啓蒙するShibaLabというサークルに所属しました。「お客さんが楽しむインタラクティブアートってなんだろう」と常に疑問を持ちながら情報学部や電子工学部の学生と共に制作しました。
              大学でデザインを学んでいるうちに、これまでの部活動やサークル、課外活動は「ユーザーのためにチームで優れた体験価値を提供すること」に繋がっていると感じ、より深く学んでいきたいと考えています。
            </p>
          </div>

          <div className={styles.workHistoryWrapper}>
            <h1 className={styles.workHistoryTitle}>職歴</h1>

            <div className={styles.dnnWrapper}>
              <WorkHistoryTable
                workingPeriod={"2020-01 - 2021-07"}
                companyName={"株式会社ドーエヌナー"}
                directorName={"企画広報の係長"}
                about={
                  "複数の新規事業の立ち上げからグロースまで担当。ヘルスケアとモバイルアプリの分野では新記録を残した。"
                }
                onClick={() => console.log("編集ボタンクリック！")}
                buttonText={"編集する"}
              />
            </div>

            <div className={styles.cyberWrapper}>
              <WorkHistoryTable
                workingPeriod={"2020-01 - 2021-07"}
                companyName={"株式会社サイバーエージェンス"}
                directorName={"企画広報の係長"}
                about={"大手広告のコンサルティングを担当。"}
                onClick={() => console.log("編集ボタンクリック！")}
                buttonText={"編集する"}
              />
            </div>
            <div className={styles.buttonWrapper}>
              <WorkHistoryButton
                text={"職歴を追加する"}
                onClick={() => console.log("クリック")}
              />
            </div>
          </div>
        </div>

        {open ? (
          <>
            <Modal
              open={open}
              onClose={handleClose}
              // aria-labelledby="simple-modal-title"
              // aria-describedby="simple-modal-description"
            >
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
