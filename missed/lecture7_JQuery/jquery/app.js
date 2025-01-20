// Jquery is javascript library which helps in dom manipualtion; vo saare kaam kra skte jo tum dom k through krate the

// js ke do library h:- jquery and react.js
// React.js ke under bhi do h:- next.js and react native

//  HOW DO WE SELECT ELEMENTS IN JQUERY:-

// $ is equivalent to querySelectorAll in DOM
// so if i add two or three h1 tags then $ will select all the h1 tags
// $('h1')// to select the h1 tag
// console.log($('h1'));// to print the h1 tag

// // by class
// // ek se jyada classes bhi select ho skti h same as above
// console.log($('.sam'));

// // by id
// // id ek se jyada select nhi hoti h (first encounter wali hi select hogi) as id is unique
// console.log($('#one'));

// MANIPULATE ELEMENTS IN JQUERY:-

// there in dom we used .style to change the style of the element but here we use .css

// $('h1').css('color','red');// to change the color of h1 to red(saare h1 mainpulate hue)
// $('h1').css('background-color','green');

//to attach one more css properties we use object
// $('h1').css({
//     color: 'red',
//     backgroundColor: 'green'
// });

// HOW TO ACCESS TEXT OF ELEMENTS IN JQUERY:-
// there innerText, innertHtml, textContent is used to access the text of the element but here we use .text()
// textContent is equivalent to text() in jquery
// console.log($('p').text());//text is a  method


// //as a setter
// console.log($('p').text('hello world'));
// console.log($('p').text('<em> hello </em>'));// it will print the text as it is; it will not print the html tags

// // here html() is used to access the html of the element which is equivalent to innerHTML in dom
// console.log($('p').html('<em> hello </em>'));// it will print the html tags with the css too!


// HOW TO MANIPULATE ATTRIBUTES IN JQUERY:-

// console.log($('a').text());
// console.log($('a').attr('href'));//getter
// console.log($('a').attr('href','http://facebook.com'));//setter


// SELECTING PARTICULAR ELEMENTS:-
// $('h1').css('border','2px solid red');// ye to sb h1 pr ho jayga
// $('h1:nth-Of-type(3)').css('border','2px solid red');//3rd h1 pr hoga
// $('h1:last()').css('border','2px solid red');//lastChild() and firstChild() pr kaam nhi krra but instead of that only last and first keyword is used


// alternate way to select the last h1 tag rather than using pseudo class way
// $('h1').last().css('border','2px solid red');//this also works, i have the method to select the last h1 tag
// $('h1').first().css('border','2px solid red');



// GETTING VALUE OF INPUTS:-

// in dom we used .value , but here we are gonna use .val()
// console.log($('input').val());//getter
// $('input').val('hello world');//setter


// TO MANIPULATE CLASSES -- ALL THOSE METHODS(add, remove, toggle, has) WHICH WE USED IN DOM ARE ALSO USED IN JQUERY

// // addClass()
// $('h1').first().addClass('first');//single class
// $('h1').first().addClass('first second sam');//multiple classes can also be added

// // removeClass()
// $('h1').first().removeClass('first');//single class
// $('h1').first().removeClass('first sam');//multiple classes can also be removed

// // toggleClass()
// $('h1').first().toggleClass('first');//single
// $('h1').first().toggleClass('first sam');//mutliple classes can also be toggled

// // hasClass()
// console.log($('h1').first().hasClass('first'));//false
// // can also work for checking multiple classes

// EVENTS:-


// click event
// $('button').click(function(){
//     console.log('clicked!');
// });

// *NEW THING AND IMPORTANT CONCEPT*  --> this
// here this keyword in jquery is NOT the same as this in javascript (there event.target was used it is equivalent to "this" in jquery)
// here this points to elements over which the event is triggered
// $('li').click(function(){
//     $(this).css('color','red');
// })
// agr hum yha pr arrow function ka use krte to ye idhr bhi nhi chlta  
// $('li').click(()=>{
//     $(this).css('color','red'); ---> wrong way
// })


// input event
// $('input').keyup(function(){
//     console.log($(this).val());
// });
// $('input').keypress(function(e){
//     // console.log(e);
//     if(e.which===13){
//         console.log('you hit enter');
//     }
// });


// ALTERNATIVE FOR ADDING EVENT LISTENERS:-
// here we use "on"

// $('button').on('click',function(){
//     console.log('clicked!');
// });



// EFFECTS
$('#out').on('click',function(){
    $('#container').fadeOut();
})
$('#in').on('click',function(){
    $('#container').fadeIn();
})
$('#toggle').on('click',function(){
    $('#container').fadeToggle();
})











