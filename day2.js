function functionName(arg1, arg2) {
  const result = arg1 + arg2;
  console.log(result);
  return result;
}
const ret = functionName(2, 3);
console.log(ret);

// variable referenced function
const variableFunction = function () {
  console.log("some result");
};
variableFunction();

// arrow function
const arrowFunction = (arg) => "Hello" + arg;
const ret2 = arrowFunction("World");
console.log(ret2);

const arrowFunction2 = () => {
  console.log("scope arrow");
  return "Something";
};
arrowFunction2();

const obj = {
  name: "rahul",
  func1: function () {
    console.log("scope normal", this.name);
  },
  func2: function () {
    console.log("scope arrow", this.name);
  },
};

obj.func1();
obj.func2();

// closure and callback
const outerFunction = (outerArg) => {
  let counter = outerArg;
  const innerFunction = () => {
    counter++;
  };
  return innerFunction;
};

const closureFunc = outerFunction(1);
closureFunc(); // 2
closureFunc(); // 3 -> preserves the state of counter variable

const closureFunc2 = outerFunction(1);
closureFunc2(); // -> new instance of counter variable
closureFunc();

// Higher order Function, callback
const hof1 = (arg1, callback) => {
  callback(arg1);
};
const callbackFunc = (arg) => {
  console.log("Hello", arg);
};
hof1("World", callbackFunc);
hof1("World", (arg) => console.log("hi", arg));

// FIX 2: num1.num2 → num1, num2
const calculate = (num1, num2, cb) => {
  const result = cb(num1, num2);
  console.log(result);
  return result;
};
const addition = (a, b) => a + b;
const additionResult = calculate(2, 3, addition);
const subtractionResult = calculate(5, 2, (a, b) => a - b);

// list collection callback
const fruits = ["apple", "mango", "grapes"];

// FIX 3: moved forEach calls outside howToIterate's body
const howToIterate = (item, index, arr) => {
  console.log(index, item);
};

fruits.forEach(howToIterate);
fruits.forEach((item, index) => console.log(index, item));

// map/transform
const transformedFruits = fruits.map((item, idx, arr) => item.toUpperCase());
console.log(transformedFruits);

// FIX 4: added missing `classname =` and fixed `$(item)` → `${item}`
const liTags = fruits.map((item, idx) => {
  let classname = "";
  if (idx % 2 === 0) {
    classname = "bg-light text-dark";
  } else {
    classname = "bg-dark text-light";
  }
  return `<li id="${item}" class="${classname}">${item}</li>`;
});
console.log(liTags);

const filteredFruits = fruits.filter((item, idx, arr) => item.length > 5);
const accumulatedValue = fruits.reduce(
  (acc, item, idx, arr) => acc + item,
  "" // initial state
);
console.log(accumulatedValue);

// FIX 5 & 6: removed duplicate declaration; removed stray `;` inside array
const students = [
  { name: "Alice", grade: 95 },
  { name: "Bob", grade: 82 },
  { name: "Charlie", grade: 78 },
  { name: "Diana", grade: 91 },
  { name: "Evan", grade: 88 },
  { name: "Fiona", grade: 73 },
];

// 1. MAP — return new array of student names only
const studentNames = students.map((student) => student.name);
console.log(studentNames);

// 2. FILTER — return students who scored above 90
const above90 = students.filter((student) => student.grade > 90);
console.log(above90);

// 3. FILTER — return students with an even index (0, 2, 4...)
const evenIndex = students.filter((student, index) => index % 2 === 0);
console.log(evenIndex);

// 4. REDUCE — return the total grade of all students
const totalGrade = students.reduce((accumulator, student) => {
  return accumulator + student.grade;
}, 0);
console.log(totalGrade); // 507