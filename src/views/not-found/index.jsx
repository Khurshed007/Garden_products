import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss"
import image from "../../images/not_found.png"
import { ModallNotFound } from "../modall-message/modall-not-found";

export const NotFound = () => {
  return (
    <section id={styles.error_section}>
    <div className={styles.container}>
        <h1>
            4<img src={image} alt="Cactus" className={styles.cactus}/>4
        </h1>
        <h2>Page Not Found</h2>
    <ModallNotFound center = {true} message = {"We're sorry, the page you requested could not be found. Please go back to the homepage"} btnText={"Go Home"}/>
        {/* <p>We're sorry, the page you requested could not be found. Please go back to the homepage.</p>
        <Link to="/" className={styles.btn}>Go Home</Link>
        <br /> */}
    </div>
    </section>
);
};
