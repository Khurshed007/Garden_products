import { useSelector } from "react-redux"
import { useMemo } from "react";
import styles from "./index.module.scss"
import React from "react";
export const BreadCrumbs = () => {
  let myPath = useSelector((state) => state.shop.path);

  const renderedCrumbs = useMemo(() => {
    return myPath.map((crumb, index) => (
      <div key={index} className={styles.breadcrumb_item}>
        {crumb}
      </div>
    ));
  }, [myPath]);

  return <div className={styles.breadcrumbs}>{renderedCrumbs}</div>;
}