import React from "react";
import styles from "../index.module.scss"
import image from "../../../images/not_found.png"
import { ModallNotFound } from "../../modall-message/modall-not-found";

export const ErrorMessage = () => {
  return (
    <section id={styles.error_section}>
    <div className={styles.container}>
        <h1>
            ERR<img src={image} alt="Cactus" className={styles.cactus}/>R
        </h1>
        <h2>Page Not Found</h2>
    <ModallNotFound center = {true} message = {"Sorry, we couldn't load the page. Please click the button to reload the page."} btnText={"Reload page"} reload={true}/>
    </div>
    </section>
);
};
