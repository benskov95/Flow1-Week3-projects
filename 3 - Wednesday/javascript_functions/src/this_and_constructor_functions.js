// THIS AND CONSTRUCTOR FUNCTIONS

// 1
function Person(name){
  this.name = name;
  console.log("\nName: "+ this.name);
  setTimeout(function(){
    console.log("\nHi  "+this.name);  //Explain this
  },2000);
}
//call it like this (do it, even if you know it’s silly ;-)
Person("Kurt Wonnegut");  //This calls the function
console.log("\nI'm global: "+ name);  //Explain this

// Regarding 'this.name' in the setTimeOut function:
/*
 * When run, the string from the function within the 
 * setTimeOut function is printed as 'Hi undefined'. 
 * I believe this is because 'this' within the function 
 * refers to its own 'this' value which is undefined. 
 * In other words, it is not the same 'this' as the one 
 * defined in the Person function with the 'name' value.
 */

// Regarding the 'I'm global' console.log statement:
/*
 * This is printed as: "I'm global: Kurt Wonnegut".
 * 
 * I am unsure as to how but my best guess is that 
 * because the Person function is called, the 'name' 
 * value is somehow initialized outside of the function 
 * too. I think the 'this.name' value inside the function 
 * is assigned on a global level, meaning it is accessible
 * to other functions and statements.
 * 
 * This, however, goes against what can be seen in 
 * the function within the 'setTimeOut' function. 
 * Perhaps the value is only accessible for a certain 
 * period of time which happens to be less than 2 seconds?
 */

// 2
var p = new Person("Kurt Wonnegut");  //Create an instance using the constructor function
console.log("\nI'm global: "+ name);  //What’s different ?

/*
 * NOTE: THIS ONLY WORKS IF YOU COMMENT THE  <-- no longer seems to be the case for some reason.
 * PREVIOUS EXERCISE STATEMENTS (NOT FUNCTION) 
 * 
 * When run, this results in an error, stating:
 * "ReferenceError: name is not defined"
 * 
 * This is because a new instance of a Person object
 * is created, rather than calling the Person function.
 * This is a good example of why you should not name
 * functions and methods with capitalized words but
 * instead use camel-case. Capitalized words are 
 * typically reserved for classes (Java specific) and
 * constructors, which is what we're using in this
 * exercise.
 */
