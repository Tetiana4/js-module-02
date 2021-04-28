function calculateTotalPrice(order) {
  let total = 0;
  
  for (let i = 0; i < order.length; i += 1){
  total = total + order[i];
  }
  
  return total;
}