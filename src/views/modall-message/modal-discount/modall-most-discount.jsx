import styles from "./index.module.scss";
import { getDiscountItems } from "../../../store/selectors";
import { getDiscountPercent } from "../../../utils/getDiscountPercent";
import { useCartAction } from "../../../hooks/useCartAction";
import { XMark } from "../../../assets/icons";
import { MemoCardItemView } from "../../../components/card-item/card-item-view";
import cn from "classnames";
import { useSelector } from "react-redux";
export const ModallMostDiscounted = ({
  setIsModallOpen,
}) => {
  const dataItems = useSelector((state) => state.shop.items);
  let mostDiscountedItem = useSelector(getDiscountItems)[0];
  const { description, id, image, price, title, discont_price } =
    mostDiscountedItem;
  const { handleAddToCart } = useCartAction();
  const handleCloseModal = () => {
    setIsModallOpen(false);
  };
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>

          <XMark className={cn(styles.mark_x,styles.modalClose ) }  resetCart={handleCloseModal}/>
        {/* </button> */}

        <div className={styles.title_details}>
          <h2>
            {getDiscountPercent(price, discont_price).toFixed(0)}% discount on product of
            the day!
          </h2>
          <MemoCardItemView
            description={description}
            id={id}
            image={image}
            price={price}
            title={title}
            discont={discont_price}
            discontPercent={getDiscountPercent(price, discont_price)}
            noMargin = {true}
          />
          <button
            onClick={() => handleAddToCart(id)}
            className={styles.orderButton}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
