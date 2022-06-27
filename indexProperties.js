var buttonElement = document.querySelector("button");
buttonElement.addEventListener("click", function () {
    var oldValue = Number(this.innerHTML);
    this.innerHTML = (oldValue + 1).toString();
});
console.log("" || "default");
console.log(false !== null && false !== void 0 ? false : "default");
var arr = [];
arr.push("element1");
arr.push("element2");
arr.push("element3");
for (var index in arr) {
    console.log("array element:", arr[index]);
}
console.log(arr);
//  || "" is falsey value
//  ?? "" is truthy value if null or undefined
