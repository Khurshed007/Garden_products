import React, { useState, useEffect } from "react";
import { getDiscountPercent } from "../../utils/getDiscountPercent";
import { useSearchParams } from "react-router-dom";
import { FilterForm } from "./filter-form";

const FilterBlock = ({ posts, setFilteredPosts, isAllSales}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const postQuery = searchParams.get("post");
  const fromQuery = searchParams.get("from");
  const toQuery = searchParams.get("to");
  const discountQuery = searchParams.get("discount");

  const [sortOption, setSortOption] = useState("default");
  const [showDiscountedItems, setShowDiscountedItems] = useState(
    discountQuery === "1"
  );
  const [fromValue, setFromValue] = useState(fromQuery || "");
  const [toValue, setToValue] = useState(toQuery || "");

  useEffect(() => {
    // Синхронизация состояния с параметрами URL при монтировании компонента
    setSortOption(searchParams.get("sort") || "default");
    setShowDiscountedItems(discountQuery === "1");
    setFromValue(fromQuery || "");
    setToValue(toQuery || "");
  }, [searchParams, discountQuery, fromQuery, toQuery]);

  useEffect(() => {
    let filteredPosts = posts.filter((post) => {
      let condition = true;

      if (postQuery && String(post.price) !== postQuery) {
        condition = false;
      }

      if (post.discont_price !== null) {
        if (fromValue && post.discont_price < fromValue) {
          condition = false;
        }
        if (toValue && post.discont_price > toValue) {
          condition = false;
        }
        if (post.discont_percent === null) {
          condition = false;
        }
      } else {
        if (fromValue && post.price < fromValue) {
          condition = false;
        }
        if (toValue && post.price > toValue) {
          condition = false;
        }
      }

      return condition;
    });

    if (showDiscountedItems) {
      filteredPosts = filteredPosts
        .sort((elem1, elem2) => {
          const discount1 = getDiscountPercent(
            elem1.price,
            elem1.discont_price
          );
          const discount2 = getDiscountPercent(
            elem2.price,
            elem2.discont_price
          );
          return discount2 - discount1;
        })
        .filter(({ discont_price }) => discont_price !== null);
      if (sortOption === "price-high-low") {
        filteredPosts.sort((a, b) => b.discont_price - a.discont_price);
      } else if (sortOption === "price-low-high") {
        filteredPosts.sort((a, b) => a.discont_price - b.discont_price);
      }
    } else {
      if (sortOption === "price-low-high") {
        filteredPosts.sort((a, b) => a.price - b.price);
      } else if (sortOption === "price-high-low") {
        filteredPosts.sort((a, b) => b.price - a.price);
      } else if (sortOption === "newest") {
        filteredPosts.sort((a, b) => {
          return a.title.localeCompare(b.title); // По Алфавиту
        });
      } else {
        filteredPosts.sort((a, b) => a.id - b.id);
      }
    }

    setFilteredPosts(filteredPosts);
  }, [
    posts,
    postQuery,
    fromValue,
    toValue,
    sortOption,
    showDiscountedItems,
    setFilteredPosts,
  ]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    updateSearchParams({ sort: e.target.value });
  };

  const handleCheckboxClick = () => {
    const newDiscountState = !showDiscountedItems;
    setShowDiscountedItems(newDiscountState);
    updateSearchParams({ discount: newDiscountState ? 1 : 0 });
  };

  const handleFromChange = (e) => {
    setFromValue(e.target.value);
    updateSearchParams({ from: e.target.value });
  };

  const handleToChange = (e) => {
    setToValue(e.target.value);
    updateSearchParams({ to: e.target.value });
  };

  const updateSearchParams = (updatedParams) => {
    const newParams = {
      ...Object.fromEntries(searchParams.entries()),
      ...updatedParams,
    };
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
