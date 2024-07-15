class User{
    email:string
    name:string
    city:string = ""
    constact:number = 0
    public:boolean = true
    constructor(email:string,name:string){
        this.email = email;
        this.name = name
    }
}

const Gyan = new User("gyanpatra@gamil.com","Gyanranjan Patra")
console.log(Gyan)
Gyan.city = "Keonjhar"
Gyan.constact =7978648082
Gyan.public = false
console.log(Gyan)