import React from "react";
import styles from "../DialogStyles.module.css";

type MessagePropsType = {
  text: string;
};
const Message = (props: MessagePropsType) => {
  return <div className={styles.message}>{props.text}</div>;
};

const DialogMessages = (props: MessagePropsType) => {
  return <div className={styles.message}>{props.text}</div>;
};

export default DialogMessages;
