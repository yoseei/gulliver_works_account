import React, { useState } from "react";
import { Switch as AntSwitch } from "antd";
import styles from "./Switch.module.scss";

const Switch = () => {
  const [privateSetting, setPrivateSetting] = useState(false);
  const toggle = () => {
    setPrivateSetting(!privateSetting);
  };

  return (
    <div>
      {privateSetting ? (
        <AntSwitch className={styles.GreenSwitch} onClick={toggle} />
      ) : (
        <AntSwitch className={styles.GraySwitch} onClick={toggle} />
      )}
    </div>
  );
};

export default Switch;
