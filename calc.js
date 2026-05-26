//#region CommonJS modules
// exports.mult = (a, b) => a * b;
// module.exports.pow = (a, b) => a ** b;
// module.exports = Person;
//#endregion

//#region ES6 modules
export const mult = (a, b) => a * b;
export const pow = (a, b) => a ** b;

class Person {
    id;
    name;
}

export default Person;
//#endregion