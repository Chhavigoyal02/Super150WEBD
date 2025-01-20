
// inline way
function doSomething(){
    console.log("hello inline event");
}

// let btn = document.querySelector('button');
// console.log(btn);
// console.dir(btn);


// (2nd way)
// let btn= document.querySelector('button');

// onclick event
// btn.onclick= function(){
    //     console.log("hello duniya dusra tareeka");
    // }
    
    
    // mouseenter event(same as hover but it is an event so it called mouseenter here)
    // btn.onmouseenter=function(){
        //     btn.style.color='red';
        // }
        
        // btn.onmouseleave=function(){
//     btn.style.color='black';
// }


//we can not work with more than 1 function with this method(onclick)
// let btn= document.querySelector('button');

// function one(){
//     console.log('one');
    
// }

// function two(){
//     console.log('two');
    
// }

// btn.onclick = one;
// btn.onclick = two;//only printing the two

// so we will use eventListener --> it allows you to run multiple event listeners at the same element
// let btn= document.querySelector('button');

// function one(){
//     console.log('one');
    
// }

// function two(){
//     console.log('two');
    
// }

// btn.addEventListener('click',one);//it accepts two mandatory args
// btn.addEventListener('click',two);


// question:-btn click krne pr body ka background =palm

// let btn=document.querySelector('button');
// let body = document.querySelector('body');
// btn.addEventListener('click', function(){
    //     body.style.backgroundColor='plum';
    // });
    


// ondblckick--------------------

// onclick --> ek bar click kiya to chala
// ondblclick --> do bar click kiya to chala

function meraFunc(){
    console.log("do bar click kiya h!");
    
}
let btn=document.querySelector('button');
btn.addEventListener('dblclick',meraFunc);


// best way is to use addEventListener as we can use multiple event listener 





