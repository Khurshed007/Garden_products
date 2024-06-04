import { useSelector } from "react-redux"
import styles from "./index.module.scss"
import React from "react";
import { Link } from "react-router-dom";
export const BreadCrumbs = () => {
  let myPath = useSelector((state) => state.shop.path);
    
    console.log(myPath, "Path of mine")
    return (
      <div className={styles.breadcrumbs}>
      {myPath.map((crumb, index) => {
     
        return (
          <div key={index} className={styles.breadcrumb_item}>{crumb}</div>
        );
      })}
    </div>
  //   <div className={styles.breadcrumbs}>
  //   {myPath.map((crumb, index) => (
  //     <React.Fragment key={index}>
  //       <Link to={crumb.path} className={styles.breadcrumb_item}>
  //         {crumb.label}
  //       </Link>
  //       {index < myPath.length - 1 && <span className={styles.breadcrumb_separator}>-</span>}
  //     </React.Fragment>
  //   ))}
  // </div>
     
    )
}