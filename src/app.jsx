import { RootRoutes } from "./routes";
import BodyClassManager from "./class-manager/body-class-toggle"
import { useShopAction } from "./hooks/useShopAction";
export const App = () => {

  const{theme, items} = useShopAction()


  return (
    <>
      <BodyClassManager isthemeDark={theme}  />
      <RootRoutes />
    </>
  );
};
