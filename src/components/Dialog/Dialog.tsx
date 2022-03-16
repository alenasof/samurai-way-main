import React from "react";
import styles from "./DialogStyles.module.css";
import DialogList from "./DialogList/DialogList";
import DialogMessages from "./DialogMessages/DialogMessages";

const Dialog = () => {
  let arrayUsers = [
    { name: "Dmitry", path: "/dialogs/1" },
    { name: "Valery", path: "/dialogs/2" },
    { name: "Alena", path: "/dialogs/3" },
    { name: "Helen", path: "/dialogs/4" },
    { name: "Stasya", path: "/dialogs/5" },
    { name: "Kate", path: "/dialogs/6" },
  ];
  const dialogItem = arrayUsers.map((dialog) => (
    <DialogList name={dialog.name} path={dialog.path} />
  ));

  let arrayMessage = [
    { text: "Hi" },
    { text: "How is your" },
    { text: "Yo" },
    { text: "my name is" },
    { text: "this is" },
  ];

  const messageItem = arrayMessage.map((message) => (
    <DialogMessages text={message.text} />
  ));

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_item}>{dialogItem}</div>
      <div className={styles.dialogs_messages}>{messageItem}</div>
    </div>
  );
};

export default Dialog;
