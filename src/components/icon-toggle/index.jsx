import React from "react";
import {MoonIcon, SunIcon} from '../../assets/icons';
import styles from "./index.module.scss";
import cn from "classnames";

export const IconToggle = ({ checked, onToggle }) => (
  <div
    className={cn(styles.wrapper, { [styles.active]: checked })}
    onClick={onToggle}
  >
    <SunIcon  className={styles.icon}/>
    <MoonIcon  className={styles.icon}/>
    <div className={cn(styles.circle, { [styles.active]: checked })}></div>
  </div>
);
