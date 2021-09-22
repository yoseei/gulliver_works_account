import React from "react";
import Modal from "@material-ui/core/Modal";
import Body from "./Body";

type PropsType = {
  open: boolean;
  handleClose: React.MouseEventHandler<HTMLParagraphElement> | undefined;
};
const ProfileModal = (props: PropsType) => {
  return (
    <Modal open={props.open} onClose={props.handleClose}>
      <Body handleClose={props.handleClose} />
    </Modal>
  );
};

export default ProfileModal;
