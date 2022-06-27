// interface is like a contract for the class the implpements that interface 

interface StudentInterface {
    id:string|number;
    name?:string;
    readonly password:string
    logData(name:string):void;
}

// creating an interface for function

// interface AddFn {
//     (num1: number, num2: number):number
// }

// let add: AddFn;

// add = function(num1:number, num2:number) {
//     return num1 + num2
// }



class Student implements StudentInterface {
    id:string;
    name?:string;
    readonly password:string;
    constructor(id:string|string,  password:string , name?: string) {
        this.id = id;
        this.password = password;
        if(name) {
            this.name = name
        }
    }


    logData() {
        console.log("id", this.id, "name", this.name)
    }
}

class Teacher extends Student {

    greeting() {
        console.log("Helloooooooooo")
    }
}

const student = new Student("12", "@#$@DA23");
const teacher = new Teacher("233", "Hatem", "@#$@F23");

student.logData()