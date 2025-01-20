// console.log(document);

// ---------------TAGNAME-----------------
let h1arr = document.getElementsByTagName('h1');//returns an array of all the tags h1
// console.log(h1arr[0]);
// console.log(h1arr[1]);

//loop
// for(let item of h1arr){
//     console.log(item);
// }

// ----------
let para = document.getElementsByTagName("p");
// para[1];
// para[2];
for (let item of para){
    // console.log(item);

    item.style.color='red';//to mainpulate the style
    item.style.border='2px solid purple';
}


// -------------BY ID------------------
let id = document.getElementById('sam');
// console.log(id);
id.style.fontSize='70px';


// NOTE:- CAN NOT USE PUSH/POP METHOD OF ARRAY HERE BECAUSE IT IS HTMLCollection

// --------------BY CLASSNAME--------------
let paras = document.getElementsByClassName('dom');
// console.log(paras);
for(let item of paras){
    // console.log(item);
    item.style.color='orange';
}



// --------------querySelector-------------
let h1 = document.querySelector('h1');//return only single element, phla wala h1, not all h1
// console.log(h1);
let dom = document.querySelector('.dom');//retuns only first one
// console.log(dom);
let sam = document.querySelector('#sam');
// console.log(sam);



// -----------querySelectorAll----------
let saareh1 = document.querySelectorAll('h1');//retruns the nodelist(or we can say array only) -- the whole collection of all h1s
// console.log(saareh1);
let saaredom = document.querySelectorAll('.dom');
// console.log(saaredom);
let saaresam=document.querySelectorAll('.dom');
// console.log(saaresam);






