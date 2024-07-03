"use strict";
//Function
const funct = (a, b, l) => {
    if (typeof l === "undefined")
        return a * b;
    return b * a;
};
funct(12, 13);
const operator = (...p) => {
    return p;
};
operator(90, 0, 45, 5, 55, 5, 5, 5, 5, 55, 5, 5, 55, 1, 55, 5, 5, 5.5, 55);
