// Arrays Predict
// Predict each array, run the code to verify

// Predict 1
var arr = [8,6,7,5,3,0,9];
for(var i = 0; i < arr.length; i++){    
    console.log(arr[i]);
}
//> Prediction - printing the entire contents of the array
//> 8, 6, 7, 5, 3, 0, 9 (on each successive newline)


// Predict 2
var arr = [7,3,8,4,2,0,1];
for(var i = 0; i < arr.length; i++){ 
    if(arr[i] % 2 == 0){
        console.log(arr[i]);
    } 
    else{
        console.log("That is odd!");
    }
}
//> Prediction - logging all even array element contents, with all odd values flagged
//> That is odd!
//> That is odd!
//> 8
//> 4
//> 2
//> NaN <- [NOTE] this is actually 0!??
//> That is odd!

// Predict 3
var arr = [1,3,8,-5,0,-2,4,-1];
var newArr = [];
for(var i = 0; i< arr.length; i++){
    if(arr[i] < 0){
        newArr.push(arr[i]);
        arr[i] = arr[i] * -1;
    }
    else if(arr[i] == 0){
        arr[i] = "Zero";
    }
    else{
        arr[i] = arr[i] * -1;
    }
}
console.log(arr);
console.log(newArr);
//> Prediction - All negative values will be transfered to newArr intact, and then will
//>     be reversed in arr. 0 will be replaced with "Zero" (a string), and all positive
//>     values will be changed to negative in arr. 
// arr>     [ -1, -3, -8, 5, "Zero", 2, -4, 1] // [NOTE] Prints quotes too
// newArr>  [-5, -2, -1]