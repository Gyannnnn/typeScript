"use strict";
class User {
    constructor(email, name) {
        this.city = "";
        this.constact = 0;
        this.public = true;
        this.email = email;
        this.name = name;
        this.constact;
    }
}
const Gyan = new User("gyanpatra@gamil.com", "Gyanranjan Patra");
console.log(Gyan);
Gyan.city = "Keonjhar";
// Gyan.constact =7978648082
Gyan.public = false;
console.log(Gyan);
