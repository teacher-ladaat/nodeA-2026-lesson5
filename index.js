//#region CommonJS modules
// require('./calc');
//#endregion

//#region ES6 modules
import MyPerson, { mult, pow } from './calc.js';

// const _ = require('lodash');
import _ from 'lodash';

//#endregion
// console.log(mult(10, process.argv[2]));

console.log(mult(8, 2));
console.log(pow(8, 2));

console.log(_.shuffle(["hello", 2, 3, 4]));
