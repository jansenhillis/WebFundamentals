// Arrays
// Write JS to print values and sum, then print value * index

var testArr = [6,3,5,1,2,4];

console.log("// Values and Sum //");
var sum = 0;
for (var i = 0; i < testArr.length; i++) {
    sum += testArr[i];
    console.log("Num: " + testArr[i] + " Sum: " + sum); 
}

console.log("// Values * Index //");
for (var i = 0; i < testArr.length; i++) {
    testArr[i] = testArr[i] * i; 
}
console.log(testArr);
