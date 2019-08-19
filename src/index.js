class Person{
    constructor(name){
        this.name=name;
    }

    walk(){
        console.log("walk");
    }
}

class Teacher extends Person{
    //whenever there to call constructor in child we needto call constructor of parentclass
//super keyword use to reference parent class constructor
    constructor(name, degree){
 super(name);
 this.degree=degree;
    }
    teach(){
        console.log("teach");
    }
}
const teacher =new Teacher('pinky', 'msc');