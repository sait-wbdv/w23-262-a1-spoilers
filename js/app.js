
/**********/
/* String */
/**********/

// Before
let stringBefore = 'Tony Grimes';

// After 1
let stringAfter1 = stringBefore.toUpperCase();

// After 2
let stringAfter2 = stringBefore.toLowerCase();

// After 3
let stringAfter3 = stringBefore.replace('Grimes', 'Bird');

/**********/
/* Number */
/**********/

// Before
let numberBefore = 37.75;

// After 1
let numberAfter1 = numberBefore + 1;

// After 2
let numberAfter2 = Math.round(numberBefore);

// After 3
let numberAfter3 = numberBefore.toFixed(4);


// String Before
const stringBeforeOutput = document.querySelector('.string-before');
stringBeforeOutput.innerText = stringBefore;

// String After 1
const stringAfter1Output = document.querySelector('.string-after-1');
stringAfter1Output.innerText = stringAfter1;

// String After 2
const stringAfter2Output = document.querySelector('.string-after-2');
stringAfter2Output.innerText = stringAfter2;

// String After 3
const stringAfter3Output = document.querySelector('.string-after-3');
stringAfter3Output.innerText = stringAfter3;

// Number Before
const numberBeforeOutput = document.querySelector('.number-before');
numberBeforeOutput.innerText = numberBefore;

// Number After 1
const numberAfter1Output = document.querySelector('.number-after-1');
numberAfter1Output.innerText = numberAfter1;

// Number After 2
const numberAfter2Output = document.querySelector('.number-after-2');
numberAfter2Output.innerText = numberAfter2;

// Number After 3
const numberAfter3Output = document.querySelector('.number-after-3');
numberAfter3Output.innerText = numberAfter3;