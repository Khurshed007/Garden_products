import styles from "./index.module.scss";
import {
  getDiscountItems,
  getGoodsData,
} from "../../../store/selectors";
import { getDiscountPercent } from "../../../utils/getDiscountPercent";
import { XMark } from "../../../assets/icons";
import { MemoCardItemView } from "../../../components/card-item/card-item-view";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {toggleCartItem } from "../../../store/cart-slice";
import { toggleLikes } from "../../../store/shop-slice";
export const ModallMostDiscounted = ({ setIsModallOpen }) => {
  const dispatch = useDispatch()
  let mostDiscountedItem = useSelector(getDiscountItems)[0];
  const {
    title = null,
    id = null,
    image = null,
    price = null,
    description = null,
    discont_price = null,
  } = mostDiscountedItem || {};
  console.log(id, "id goodsData");
  // const { handleAddToCart, goodsData} = useCartAction();

  const goodsData = useSelector(getGoodsData);


  const handleCartState = (articul) => {
    dispatch(toggleCartItem(articul));
  };
  const handleLikeState = (articul) => {
    dispatch(toggleLikes(articul));
  };

  const handleCloseModal = () => {
    setIsModallOpen(false);
  };
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <XMark
          className={cn(styles.mark_x, styles.modal_close)}
          resetCart={handleCloseModal}
        />
        {/* </button> */}

        <div className={styles.title_details}>
          <h2>
            {getDiscountPercent(price, discont_price).toFixed(0)}% discount on
            product of the day!
          </h2>
          <MemoCardItemView
            description={description}
            id={id}
            image={image}
            price={price}
            title={title}
            discont={discont_price}
            discontPercent={getDiscountPercent(price, discont_price)}
            noMargin={true}
            toggleToLikes = {handleLikeState}

          />
          <button
            onClick={() => handleCartState(id)}
            className={cn(styles.order_button, {
              [styles.active]: goodsData[id],
            })}
          >
            {goodsData[id] ? "Added" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};
