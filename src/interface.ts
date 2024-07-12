interface Iuser{
    readonly dbId:string
    email:string,
    userId:number,
    googleId?:string,
    startTrial():string,
    getCoupons(couponName:string):number
}
// REOPENING OF INTERFACE👇
interface Iuser{
    gitHubToken:string
}


interface Admin extends Iuser{
    role:'admin' | 'ta' | 'tl'
}


const Igyan:Admin = {
    dbId:'pp0',
    role:'tl',
    gitHubToken:"github@925",
    email:"g@g.com",
    userId:99999999,
    startTrial:()=>{
        return "trial Started"
    },
    getCoupons:(name:"Gyan")=>{
        return 7
    }
}