function adultFilter(persons) {
  return persons.filter((persons) => persons.age >=18)
 }

const persons = [
  { name: 'Paul', age: 19 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 23 },
  { name: 'Marco', age: 45 },
  { name: 'Peter', age: 12 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 25 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 20}
];

const adults = adultFilter(persons);
console.log(persons);
console.log(adults)