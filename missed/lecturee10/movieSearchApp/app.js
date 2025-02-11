

let input = document.querySelector('input');
let btn = document.querySelector('button');  
let list = document.querySelector('#list');

// btn press krke search krna
btn.addEventListener('click',function(){
    let searchText = input.value;
    // console.log(searchText);
    let data = fetchData(searchText);
    input.value = '';
})

// api call krna and show krna
function fetchData(searchText){
    axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
        .then(function(response){
            manipulateDom(response.data);
        })
}

// yha pr dom change krega cheeze
function manipulateDom(datas){//data ka andar hai array

    // remove already present movies
    while(list.firstChild){
        list.firstChild.remove();
    }

    // add new movies
    for(let data of datas){
        let figure = document.createElement('figure');
        if(data.show.image){
            figure.innerHTML = `<img src="${data.show.image.original}">
                                <h2>${data.show.name}</h2>`;
            list.appendChild(figure);
        }
    }
}