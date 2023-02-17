
/***********/
/* Strings */
/***********/

// Before 1
// My first name!
let stringBefore1 = 'Tony';

// Before 2
// My dad's last name. I've considered taking my mom's maiden name but I'm too lazy to change it.
let stringBefore2 = 'Grimes';

// After
// I love string literals!
let stringAfter = `Hi! My name is ${stringBefore1} ${stringBefore2}.`;

console.log('stringBefore1', stringBefore1);
console.log('stringBefore2', stringBefore2);
console.log('stringAfter', stringAfter);

/***********/
/* Numbers */
/***********/

// Before 1
// Floating point number
let numberBefore1 = 37.75;

// Before 2
// Integer, but not really
let numberBefore2 = 12;

console.log('numberBefore1', numberBefore1);
console.log('numberBefore2', numberBefore2);

// After 1
// Adding together
let numberAfter1 = numberBefore1 + numberBefore2;
console.log('numberAfter1', numberAfter1);

// After 2
// Subtracting from each other
let numberAfter2 = numberBefore1 - numberBefore2;
console.log('numberAfter2', numberAfter2);

// After 3
// Division is so divisive
let numberAfter3 = numberBefore1 / numberBefore2;
console.log('numberAfter3', numberAfter3);

// After 4
// The `*` is the multiplication symbol in js
let numberAfter4 = numberBefore1 * numberBefore2;
console.log('numberAfter4', numberAfter4);

/************************************/
/* Do not edit code below this line */
/************************************/

/* This code will create errors until the above steps are completed */

// Print String Before 1
const stringBefore1Output = document.querySelector('.string-before-1');
stringBefore1Output.innerText = stringBefore1;

// Print String Before 2
const stringBefore2Output = document.querySelector('.string-before-2');
stringBefore2Output.innerText = stringBefore2;

// Print String After 2
const stringAfterOutput = document.querySelector('.string-after');
stringAfterOutput.innerText = stringAfter;

// Print Number Before 1
const numberBefore1Output = document.querySelector('.number-before-1');
numberBefore1Output.innerText = numberBefore1;

// Print Number Before 2
const numberBefore2Output = document.querySelector('.number-before-2');
numberBefore2Output.innerText = numberBefore2;

// Print Number After 1
const numberAfter1Output = document.querySelector('.number-after-1');
numberAfter1Output.innerText = numberAfter1;

// Print Number After 2
const numberAfter2Output = document.querySelector('.number-after-2');
numberAfter2Output.innerText = numberAfter2;

// Print Number After 3
const numberAfter3Output = document.querySelector('.number-after-3');
numberAfter3Output.innerText = numberAfter3;

// Print Number After 4
const numberAfter4Output = document.querySelector('.number-after-4');
numberAfter4Output.innerText = numberAfter4;