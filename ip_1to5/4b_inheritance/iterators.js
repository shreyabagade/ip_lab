let fruits = ['mango','grapes','apple']
let iter = fruits[Symbol.iterator]();
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())

