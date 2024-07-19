// class User{
//     email:string
//     name:string
//     city:string = ""
//     private constact:number = 0
//     public:boolean = true
//     constructor(email:string,name:string){
//         this.email = email;
//         this.name = name
//         this.constact
//     }
// }
class User {
    private _courseCout = 1;
  readonly city: string = "keonjhar";
  constructor(public email: string, public name: string) {}
  get Appleemail(): string{
    return `gyan${this.email}`

  }
  get courseCount(): number{
    return this._courseCout
  }
}

const hitesh = new User("gyan","gyan@gmail.com");

























// const Gyan = new User("gyanpatra@gamil.com","Gyanranjan Patra")
// console.log(Gyan)
// Gyan.city = "Keonjhar"
// // Gyan.constact =7978648082
// Gyan.public = false
// console.log(Gyan)
