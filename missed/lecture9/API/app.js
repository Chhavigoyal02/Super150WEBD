// directly you can not work on JSON data as it is not object
// convert JSON DATA to JSON string
let jsonData = `[
    {
        "id": 1,
        "name": "John",
        "occupation": "Software Engineer",
        "address": []
    },
    {
        "id": 2,
        "name": "Ajay",
        "occupation": "DevOps Engineer",
        "address": [
            {
                "addressId": 1,
                "city": "Pune",
                "country": "India"
            }
        ]
    }
]`

// this is a string and cannot use dot notation here
// i can not work on string here as it is not object

// so have to convert string into usable java object 
// for this i have two methods:- 1.parse() 2.stringify()
// parse() method accept a JSON string and convert it into a usable JavaScript object (or array, depends)
// stringify() method accept a JavaScript object(or array) and convert it into a JSON string

// parse() method
console.log("Script running...");
let obj = JSON.parse(jsonData);
console.log(obj);

console.log(obj[0]);
console.log(obj[0].occupation);

// stringify() method
let str = JSON.stringify(obj[0].occupation);
console.log(str);



