

const Car = function(brand, model, maxTank) {
  this.brand = brand;
  this.model = model;
  this.maxTank = maxTank;
  this.nowTank = Math.floor(Math.random() * maxTank);
};

Car.from = function({brand, model, maxTank}) {
  return new Car(brand, model, maxTank);
};

Car.prototype.needPetrol = function() {
  return this.maxTank - this.nowTank;
};

Car.prototype.fillUp = function() {
  this.nowTank = this.maxTank;
};

const PassangerCar = function(brand, model, maxTank, typeFuel = 'petrol') {
  Car.call(this, brand, model, maxTank);
  this.typeFuel = typeFuel;
  this.typeCar = 'passanger';
};

Object.setPrototypeOf(PassangerCar.prototype, Car.prototype);

const Truck = function(brand, model, maxTank, typeFuel = 'diesel') {
  Car.call(this, brand, model, maxTank);
  this.typeFuel = typeFuel;
  this.typeCar = 'truck';
};

Object.setPrototypeOf(Truck.prototype, Car.prototype);

const bmw = new PassangerCar('BMW', 'X7', 80, 'diesel');
const mazda = new PassangerCar('Mazda', 'cx-5', 55);

const man = new Truck('MAN', 'TGS', 400);
console.log('man: ', man.needPetrol());


console.log(bmw instanceof Car);
console.log(man instanceof Car);
console.log(mazda instanceof Car);
