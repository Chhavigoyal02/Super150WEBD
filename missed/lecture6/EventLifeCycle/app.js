


let grandParent = document.getElementById('grandParent');
let parent = document.getElementById('parent');
let child = document.getElementById('child');


// grandParent.addEventListener('click',()=>{
//     console.log('grandfather clicked!');
// },true );//event bubbling phase if useCapture is false
// //if useCapture is true then event capturing phase

// parent.addEventListener('click',()=>{
//     console.log('father clicked!');
// },true);


// // if i clicked on child then all of the above three statements get printed
// // so it means if i click on the innernost level then it propagates to the most upper level
// child.addEventListener('click',()=>{
//     console.log('child clicked!');
// },true);


// addEventListener has one more optional argument called "useCapture" which is boolean in type and its default value is false

// grandParent.addEventListener('click',(e)=>{
//     console.log('grandfather clicked!');
// },true );

// parent.addEventListener('click',()=>{
//     console.log('father clicked!');
// },false);

// child.addEventListener('click',()=>{
//     console.log('child clicked!');
// },true);

// here grandparent,child,parent


// -----------------------------------
grandParent.addEventListener('click',(e)=>{
    console.log('grandfather clicked!');
},true );

parent.addEventListener('click',(e)=>{
    console.log(e);
    e.stopPropagation();//agla event preform krne se rok dega
    console.log('father clicked!');
},true);

child.addEventListener('click',(e)=>{
    console.log('child clicked!');
},true);
//output - gradnparent,parent(child pr gya hi nhi even if we clicked on child)
