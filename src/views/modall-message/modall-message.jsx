
import { useDispatch } from "react-redux";
import { ModallImg } from "./modal-img/modall-img";
import { ModallMostDiscounted } from "./modal-discount/modall-most-discount";
import { Modallordered } from "./modal-order/modall_ordered";

import { memo } from "react";

 const ModallMessage = ({
  setIsModallOpen,
  isModallOpen,
  onlyImg,
  currentImage,
  productImg,
  notFound,
  congrates,
}) => {


  const dispatch = useDispatch();
  const handleCloseModal = () => {
    setIsModallOpen(false);
  };

  console.log(notFound, "Not Found, Alo");

  const renderModalContent = () => {
    if (onlyImg) {
      return (
        <ModallImg
          setIsModallOpen={setIsModallOpen}
          isModallOpen={isModallOpen}
          productImg={productImg}
        />
      );
    } else if (congrates) {
      return (
        <Modallordered
          setIsModallOpen={setIsModallOpen}
          isModallOpen={isModallOpen}
          productImg={productImg}
        />
      );
    } else {
      return (
        <ModallMostDiscounted
          setIsModallOpen={setIsModallOpen}
          isModallOpen={isModallOpen}
          productImg={productImg}
        />
      );
    }
  };

  return <>{isModallOpen && <>{renderModalContent()}</>}</>;
};


export const MemoModallMessage = memo(ModallMessage);