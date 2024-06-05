import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isArrayofObjects } from '../utils/isArrayOfObj';


// Кастомный хук для получения данных категории из Redux
const useData = (request, selector = (state) => state.shop.items) => { // По умолчанию state.shop.items потому что useSelector сначала
  // начинается с undefined что приведет к ошибке
  const dispatch = useDispatch();

  const dataCategory = useSelector(selector);
   
  
    useEffect(() => {
      if(isArrayofObjects(request())) {
      dispatch(request());
      }
    }, [dispatch]);
 
    useEffect(() => {
      dispatch(request());
    }, [dispatch]);


  return dataCategory;
};

export default useData;