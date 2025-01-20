

let div = document.createElement('div');
let div2 = document.createElement('div');

div.innerText = 'hello world';
div2.innerText = 'welcome to DOM';
let arti = document.getElementById('arti');
// arti.appendChild(div);//appendChild parent ke last m jaake element ko add krega;only accepts 1 element;only html element
// arti.appendChild(div2);
// arti.appendChild(div,div2);---->wrong way


// arti.append(div,div2);//can use append method to add more than 1 elements at once
arti.append('append se add hua text');


arti.prepend(div,div2);//start me add krega
arti.prepend('prepend se attach hua text')


