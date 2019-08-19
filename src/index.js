//var-> functon scope
//let-> block scopped
//const->lock scopped and constant

function sayHello(){
    for(var i=0; i<5; i++){
        console.log(i);
    }
    console.log(i);
}
sayHello();
function sayBye(){
    for(let j=0; j<10; j++){
       console.log(j)
    }
console.log(j); //as blockscopped it will not work
}
sayBye();

const x=1;
x=2;//cant reassaing