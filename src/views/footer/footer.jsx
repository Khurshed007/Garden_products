import React from "react";
import styles from "./index.module.scss"
import cn from "classnames"

export const Footer = () => {
    return (
        <footer>
       <div className={styles.categories_title}>
      <h1 className={styles.categories_text}>Contact</h1>
    
    </div>
        <div className={styles.card_content}>
  
  
           <div className={styles.cards_item}>
              <div className={styles.cards_item_up}>
                 <div className={cn(styles.cards, styles.first_card)}>
                    <h3 className={styles.cards_title}>Phone</h3>
                    <p className={styles.cards_text}>+49 999 999 99 99</p>
                 </div>
                 <div className={cn(styles.cards, styles.second_card)}><span></span><span></span>
                 
                 <h3 className={styles.cards_title} >Working Hours</h3>
                    <p className={styles.cards_text}>24 Hours a day</p>
                 </div>
                
              </div>
              <div class={styles.cards_item_down}>
                 <div className={cn(styles.cards, styles.first_card)}>
                    <h3 className={styles.cards_title}>Addresse</h3>
                    <p className={styles.cards_text}> Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland</p>
                 </div>
                 <div className={cn(styles.cards,styles.second_card)}>
                    <h3 className={styles.cards_title} >Working Hours</h3>
                    <p className={styles.cards_text}>24 Hours a day</p>
                 </div>
              </div>
           </div>
           <div class={styles.map_item}>
              <div className={cn(styles.cards, )}>
                 <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.409089557189!2d13.372469776265694!3d52.50793529049532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sru!2s!4v1715356710648!5m2!1sru!2s"
                    allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
           </div>
        </div>
     </footer>
    );
};
