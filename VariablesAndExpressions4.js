//Variables and expressions - ex3 - take user input and display it on the page

var event1 = document.getElementById("button1");
event1.addEventListener("click", myFirst, false);

function myFirst()
{
    var userInput1 = document.getElementById("input1").value;
    var userInput2 = document.getElementById("input2").value;
    var userInput3 = parseInt(userInput1) + parseInt(userInput2;
    

   
    document.getElementById("demo").innerHTML = userInput3;
}