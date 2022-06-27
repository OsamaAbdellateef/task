type comination = string | number;

function foo(id: comination, name:string) {
    console.log("id:", id, "name: ", name)
}

foo("232","Dan");


type Person = {
    name:string,
    age:number,
    email:string,
    printData(role: string): void
}

// interface with literal objects
const ahmed: Person = {
    name: "Osama",
    age: 24,
    email: "@gmail.com",
    printData(role) {
        console.log(role, this.name, this.age, this.email)
    }
}

ahmed.printData("Software Engineer ")

// interface with classes 



//   abstract class Student {
    
//     // name: string;
//     // public age: number;
//     protected subs:string[] = [];
//     age:number;
//     abstract prop:string;
//     static counter: number = 0;
//     constructor(protected id:number, public name: string,  age: number, protected  password:string|number) {
//         this.name = name;
//         this.age = age;
//         this.password = password;
//         this.id = id;
//         Student.counter += 1;

//     }

//     abstract describe(id:number): void;
//     static getCounter() {
//         console.log("counter:", Student.counter)
//     }
//     set setPassword(password:string|number) {
//         this.password = password 
//     }
//     get getPassword() {
//         return this.password
//     }
//     static logData() {
//         console.log("this shoudn't have something related to the ");
//     }
//     addSubs(sub:string) {
//         this.subs.push(sub) 
//     }
//     logSubs() {
//         console.log(this.subs)
//     }
//   }

//   class Teacher extends Student {
//     // static prop:string = "dw";
//     prop:string = "teacher prop";
//     constructor(id:number, name: string, age: number,password:string|number,  public classesPerWeek: number ) {
//         super(id, name, age, password);
//         this.classesPerWeek = classesPerWeek;
//     }
//     // overide the descibe method
//     describe() {
//         console.log("the teacher id is:", this.id)
//     }
//     set setPassword(passowrd:string|number) {
//         this.password = passowrd
//     }

//     logData() {
//         console.log("function has been overidden")
//     }
//   }

//   class Any {
//     anyName:string = "should have a value ";

//   }

// class Admin {
//     private static counter:number = 0;
//     private static instance : Admin;
//     private constructor(private id:number, public name:string, private password:string) {
//         this.id = id;
//         this.password = password;
//         this.name = name;
//         Admin.counter += 1;
//     }


//     static createInstance(id: number, name: string, passowrd: string) {
//         if(!Admin.instance) {
//             Admin.instance = new Admin(id, name, passowrd);
//             return Admin.instance; 
//         } else {
//             return Admin.instance;
//         }
//     }
    
// }



// const admin = Admin.createInstance(1, "Osama", "@#$S");
// const admin2 = Admin.createInstance(2, "Osama", "@#$S");
// console.log(admin);
// console.log(admin2);