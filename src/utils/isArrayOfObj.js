

export const isArrayofObjects = (result) =>  {
    // Проверяем, является ли результат массивом
    if (!Array.isArray(result)) {
      return false;
    }
    // Проверяем, все ли элементы массива являются объектами
    return result.every(item => typeof item === 'object' && item !== null);
  }