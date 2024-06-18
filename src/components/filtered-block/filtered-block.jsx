import React, { useState, useEffect } from "react";
import {getSortedPosts} from "../../utils/getSortedPosts"
import { useSearchParams } from "react-router-dom";
import { FilterForm } from "./filter-form";

const FilterBlock = ({ posts, setFilteredPosts, isAllSales }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  // fromQuery, toQuery, discountQuery: Эти переменные получают соответствующие параметры из URL.
  const fromQuery = searchParams.get("from"); // Передастся значение from из URL
  const toQuery = searchParams.get("to"); // Передастся значение из to URL
  const discountQuery = searchParams.get("discount"); // Передастся значение discount ИЗ URL

   // Стейты которые в зависимости от наших searchParams дают значение
  const [sortOption, setSortOption] = useState("default"); 
  const [showDiscountedItems, setShowDiscountedItems] = useState( // true || false
    discountQuery === "1"
  );
  const [fromValue, setFromValue] = useState(fromQuery || ""); // Значение fromQuery и || ""
  const [toValue, setToValue] = useState(toQuery || "");


  useEffect(() => {
    let filteredPosts = posts.filter((post) => {
      let condition = true;
      const price =
        post.discont_price !== null ? post.discont_price : post.price; // Если скидка есть, то берем в занчение price скидку и фиьлтруем по ней

      if (fromValue && price < fromValue) {
        condition = false;
      }

      if (toValue && price > toValue) {
        // без toValue изначально урезается весь массив
        condition = false;
      }

      return condition;
    });

    // Фильтрация в зависимости от состояния чекбокс (если включен)
    // showDiscountedItems если чекбокс влючен
    if (showDiscountedItems) {
      filteredPosts = filteredPosts.filter(
        ({ discont_price }) => discont_price !== null
      );
      getSortedPosts(filteredPosts, sortOption, true);
    }
    getSortedPosts(filteredPosts, sortOption);

    setFilteredPosts(filteredPosts);
  }, [
    posts,
    fromValue,
    toValue,
    sortOption,
    showDiscountedItems,
    setFilteredPosts,
  ]);

  //handleSortChange утанавливает для sortoption значение из select
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    updateSearchParams({ sort: e.target.value });
  };
  //handleSortChange утанавливает для showDiscountedItems сост. чекбокса(true || false)
  const handleCheckboxClick = () => {
    const newDiscountState = !showDiscountedItems;
    setShowDiscountedItems(newDiscountState);
    updateSearchParams({ discount: newDiscountState ? 1 : 0 });
  };
  //handleSortChange утанавливает для setFromValue значение из Input from
  const handleFromChange = (e) => {
    setFromValue(e.target.value);
    updateSearchParams({ from: e.target.value });
  };
  //handleToChange утанавливает для toValue значение из Input to
  const handleToChange = (e) => {
    setToValue(e.target.value);
    updateSearchParams({ to: e.target.value });
  };

  // updateSearchParams берет в объ значения из inputoв отдает searchParams
  // Устанавливает для url значения
  const updateSearchParams = (updatedParams) => {
    const newParams = {
      ...Object.fromEntries(searchParams.entries()),
      ...updatedParams,
    };

    console.log(newParams);
    setSearchParams(newParams);
  };
  return (
    <FilterForm
      isAllSales={isAllSales}
      showDiscountedItems={showDiscountedItems}
      handleCheckboxClick={handleCheckboxClick}
      fromValue={fromValue}
      toValue={toValue}
      handleFromChange={handleFromChange}
      handleToChange={handleToChange}
      sortOption={sortOption}
      handleSortChange={handleSortChange}
    />
  );
};

export default FilterBlock;
