var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

// Michael - 37
// John - 30
// David - 27

function printQuery() {
    for (var i in users) {
        console.log(users[i].name + " - " + users[i].age);
    }
    return users;
}
console.log(printQuery());
