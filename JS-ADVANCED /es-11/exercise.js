// function sum(num1, num2, num3, num4, num5) {
//     return num1 + num2 + num3 + num4 + num5;
// }
function sum(...numbers) {
    return numbers.reduce((total, current) => total + current, 0);
  }
  


  console.log(sum(1, 2, 3, 4, 5));
  
//   probando con otra cantidad de numeros 
console.log(sum(4, 8));
