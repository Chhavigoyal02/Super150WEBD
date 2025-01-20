


// let formEl = document.querySelector('form');
// formEl.addEventListener('submit',function(e){   
//     e.preventDefault();//jis element pr ye event ga hua h uska default behaviour rok dega (now no browser refresh)
//     console.log('form submitted');
    
// });

// whenever a form get submitted the browesr reload the website so we can se the "form submitted" text written in the console
// form--> default behavior --> submits itself --> browser refresh

// but now i want to stop the refreshing of browser means we have to stop the default behaviour of form by a method prevelDefault


// for accessing the form elements:-
// form has one property "elements" which provide all the elements inside the form 

let formEl = document.querySelector('form');
formEl.addEventListener('submit',function(e){   
    e.preventDefault();
    console.log(formEl.elements[0].value);
    console.log(formEl.elements[1].value);
    
});