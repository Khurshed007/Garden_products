
import styles from "./index.module.scss";

export const FilterForm = ({isAllSales,showDiscountedItems,handleCheckboxClick,fromValue,toValue,handleFromChange,handleToChange,sortOption,handleSortChange}) => {


    return (
<form autoComplete="off" className={styles.block}>
    <div className={styles.price_content}>
      <label htmlFor="">Price</label>
      <input
        type="number"
        name="from"
        placeholder="from"
        value={fromValue}
        onChange={handleFromChange}
        className={styles.price}
      />
      <input
        type="number"
        name="to"
        placeholder="to"
        value={toValue}
        onChange={handleToChange}
        className={styles.price}
      />
    </div>
    {isAllSales || (
      <div className={styles.discount_content}>
        <label htmlFor="discount">Discounted Items</label>
        <input
          className={styles.discount}
          type="checkbox"
          name="discount"
          checked={showDiscountedItems}
          onChange={handleCheckboxClick}
        />
      </div>
    )}

    <div className={styles.sort_content}>
      <label htmlFor="sort-option">Sorted</label>
      <select
        className={styles.sort}
        id="sort-option"
        name="sort-option"
        value={sortOption}
        onChange={handleSortChange}
      >
        <option value="default">default</option>
        <option value="newest">newest</option>
        <option value="price-low-high">Price: price-low-high</option>
        <option value="price-high-low">Price: price-high-low</option>
      </select>
    </div>
  </form>

    )
    
}