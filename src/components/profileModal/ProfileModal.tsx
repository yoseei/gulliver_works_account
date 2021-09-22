import React from "react";
import Modal from "@material-ui/core/Modal";
import styles from "./ProfileModal.module.scss";
import Body from "./Body";

type PropsType = {
  open: boolean;
  onClose:
    | ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void)
    | undefined;
};
const ProfileModal = (props: PropsType) => {
  return (
    <div className={styles.root}>
      <Modal open={props.open} onClose={props.onClose}>
        {<Body />}
      </Modal>
    </div>
  );
};

export default ProfileModal;
