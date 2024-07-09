import { MemoCardItemView } from "./card-item-view";
import styles from "./index.module.scss";
import { getDiscountPercent } from "../../utils/getDiscountPercent";
import { Title } from "../title/title";
import { BreadCrumbs } from "../bread-crumbs/bread-crumbs";
import FilterBlock from "../filtered-block/filtered-block";
import { useDispatch, useSelector } from "react-redux";
import {
  getGoodsData,
  getLikesData,
} from "../../store/selectors";
import { useCallback, useMemo } from "react";
import { toggleCartItem } from "../../store/cart-slice";
import { toggleLikes } from "../../store/shop-slice";
export const CardItem = ({
  dataItems,
  text,
  btnText,
  btnDispplay,
  filterData,
  setFilteredPosts,
  hideBreadCrumbs,
  isAllSales,
  path,
}) => {
  const dispatch = useDispatch();
  const likesData = useSelector(getLikesData);
  const goodsData = useSelector(getGoodsData);

  const toggleToLikes = useCallback(
    (articul) => {
      dispatch(toggleLikes(articul));
    },
    [dispatch]
  );

  const handleCartState = useCallback(
    (articul) => {
      dispatch(toggleCartItem(articul));
    },
    [dispatch]
  );

  const memoizedDataItems = useMemo(
    () =>
      dataItems.map(
        ({ price, discont_price, description, image, id, title }) => ({
          price,
          discont_price,
          description,
          image,
          id,
          title,
          discontPercent: getDiscountPercent(price, discont_price),
        })
      ),
    [dataItems]
  );

  return (
    <>
      {!hideBreadCrumbs && <BreadCrumbs />}

      <Title
        text={text}
        btnText={btnText}
        btnDispplay={btnDispplay}
        path={path}
      />

      {filterData && (
        <FilterBlock
          posts={filterData}
          setFilteredPosts={setFilteredPosts}
          isAllSales={isAllSales}
        />
      )}
      <div className={styles.list}>
        {memoizedDataItems.map(
          ({
            price,
            discont_price,
            description,
            image,
            id,
            title,
            discontPercent,
          }) => (
            <MemoCardItemView
              key={id}
              price={price}
              discont={discont_price}
              discontPercent={discontPercent}
              description={description}
              image={image}
              title={title}
              id={id}
              toggleToLikes={toggleToLikes}
              handleCartState={handleCartState}
              goodsData={goodsData[id]}
              // likesData={likesData} // Заставит делать ререндер всех эл-ов, т.к общий
              likesData={likesData[id]} // конкретный эл нужно выбрать тут так как в childComp будет не ясно
            />
          )
        )}
      </div>
    </>
  );
};
