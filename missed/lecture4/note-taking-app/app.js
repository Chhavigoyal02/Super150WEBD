

// selecting the input
let titleEl = document.getElementById('title');

// selecting the ul
let listEl = document.getElementById('list');

// selecting my btn for the  event triggering
let addButtonEl = document.getElementById('add-btn');

addButtonEl.addEventListener('click',function(){
    // extracting the value from input
    let titleText = titleEl.value;
    // creating the li for appending it
    let li = document.createElement('li');
    // inserting the text inside li from the input value
    li.innerText=titleText;
    // newly created li hai usse append/add krna h ul me
    listEl.appendChild(li);
    // then after submitting input ko clear krdo
    titleEl.value='';

    // remove the li after clicking on the li(deleting the task by clicking on it)
    li.addEventListener('click', function(){
        li.remove();
    });
})
