let score: number | string | boolean = 33;


type user ={
    name:string,
    id:number
}
type admin  = {
    userName:string,
    id:number
}

let gyan:user | admin = {name:"g",id:0}
gyan = {userName:"h",id:9}

let data:number[] =[1,2,3,4,5,6];
let data2:string[]=["1","2",'2'];
let data3:(number | string)[] = [1,2,3,"gyan"]


let seatAllotement: "front" | "middle" | "back"
