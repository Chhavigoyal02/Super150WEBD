// settimeout()method, accepts a call back function, yeh ek baar chalta h itne time k baad (web api)
// miliseconds m hoga time 1sec=1000ms, delay deta h
// call back function itself function k andar bheja h and usme call bhi hora h
setTimeout(function(){
    console.log("hi bhai")
},4000)

let id=setInterval(function(){
    console.log("gian hai aap")
},3000)

setTimeout(function(){
    clearInterval(id)
},10000)