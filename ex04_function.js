function myFunction(num) {
    let result = num + 10;
    console.log(result);
}
function myAdd(x, y) {
    return x + (y || 0);
}
const sum = myAdd(2);
console.log(sum);
const sum2 = myAdd(2, 5);
console.log(sum2);
let userA = {
    name: "aa",
    age: 10,
    isAdult: false
};
let userB = {
    name: "bb",
    age: 20
};
let arrFunction;
arrFunction = function () {
    console.log('abc');
};
let arrFunction2;
arrFunction2 = function (x, y) {
    return x + y;
};
let userC = {
    name: "Neo",
    age: 30
};
userC.age = 20;
console.log(userC.name);
