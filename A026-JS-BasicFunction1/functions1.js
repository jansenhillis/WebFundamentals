// Basic Function I
// 14/15 were guessed correctly

// Prediction: returns the value 23, which prints to the console
// Console: 35
function a() {
    return 35;
}
console.log(a())

// Prediction: returns the value 4, which is added to itself and printed to the console
// Console: 8
function a() {
    return 4;
}
console.log(a() + a());

// Prediction: the function returns a copy of the value provided to it, and 6 will print to the console
// Console: 6
function a(b) {
    return b;
}
console.log(a(2) + a(4));

// Prediction: the function will log its argument, then return that value multiplied by 3. 
//  The console will show 3, and then print 9 (in this case). 
// Console: 3, 9
function a(b) {
    console.log(b);
    return b * 3;
}
console.log(a(3));

// Prediction: the function will return 40, and will be logged to the console. 
//  Line 39 in this case won't execute since it falls after the return statement.
// Console: 40
function a(b) {
    return b * 4;
    console.log(b);
}
console.log(a(10));

// Prediction: the a(15) returns 4 to the console. The console.log is never touched.
// Console: 4
function a(b) {
    if (b < 10) {
        return 2;
    }
    else {
        return 4; 
    }
    console.log(b);
}
console.log(a(15));

// Prediction: function multiplies both inputs together, returning the result
// Console: 10, 3, 30 (the result of the a() function)
function a(b, c) {
    return b * c;
}
console.log(10, 3);
console.log(a(3, 10));

// Prediction: function will not execute, because it is not called.  
// Console: 3, 4
function a(b) {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

// Prediction: a() will execute once, and loops through 4 times, logging the 
//  index + 2 values: 2, 5, 8, 11 (and changing the loop index as it goes)
// Console: 2, 5, 8, 11
function a() {
    for (var i = 0; i < 10; i++) {
        i = i + 2;
        console.log(i);
    }
}
a();

// Prediction: function argument b sets the initial loop index, with c setting the ending 
//      condition. The function will log the current index to the console C times, 
//      then return a * c. (Shown here with commons instead of newlines)
// Console: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0
function a(b, c) {
    for (var i = b; i < c; i++) {
        console.log(i);
    }
    return b * c;
}
a(0, 10);
console.log(a(0, 10));

// Prediction: This function won't return because it is never executed
function a() {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            console.log(j);
        }
        console.log(i);
    }
}

// Prediction: This function will not return because it is never executed
function a() {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            console.log(i, j);
        }
        console.log(j, i);
    }
}

// Prediction: The variable z will store the value 10, and it will be logged to the console
// Console: 10
var z = 10;
function a() {
    var z = 15;
    console.log(z);
}
console.log(z);

// Prediction: The variable z will store the value 10, function a() is defined, executed,
//      and finally, 10 is logged. 
// Console: 15, 10
var z = 10;
function a() {
    var z = 15;
    console.log(z);
}
a();
console.log(z);

// Prediction: The variable z will store the value 10, function a() is defined. It will log
//      z, and then return the new z, changing the old value of z, and logging it. 
// Console: 15, 15
var z = 10;
function a() {
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
