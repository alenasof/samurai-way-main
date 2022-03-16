import React from "react";
import styles from "../DialogStyles.module.css";
import { NavLink } from "react-router-dom";

type DialogItemProps = {
  name: string;
  path: string;
};

const DialogList = (props: DialogItemProps) => {
  return (
    <div className={styles.dialog}>
      <NavLink to={props.path} className={styles.link}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogList;
