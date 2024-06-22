import styles from "../modall-message/index.module.scss";
import { Link } from "react-router-dom";
import cn from "classnames";
import { useNavigate } from "react-router-dom";
export const ModallNotFound = ({ message, btnText, flexStart, reload }) => {
  const navigate = useNavigate();
  const onReload = () => {
    navigate("/", { replace: true });
    window.location.reload();
  };
  return (
    <div className={cn(styles.content, { [styles.flex_start]: flexStart })}>
      <p>{message}</p>
      <Link to="/">
        <button
          className={styles.btn}
          onClick={() => (reload ? onReload() : null)}
        >
          {btnText}
        </button>
      </Link>
      <br />
    </div>
  );
};
