// Напиши функцию getCommonElements(array1, array2)
// которая получает два массива произвольной длины в параметры array1 и array2,
// и возвращает новый массив, состоящий из тех элементов,
// которые присутствуют в обоих исходных массивах.


function getCommonElements(array1, array2) {
  
  const newArray = [];
  for (let element of array1) {
    if(array2.includes(element)) {
       newArray.push(element)
    }
  }

  return newArray;
  
}