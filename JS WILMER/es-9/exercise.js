
const name = "Mario";
const lastname = "Rossi";
const age = 27;
const isGraduated = false;
const average = 27;
const examsCompleted = 10;
const firstYearCompleted = true;
const yearsCompleted = 1;

name == lastname
age <= average
firstYearCompleted == lastname
yearsCompleted == firstYearCompleted
firstYearCompleted === yearsCompleted
examsCompleted < age
isGraduated > yearsCompleted

console.log(name == lastname);            
console.log(age <= average);              
console.log(firstYearCompleted == lastname);  
console.log(yearsCompleted == firstYearCompleted); 
console.log(firstYearCompleted === yearsCompleted); 
console.log(examsCompleted < age);          
console.log(isGraduated > yearsCompleted); 


//1. false, ya que "mario" no es igual a "rossi", sabiendo que el == compara aunque no sea el mismo tipo de dato
//2. true, aqui esta haciendo un menor o igual que y 27 es menor o igual que 27
//3. false, aqui compara un boolean con un string y evidentemente true no es igual que "rossi"
//4. true, sabiendo que true de boolean a number es 1
//5. false, aqui es una comparacion estricta o sea que toma en cuenta el tipo de dato que estamos comparando.
//6. true, ya que 10 es menor que 27 
//7. false, ya que como habiamos dicho si true es 1, false es 0, entonces si el primero es false=0 diciendo que es mayor que 1 el resultado seria false.