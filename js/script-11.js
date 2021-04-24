function calculateEngravingPrice(message, pricePerWord) {
  
  let result;
  result = message.split(' ');
  return result.length * pricePerWord;
  
}