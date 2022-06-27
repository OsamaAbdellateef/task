const paragraph = document.querySelector("p");
const inputElement =  document.querySelector("input");
(inputElement as HTMLInputElement).value = "new value"
console.log(paragraph);

function add(num1:number, num2: number | string) {
    if(typeof num2 == "number") {
        return num1 + num2
    }
    return num1.toString() + num2
}

interface Horse {
    type:"horse",
    runningSpeed:number
}

interface Bird {
    type:"bird",
    flyingSpeed:number
}

type Animal = Horse | Bird;

function moveAnimal(animal:Animal) {
    if("runningSpeed" in animal) {
        console.log("running speed ", animal.runningSpeed)
    } else {
        console.log("not found")
    }
}
moveAnimal({type: "horse", runningSpeed: 30})
console.log("blah")
// class Car {
//     logData() {
//         console.log("Car data")
//     }
// }

// class Truck {
//     logData(data: string) {
//         console.log("Truck Data", data)
//     }
// }

// type Combinable = Truck | Car;

// const car = new Car();
// const truck = new Truck();

// function useVehicle(car: Combinable) {
//     if(car instanceof Truck) {
//         car.logData("instance ")
//     }
// }

// useVehicle(truck)



// const emp1: Combinable = {
//     name: "Osama", 
//     privileges: ["admin"],
//     startDate: new Date()
// }

// function printEmp(emp:Combinable) {
//     console.log(emp.name);
//     // type guard
//     if("startDate" in emp) {
//         console.log("in guard", emp.startDate);
//     }
// }

// printEmp(emp1)

// console.log(emp1);