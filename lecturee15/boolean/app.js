let var1=true;

console.log(var1);

// comparison operator(==) --> check equality(it is a normal comparison means data type check nhi hote , only value check hoti h. it is also known as general eqality)
//typecasting --> dharam parivartan 
 let ans= var1==1;
//possibility 1 - var1 ki value ans m store then compare with 1 --> wrong
//possibility 2 - var1 compare with 1 then store value in ans  --> right

 console.log(ans);

 //strict equality(===) (here data types are compared and typecasting nhi hoti)
 let ans2=var1===1;
 console.log(ans2);