
// 1
var actor = {name: "George Clooney", age: 56, awards: 13, numberOfMovies: 34};

for (var prop in actor) {
    console.log(prop, actor[prop]);
}

delete actor.awards;
console.log("\n");

for (var prop in actor) {
    console.log(prop, actor[prop]);
}

actor["favoriteDrink"] = "Espresso";
console.log("\n");

for (var prop in actor) {
    console.log(prop, actor[prop]);
}

// 2
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    
    this.getInfo = function() {
        var info = "\n";
        info += this.firstName + "\n";
        info += this.lastName + "\n";
        info += this.age + "\n";
        return info;
    };
}

var p = new Person("Hans", "Hansen", 33);
console.log(p.getInfo());