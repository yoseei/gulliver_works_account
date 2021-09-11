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
          <div className={styles.buttonWrapper}>
            <EditButton onClick={handleOpen} text={"プロフィールを編集"} />
          </div>

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
              【エンジニアを志した理由】
              <br />
              人の悩みや課題を解決、また、挑戦する人を応援したい、という思いからエンジニアを目指しています。
              <br />
              <br />
              そのように考えるようになった理由は3つあります。
              <br />
              <br />
              1.コロナ禍で苦しむ、お世話になっている同業者の手助けになりたいと思ったこと。
              <br />
              2.ますます発展していくIT業界で力を付けることが、少子高齢化などが課題となる日本おいて、多くの人の力になるために重要、かつ不可欠なスキルになると感じたこと。
              <br />
              3.今まで培ってきた”音楽”という経験値とITをかけ合わせて、自分のように夢や目標をもって頑張ろうとしている人を応援したいと思ったこと。
              <br />
              <br />
              以上3つが、プログラミングを学習しようと思ったきっかけになります。
              <br />
              <br />
              実際にプログラミングを学習してみると、思ったよりも難しく、苦しむ場面にも遭遇するのですが、それ以上にその困難を乗り越えた先の喜びや「もっと学びたい」という欲や感情が勝り、日に日にエンジニアになりたいという気持ちが強くなっています。
              <br />
              <br />
              前職では、自分で考えて課題を解決し、またメンバーとも協力して、より良いものを作り上げていこう、と常に前向きな姿勢で仕事をしていました。
              <br />
              今後もその経験を活かして、より多くの人たちの課題や悩みを解決できる、便利で価値のあるサービスを提供していけるエンジニアになりたいです。
            </p>
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
