#JS Objects

---
###The Big Picture


Fundamentally they are **key value** pairs that are grouped into the same container. 

---

Below **age**, and **getAge** are **Keys**, 23, and *function(){return this.age;}* are **Values**. 

```javascript
var person = {

     age  :    23,  
     getAge: function(){
      return this.age;
    }
}
```

---

```js
//using curly braces is 'object literal' syntax
//this style is preferred
var obj = {};

//using new Object() is not recommended as it's
//overly verbose
var obj = new Object();

```

---

> Exercise: Construct a Bicycle object that has a num gears property, and a method to get speed. 


---

Objects are **dynamic** and that means you can modify them after you create them. 

```js
//object is created
var x = {};

//now I will add a property after the fact
x.name = "dynamic";
```

---

# What is a dynamic language? 
---

Often it is the case that we would like to inspect our objects and determine which, if any properties they contain

```javascript

var person = { name: "Bob" , age: 23  };

if( person.hasOwnProperty("name") ){
   alert("name is a property defined on this object");
}

```

---
Checking all of an objects properties

```javascript

var movie = { 
  title: "Ex-Machina" , 
  director: "Alex Garland", 
  actors: ["Alicia Vikander","Domhnall Gleeson","Oscar Isaac"] };

for(var key in movie){
   console.log("key: " + key + "   value: " + movie[key]);
}  
```

---
 
 Another way

```js           
var keys = Object.keys(movie);

for (var i = 0; i < keys.length; i++) {
     var val = movie[keys[i]];
     console.log("key: " + key + "   value: " + movie[key]);
}           
             
```

>Exercise Turn and Jot: Model WDI Student (5 / 65)

- Create an object with an array as a propery. 
- Place 'Person' objects in the array, each having a name property
- Iterate through the array and print out each Persons name

---

Create

We already saved a sample object to a car variable. We did this using object literal notation.
```js
var car = {
  make: "Honda",
  model: "Civic",
  year: 1997,

  // NOTE: Keys with a "-" in their name must be surrounded by quotation marks.
  "tire-type": "Goodyear"
}
```

---

Read

```js
console.log( car.make );
console.log( car["make"] );

console.log( car.owner )

// NOTE: When accessing properties whose keys have a "-" in them, 
//you must use bracket notation.
console.log( car["tire-type"] );
```
---
Update

```js

car.year = 2003

car.smell = "Leathery Boot"
```
---
Delete

If you want to delete an object property entirely, use the *delete* keyword.

```js
delete car.smell
```
---
>Exercises

Create a variable named wdiStudent and assign it to an object literal.
Give your student at least three properties.
One must contain an array or object.
Update two properties, Delete one attribute.
Give your student a new property using dot or bracket notation.
Iterate through and print out all of the students key-value pairs.
Bonus: Write a function that returns your wdiStudent object.

---

Nested Collections 

```js
var car = {
  make: "Honda",
  model: "Civic",
  year: 1997,
  gears: ["Reverse", "Neutral", "1", "2", "3", "4"],
  engine: {
    horsepower: "6 horses",
    pistons: 12,
    fast: true,
    furious: false
  }
}
```

---

Exercise:
Q In the previous examples, how do we access...

* "Neutral" (i.e., array value within an object)?
* "6 horses" (i.e., object value within an object)?

---

###Creating Objects

```javascript
//we declare a constructor function
function Person(name,age){

  this.name = name;
  this.age = age;
}
var person = new Person('James',24);
```
