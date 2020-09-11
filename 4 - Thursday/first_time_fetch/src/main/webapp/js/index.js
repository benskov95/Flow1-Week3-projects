
let url = "https://jsonplaceholder.typicode.com/users/";
var getUser = document.getElementById("getUser");
var getAll = document.getElementById("getAll");
var table = document.getElementById("fortable");

function toTable(fetchedData) {
 var tableString = "<table class=\"table\">";
 tableString += "<tr><th>ID</th><th>Name</th>";
 tableString += "<th>Phone</th></tr>";

 if (typeof fetchedData.length === "undefined") {
     tableString += "<tr><td>" + fetchedData.id + "</td><td>"
             + fetchedData.name + "</td><td>"
             + fetchedData.phone + "</td></tr>";
 } else {

 for (var i = 0; i < fetchedData.length; i++) {
     tableString += "<tr><td>" + fetchedData[i].id + "</td><td>"
             + fetchedData[i].name + "</td><td>" 
             + fetchedData[i].phone + "</td></tr>";
 }
}

 tableString += "</table>";
 table.innerHTML = tableString;
}

function fetchData() {
    event.preventDefault();
    event.stopPropagation();
    var action = document.getElementById(event.target.id);
    var tempUrl = url;
    
    if (action.id === "getUser") {
        var input = document.getElementById("input");
        tempUrl += input.value;
    }
    
   fetch(tempUrl) 
  .then(res => res.json()) 
  .then(data => {
      toTable(data);
    });
}

getUser.addEventListener("click", fetchData, false);
getAll.addEventListener("click", fetchData, false);