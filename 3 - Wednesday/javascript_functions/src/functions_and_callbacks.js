
// JAVASCRIPT FUNCTIONS AND CALLBACKS
// exercise 1
function add(n1, n2){
   return n1 +n2;
}

var sub = function(n1,n2){
  return n1 - n2;
} 

// exercise 3
var cb = function(n1,n2, callback){
    if (typeof n1 && typeof n2 === "number" && typeof callback === "function") {
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
    } else {
        return "n1 must be a number, and callback must be a function";
    }
};


/* 'cb' function with a try-catch block instead of if-statement.
    
   var cb = function(n1,n2, callback){
    try {
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
    } catch (Exception) {
        return "n1 must be a number, and callback must be a function";
    }
}; 
 */

// exercise 2
console.log( add(1,2) );    // What will this print?

// This will print '3'.

console.log( add );  // What will it print and what does add represent?

/* 'add' represents a function that adds two arguments together.
 * In this case, the function is called with no arguments, so the
 * function name is printed along with its type ("[Function: add]"). */

console.log( add(1,2,3) ) ; // What will it print

/* This will print '3' like before because the add method only has
 * two parameters (n1, n2), so any additional arguments passed
 * won't be used. */

console.log( add(1) );	  // What will it print 	

/* This will print "NaN" (Not a Number) because only one argument
 * was passed, so the function will attempt to add 1 to 'n2' which 
 * results in the returned value not being numerical. */


console.log( cb(3,3,add) ); // What will it print

/* The variable "cb" is a function which uses three arguments
 * to print a String ("Result from...") and do something with the
 * first two using the 'callback' argument (which is the 'add' 
 * function here). 
 *
 * Therefore, this prints the aforementioned string, including the
 * first two parameters (3 and 3) and then the result of the 'add'
 * function which adds the two together, which is 6. */

console.log( cb(4,3,sub) ); // What will it print

/* The 'sub' function is used here, which subtracts one argument
 * from the other. It is passed as the 'callback' argument in the 
 * 'cb' function like in the previous example, but it instead subtracts 
 * the first argument from the second rather than adding them together.
 * The result is the string containing the two first arguments and
 * the result of using the 'sub' function with them.  */


console.log(cb(3,3,add())); // What will it print (and what was the problem)

/* You get the following error message when running this:
 * "TypeError: callback is not a function"
 * 
 * The function 'add' was passed as the 'callback' argument again here, 
 * but it is not perceived as a function because of the added parentheses
 * since that makes it look like a function that takes no arguments, and the
 * only 'add' function that has been defined takes two arguments: n1 and n2. 
 * 
 * The 'cb' function relies on the 'callback' argument being a function that
 * takes two arguments, which is not the case here, hence the error. */

console.log(cb(3,"hh",add));// What will it print

/* Here a string ("hh") is passed as the second argument in the cb method.
 * This means that, instead of trying to add the two arguments together as
 * numerical values, both are converted into strings and the second argument
 * is appended to the first. The result is therefore: "3hh". */

// exercise 4
function mul(n1, n2) {
    return n1 * n2;
}

console.log(cb(2, 4, mul));

// exercise 5
console.log(cb(10, 2, (function(n1, n2) { return n1/n2;})));

/* NOTE: the returned string from 'cb' is always: n1 + n2,
regardless of the operation (subtraction, division, etc.). */

