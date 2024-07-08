// let p = new Promise(function(resolve,reject ){
//     console.log("top");
//     let data=100;
//     let err="mai gireya hoya banda jama neecha baliye"
//     reject(err);
//     resolve(data);
//     console.log("mai hu ek vaada");
//     console.log("end");
// })

// p.then().catch()

// p.then(function(d){
//     console.log(d)
// })

// p.then(function (d){
//     console.log(d)
// }).catch(function(e){
//     console.log(e)
// })

// p.catch(function(e){
//     console.log(e,".catch");
// })


//-----------INSTRAGRAM PROBLEM BY PROMISES----------------
let step1= function (){
    return new Promise((resolve,reject)=>{
        console.log("Please wait,Image is being selected....");
        setTimeout(function() {
            resolve("Image Selected");
        }, 4000);
    });
};

let step2=function(image){
    return new Promise((resolve,reject)=>{
        console.log(`Please wait,Filter is being applied on ${image} ...`);
        setTimeout(function() {
            resolve("Filter Applied");
        }, 3000);
    })
};

let step3=function(filter){
    return new Promise((resolve,reject)=>{
        console.log(`Please wait,Caption is being applied on ${filter} ...`);
        setTimeout(function() {
            resolve("Caption Added");
        }, 5000);
    })
};

let step4=function(){
    return new Promise((resolve,reject)=>{
        console.log(`Please wait while posting`);
        setTimeout(function() {
            resolve(`Posted`);
        }, 5000);
    })
};

step1()
.then(function (image){
    console.log(image);
     return step2(image);
})
.then(function (filter){
    console.log(filter);
    return step3(filter);
})
.then(function(caption){
    console.log(caption);
    return step4(caption);
})
.then(function(final){
    console.log(final);
})
