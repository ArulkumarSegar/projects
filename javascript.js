/*   

Question 1: What is difference between let and const? What is the difference between let and var?

Question 2 : what is output of this function

function sample (){
for (let i=0; i<=5;i++){
setTimeout (() => Console.log(i), 1000 );
  }
}

Question 3 : what is output of this

SetTimeout(()=>{
Console.log("a");
},2000)
Console.log("b") ;

Question 4: how can you print a first and b later with. You are not allowed to use any extra setTimeouts?

answers: 

1 => Let is a block scope variable and var is a global scope..const is also the same as let but it has some limitations
2 => 1,2,3,4,5
3=> b a

______________________________________________________________________________________________________________________________________

Question 1: What is output of this (refer this if you dont know about setimmediate - https://www.educative.io/edpresso/what-is-setimmediate-in-nodejs)

SetImmidiate (()=>{
Console.log("first")
})

SetTimeout (()=>{
Console.log("second")
})

Console.log("third");


Question 2 : Difference between SetImmidiate and Process.nexttick
Question 3: What is difference between promise and call back
Question 4 : What is output ?

Let a=New Promise((resolve,reject)=>{
reject ({ msg: 'Something went wrong' ))
})
a.then(ressolve=>{console.log{ressolve}}).catch(err=>{console.log(err.msg) })

Question 5 : what is output ?

await delay(6000)
SetTimeout (()=>{
console.log("first")
},10000)
console.log("second");

Question 6: What is function definition ?

Answers: 

1.Third, second, first
2.process.nextTick will  execute in the next iteration of the event loop and setImmediate will execute after all the event loop finishes
3.a callback function is passed on another function parameter and in promises, we attach the callback function to returned promises object
4.something went wrong
5.second, first
6.function definition means how we are defining the function. when we use the function keyword it means we are defining the function. In javascript, there are two types of function definitions.Types are function declaration and function expression

___________________________________________________________________________________________________________________________________

Explain in detail the answers to the following questions with examples

1.What is the temporal dead zone?
2.Const person=
{
Name:p1,
Age:24
}

Can we change age to 25? 
Can we do person.push(age:25);

3. Write a function to generate random number between 10 and 99?
4. Difference between settimeout, setinterval setimmediate?
5. Difference between null and undefined
6. Difference between undeclared and undefined

Answers:

1.Temporal dead zone:

    Eg: let b=100;
     when js see this above line it's a memory allocation phase(when it comes the first time) it will allocate the memory for an in-scope(script).
     After in codeExecution phase when it sees the value 10 then it will initialize that value to 10
     The time between the memory allocation phase and code execution is called the temporal dead zone

2. yes you can modify the value of the const variable and you can person push operation on the object but you can update the value by calling the person.age=30

3.function generateRandomNumber(min,max){
  const random = Math.floor(Math.random()*(max-min+1)+min);
  return random;
}

4.

 settimeout function executes only once after particular interval time
        Eg: setTimeout(() => {
            console.log('set time out')
        },1000)

    setInterval function executes repeatedly for every interval of time
        Eg:setInterval(() => {
            console.log('hello')
        },2000)

    setImmediate will be executed before the setTimeout and setInterval
        Eg:setImmedaite(() => {
            console.log('setImmediate')
        },1000)


5. Null means there will be the intentional absence of the value but undefine means memory is allocated but it's not assigned yet
6. undeclare means the variable does not exist at all whereas undefine means memory is allocated but it's not assigned yet
_____________________________________________________________________________________________________________________________________________________________________

1.Difference between ‘==’ and’ ===’ ? (2)
2.Spread and rest operators
[a,...b,]=[1,2,3,4,5]
What are a and b values?


3. const fun = () => arguments.length;
console.log(fun(1,2));

What is the output?

4. Let str=”JavaScript=Node=Express”;  replace “=” with “.”?
5. Reverse the string given str=”India” to "aidnI"
6. Let arr=[7,8,9,10]

Write a function to check if the given number "n" exists in the array.
If present remove the number from the array , return the remaining array excluding the number else print element not present.

Example Input 1
arr=[7,8,9,10] , n=8
Output
arr=[7,9,10]
Example Input 2
arr=[7,8,9,10] , n=10
Output
"Element not present"

Answers:
 
1. Difference between ‘==’ and’ ===’ 

    == is used to check the value is equal or not
    === is used to check the value and type are equal
    Eg:let a = 1;
       let b = '1';


    console.log(1 == '1'); // true
    console.log(1 === '1'); // false

2.a=1 , b=[2,3,4,5]

3.length will be two

4.const result = str.replaceAll('=' , '.');

5.const result = str.split("").reverse().join("");

6.function checkNumberAndDeleteIfExists(myArray,number){
   
   let isPresent = false;
   
   for(let i=0;i<myArray.length;i++){
     
     if(myArray[i] == number){
       isPresent = true;
       myArray.splice(i,1);
     }
   }
   if(!isPresent)
   console.log('number not present')
}


const arr = [1,2,3,4,5];
checkNumberAndDeleteIfExists(arr , 7)
console.log('arr ' , arr);


______________________________________________________________________________________________________________________________


1)When do we use async await ?
2)What is the reason behind writing await inside async function only?
3)What will the output of this be?

async fun fun1(){
console.log('a');
console.log('b');
await setTimeout(() => console.log('c'), 1000)
await setTimeout(() => console.log('d'), 0)
console.log('e');
}

fun1()

Explain the reason behind the answer?

4) can you solve thee above problem, so that we get proper outputs ? Hint await should works properly.
5) What are callback? What is Callback hell? Can you give an example of callback hell?
6) How are promises more superior than callbacks? How do promises solve the issue of callback hell?

Answers:
 
1. async is used to represent the function is asynchronous and await to used to tell the js to wait for some time until that query gets executed
2. async function means inside we are going to perform function calls which will promise so we use await until that promise is resolved.
3. a b e d c bcoz await don't have any promises to wait 
4.
async function fun1(){

console.log('a');
console.log('b');

await new Promise((resolve,reject)=> {
  setTimeout(() => resolve(console.log('c'), 1000))
}) 

await new Promise((resolve,reject)=> {
  setTimeout(() => resolve(console.log('d'), 1000))
}) 

console.log('e');

}

fun1() 

5. callback function means function should take time to execute and they passed as arguments of the function. 
Each and every callback function take a callback function of the previous function arguments so it will nested call back structure and it's called callbacks. hell

Eg:
function three(){
    console.log('three')
}

function two(three){
    console.log('two')
    three();
}

function one(two,three){
    console.log('one')
    two(three);
}

one();

6. In promises we can return the object either resolve or reject based on that we can do the next operation. when we call the function after that using the then keyword whatever we want to do next. It's more readable than a callback

Eg:
function one() {
    return new Promise((resolve, reject) => {
        console.log('one');
        resolve();
    })
}

function two() {
    console.log('two')
}

one().then(() => two())

______________________________________________________________________________________________________________________________________________________

1) What were the 10 new features that were introduced in ES6? Explain each one of them in detail? You will be asked questions on each example you give?
2) Call, Apply, Bind. When to use what ? Can you give an example?
3) What are different ways to store data in browser? Explain each one of them and when should we use what?
4)What are generator function in javascript ? How are they different from normal function?
5)Difference between arr.foreach,  array.map and array.filter? Take example  input array and explain the output which you will get
6)What is the use of arr.reduce? Explain with an example.

Answers:

1.ES 6 features

let and const
    Before ES6 was released only var type is available to assign variable.
    In ES6 let and const are introduced which are also the type used to declare variables
    Var is a function scope we can access the value before declaration but in let and const we can't
    let is used to define variables and const used to define constant values

    Eg: let i=10;
        console.log(i) // 10

        const PI = 3.14;
        console.log(PI) // 3.14


Arrow function

    Arrow function are used to write the concise syntax by removing function and return
    Eg: let sumOfTwoNumber = (a,b) => a + b;
    const result = sumOfTwoNumber(1,6);
    console.log(result) // 7
    If we want to execute multiple statements then we need to add {} and return the statement

Multi-line strings
    Multi-line strings we can declare the string in multiple lines using backtick (`)
    we can break the statements into multiple lines
    Eg: const str = `Hello I'm Arun,
                and wish you to live long,
                stay happy`

Default parameter
    we can give value to function parameter if we didn't pass value to function args then parameter value will be taken
    Eg: function sum(a=10,b=10){
        console.log(a+b) // 20
    }

    sum()

Template literals

    when we want to used varibles inside the string we use Template literals
    Syntax: ${PARAMETER}

    Eg:const age = 10;
    const str = `I'm arun and my age is: ${age}`;
    console.log(str) // I'm arun and my age is:10

Destructing assignment
    Destructing means extracting the values from the arrays or object
    Eg: array destructing
    const fruits = ['apple' ,  'orange']
    const [a,b] = fruits
    console.log(a,b)

    Eg:object destructing
    const person ={name:'arun' ,age:'30'}
    const {name,age} = person;
    console.log(name , age)

Enhanced object literals
we can easily create an object using enhanced object literal

Eg:
function student(name,age,mark){
    return{
        name,
        age,
        mark
    }
}
console.log(student('arun' , 24,70)) // { name: 'arun', age: 24, mark: 70 }

Promises
    a promise is an object that may give the values in the future either resolved value or reason for not resolved(reject value)
    states: pending state(initial state) , resolve, reject

 Eg:let a = new Promise((resolve,reject)=>{
    resolve ({ msg: 'Something went wrong'})
})

a.then(resolve=>{console.log{resolve.msg}}).catch(err=>{console.log(err.msg) })

Classes
    Eg: class Person {

        constructor(name,age,mark){
            this.name = name;
            this.age = age;
            this.mark = mark;
        }

        getDetails(){
            console.log(`Person name: ${this.name} age: ${this.age} mark: ${this.mark}`)
        }

    }

    let obj = new Person('Arun',24,70)
    obj.getDetails();

Modules

    Modules are used to import and export functions, classes,variables to another js file

    Eg: export var num = 10; // Exporting file
        import num from ''module' // Importing file


Call, Apply, Bind. When to use what ? Can you give an example?

    when we want to access the property of another object function which in not present in current object 
    Then we use call apply and bind.
    Bind will return function and call,apply will call directly.
    when we use apply then we want to pass arguments values in arrays and in call we can pass aruguments as normal

    Eg: const user1 = {
        name:'arun',
        age:25,
        getName: function(role){
            console.log(`My name is ${this.name} ` + role);
        }

    }

    const user2 ={
        name:'kumar',
        age:24,
    }


    user1.getName('bind') // My name is arun bind
    const x = user1.getName.bind(user2); // 
    x('bind'); // My name is kumar bind
    user1.getName.call(user2 , 'call') // My name is kumar call
    user1.getName.apply(user2, ['apply']) // My name is kumar apply

3.  Browser storage: local storage, session storage, cookies
    local storage never expires and we can store capacity up to 10MB.We don't have auto-expire option
    session storage expires every time the page reloads we have an automatic expire option it has the storage of 5MB
    cookies were used before html5, was introduced it has the capacity of 4KB. Expiration will be set manually


4. What are generator functions in javascript? How are they different from normal functions?

In normal function we can't stop in the midway of execution it will execute when there is return or error occurs
Eg:function display(){
    console.log('one')
    console.log('two')
    console.log('three')
    console.log('four')

}
Generator function can stop in middle and then resume when we call that again
Eg:function * display(){
    console.log('one');
    yield 'two';
    console.log('three');
    yield 'four';
}

const generateObject = display();
console.log(generateObject.next().value); // stat and prints one,two then stops
console.log(generateObject.next().value); // resume prints three,four then stops 

5. Difference between arr. for each,  array. map and array.filter

    forEach is used when we want to loop every element
    map is used when we want to transform the element in an array it will return an array
    filter is used when want to pick a specific value from an array it will return an array

    Eg:const arr = [1,2,3,4]

    arr.forEach((element) => console.log(element)) // 1,2,3,4
    const map = arr.map((element) => element * 2)
    const filter = arr.filter((element) => element > 3)

    console.log('map ', map) // 2,4,6,8
    console.log('filter ',filter) // 4

6. What is the use of arr. reduce? Explain with an example.

arr.reduce will be use when we want to reduce the array to single value.

    Eg:const sum = arr.reduce((accumulator , currentValue) => {
        return accumulator + currentValue;
    },0)

    console.log(sum);

___________________________________________________________________________________________________________________________________________________________


1) what is the difference between == And ===

2) What is the difference between null and undefined?

3) what will the output (true or false) of the following be?Explain why?

console.log(null === undefined)

console.log(null == undefined)

4)What is event bubbling and event capturing (Event Propagation)? what is the difference between them? Can you give a code  example to explain how you can use event bubbling ?

5)What is function currying? Can you create a curried function and explain?

6) What is an IIFE (Immediately Invoked function expression)? Can you give an example?

Answers:

1. Difference between ‘==’ and’ ===’?

    == is used to check the value is equal or not
    === is used to check the value and type are equal
    Eg:let a = 1;
       let b = '1';


    console.log(1 == '1'); // true
    console.log(1 === '1'); // false

2. null means we are forcing the value to be null..when we try to console the variable of var type before assigning it will give undefined

3.false,true => bcoz == check the only it's equal or not but === gives false which also checks for type and value

4.What is event bubbling and event capturing what is the difference between them? Can you give a code  example to explain how you can use event 

    consider there are three div element in html one inside another, id called grandparent,parent,child.
    we add event listener to each of the div 
    when we click on div if above div are called that's called bubbling
    when we click on div if below div are called that's called capturing
    if we want to perform bubbling we want to pass false in the third argument of eventListener
    if we want to perform capturing we want to pass true in the third argument of eventListener
    if we don't provide any value then it takes false as default

    Eg: <div id="grandparent">
        <div id="parent">
        <div id="child"></div>
        </div>
    </div>

    document.querySelector("#grandparent")
    .addEventListener('click', (e) => {
        console.log("Grandparent Clicked!");
    }, true);

    document.querySelector("#parent")
    .addEventListener('click', (e) => {
        console.log("Parent Clicked!");
    }, true);

    document.querySelector("#child")
    .addEventListener('click', (e) => {
        console.log("Child Clicked!");
    }, true);


5: function currying and examples

    function curring means instead of passing all the arguments at same time for the function which need three arguments
    first we will pass 1st argument then it will return funtion
    second we will pass 2st argument then it will return funtion
    third we will pass 3rd argument then it will return value

    Eg:function Myfunction(a) {
            return (b) => {
            return (c) => {
                return a * b * c
                }
                }
            }

    const one = Myfunction(2)
    const two = one(3)
    const three = two(1)

    console.log(one) // return function b
    console.log(two) // return function a
    console.log(three) // return values of a*b*c

6) What is an IIFE (Immediately Invoked function expression)? Can you give an example?

    IIFE function are executed as soon as they are defined

    Eg:(function(num = 5) {
        console.log(` my favroite number is ${num}`)
    })()


___________________________________________________________________________________________________________________________________________________________


1.Explain the different ways of creating object in javascript? Explain all the 3 ways.
2.What are Object Prototype Methods
3.What is object chaining in javascript? Can you create functions to explain object chaining better?
4.What is the main difference between fat arrow function and normal function?
5.Can you give an example to explain how "this" works differenetly with fat arrow function and normal function?
6.What are the advantages of Axios vs other competitors( like fetch, http, got etc)? Why is axios so widely used?
7.What are closures? Explain with an example? (Favourite interview question)

Answers:

1. Object literals, object with a constructor, object. create, classes
    object literals => we create an object then we add a property to that object
   object with a constructor: we will define the function to create an object
  object create: creating the object using the prototype of new objects
  classes: Inside the class, we define properties and methods then we create an obj for that class

2.What are Object Prototype Methods

    object prototype is accessing the properties of it's inherited object
    what ever we create in javascript variables,functions,classes js will automatically attach prototype object 
    
    Eg:const arr = [1,2,3]

    when we type arr.length it will give the length of arr 
    but how it's giving we didn't defined anything because of prototype

    if we print arr.__proto__ it gives the values of prototype

3.//method chaining

 method chaining means repeatedly calling methods one after another in same line of code

    Eg:class Car {
    constructor() {
        this.wheels = 4
        this.doors = 4
        this.topSpeed = 100
        this.feulCapacity = "400 Litres"
    }
    setWheels(w) {
        this.wheels = w
        return this;
    }
    setDoors(d) {
        this.doors = d
        return this;

    }
    setTopSpeed(t) {
        this.topSpeed = t
        return this;

    }
    setFeulCapacity(fc) {
        this.feulCapacity = fc
        return this;

    }
    displayCarProps() {
        console.log(`Your car has ${this.wheels} wheels,\
        ${this.doors} doors with a top speed of ${this.topSpeed}\
        and feul capacity of ${this.feulCapacity}`)
    }
    }


    let sportscar = new Car().setWheels(7).setDoors(5).setTopSpeed(250).setFeulCapacity('2000 liters');

    sportscar.displayCarProps();


4. 5   1) syntax difference 

    normal function: var square = function(x){
        return x * x;
    }

    arrow function: var square = x => x*x;

    2) this keyword won't available in arrow but it's available in normal functions
    let user = {
        name: "arunsks",
        fun1:() => {
            console.log("hello " + this.name); // no 'this' binding here
        },
        fun2(){       
            console.log("Welcome to " + this.name); // 'this' binding works here
        }  
    };

    user.fun1(); // hello undefined
    user.fun2(); // hello arunsks

6.Axios vs fetch
 axios supports for wider browser but fetch only support particular browser chrome,firefox,edge,safari
 axios automatically tranform to json but fetch we manually want to transform to json
 axios is an third party package which we install easily and fetch is buitin for browsers
 axios data contains object but fetch data contains stringified

7. Closure

function along with the lexical scope is called closure

    Eg:function x(){
        const name = "arun";
        function y(){
            console.log(`my name is : ${name}`)
        }
        return y;
    }


    const fun = x()
    fun()

    here function x returing functn y along with it's lexical parent are stored in fun 
    and when we call again it will print the name
    So when we try to call that function outside it's able to get the value


__________________________________________________________________________________________________________________________________________________________


1.How to iterate inside and object and print all the values inside it without the keys? Give a code example?
2.What is NaN property in JavaScript?
3.Explain pass by value and pass by reference? Give code example of how you would pass by reference in javascript?
4.Explain “this” keyword?
5.What is memoization in javascript? Can you give a code example implementing the same?
6.What is the data type of variables in JavaScript?
7.What are escape characters? Why are they used? Give code example.
8.What is break and continue statements? How are they different?
9.What is the typeof an array in javascript?
10.What are anonymous functions in js? Give an example?
11.What's the difference between event.preventDefault() and event.stopPropagation() methods in JavaScript?
12.What are higher order function ? Explain with code example. Watch this video to understand better

Answers:

1.var p = {
  "p1": "value1",
  "p2": "value2",
  "p3": "value3"
};


for(var key in p){
  console.log(p[key]) // value1 , value2,value3
}

2. What is the NaN property in JavaScript

Nan represents a Not-an-Number when we have an invalid number we can set it as NaN

Eg:const birthMonth = 11;

const month = birthMonth > 0 && birthMonth < 13 ? birthMonth : NaN;
console.log(month)

3. Pass by value and pass by reference

In pass by value method, we pass the value of the variable in function arguments. so whenever we change the value inside the function it won't change outside

Eg:function passByValue(value1 , value2){
let temp = value1;
value1 = value2;
value2 = temp;

console.log("Inside passByValue")
console.log("value 1: " , value1 , "value 2: " , value2);

}

let value1 = 10;
let value2 = 20;

console.log("Before calling passByValue")
console.log("value 1: " , value1 , "value 2: " , value2);

passByValue(value1,value2)

console.log("After calling passByValue")
console.log("value 1: " , value1 , "value 2: " , value2);

In pass-by reference method, we pass the reference of obj in function arguments. so whenever we change the value inside the function it will get changed outside

Eg:function passByReference(obj){
obj.a = 200;

console.log("Inside passByValue")
console.log("obj " , obj)
}

var obj = {a:100}

console.log("Before calling passByReference")
console.log("obj " , obj);

passByReference(obj)

console.log("After calling passByReference")
console.log("obj " , obj);

4. this keyword represents the current object which comes in

5. In memoization we will store all the function calls results and return from the cache when we perform the same operations

Eg: function addValue125(){
var cache = {};
return function(num){
if(num in cache){
console.log('Number in cache')
return cache[num]
}else{
cache[num] = 125 + num;
return cache[num];
}
}

}


const memo = addValue125();
console.log(memo(1))
console.log(memo(2))
console.log(memo(1)) // This is already in cache

6. There are three types of data types in js. let ,const ,var

7. Escape characters uses backslash in js

Eg: console.log("hello \n world") // This will print hello in first line and world in second line bcoz of \n


8. Break will terminate the function and continue is used to ignore the current value

9. Typeof operator

typeof is used to find the types of a js variable

Eg:typeof "John" // Returns "string"
typeof 3.14 // Returns "number"
typeof NaN // Returns "number"
typeof false // Returns "boolean"
typeof [1,2,3,4] // Returns "object"
typeof {name:'John', age:34} // Returns "object"
typeof new Date() // Returns "object"
typeof function () {} // Returns "function"
typeof myCar // Returns "undefined" *
typeof null

10. What are anonymous functions in js? Give an example?

Anonymous functions are functions that don't have a name associated with them.we can access that with the variable stored in

Eg:var greet = function () {
console.log("Welcome to GeeksforGeeks!");
};

greet();

11.preventDefault() and stopPropagation()

event.preventDefault is used to prevent the default behavior of the browser
event.stopPropagation is used in bubbling or capturing to stop the execution of the next function

12. Higher-order function

    when the function takes functions as a parameter or returns the function is called higher-order functions
    the function passed through argument is a callback we can call later in the function

    const area = function(radius){
        return Math.PI * radius * radius;
    }

    const circumtences = function(radius){
        return 2 * Math.PI * radius;
    } 

    const diameter = function(radius){
        return 2 * radius;
    }


    const calculate = function(arr , logic){
        const output = [];
        for(let i=0;i<arr.length;i++){
            output.push(logic(arr[i]));
        }
        return output;
    }

    const radius = [2,3,4,5]

    console.log(calculate(radius,area))
    console.log(calculate(radius,circumtences))
    console.log(calculate(radius,diameter))



*/