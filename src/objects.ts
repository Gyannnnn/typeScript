// type obj = {
//   name: string;
//   weight: number;
//   gender?: string;
// };

// INTERFACE
interface obj {
  name: string;
  weight: number;
  gender?: string;
}
interface newObj extends obj{
    scholar:boolean

}
const newObj  = {
    name:"Sanjiv",
    weight:100,
    gender:"male",
    scholar:true

}

const obj1: obj = {
  name: "Gyanranjan Patra",
  weight: 56,
  gender: "male",
};

let obj2: obj = {
  name: "Valentina",
  weight: 50,
  gender: "female",
};
let obj3: obj = {
  name: "unknown",
  weight: 1000,
};
