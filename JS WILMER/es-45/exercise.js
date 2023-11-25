function Smartphone(brand, name, price) {
  this.brand = brand;
  this.name = name;
  this.price = price;
}

let smartphone1 = new Smartphone("BlackShark", "5pro", 1200);
let smartphone2 = new Smartphone("Apple", "14pro", 1500);

console.log(smartphone1);
console.log(smartphone2);
