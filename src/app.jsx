import { RootRoutes } from "./routes";
import BodyClassManager from "./class-manager/body-class-toggle"
import { useShopAction } from "./hooks/useShopAction";
import { requestAllProductItem, requestCategoryItem } from "./store/async-action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { withErrorBoundary } from "react-error-boundary";
import { NotFound } from "./views/404/not found";
import { Navigate } from "react-router-dom";
 const App = () => {
  const{theme, categoryProducts} = useSelector((state) => state.shop)

   if(!categoryProducts && !categoryProducts.length){
    throw new Error("Error")
   }

const dispatch = useDispatch()

  return (
    <>
      <BodyClassManager isthemeDark={theme}  />
      <RootRoutes />
    </>
  );
};
export default withErrorBoundary(App, {
  fallback: <NotFound reload = {true}/>
})