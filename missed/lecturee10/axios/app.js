
// Axios(Method-3)
axios.get('https://api.tvmaze.com/search/shows?q=girls')
    .then(function(res){
        console.log(res.data);
    })
    .catch(function(err){
        console.log(err)
    });