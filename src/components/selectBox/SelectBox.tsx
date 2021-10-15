import React from "react";
import styles from "./SelectBox.module.scss";

type PropsType = {
  name: string;
  value: string[];
};
const SelectBox = ({ name, value }: PropsType) => {
  return (
    <div className={styles.root}>
      <select name={name}>
        <option value={value}>{value}</option>
      </select>
    </div>
  );
};

export default SelectBox;
