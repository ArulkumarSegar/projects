/*
what is var let and const

  All those are variables

  var - global scope / we can reinitialise the variable
    Eg:var a = 10;
        a = 100;

   let - script scope / has temporal dead zone / we can re initialise the variable
     Eg: let b = 10;
            b = 100;

   const - script scope / has temporal dead zone / we can't re initialise the variable
      Eg: const c = 1000;
                 c = 100;

  we can't reinitialise the identifier like below for all the type
       Eg: var d = 100;
           let d = 1000;

process.nextTick()
     process.nextTick will execute in every iteration of the event loop

Hoisting => moving all the declaration to the scope
        Eg: let a =10;
        when js see this above line it's an memory allocation phase(when it come first time) it will allocate the memory for a in scope(script).
        After in codeExecution phase when it see the value 10 then it will initialse that value to 10
        This is called hoisting

Temporal dead zone:
    Eg: let b=100;

     when js see this above line it's an memory allocation phase(when it come first time) it will allocate the memory for a in scope(script).
     After in codeExecution phase when it see the value 10 then it will initialse that value to 10

     Time between memory allocation phase and code execution is called temporal dead zone

callbacks:callbacks are passed in params of another function and called after that

    consider there are two function called checkuser and homepage.
    Here we want to show the homepage to user after he is checked.
    So here the call backfuntion comes in

    Eg: function checkUser(homePage){
        console.log('checkUser function')
        homePage();
    }

    function homePage(){
        console.log('welcome to homepage')
    }

    checkUser(homepage);

ES 6 features:
    arrow funtions, classes,let and const keyword,default parameter,multiline string literals,promises

Difference between map and filter function

    filter will loop every element and returns only the filtered value

        Eg: const arrOne = [1,2,3,4,5];

    c = arrOne.filter(element => {
    return element % 2 === 0;
    })

    console.log(arrOne); [ 1, 2, 3, 4, 5 ]
    console.log(c); [ 2, 4 ]
   
    map will loop every element and returns for all the values

    Eg: const arr = [1,2,3,4,5];

    b = arr.map(element => {
    return element * 2;
    })

    console.log(arr); [ 1, 2, 3, 4, 5 ]
    console.log(b); [ 2, 4, 6, 8, 10 ]

Promises and it's states
    promises is an object that may gives the values in the future either resolved value or reason for not resolved(reject value)
    states: pending state(initial state) , resolve, reject

    Eg:
    const myPromise = new Promise((resolve, reject) => {
        console.log('user verified')
        resolve();
    });

    myPromise
    .then(() => {
        console.log('Taking to home page')
    })
    .catch(err => {
        console.log(err)
    })


Why do we use promises over callbacks and why use await and async?

we use promises because it will make the code more readable like an synchronous code
async is used to represent the function is asynchronous and await to indicates to wait until the execution of current it's done


Difference between settimeout, setinterval setimmediate

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

Difference between ‘==’ and’ === ’ ?

    == is used to check the value is equal or not
    === is used to check the value and type are equal
    Eg:let a = 1;
       let b = '1';


    console.log(1 == '1'); // true
    console.log(1 === '1'); // false

Spread and rest operator

    spread operator will convert array to individual value

    Eg:function sum(a,b){
        return a+b;
    }

    myarr = [1,2]

    console.log(sum(...myarr)) //spread operator

    rest operator will convert individual value to array

    Eg:function sum(...args){
        console.log(args) // [1,2,3,4,5] rest operator
        for(const arg of args){
            sum += arg;
        }

        return sum;
    }

    console.log(sum(1,2,3,4,5)) // we can pass more paramater don't have limit


Write a function to check if the given number "n" exists in the array.

    Eg:function checkNumberAndDeleteIfExists(myArray,number){

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

ES 6 features

let and const
    Before ES6 was released only var type is available to assing variable.
    In ES6 let and const are introduced which also the type used to decalre variables
    Var is an function scope we can access the value before declaration but in let and const we can't
    let used to define variables and const used to define constant values

    Eg: let i=10;
        console.log(i) // 10

        const PI = 3.14;
        console.log(PI) // 3.14


Arrow function

    Arrow function are used to write the concise syntax by removing function and return
    Eg: let sumOfTwoNumber = (a,b) => a + b;
    const result = sumOfTwoNumber(1,6);
    console.log(result) // 7
    If we want to execute multiple statement then we need to add {} and return statement

Multi-line strings
    Multi line strings we can decalre the string in multiple line using backtick (`)
    we can break the statements in to multiple lines
    Eg:const str = `Hello Im arun,
                and wishing you to live long,
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

Enhanded object literals
we can easily create an object using enhanced object literals

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
    promises is an object that may gives the values in the future either resolved value or reason for not resolved(reject value)
    states: pending state(initial state) , resolve, reject

 Eg:let a = new Promise((resolve,reject)=>{
    resolve ({ msg: 'Something went wrong'})
})

a.then(resolve=>{console.log{resolve.msg}}).catch(err=>{console.log(err.msg) })

Classes
    Eg:class Person {

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

    Modules are used to import and export functions,class,variables to another js file

    Eg: export var num = 10; // Exporting file
        import num from 'module' // Importing file

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

What are different ways to store data in browser? Explain each one of them and when should we use what?

    Browser storage :local storage,session storage,cookies
    local storage never expires and we can store capacity upto 10MB.We don't have auto expire option
    session storage expires every time the page reloads we have automatic expire option it has the storage of 5MB
    cookies where used before html5 was introduced it has the capacity of 4KB.Expiration will be set manually

What are generator function in javascript ? How are they different from normal function?

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

Difference between arr.foreach,  array.map and array.filter

    forEach is used when we want to loop every element
    map is used when we want to transform the element in array it will return an new array
    filter is used to when want to pick specific value from an array it will return array

    Eg:const arr = [1,2,3,4]

    arr.forEach((element) => console.log(element)) // 1,2,3,4
    const map = arr.map((element) => element * 2)
    const filter = arr.filter((element) => element > 3)

    console.log('map ', map) // 2,4,6,8
    console.log('filter ',filter) // 4

What is the use of arr.reduce? Explain with an example.

arr.reduce will be use when we want to reduce the array to single value.

    Eg:const sum = arr.reduce((accumulator , currentValue) => {
        return accumulator + currentValue;
    },0)

    console.log(sum);

What is event bubbling and event capturing what is the difference between them? Can you give a code  example to explain how you can use event

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

function currying and examples

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

What is an IIFE (Immediately Invoked function expression)? Can you give an example?

    IIFE function are executed as soon as they are defined

    Eg:(function(num = 5) {
        console.log(` my favorite number is ${num}`)
    })()

How to iterate inside an object and print all the values inside it without the keys? Give a code example?
    Eg: var p = {
    "p1": "value1",
    "p2": "value2",
    "p3": "value3"
    };

    for(var key in p){
    console.log(p[key]) // value1 , value2,value3
    }

What is NaN property in JavaScript

    Nan represents an Not-an-Number when we have an invalid number we can set as NaN

    Eg:const birthMonth = 11;

    const month = birthMonth > 0 && birthMonth < 13 ? birthMonth : NaN;
    console.log(month)

Pass by value and pass by reference

    In pass by value method we pass value of variable in function arguments.so whenever we change the value inside the function it won't change outside

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

    In pass by reference method we pass reference of obj in function arguments.so whenever we change the value inside the function it will get changed outside

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

What is memoization in javascript? Can you give a code example implementing the same?

In memoization we will store all the function calls reslulta and 
return from cache when we perform the same operations

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

What are escape characters? Why are they used? Give code example.

    Escape characters uses backslash in js

    Eg: console.log("hello \n world") // This will print hello in first line and world in second line bcoz of \n


Typeof operator

    typeof is used to find the types of a js variable

    Eg:typeof "John"                 // Returns "string"
    typeof 3.14                   // Returns "number"
    typeof NaN                    // Returns "number"
    typeof false                  // Returns "boolean"
    typeof [1,2,3,4]              // Returns "object"
    typeof {name:'John', age:34}  // Returns "object"
    typeof new Date()             // Returns "object"
    typeof function () {}         // Returns "function"
    typeof myCar                  // Returns "undefined" *
    typeof null

What are anonymous functions in js? Give an example?

    Anonymous functions are functions which doesn't have the name associated with it

    Eg:var greet = function () {
        console.log("Welcome to GeeksforGeeks!");
    };

    greet();

preventDefault() and stopPropagation()

    event.preventDefault is used to prevent from the default behaviour of the browser
    event.stopPropagation is used in bubbling or capturing to stop the execution of next function

Functional programming/Higher order functions

    when the function takes functions as parameter or return the function is called higher order functions
    function passed through argument is an callback we can call later in the function

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

javascript different types of creating the objects

    // creating object then adding the properties

    const person = new Object();

    person.firstname = "person";
    person.age = 24;

    console.log(person)

    // creating object using user defined constructor function

    function Person(fName,age){
        this.firstName = fName;
        this.age = age;
    }

    const personOne = new Person("personOne" , 30);
    const personTwo = new Person("personTwo" , 28);

    console.log('personOne: ' , personOne ,"personTwo: " ,personTwo)

    //creating object using Object.createMethod

    const coder= {
                name:"CoderOne" ,
                age:'40',
                getDetails:function(){
                return `My name is ${this.name} age ${this.age}`;
                }
    }

    const me = Object.create(coder)
    me.name = "arunsks";

    console.log("origianl object: " , coder.getDetails())
    console.log("newObject: " , me.getDetails())

    // using class keyword

    class People {
        constructor(name,job,sex){
            this.name = name;
            this.job = job;
            this.sex = sex;
        }
    }

    const peopleOne = new People("arunsks" , "Developer" , "male")
    console.log(peopleOne)


What are Object Prototype Methods

    object prototype is accessing the properties of it's inherited object
    what ever we create in javascript variables,functions,classes js will automatically attach prototype object

    Eg:const arr = [1,2,3]

    when we type arr.length it will give the length of arr
    but how it's giving we didn't defined anything because of prototype

    if we print arr.__proto__ it gives the values of prototype

What is the main difference between fat arrow function and normal function?

    1) syntax difference

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

Axios vs fetch
 axios supports for wider browser but fetch only support particular browser chrome,firefox,edge,safari
 axios automatically tranform to json but fetch we manually want to transform to json
 axios is an third party package which we install easily and fetch is buitin for browsers
 axios data contains object but fetch data contains stringified

 //method chaining

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

 Closure

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

<--------------------------------------------------------------------------------------------------->

SQL vs NOSQL

    sql - structured query language
    In sql database are stored in tables and  we have relations
    One-One , One-Many, Many-Many
    NoSql are stores as an json object and they don't have relations

Joins and Their types
    
    joins are used to combine two or more table we would use joins
    consider there are two tables which has cricket and football where it has details of player
    Left Join => when we want to get cricket player from both the table we use left join
    Right Join => when we want to get football player from both the table we use right join
    Inner Join => Intersection only we want to get football and cricket player they don't know to play other games
    Full Join => It's an union of both the table gives all the details from that two tables

      QUERY: SELECT * FROM Cricket LEFT JOIN football ON cricket.playerId = football.cricketId;
      QUERY: SELECT * FROM football RIGHT JOIN cricket ON cricket.playerId = football.cricketId;
      QUERY: SELECT * FROM cricket INNER JOIN football ON cricket.playerId = football.cricketId;
      QUERY: SELECT * FROM cricket FULL JOIN football ON cricket.playerId = football.cricketId;

SQL constraints
   constraints are used to set specific rule for the data in the table
   NOT NULL,UNIQUE,PRIMARY KEY,FOREIGN KEY,CHECK,DEFAULT
  
   NOTNULL =>  we can't create an new record without leaving this column
   UNIQUE =>  Values should be unique for that particular column.If we enter already exsisting value it wont accept
   PRIMARYKEY => combination of notnull and unique and able to access the record from the table
   FOREIGNKEY => used to identify each row in another table
   CHECK => To add an condition to the sql column/IF we add check age>18 then if we enter the value < 18 then it won't get created
   DEFAULT => setting default values when we are creating the record


Primary key vs foreign key
  primary key is ensure that data in the specific column is unique/Can't set null/Primary key are unique keys in the column
  foreign key is a key in the column where it represents relation between two columns


MySql Triggers
   Triggers will automatically triggered when we want to execute some query
   whenever doing that particular query
   Eg:If I want to modify particular field in one of table 
   whenever i want to select values from the tables

What is Sharding in SQL

    Sharding means partitioning the dataset of single database into multiple small database
    Eg: Consider we have an data of 100,000 records in single database
        If i want to get the single user then i want to go thorugh all the records in database which is costly
        If we partitioned 100000 records into 10 small database which can hold 10000 records per database
        Now we can able to get the data faster and reduces our tranactions costs
        This is sharding

What is BLOB in MySQL

    Blob storage in MySQL is used to store multiple unstructured data into a single container

SQL Views 
  views in sql are virutal table it's consists of row and column like an real table
  views are created for the security purpose
  Eg: consider we have table employee where we have data like id,address,salary
  salary is an confidential thing we can't share this to everyone
  so we create view without salary and share to others

Normalisation in database
   Normalisation is the process of organising the data in the database
   This includes creating the table and establishing the relationship 
   To avoid redundancy

Delete / Drop / Trauncate
  Drop => used to delete the whole database from the memory includes data and structure
  Delete => used to delete one or multiple data in the table
  Trauncate => used to delete the data in the database but structure remains same for future purpose

Indexing about the table
   Indexing are used to retrive the data from the databse more quicker
   Advantage:use to get the data quicker
   DisAdvantage:Creates an disk space and performance will be slow for insert,update and delete

   Query:CREATE INDEX customer_first_name_idx ON Customers (first_name);

SQL IN AND BETWEEN
  Between => Give the values between that range
  IN => Give the exact value in that range

  How to write an SQL query to find students' names start with 'A'?
     SELECT * FROM students WHERE NAME LIKE 'a%';

Write the SQL query to get the third maximum salary of an employee from a table named employees.You have to use OFFSET as other algos are not optimised. (Assume whatever you want to) - [Commonly asked Interview Question]

  SELECT * FROM `employee` ORDER BY `salary` DESC LIMIT 1 OFFSET 2;
  Limit use to return no of rows and offset says how many rows should be skipped

ACID property

A => Atomicity => The transaction should be complete or abort / There is no partial complete
C => Consistency => consistency means correctness / Data should have consistent value before and after transaction
I => Isolation => Sepearation /  one tranaction should be independent to another transaction
D => Durability => If systems files then also db ensures to update the value

NVL function
  we can substitute the value in the place of null value
  These substitution value will be temporary for that session 
  and doesn't affect original db value

  Select nvl(salary,0) from employee where id=1

  it will give 0 if the salary of that employee is null

Deadlock
   when more than one transactions are waiting for another tranaction to give up the locks is called deadlock
   Eg:Suppose, Transaction T1 holds a lock on some rows in the Students table 
   and needs to update some rows in the Grades table. 
   Simultaneously, Transaction T2 holds locks on those rows (Which T1 needs to update) in the Grades table 
   but needs to update the rows in the Student table held by Transaction T1. 

Sql injection
  Sql injection is an code injection technique used to attack an web application 
  where malicious statement are inserted in the text field

Subquery in sql
  Query inside an another query is called subquery
  Types => singlerow,Multiple row,Multiple column,Correlated subqueries,nested subqueries

  SELECT * FROM users WHERE userId in (SELECT userId FROM Orders)
  The above statement first return the userId who are all ordered in orderTable
  Then based on that id we will fetch the user from the Users table
  
SQL union
    union is used to combine the both sql statements
    SELECT * FROM UsersOne UNION SELECT * FROM usersTwo

SQL query
   Creating the table
      CREATE TABLE Employee(EmpId,EmpName,Dept,region,salary,yoe);
    Insert INTO table
      INSERT INTO Employee VALUES('1','arun','cse','salem','10000','2')
    Count No.of.Emp
       SELECT count(*) FROM Employee WHERE region='Salem'
    AND query
       SELECT EmpName FROM Employee WHERE salary >= '10000' AND salary <= '20000'
    DROP CLOUMN
        ALTER TABLE Employee DROP COLUMN yoe
    N-th largest
        SELECT salary FROM Employee ORDER BY salary DESC LIMIT 1 OFFSET n-1
    ADD COLUMN
      ALTER TABLE Employee ADD yoe INT
    ODD records from table
      SELECT * FROM Employee WHERE EmpId % 2 != 0
    BLOB and TEXT
     BLOB stands for Binary Large Objects where we can store our larger files like videos,photos,image
     TEXT we can store larger strings

    Return hundred books starting from 105th?
     SELECT * FROM Customers LIMIT 100 OFFSET 104

    five max salaries from a table.
      select * from Employee ORDER BY salary DESC LIMIT 5
    
    second last id without the max function
        select * from Customers ORDER BY 1 DESC LIMIT 1 OFFSET 1
   
    data between the age range of 25 to 35 from employee table
        select * from Employee where salary between '10000' and '22000'

    In-range
       select * from Employee where salary in('10000','30000')

---------------------------------------------------------------------------------------------
what is nodejs
   node js is an run time environment which uses v8 javascript engines 
   and executes in javascript language
   
    js is an single thread language and it's start executing synchronous code
    when it sees Asynchronous function it send that task to event queue
    After when queue finishes that work it will say to js i'm completed
    Then js will take that and execute in call stack 

NODE js
  reusable code 
  able to scale smothly
  Easier developement process
  Synchronous 
  cross-platform 

module.exports
    module. exports used to share the functionality of module throughout the projects and we can reuse

Default Exports: 
    Default Exports used to export the single object,function,variable

CORS
 Cros origin resource sharing
 when the client and server was in different origin 
 then accessing resources from that server will faile that's called cors

 REST
  Representational state transfer means 
  whenever we request an resource from the server
  It gives the state reprensentation of current object that's called restApI

EventLoop
  The process of pulling out the executions from event queue to call stack 
  and execute until the call back becames empty that's called event loop

what is Express JS
    Express Js is an framework for nodejs where we can write web applications
    for server side using MVC pattern

Http methods
  get => used to fetch the resource
  post => used to create the resource
  put  => update whole resource /used to update the resource/
          it's follows an upsert operation/If the data exsists 
          then it will perform update if not then it will create
  patch => want to update single attributes
  delete => will delete the resource 

Middleware functions
   Middleware function are the function which have access to req obj,res obj and next

Web server
    webserver is an software which consists of files and http server 
    when ever client sent the request it will send the resource

Encapsulation and abstraction
   abstraction => hiding unwanted information is called abstraction
   Encapsulation => Binding data with the methods

jwt token
  jwt token is an secure way of sharing the information between client and the server
  jwt token consists of three thing header(type of algorithm used),payload,signature

Explain the flow of login and authentication? How does the backend identify the user?
   whenever user try to login we will find where the entered email was in db or not
   If email already exists then try to compare the password and if password was correct
   we will generate the jwttoken and send it to frontend and store in it local storage
   Each time token will sent through headers and in backend we will verify the token 
   And decode id from jwt token and set that user as an req-user 

Steps to deploy in aws
   1.launch EC2 instance
   2.install node and npm
   3.install git and git clone
   4.configure your security group to access
   5.Create an RDMS if db is involved
   6.run the application on the browser

PM2
  pm2 allows the application alive forever and we can stop it whenever we want

PM2 commands => pm2 start 1,pm2 stop 1,pm2 flush,pm2 logs,pm2 restart all

packages.json
  npm package contains the file usally in project,
  it holds the dependencies and start of the project
  holds the metadata relevant to the projects,

pacakge_lock.json
    To keep track of exact version of the package that have install
    will help future dev to install the same version of packages

Dependencies and devDependencies
    dependencies : Packages required by your application in production.
    devDependencies : Packages that are only needed for local development and testing.

First class function
    function are stored in the variables,
    passed in an function arguments,
    return the function from another function,

Fork method
    Even though Js is an single threaded if we want perform some long compuational task
    then we can create an new child process to utilise the full power of our cpu

callback hell
   Each and every callback takes an arguments that is the result of previous callbacks
   In this manner code structure will look like pyramid and not able to read and maintain

Streams
  Streams are the objects that allow you to read data from a source and write data to a destination. 
  There are four types of streams in Node.js:

Buffers 
   Buffers are used to store the raw data similar to an array of integers

node js status code
    0 => node js will exit when the status code is 0 where no more async operations are pending
    1 => uncaught exception
    3 => Internal java parser error
    5 => fatal error
    9 => Invalid arguments
  
Node js Flags in read/write operation
  r => open file for reading
  r+ => open file for reading and writing
  rs => open file for reading in synchronous mode
  rs+ => open file for reading and writing in synchronous mode
  w => open file for writing
  w+ => open file for reading and writing


    
  */

    //    1. from hoisting identifier to assigning some values to that identifier
    //    2. we can't access the variable which is in temporal dead zone.If we try to access it will give reference error.