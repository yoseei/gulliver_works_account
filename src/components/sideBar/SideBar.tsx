import React from "react";
import styles from "./SideBar.module.scss";
import { Link } from "react-router-dom";

interface PropsTypes {
  textA: string;
  textB: string;
}
const SideBar = (props: PropsTypes) => {
  return (
    <div className={styles.root}>
      <div className={styles.recruitmentProfileContainer}>
        <p className={styles.recruitmentLink}>{props.textA}</p>
        <p className={styles.profileLink}>
          <Link to="/profile">{props.textB}</Link>
        </p>
      </div>
    </div>
  );
};

export default SideBar;
