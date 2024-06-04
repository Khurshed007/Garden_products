import React from "react";
import styles from './index.module.scss';
import cn from 'classnames';


export const IconCounter = ({count,displayActive, children}) => {
    return (
        <div className={styles.wrapper} >
            {Boolean(count) && <div className={displayActive ? cn(styles.count, styles.display_active): styles.count}>{count}</div>}
            {children}
          
        </div>
    );
};
