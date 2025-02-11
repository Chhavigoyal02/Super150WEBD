
let ul = document.querySelector('ul');

// XMLHTTPRequest(Method-1)
let req = new XMLHttpRequest();
// red is a object as XMLHttpRequest returns a object

// now we are going to opena a connection as i am on client currently and data is on server
// in open we have many methods like get, post, put, delete
// get(retrieve/fetch/lena), post(bhejna/dena)
req.open('GET', 'https://api.tvmaze.com/search/shows?q=girls');
// request send
req.send();

// jb shi salamat data aa jaye or saara kam shi se ho jaaye
req.onload = function () {
    let data = JSON.parse(this.response);
    console.log(data);
    for(let d of data){
        let li = document.createElement('li');
        li.innerHTML = `
            <img src="${d.show.image.original}" height="200px" width="200px">
            <p>${d.show.name}</p>
        `;
        ul.appendChild(li);
    }
}

// but jab error aa jaye to
req.onerror = function () {
    console.log("Error occured");
}