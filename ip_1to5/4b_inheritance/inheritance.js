// single inheritance

class Vehicle {
    constructor(name) {
        this.Vehiclename = name;
    }
    present() {
        return `My vehicle's name is ` + this.Vehiclename;
    }
}

class Car extends Vehicle {
    constructor(name, company) {
        super(name);
        this.company = company;
    }
    show() {
        return this.present() + '. It is a car of company ' + this.company;
    }
}

let myCar = new Car("Audi T2", "Audi");
console.log(myCar.show());

// multi level inheritance

class Model extends Car {
    constructor(name, company, speed) {
        super(name, company);
        this.speed = speed;
    }
    show2() {
        return this.show() + ', it has a speed ' + this.speed;
    }
}

let myModel = new Model("BMW X5", "BMW" ,"520");
console.log(myModel.show2());


// hierarchical inheritance

class Bike extends Vehicle {
    constructor(name, company) {
        super(name);
        this.company = company;
    }
    show() {
        return this.present() + '. It is a bike of company ' + this.company;
    }
}

let myBike = new Bike("Splendor Xtech", "Splendor");
console.log(myBike.show());