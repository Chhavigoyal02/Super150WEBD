

// special file i.e. index.js (only in the case of folders)
// whatever written in this index.js will be exporting from whole animal folder
// so this animal folder is dependent on index.js file

let cat = require('./cat');
let dog = require('./dog');

module.exports = {cat,dog};