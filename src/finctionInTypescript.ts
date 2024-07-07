function addTwoNumber(a: number, b: number): number {
  console.log(a + b);
  return a + b;
}

function getUpperCase(val: string) {
  let upperCaseValue:string = val.toUpperCase();
  console.log(upperCaseValue)
  
}

function signUpuser(name: string,email: string ,isPaid: boolean){ console.log("Name :",name,"Email :",email,"Status :",isPaid)}
function logInUser(name:string,email:string,isPaid:boolean =  false){}
logInUser("Gyanaranjan Patra","gyan@gg.com")
signUpuser("gyanaranjan Patra","gyan@xyz.dev",true)

getUpperCase('Gyanaranjan Patra');

addTwoNumber(12, 89);
