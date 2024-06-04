

import React, {useRef,useEffect} from "react";


export const DiscountForm = () => {
    const inputRef = useRef();

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus();
        console.log(inputRef.current.focus)
      }
    }, [inputRef]);
  
    return (
      <input ref={inputRef} type="text" />
    );

  
};