
import styles from "../modall-message/index.module.scss"
import { Link } from "react-router-dom";
import cn from "classnames"

export const ModallNotFound = ({message, btnText, flexStart}) => {
  return (
      <div className={cn(styles.content, {[styles.flex_start] : flexStart })}>
        <p>
         {message}
        </p>
        <Link to="/" className={styles.btn}>
          {btnText}
        </Link>
        <br />
      </div>

  );
};
