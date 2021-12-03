import React from "react";
import styles from "./SideBar.module.scss";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

interface PropsTypes {
  textA: "募集一覧" | "企業詳細";
  textB: "マイページ" | "募集管理";
  textC?: "サインアウト";
}
const SideBar = ({ textA, textB, textC }: PropsTypes) => {
  const history = useHistory();

  const signOut = () => {
    localStorage.removeItem("GULLIVER_WORKS_AUTH_TOKEN");
    localStorage.removeItem("GULLIVER_WORKS_ENTERPRISE_AUTH_TOKEN");
    localStorage.removeItem("LOGIN_AS");
    history.push("/general_signin");
  };
  return (
    <div className={styles.root}>
      <div className={styles.recruitmentProfileContainer}>
        {textA === "募集一覧" ? (
          <p className={styles.recruitmentLink}>
            <Link to="/">{textA}</Link>
          </p>
        ) : (
          <Link to="/company_detail">{textA}</Link>
        )}

        {textB === "マイページ" ? (
          <p className={styles.profileLink}>
            <Link to="/profile">{textB}</Link>
          </p>
        ) : (
          <p className={styles.profileLink}>
            <Link to="/manage_recruitment">{textB}</Link>
          </p>
        )}

        <p className={styles.profileLink} onClick={() => signOut()}>
          <Link to="/signin">{textC}</Link>
        </p>
      </div>
    </div>
  );
};

export default SideBar;
