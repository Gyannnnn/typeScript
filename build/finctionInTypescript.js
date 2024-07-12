"use strict";
function xxx(num) {
    return 5;
}
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
function getMyVal(myVal) {
    if (myVal > 5) {
        return 5;
    }
    return 'ok';
}
const heros = ["ironMan", "thor", "spiderMan"];
heros.map(hero => {
    console.log(`Hero is ${hero}`);
});
function consoleError(errMsg) {
    console.log(errMsg);
}
function handleError(errMsg) {
    throw new Error(errMsg);
}
