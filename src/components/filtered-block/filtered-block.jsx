import React, { useState, useEffect } from "react";
import { getSortedPosts } from "../../utils/getSortedPosts";
import { useSearchParams } from "react-router-dom";
import { FilterForm } from "./filter-form";

const FilterBlock = ({ posts, setFilteredPosts, isAllSales }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  // fromQuery, toQuery, discountQuery: Эти переменные получают соответствующие параметры из URL.
  const fromQuery = searchParams.get("from"); // Передастся значение from из URL
  const toQuery = searchParams.get("to"); // Передастся значение из to URL
  const discountQuery = searchParams.get("discount"); // Передастся значение discount ИЗ URL
  const sort = searchParams.get("sort");
  // Стейты которые в зависимости от наших searchParams дают значение
  const [sortOption, setSortOption] = useState(sort || "default"); // Так как при обновлении стейты очищаются, а SeacrParams нет.  изн. положение нужно ставить
  const [showDiscountedItems, setShowDiscountedItems] = useState(
    // true || false
    discountQuery === "1"
  );
  const [fromValue, setFromValue] = useState(fromQuery || ""); // Значение fromQuery
  const [toValue, setToValue] = useState(toQuery || ""); // либо пустая строка, так как иначе, Ract будет жаловаться

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
      //  alert(condition)
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
    setFromValue(e.target.value > 0 ? e.target.value : "");
    updateSearchParams({ from: e.target.value > 0 ? e.target.value : "" });
  };
  //handleToChange утанавливает для toValue значение из Input to
  const handleToChange = (e) => {
    setToValue(e.target.value > 0 ? e.target.value : "");
    updateSearchParams({ to: e.target.value > 0 ? e.target.value : "" });
  };

  // updateSearchParams берет в объ значения из inputoв отдает searchParams
  // Устанавливает для url значения

  const updateSearchParams = (updatedParams) => {
    const newParams = {
      // из Map делаем объект. Object.fromEntries
      // метод Object.fromEntries получив массив пар вида [ключ, значение], он создаёт из них объект
      ...Object.fromEntries(searchParams), // Нужен для того, чтобы заполнить url строку, а не переписать
      ...updatedParams, // Нужен для того, чтобы установить новые свойства перезатирая страые (объ не может хранить 2 один-ых.свой.)
    };

    setSearchParams(newParams); // результат передаем setSearchparams который все напишет на url
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
