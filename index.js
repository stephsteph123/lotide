// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertEqual = require('./assertEqual');
const countLetters = require('./countLetters')
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const findKeyByValue = require('./findKeyByValue');
const maps = require('./maps');
const eqObjects = require('./eqObjects');
const takeUntil = require('./takeUntil');
const without = require ('./without');



module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertEqual: assertEqual, 
  countLetters: countLetters,
  countOnly: countOnly,
  eqArrays: eqArrays,
  findKeyByValue: findKeyByValue,
  maps: maps,
  eqObjects: eqObjects,
  takeUntil: takeUntil,
  without: without,

};