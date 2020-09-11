
// 1
var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {changeBy(1);},
    decrement: function() {changeBy(-1);},
    value: function() { return privateCounter;}
  }
};
var counter1 = makeCounter();
var counter2 = makeCounter();

counter1.increment();
counter1.increment();
console.log(counter1.value()); // Alerts 2 

 /* 
  * Use alert() instead of console.log for browser.
  * Node does not recognize alert() as a function 
  * when you try to run this file. 
  */
 
 // 2
 
 var makePerson = function() {
     var personAge;
     var personName;
     return {
         setAge: function(age) {personAge = age;},
         setName: function(name) {personName = name;},
         getInfo: function() {return personName + ", " + personAge;}
     };
 };
 
 var person = makePerson();
 person.setAge(28);
 person.setName("Joe");
 console.log(person.getInfo());