// Array Destructure --> based on the index **postion**

const arr = [1, 2, 'B42WEENG', true, undefined];

// take the 3rd(index 2) element of the array and assign it to varaible batch

// var batch = arr[2];

// destructuring --> left-hand-side sturcture
// var [ , , batch ] = [1,2,'B42WEENG', true, undefined]

// store the 1st( oth index ) element into a var a
// var [a] = arr; // [1, 2, '', ]

// store the 2nd( 1th index ) element into a var b
// var [ , b ] = arr; // [1, 2, '', ]


// all the variable in single destructure a(0th), b(1th), batch(3rd)
var [a, b, batch] = arr; // [1,2,'B42WEENG', true, undefined]

// console.log('Batch', batch);
// console.log('a', a);
// console.log('b', b);

// edge cases

// asking for a value that is not there

var arrTwo = [1, 'B42WEENG', false, 'Hello'];

// asking for an index that is not there in array the left side destucture will take undefined
var [ , , , , , x] = arrTwo;

// console.log('x', x);

// default value specification ( default value assigned when no index value present )
var [ , , , , , x='SOME-VALUE'] = arrTwo;

// console.log('x', x);
// console.log(arrTwo);


// default value specification - Index value
arrTwo = [1, 'B42WEENG', false, 'Hello', 'Hi', 'world'];
var [ , , , , , x='SOME-VALUE'] = arrTwo;

// console.log('x', x);

// Object Destructuring ( works with key name)
var obj = { 
  batchName: 'B42WEENG', 
  totalStrength: 13, 
  isWeekend: true, 
  techs: ['JS', 'HTML']
};


// take the value of batchName and create a varaible batchName

// var batchName = obj.batchName;

// var { batchName } = obj; // destructuring { batchName: 'B42WEENG', totalStrength: 13, }

// take the value for totalStrength
// var { totalStrength } = obj;

// single line detructure
// var { batchName, totalStrength } = obj;

// console.log('BatchName', batchName);
// console.log('Total Stength', totalStrength);

// asking for key not present will result in undefined 
var { task } = obj;

console.log('task', task);

// default value ( = )
var { task='Day1' } = obj;

console.log('task', task);

// take the batchName as batchId ( : )
var { batchName: batchId } = obj;

console.log('BatchId', batchId);

// default value on change name on asking smething is not there
var { task: taskName='Day3' } = obj;
console.log('TaskName', taskName);

// nested desturcture
const objNested = {
  batch: 'B42WEENG',
  details: {
    totalStrength: '13',
    isWeekend: true,
    task: ['day1', 'day2']
  }
};

// nested desturcture

// desturcture totalStrength : further desturcture
var { details: { totalStrength } } = objNested;

console.log('TotalStrength', totalStrength);

// isWeekend
var { details: { isWeekend } } = objNested;

console.log('Weekend', isWeekend);

// rest operation ( accompanies destructure )
// taking the rest all values/elements as the composite type

const arrThree = [1, 2, 3, 4, 5];

// var z as 1st element
// take the rest all elements
var [z, ...restElements ] = arrThree;

console.log('z', z);
console.log('Rest Elements', restElements);

const objThree = {
  batch: 'B42WEENG',
  strength: 13,
  task: ['Day1', 'Day2'],
  isWeekend: true
};

const { strength, ...restObj } = objThree;

console.log('Strength', strength);
console.log("RestObj", restObj);
