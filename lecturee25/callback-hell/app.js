// insta photo upload
// Select 5 
// filter 3
// caption 7
// upload 4
function step1(filter){
    console.log("Please wait i am selecting image....");
    setTimeout(function(){
        console.log("image selected");
        filter("selected image")
    },5000)
}

function step2(image,caption){
    console.log("Please wait finding filter....");
    setTimeout(function(){
        console.log(`filter applied on ${image}`);
        caption("filtered image");
    },3000)
}

function step3(filter,final){
    console.log("Please wait adding caption....");
    setTimeout(function(){
        console.log(`caption added on ${filter}`);
        final("captioned image")
    },7000)
}

function step4(final){
    console.log("Please wait while posting....");
    setTimeout(function(){
        console.log(`posted ${final}`);
    },4000)
}

step1(function(image){
    step2(image,function(filter){
        step3(filter,function(final){
            step4(final);
        });
    });
})
// call back hell(nesting of call back functions called call back hell)
//pyramid of doom
//horizontal scaling of code
// worst way of nesting call back
// isse bachne k liye we use promises

function step1(){
    console.log("Please wait i am selecting image....");
    setTimeout(function(){
        console.log("image selected");
        step2(image)
        return"selected image"
    },5000)
}
let image=step1()