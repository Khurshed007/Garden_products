import React, { useState} from "react";
import styles from "./index.module.scss";
import {
  NavHeartIcon,
  LogoIcon,
  NavCartIcon,
} from "../../assets/icons.jsx";
import { IconToggle } from "../../components/icon-toggle";
import { IconCounter } from "../../components/icon-counter";
import { NavLink, Link } from "react-router-dom";
import { Hamburger } from "./hamburger/hambruger.jsx";
import cn from "classnames";
import { ModallMessage } from "../modall-message/modall-message.jsx";
import { useSelector} from "react-redux";
import { getCartCounter} from "../../store/selectors.js";
import { getLikesCounter } from "../../store/selectors.js";
import { useShopAction } from "../../hooks/useShopAction.js";
export const Navigation = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const [isModallOpen, setIsModallOpen] = useState(false)
  const {toggleTheme, theme} = useShopAction()
  const cartCounter = useSelector(getCartCounter)
  const likesCounter = useSelector(getLikesCounter)
  
  const onSwitchToggle = () => {
    setIsToggleOn((prev) => !prev);
     toggleTheme()
  };

  const onToggleHamburgersClass = () => {
    setIsHamburgerActive((prev) => !prev);
  };

  const handleOpenModal = () => {
  setIsModallOpen(true);
  };
  
  const getClassName = ({ isActive }) => (isActive ? styles.active : "");

  return (
    <div
      className={cn(styles.header)}
    >
      <div className={styles.iconWrapper}>
        <LogoIcon className={styles.logo} />
        <IconToggle checked={isToggleOn} onToggle={onSwitchToggle} />
      </div>
      <nav
        className={cn(
          styles.navbar,{ [styles.active]: isHamburgerActive },
        )}
      >
        <button className={styles.btn} onClick={handleOpenModal}>1 Day Discount</button>
        <ul>
          <li>
            <NavLink to="/" className={getClassName}>
              Main Page
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories" className={getClassName}>
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink to="/all-products" className={getClassName}>
              All Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/all-sales" className={getClassName}>
              All Sales
            </NavLink>
          </li>
        </ul>

        {/* <NavLink to='/categories' className={getClassName}>Categories</NavLink>
        <NavLink to='/all-products' className={getClassName}>All Products</NavLink>
        <NavLink to='/all-sales' className={getClassName}>All Sales</NavLink> */}
      </nav>
      <div className={styles.heartCartWrapper}>
        {/* TODO: сделать лайки, красить иконки согласно теме */}
        <Link to="/liked-products">
          <IconCounter count={likesCounter} displayActive={"display_active"}>
            <NavHeartIcon
              className={
                isToggleOn ? cn(styles.dark, styles.heart) : styles.heart
              }
            />
          </IconCounter>
        </Link>
        <Link to="/cart">
          <IconCounter count={cartCounter}>
            <NavCartIcon
              className={
                isToggleOn ? cn(styles.dark, styles.cart) : styles.cart
              }
            />
          </IconCounter>
        </Link>

        <ModallMessage
          isModallOpen={isModallOpen}
          setIsModallOpen={setIsModallOpen}
          
        />
        <Hamburger
          isToggleOn={isToggleOn}
          isHamburgerActive={isHamburgerActive}
          theme={theme}
          onToggleHamburgersClass={onToggleHamburgersClass}
        />
      </div>
    </div>
  );
};
