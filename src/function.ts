//Function

type functType = (n: number, m: number, l?: number) => number;

const funct: functType = (a, b, l) => {
  if (typeof l === "undefined") return a*b;
  return b * a;
};
funct(12, 13);


//REST OPERATOR

type operat = (p:number,q:number)=>number

const operator = (...p:number[])=>{
  
  return p
}

operator(90,0,45,5,55,5,5,5,5,55,5,5,55,1,55,5,5,5.5,55,)