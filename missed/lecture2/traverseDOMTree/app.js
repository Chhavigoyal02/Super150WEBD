
//-------------parentElement----------------------------
let para1 = document.querySelector('#para1');

console.log(para1.parentElement);//parentElement is not a method it is only a property not to run so below syntax is wrong:-
// console.log(para1.parentElement());---> wrong way

console.log(para1.parentElement.parentElement);//it will give the parent of article which is section here;

console.log(para1.parentElement.parentElement.parentElement);//it will return body
console.log(para1.parentElement.parentElement.parentElement.parentElement);//it will return html
console.log(para1.parentElement.parentElement.parentElement.parentElement.parentElement);//it will return null as parent of html is null

// there can never be multiple parents of an element but multiple children can be possible

//--------------------childElement----------------------------
let arti=document.querySelector('article');
console.log(arti.children);//it is also a property only; return the htmlcollection(array) of all the children it is having

let coll = arti.children;
for(let item of coll){
    item.style.color='red';
}


// ----------------------nextElementSibling---------------------------
// let div3 = document.querySelector('#div3');
// console.log(div3.nextElementSibling);


// ----------------------previousElementSibling---------------------------
let div3 = document.querySelector('#div3');
console.log(div3.previousElementSibling);