const address={
    street:'',
    city:'',
    country:''
};
const street= address.street;
const city= address.city;
const country= address.country;
                                       //object destructuring
const{street, city, country}= address;// exactly equivalent to the upper 3 lines
const {street:st}=address;


//spread operator
const first=[1,2,3];
const second=[4,5,6];
const combined1 =first.concat(second);//usual operator
const combined2=[...first,...second];//to use spread operator we use'...'
const combined3=[...first,'a',...second,'b']//using spread we can add in anyplace

const clone =[...first];
console.log(first);
console.log(clone);