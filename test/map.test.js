const assertEqual = require('../assertEqual');
const map = require('../maps');

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);
