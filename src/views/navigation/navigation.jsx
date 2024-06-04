import React, { useState} from "react";
import { NavLink, Link } from "react-router-dom";

export const Navigation = () => {
 

  return (
    
        <ul>
          <li>
            <NavLink to="/" >
              Main Page
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories" >
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink to="/all-products" >
              All Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/all-sales" >
              All Sales
            </NavLink>
          </li>
        </ul>

  )
   
     
};
