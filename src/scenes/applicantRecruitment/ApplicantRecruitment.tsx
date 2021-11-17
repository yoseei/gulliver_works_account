import React from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import SideBar from "../../components/sideBar/SideBar";
import { useHistory } from "react-router";
const ApplicantRecruitment = () => {
  const history = useHistory();

  const signOut = () => {
    localStorage.removeItem("GULLIVER_WORKS_AUTH_TOKEN");
    localStorage.removeItem("LOGIN_AS");
    history.push("/signin");
  };

  return (
    <div className={styles.root}>
      <div className={styles.text}>
        <h1>すべての募集</h1>
      </div>
      <SideBar textA={"募集一覧"} textB={"マイページ"} />
      <Link to="/signin">ログイン</Link>
      <button onClick={signOut}>サインアウト</button>
    </div>
  );
};

export default ApplicantRecruitment;