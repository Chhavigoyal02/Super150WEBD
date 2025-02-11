
// Approach - 1 (rejectes as it uses so many modulo operations and modulo is one of the heaviest operation as it uses loop in its backend)
function fizzBuzz(n){
    for(let i=1;i<=n;i++){
        if(i%5===0 && i%3 === 0){
            console.log("FizzBuzz");
        }
        else if (i%5 ===0){
            console.log("Buzz")
        }
        else if (i%3=== 0){
            console.log("Fizz")
        }
        else{
            console.log(i);
        }
    }
}

// fizzBuzz(20);

// Approach - 2 (little optimized) 
function fizzBuzz2(n){
    for(let i=1;i<=n;i++){
        let str = "";
        if(i%3===0){
            str+='Fizz';
        }
        if(i%5 === 0){
            str += 'Buzz';
        }
        if(str === ""){
            str +=i;
        }
        console.log(str);
    }
}

// fizzBuzz2(20);


// Approach - 3 (most optimized)
function fizzBuzz3(n){
    let cnt3 = 1;
    let cnt5 = 1;
    for(let i=1;i<=n;i++){
        let str = "";   
        if(cnt3 == 3){
            str += 'Fizz';
            cnt3=0;
        }
        if(cnt5 == 5){
            str += 'Buzz';
            cnt5=0;
        }
        if(str ==  ""){
            str += i;
        }
        console.log(str);
        cnt3++;
        cnt5++;
    }
}

fizzBuzz3(20);