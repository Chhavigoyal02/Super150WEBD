let article = document.querySelector('article');

// ------------add-----------------------
article.classList.add('sam');

// article.classList.add('sam samarth');//wrong way
article.classList.add('sam','samarth');    

article.classList.add('changu');//can add one more class without memorizing the previous class


// -------------remove----------------------
article.classList.remove('changu');
// article.classList.remove('changu','samarth');//can also remove multiple classes


// ----------------toggle-----------------------
// article.classList.toggle('toggle')
// true
// article.classList.toggle('toggle')
// false


// ----------------contains------------------(returns a boolean value)
console.log(article.classList.contains('changu'));//false
console.log(article.classList.contains('sam'));//true
console.log(article.classList.contains('samarth'));//true
;



