const buttonElement = document.querySelector("button") ! as HTMLButtonElement;

buttonElement.addEventListener("click", function() {
    let oldValue = Number(this.innerHTML);
    this.innerHTML = (oldValue + 1).toString();
})


console.log("" || "default");
console.log(false ?? "default");

let arr:string[] = [];

arr.push("element1");
arr.push("element2");
arr.push("element3");

for(let index in arr) {
    console.log("array element:", arr[index])
}

console.log(arr)


//  || "" is falsey value
//  ?? "" is truthy value if null or undefined