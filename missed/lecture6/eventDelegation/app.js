


// let products = document.querySelectorAll('section figure');
// console.log(products);

// this is nto the optimized way as here we are making an event for each and every item
// one more drawback is if dynamically add kroge to dikkt dega
// for (let item of products){
//     item.addEventListener('click',function(){
//         console.log(this.innerText);
//     });
// }

// to iss cheez se bachne k liye use hota h "event delegation"
// here we are making an event on the parent element rather than making on child element
let section = document.getElementById('container');

section.addEventListener('click',function(e){
    if(e.target.nodeName === 'FIGURE'){
        console.log(e.target.innerText);
    }
})


