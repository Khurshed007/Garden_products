import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


// Кастомный хук для получения данных категории из Redux
const useData = (request, selector = (state) => state.shop) => { // По умолчанию state.shop потому что useSelector сначала
  // начинается с undefined что приведет к ошибке
  const dispatch = useDispatch();
    if(selector === undefined){
       selector = (state) => state 
    } 
  const dataCategory = useSelector(selector);

  useEffect(() => {
    dispatch(request());
  }, [dispatch]);

  return dataCategory;
};

export default useData;