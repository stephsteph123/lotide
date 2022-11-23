# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @stephrowe/lotide`

**Require it:**

`const _ = require('@stephrowe123/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`
`assertEqual("Lighthouse Labs", "Bootcamp")`
`countLetters("This is a thing that should count all of the things.")`
`assertEqual(result1["Agouhanna"], undefined);`
`assertEqual(eqArrays([1, 2, 3], [1, 2, 3])) // => true`
`assertEqual(eqObjects(ab, ba)); // => true`
`assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);`
`assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");`
`const results1 = map(words, word => word[0]);`
`middle([1, 2, 3, 4, 5, 6]) // => [3, 4]`
`assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Labs");`
`takeUntil(data2, x => x === ',')`
`without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]`


## Documentation

The following functions are currently implemented:

head, returns start of an array
tail, returns end of an array
middle, returns middle value of array
assertEqual, determines if actual and expected are true or false
countLetters, counts letters
countOnly, counts only selected values
eqArrays, returns if array values match
findKeyByValue, finds a objec key by value
maps, maps
eqObjects, determines if objects match
takeUntil, takes in a string until the a value is met
 without, returns only values in array that match
