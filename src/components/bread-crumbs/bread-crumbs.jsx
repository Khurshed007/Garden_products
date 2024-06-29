import { useSelector } from "react-redux"
import { useMemo } from "react";
import styles from "./index.module.scss"
import React from "react";
import cn from "classnames"
export const BreadCrumbs = ({noMargin}) => {
  let myPath = useSelector((state) => state.shop.path);

  const renderedCrumbs = useMemo(() => {
    return myPath.map((crumb, index) => (
      <div key={index} className={ styles.breadcrumb_item}>
        {crumb}
      </div>
    ));
  }, [myPath]);

  return <div className={cn(styles.breadcrumbs, {[styles.active] : noMargin}) }>{renderedCrumbs}</div>;
}