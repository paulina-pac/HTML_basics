//Basic prompt, creating variables

var name = prompt("What is \nyour name?");
alert("Hello " + name);

var a, b, balance, grade
grade = "premium"
a = 5;
b = 1000000;
balance = 5000;

//if statements + conditional code + using strings

if (a < b) {
    alert("Yep, a is less than b");
    if (a > b) {
        alert("oh yeah, a is more than b");
    }
    if (a == b) {
        alert("Yo!, they're exactly same");
    }

}


if (balance >= 0) {
    alert("the balance is positive");
} else {
    alert("The balance is negative")
}


// USING SWITCH STATEMENT // BREAK;


switch (grade) {
    case "regular": alert("it's 3.15"); break;
    case "premium": alert("it's $2"); break;
    case "diesel": alert("it's $0.15"); break;
    default: alert("That's not a valid grade");
}


// MODULAR CODE - FUNCTIONS 

function myfunction() {
    var d = 5
    var e = 10
    var f = 20
    var g = d + e + f;

    alert("the value of g is " + g);

}

myfunction();



// SETTING PARAMETERS

function addingnumbers(a, b) {

    var result = a + b;
    alert(result);
}

addingnumbers(10, 20);
addingnumbers(2, 3);
addingnumbers(123, 34);


// WRITING LOOPS - ITERATION

var a = 1;

while (a < 3) {
    alert(a);
    a++;

}

var amount = 0;

//creating index

var i = 1;

// check the condition

while (i < 2) {
    amount = amount + 100;
    //increment index
    i++;
    alert("The value is: " + amount);

}

// FOR loop

for (var i = 1; i < 10; i++) {
    alert(i);

}

//Arrays

var myarray = [];
myarray[0] = "kotek";
myarray[1] = "urodziny";
myarray[2] = 2.2019;
myarray[3] = "tort";

//or

var newarray = [ "kotek", "urodziny", 2.2019, "tort" ];
alert(newarray.length);


// ITERATING THROUGH ALL ELEMENTS IN AN ARRAY

var i = 0;

while ( i < myarray.length) { // is i less than myarray length which is 3 
    alert("the value is:" + myarray[i]); // value should be whatever is stored in 0 (kotek)
    i++; //then it should increment value of i so the next value should be urodziny
}

// EVENT DRIVEN PROGRAMMING

var headline = document.getElementById("headline");

headline.onclick = function() {
    headline.innerHTML = "Whoah you just changed this headline! congrats!"
};