//let person ={};

// let person={
//     //properties-> key:value
//     naam:"kaaju lalla",
//     umar:1,
//     pasandeedaRang:"Red"
// }
// console.log(person);
// //dot notation
// console.log(person.pasandeedaRang)


let person={
    //properties-> key:value
    naam:"kaaju lalla",
    umar:1,
    pasandeedaRang:"Red",
    wishDiwali: function (){ // if we are making function in object then we do not have to give name to function ,key is important
        console.log("happy diwali");
    }
}
console.log(person.naam);
// console.log(person.wishDiwali);//wrong
console.log(person.wishDiwali());//right
// console.log(person.kishmish());//wrong , only by key 

//NOTE- if we are making function in object then it is called method otherwise it is a general function.