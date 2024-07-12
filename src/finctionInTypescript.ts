function xxx(num: number):number{
  return 5
}

function addTwoNumber(a: number, b: number): number {
  console.log(a + b);
  return a+b ;
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


function getMyVal(myVal: number):number | string{
  if(myVal > 5){
    return 5
  }
  return 'ok';

}

const heros  = ["ironMan","thor","spiderMan"];
heros.map(hero=>{
  console.log(`Hero is ${hero}`);
})

function consoleError(errMsg:string):void{
  console.log(errMsg);

}

function handleError(errMsg: string): never{
  throw new Error(errMsg)

}


