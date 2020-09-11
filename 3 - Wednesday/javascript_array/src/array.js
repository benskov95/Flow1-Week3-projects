
// a
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

// b
console.log("\nb: \n");
var all = boys.concat(girls);
console.log(all);

// c
console.log("\nc: \n");
console.log(all.join(', '));
console.log(all.join(' - '));

// d
console.log("\nd: \n");
all.push("Lone", "Gitte");
console.log(all);

// e
console.log("\ne: \n");
all.unshift("Hans", "Kurt");
console.log(all);

// f
console.log("\nf: \n");
all.shift("Hans");
console.log(all);

// g
console.log("\ng: \n");
all.pop("Gitte");
console.log(all);

// h
console.log("\nh: \n");
all.splice(3, 2);
console.log(all);

// i
console.log("\ni: \n");
all.reverse();
console.log(all);

// j
console.log("\nj: \n");
all.sort();
console.log(all);

// k
console.log("\nk: \n");

function sort(array) {
    var sorted = [];
    for (var i = 0; i < array.length; i++) {
        sorted.push(array[i].toLowerCase());
    }
    sorted.sort();
    return sorted;
}

console.log(sort(all));

// l
console.log("\nl: \n");
var upperCase = all.map(name => name.toUpperCase());
console.log(upperCase);

// m
console.log("\nm: \n");
var startsWithL = all.filter(name => name.toLowerCase().startsWith("l"));
console.log(startsWithL);