import { MemoCardItemView } from "./card-item-view";
import styles from "./index.module.scss";
import { getDiscountPercent } from "../../utils/getDiscountPercent";
import { Title } from "../title/title";
import { BreadCrumbs } from "../bread-crumbs/bread-crumbs";
import FilterBlock from "../../views/category/filtered-block/filtered-block";
export const CardItem = ({
  dataItems,
  text,
  btnText,
  btnDispplay,
  filterData,
  setFilteredPosts,
  hideBreadCrumbs,
  allSales,
  path
}) => {
console.log(path, "path all sale card")
  
  
  return (
    <>
      {hideBreadCrumbs || <BreadCrumbs />}

      <Title text={text} btnText={btnText} btnDispplay={btnDispplay} path={path} />

      {filterData && (
        <FilterBlock posts={filterData} setFilteredPosts={setFilteredPosts}  allSales = {allSales}/>
      )}
      <div className={styles.list}>
        {dataItems.map(
          ({ price, discont_price, description, image, id, title }) => (
            <MemoCardItemView
              key={id}
              price={price}
              discont={discont_price}
              discontPercent={getDiscountPercent(price, discont_price)}
              description={description}
              image={image}
              title={title}
              id={id}
            />
          )
        )}
      </div>
    </>
  );
};
