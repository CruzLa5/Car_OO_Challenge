class Vehicle {
    constructor (make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year
    }
    honk(){
        console.log('Beep!')
    }
    toString(){
        console.log(`The vehicle is a ${this.make}, ${this.model}, from ${this.year}.`)
    }

}

let myFirstVehicle = new Vehicle('Jeep', 'Wrangler', 2018);

class Car extends Vehicle {
    constructor (make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
}
let myFirstCar = new Car('Nissan', 'Sentra', 1990);

class Motorcycle extends Vehicle {
    constructor (make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine(){
        console.log('VROOM!!!')
    }
}
let myFirstMotorcycle = new Motorcycle('Honda', 'Nighthawk', 2008);

class Garage{
    constructor(capacity){
        this.vehicles =[];
        this.capacity = capacity;
    }
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full."
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!"
    }
}
