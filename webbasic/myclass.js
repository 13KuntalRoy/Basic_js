class User{
    constructor(firstname,lastname,credit){
        this.firstname=firstname;
        this.lastname=lastname;
        this.credit=credit;
    }

    getfullname(){
        let fullname = `${this.firstname} ${this.lastname} is my full name `
        return fullname
    }
    editName(newName){
        const  myname = newName.split(" ");
        this.firstname = myname[0]
        this.lastname = myname[1]
    }
}

class teacher extends User {
  constructor(firstname,lastname,credit,subject){
      super(firstname,lastname,credit);
      this.subject = subject
  }
  getfullname(){
    let fullname = `${this.firstname} ${this.lastname} is my full name ${this.subject} `
    return fullname
} 
favdrink(name){
    console.log(`${name} is my fav`);
}
}

// const john = new User ('John','Anderson',34)
const john = new teacher ('John','Anderson',34,"python")
console.log(john.getfullname());
john.editName('kuntal Roy')
console.log(john.getfullname());
const sammy = new User();
john.favdrink('orange')