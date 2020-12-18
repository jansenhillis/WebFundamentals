// Basic Foundation I

// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function arrayReturn() {
    var array = [0]; // Do i need to init to 0, or can i just init the var?
    for (var i = 0; i < 255; i++) {
        array[i].push(i+1);
    }

    return array;
}
arrayReturn();

// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  
//  You may use a modulus operator for this exercise.
function sumEventsTo1000() {
    var sum = 0;

    for (var i = 1; i <= 1000; i++) {
        if (i % 2 === 0) { // found even value
            sum += i; 
        }
    }

    return sum;
}
console.log(sumEventsTo1000());

// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
function sumOddTo5000() {
    var sum = 0;

    for (var i = 1; i <= 5000; i++) {
        if (i % 2 !== 0) { // Found odd
            sum += i;
        }
    }

    return sum;
}
console.log(sumOddTo5000());

// Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function sumArray(array) { // [NOTE] are arguments automatically initialized? do they require var? or is this loosely typed?
    var sum = 0;

    for (var num in array) {
        sum += array[num];
    }

    return sum;
}
console.log(sumArray([1,2, 5]));

// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function findMaxInArray(array) {
    var maxNum = 0;

    for (var num in array) {
        if (array[num] > maxNum) { // if the number is > current maximum num
            maxNum = array[num];
        }
    }

    return maxNum;
}
console.log(findMaxInArray([-3,3,5,7]));

// Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function avgArray(array) {
    var sum = 0;

    for (var num in array) {
        sum += array[num];
    }

    return (sum / array.lenth);
}
console.log(avgArray([1,2,3]));

// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function arrayOfOddNumsTo50() {
    var array = [];

    for (var i = 1; i <= 50; i++) {  
        if (i % 2 !== 0) {
            array.push(i);
        }
    }

    return array;
}
console.log(arrayOfOddNumsTo50());

// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. 
//  For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
function valuesGreaterThanY(array, value) {
    var totalNums = 0;

    for (var num in array) {
        if (array[num] > value) {
            totalNums++;
        }
    }

    return totalNums;
}
console.log(valuesGreaterThanY([1, 3, 5, 7], 3));

// Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. 
//  (e.g. [1,5,10,-2] will become [1,25,100,4])
function squareArray(array) {
    for (var num in array) {
        array[num] *= array[num];
    }

    return array;
}
console.log(squareArray([1,5,10,-2]));

// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array 
//  with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function zeroNegatives(array) {
    for (var num in array) {
        if (array[num] < 0) {
            array[num] = 0;
        }
    }
    
    return array; 
}
console.log(zeroNegatives([1,5,10,-2]));

// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, 
//  minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
function replaceArrayMinMaxAvg(array) {
    var minValue = 0;
    var maxValue = 0;
    var sum = 0;
    var summarizedArray = [];

    for (var num in array) {
        if (array[num] > maxValue) {
            maxValue = array[num];
        }
        else if (array[num] < minValue) {
            minValue = array[num];
        }

        sum += array[num];
    }

    summarizedArray[0] = maxValue;
    summarizedArray[1] = minValue;
    summarizedArray[2] = (sum / array.length);
    return summarizedArray;    
}
console.log(replaceArrayMinMaxAvg([1,5,10,-2]));

// Swap Values - Write a function that will swap the first and last values of any given array. 
//  The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function swapOuterValues(array) {
    if (array.length >= 2) {
        var temp = array[0];
        array[0] = array[array.length - 1];
        array[array.length - 1] = temp;
    }

    return array;
}
console.log(swapOuterValues([1,5,10,-2]));

// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with 
//  the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function numberToString(array) {
    for (var num in array) {
        if (array[num] < 0) {
            array[num] = "Dojo";
        }
    }

    return array;
}
console.log(numberToString([-1,-3,2]));