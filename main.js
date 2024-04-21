"use strict";
let personName = "";
personNamen = prompt("What is your Name?") || "";
if (personName !== null && personName !== "") {
    alert(`Hello ${personName}, would you like to learn some pyton today?`);
}
else {
    alert("You have to fill your name !");
}
