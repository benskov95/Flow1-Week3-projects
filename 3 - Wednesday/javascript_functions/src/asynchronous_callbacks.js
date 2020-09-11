
// exercise 1

// 1
/*
 * I would expect all of the 'console.log' statements
 * to be printed  first since they have no delay. After 
 * those ('aaa', 'ddd' and 'fff'), I would expect the 
 * 'msgPrinter' function call with 'eee' as its message 
 * value and '1000' as its delay value to go off. 
 * 
 * Finally, the 'msgPrinter' function call with the message
 * value 'bbb' and delay value '2000' would go off.
 */

// 2
var msgPrinter = function(msg,delay){
  setTimeout(function(){
    console.log(msg);
  },delay);
};
console.log("aaaaaaaaaa");
msgPrinter ("bbbbbbbbbb",2000);
console.log("dddddddddd");
msgPrinter ("eeeeeeeeee",1000);
console.log("ffffffffff");