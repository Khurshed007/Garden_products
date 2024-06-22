

export const getPath = (pathname,items,category) => {
  
  const pathList = pathname.split("/").filter(Boolean);
  const newPathArray = pathList
    .map((item, index, arr) => {
      if (arr[index - 1] === "categories" && category[index]) {
        const originalString = arr[index][0];
  
        // Преобразуем первую букву в заглавную и заменяем её
        const newString = originalString.replace(
          /^./,
          originalString[0].toLocaleUpperCase()
        );
        return category[+item - 1].title;
      }
      if (arr[index - 1] === "product" && items[index]) {
        return items[+item - 1].title;
      }
      return item
        .split("-")
        .join(" ")
        .replace(/^./, item[0].toLocaleUpperCase()); // Убираем - и делаем первую букву каждого элемента заглавными
    })
    .filter((elements) => elements !== "Product");
  
    return newPathArray 
}