

// using fetch for calling an api(Method-2)

fetch('https://api.tvmaze.com/search/shows?q=girls')
    .then(function(response) {
        return response.json();//.json() also returns a promise
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(err) {
        console.log(err);
    })