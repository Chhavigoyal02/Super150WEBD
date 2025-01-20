

// let input=document.querySelector('input');
// function fun(e){//any name will work for the object but generally - e/event
//     console.log(e.target.value);
//     // console.log("input element chal gya");
// }
// // input event is for whenever change the input whether subtact or add the text
// input.addEventListener('input',fun);//ab idhr event ka naam event h


// whenever an event is run/executed along with the event/function, an object is also attachedwith it which we caan have access of (jab bhi koi ek event chlta h uske sth ek object banta h jisko hum access kr skte h) --THAT OBJECT IS NAMED AS e/event generally

// event m jo target h that shows jis element pr event trigger hua h

// if we want to access that thing which user wrote the text in input we will get that by target.value

// Question:- you have one input element the text have written in this input that text has to show in the h2 tag which is already written empty in the html file


let input=document.querySelector('input');
let h2=document.querySelector('h2');


input.addEventListener('input',function(e){
    h2.innerText = e.target.value;
});

