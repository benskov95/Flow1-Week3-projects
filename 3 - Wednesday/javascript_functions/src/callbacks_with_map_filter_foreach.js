
// exercise 1
var names = ['John', 'Erik', 'Mette', 'Bo', 'Ida'];
var shortNames = names.filter(name => name.length <= 3);

names.forEach(name => console.log(name));
console.log("\n");
shortNames.forEach(name => console.log(name));

// exercise 2
var upperCase = names.map(name => name.toUpperCase());
console.log(upperCase);

// exercise 3
function htmlNames(array) {
    var res = "<ul>";
    var withTags = array.map(name => "<li>" + name + "</li>");
    res += withTags.join("");
    res += "</ul>";
    return res;
}

// Different approach
function htmlNamesTwo(array) {
    var result = "<ul>\n";
    
    for (var i = 0; i < array.length; i++) {
        result += "<li>" + array[i] + "</li>\n";
    }
    
    result += ("</ul>");
    return result;
}

console.log("\n" + htmlNames(names));
console.log("\n" + htmlNamesTwo(names));

// exercise 4
var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

// a 
var newerThan99 = cars.filter(car => car.year > 1999);
// Added a separate line break because including it in the other .log messes it up
console.log("\n");
console.log(newerThan99);

var onlyVolvos = cars.filter(car => car.make === "Volvo");
console.log("\n");
console.log(onlyVolvos);

var below5k = cars.filter(car => car.price < 5000);
console.log("\n");
console.log(below5k);

// 4a

// First approach
/*
 * You probably would not include id since it
 * usually gets generated automatically.
 */
function toSQL(array) {
    var res = "INSERT INTO cars(";
    res += "id, year, make, model, price) VALUES ";
    var count = 0;
    
    array.forEach(function(car) {
        count++;
        res += "(" + car.id + ", ";
        res += car.year + ", ";
        res += car.make + ", ";
        res += car.model + ", ";
        res += car.price + ")";
        
        if (count < 5) {
            res += ", ";
        } 
    });
    
    return res += ";";
}

// Alternative solution, output is the exact same as the function above
function toSQLTwo(array) {
    var sql = array.map(car => ` (${car.id}, ${car.year}, ${car.make}, ${car.model}, ${car.price})`);
    var res = "INSERT INTO cars(";
    res += "id, year, make, model, price) VALUES" + sql + ";";
    return res;
}

console.log("\n");
console.log(toSQL(cars));
console.log("\n");
console.log(toSQLTwo(cars));
