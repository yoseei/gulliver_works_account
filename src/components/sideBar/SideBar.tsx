import React from "react";
import styles from "./SideBar.module.scss";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

interface PropsTypes {
  textA: "募集一覧" | "企業詳細";
  textB: "募集管理" | "マイページ";
  textC?: "サインアウト";
}
const SideBar = (props: PropsTypes) => {
  const history = useHistory();

  const signOut = () => {
    localStorage.removeItem("GULLIVER_WORKS_AUTH_TOKEN");
    localStorage.removeItem("LOGIN_AS");
    history.push("/signin");
  };
  return (
    <div className={styles.root}>
      <div className={styles.recruitmentProfileContainer}>
        <p className={styles.recruitmentLink}>{props.textA}</p>
        <p className={styles.profileLink}>
          <Link to="/profile">{props.textB}</Link>
        </p>
        <p className={styles.profileLink} onClick={() => signOut()}>
          <Link to="/signin">{props.textC}</Link>
        </p>
      </div>
    </div>
  );
};

export default SideBar;
