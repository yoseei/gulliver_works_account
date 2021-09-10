import React from "react";
import styles from "./Profile.module.scss";
import Modal from "@material-ui/core/Modal";
import ProfileImage from "../../components/profileImage/ProfileImage";
import ProfileMainImage from "../../components/profileMainImage/ProfileMainImage";
import EditButton from "../../components/editButton/EditButton";

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
          <EditButton onClick={handleOpen} text={"プロフィールを編集"} />

          <div className={styles.basicInfoContainer}>
            <div className={styles.leftWrapper}>
              <ProfileMainImage />
            </div>
            <div className={styles.rightWrapper}>
              <div className={styles.nameAgeWrapper}>
                <h2>甲斐義隆(34)</h2>
              </div>
              <div className={styles.addressWrapper}>
                <div className={styles.leftWrapper}>
                  <p>住まい</p>
                </div>
                <p>千葉県我孫子市</p>
              </div>
              <div className={styles.educationalBackgroundWrapper}>
                <p className={styles.leftWrapper}>最終学歴</p>
                <p>雄城台高等学校</p>
              </div>
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
