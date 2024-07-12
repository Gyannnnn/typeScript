type User={
    name:string;
    email:string;
    isPaid:boolean
}

// function createUser(user:User):void{
//     console.log(user);
// };
// createUser({name:"Gyanranjan Patra",email:"wq",isPaid:true});


type User1={
    readonly _id:string,
    name:string,
    email:string,
    isActive:boolean,
    creditCardDetails?:number
}

let myUser:User1 = {
    name:"Gyanranjan Patra",
    email:"g@dev.in",
    _id:"4932790840",
    isActive:true
}
type cardDate={
    carddate:string

}
type cardNumber={
    cardNumber:number
}

type cardDetails = cardDate&cardNumber&{
    cvv:number
}

