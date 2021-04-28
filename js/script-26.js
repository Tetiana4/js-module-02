// Выполни рефакторинг кода функции calculateTotalPrice(order)
// заменив цикл for на for...of.


function calculateTotalPrice(order) {
  let total = 0;
  
  for (let variable of order) {
    total += variable;
  }

  return total;
}