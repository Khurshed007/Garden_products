import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import { getDiscountPercent } from '../../../utils/getDiscountPercent';
import { useSearchParams } from 'react-router-dom';
import cn from "classnames"

const FilterBlock = ({ posts, setFilteredPosts,allSales }) => {
 

    return (
        <form autoComplete="off" className= {styles.block}>
            <div className={styles.price_content}>
            <label htmlFor="">Price</label>
            <input 
                type="number" 
                name="from" 
                placeholder="from" 
   
                className= {styles.price}
            />
            <input 
                type="number" 
                name="to" 
                placeholder="to" 
 
         
                className= {styles.price} 
            />
            </div>
            {allSales || <div className={styles.discount_content}>
               <label htmlFor="discount">Discounted Items</label>
          <input className= {styles.discount}  type="checkbox" name='discount'/>
            </div>}
             
             <div className={styles.sort_content}>
            <label htmlFor="sort-option">Sorted</label>
            <select className = {styles.sort} id="sort-option" name="sort-option">
                <option value="default">default</option>
                <option value="newest">newest</option>
                <option value="price-low-high">Price: price-low-high</option>
                <option value="price-high-low">Price: price-high-low</option>
            </select>
            </div>
        </form>
    );
};

export default FilterBlock;