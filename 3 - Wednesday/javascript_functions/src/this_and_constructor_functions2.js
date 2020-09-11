
/*
 * I made a separate file for this because I want
 * to leave the function untouched in the other
 * file so my comments make sense there.
 */

// 3
function Person(name){
  this.name = name;
  var self = this;
  console.log("\nName: "+ this.name);
  setTimeout(function(){
    console.log("\nHi  "+self.name);  //Explain this
  }.bind(this),2000);
}

Person("Kurt Wonnegut");  //This calls the function
console.log("\nI'm global: "+ name);  //Explain this

/*
 * By adding the variable 'self' and including the
 * 'bind' function, the anonymous function within
 * the 'setTimeOut' function is now able to get
 * the name value from 'this'.
 * 
 * It seems that the problem did not have anything
 * to do with a time frame (like I speculated in an
 * earlier comment) but was instead because of the
 * 'name' value that was assigned 'this' not being
 * accessible to the anonymous function. Adding 
 * the 'bind' function made it possible to use it
 * in the anonymous function by the looks of it.
 */

// 4
var greeter = function(){
  console.log(this.message);
};
var comp1 = { message: "Hello World" };
var comp2 = { message: "Hi" };

var g1 = greeter.bind(comp1 );//We can store a reference, with a specific “this” to use
var g2 = greeter.bind(comp2 );//And here another “this”
setTimeout(g1,500);
setTimeout(g2,1000);

/*
 * The variable 'greeter' has an anonymous function
 * which prints a message string from 'this'. The 
 * variables 'comp1' and 'comp2' both contain what
 * look like 'message' objects with values assigned 
 * to each. 
 * 
 *  The variables 'g1' and 'g2' both call the 'greeter'
 *  variable and use the 'bind' function to add a
 *  message value to 'this'. I think the important
 *  part here is that 'comp1' and 'comp2' both
 *  contain objects/values called 'message', 
 *  because that is how the values associated
 *  with 'comp1' and 'comp2' can be assigned to
 *  'this'.
 *  
 *   I am not sure if the 'setTimeOut' function
 *   plays any part in this, as it does not seem
 *   to affect the previous code in any way.
 */
