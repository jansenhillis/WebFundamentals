// Function Predict
// Predict output, run the code to verify

// Predict 1
function greeting(){
    return "Hello";
    console.log("World");
}
var word = greeting();
console.log(word);

//  Prediction - 
//  Console> "World", "Hello"
//  [NOTE] This will actually only print Hello. Note the control flow exits the 
//  function using return before reaching the loger. 

// Predict 2
function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    return sum;
}
var result1 = add(3,5);
var result2 = add(4,7);
console.log(result1);
console.log(result2);

//  Prediction (each successive line)
//  Console> "Summing Numbers!", "num1 is: 3", "num2 is: 5", "8"
//   "Summing Numbers!", "num1 is: 4", "num2 is: 7", "11"

// Predict 3
function highFive(num){
        for(var i=0; i<num; i++){
            if(i == 5){
                console.log("High Five!");
            }
            else{
                console.log(i);
            }
        }
    }

// Prediction
// No output. There is nothing calling the function, nor returning from it.