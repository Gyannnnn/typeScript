"use strict";
function addTwoNumber(a, b) {
    console.log(a + b);
    return a + b;
}
function getUpperCase(val) {
    let upperCaseValue = val.toUpperCase();
    console.log(upperCaseValue);
}
function signUpuser(name, email, isPaid) { console.log("Name :", name, "Email :", email, "Status :", isPaid); }
function logInUser(name, email, isPaid = false) { }
logInUser("Gyanaranjan Patra", "gyan@gg.com");
signUpuser("gyanaranjan Patra", "gyan@xyz.dev", true);
getUpperCase('Gyanaranjan Patra');
addTwoNumber(12, 89);
