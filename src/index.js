const person={
    name:'pinky',
    walk(){
        console.log(this);
    }
};
person.walk();
const walk =person.walk;
console.log(walk);
walk();//gives undefined