function makeArray(firstArray, secondArray, maxLength) {

  const arra = firstArray.concat(secondArray);
   
  return arra.slice(0, maxLength);  
    
  }