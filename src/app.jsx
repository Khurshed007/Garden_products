import { RootRoutes } from "./routes";
import BodyClassManager from "./class-manager/body-class-toggle"
import { useSelector } from "react-redux";
import { withErrorBoundary } from "react-error-boundary";
import { NotFound } from "./views/404/not found";
 const App = () => {
  const{theme, categoryProducts} = useSelector((state) => state.shop)

   if(!categoryProducts && !categoryProducts.length){
    throw new Error("Error")
   }

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