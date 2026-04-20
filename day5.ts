
let var1 = "Hello world"
console.log(var1)

// var1 = 10; //can't be changed!!
let strVar: String = "Ram"
let numVar: number =  10
let boolVar: boolean = true;
let anyVar: any = "I can be anything"
let unknownVar: unknown = "I am unknow"
unknownVar = 232;

// strVar = anyVar; // can assign any to string

console.log(strVar, typeof strVar)
console.log(numVar, typeof numVar)
console.log(boolVar, typeof boolVar)
console.log(unknownVar, typeof unknownVar)


// union
let union: string | number = "Union Type"
union = 100

console.log(union, typeof union)


let arr1: number[] = [1,2,3];
let arr2: Array<string> = ["a", "b", "c"];
let arr3: (String | number)[] = ["a", 1, "b", 2]
let arr4: Array<string | number> = ["a", 1, "b", 2]
console.log(arr1,arr2,arr3,arr4)

let tupleVar: [String, number] = ["Age", 20];
console.log(tupleVar)


const add = (a: number, b:number)=> {
  return a + b
}

add(10,10)


const calculate = (a: number, b?: number): string => {
  return "Some result"
}

console.log(calculate(10));
const detail = (name: string = "unknown", age: number = 0) : String => {
  return `Name: ${name} and age: ${age}`
}

console.log(detail("rahul", 21));




const fruits: String[] = ["Apple", "Cherry", "Kiwi", "Grapes", "Fig"]



const filterFruits = (fruits: String[], num: number = 3) => {
  const answer = fruits.filter(items => items.length > num)
  console.log(answer)

  //varibale []
  // loop
  // print variabel
}

filterFruits(fruits)


const countfruit = (fruits: String[], num: number = 2) => {
  let count: number = 0;
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i]!.length > num) {
      count++
    }
  }

  console.log(`Total items which is greater then 2 is: ${count}`)
}

countfruit(fruits);


const findFruits = (fruits: String[], search: String) => {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < fruits.length; i++) {
      if (fruits[i] === search) {
        resolve(` found: ${fruits[i]} in index: ${i}`)
      }
    }
    reject(new Error("Not found any items"))
  })
}

findFruits(fruits, "Apple")
.then(result => console.log(result))
.catch(error => console.log(error))