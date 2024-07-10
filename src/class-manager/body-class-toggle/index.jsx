import { useEffect } from "react";

const BodyClassManager = ({ isthemeDark }) => {
  useEffect(() => {
    // Обновление классов на элементе body
    document.body.classList.add(isthemeDark);

    // Очистка классов при размонтировании компонента
    return () => {
      document.body.classList.remove(isthemeDark);
    };
  }, [isthemeDark]);

  return null;
};

export default BodyClassManager;
