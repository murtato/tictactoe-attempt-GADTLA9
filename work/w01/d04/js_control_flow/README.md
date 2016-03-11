# Javascript in Jeapordy

- Understand basic control structures of programming languages, including conditionals and loops
- Be able to use control structures to create a basic algorithm

Agenda

1. Review (10 min)
2. Team Divisions (10)
3. Review Contest: Round 1 (10 min)
4. Boolean Logic Intro (10 min)
5. Boolean Logic Contest: Round 2 (10 min)
6. Conditionals (10 min)
7. Conditionals Contest (10 min)
8. Loops (20 min)
9. Loops Contest (40 min)

# Boolean Logic

- Identify the core boolean operators and explain how they evaulate 
  expressions: !, &&, ||.
- Identify equality and comparison operators and explain how they 
  evaluate expressions: </<=, >/>=, ==, !=.

There are two types of binary operators that work with booleans, 
(a binary operator just requires two arguments.)

- **AND**, denoted `&&` 
- **OR**, denoted `||`

There is a third unary operatory, (a unary operator that requirs just 
one argument).

- **NOT**, denoted `!`

[MDN Logical Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)

Quick Notes:

- The `&&` operator requires both left and right values to be `true` to return `true`, i.e.
  
  ```
  true && true //=> true
  ```
  and any other combination is false.
- The `||` operator requires just one of the left or right values to be `true` to return true.
- Only `false || false` will return `false`
- The `!` takes a value and returns the opposite boolean value, i.e. ` !(true) //=> false`.

## JavaScript Logic & Conditionals

- Explain what is meant by "truth values", ie "truthy" and "falsey".
- Explain the role of "truth value" in constructing logical expressions.
- Name the truth value of the major data types and common expressions 
  (assignment, console.log, variable declaration and control structures).
- Compare and contrast =, ==, and ===.
- Use if/else statements to branch control flow based on a given 
  conditional statement.
- Use else-if to allow branching flow with multiple conditional statements.

You can use `!!` (ie, bang-bang or NOT-NOT) to determine any variables
truth value.

In JS some values can be taken to be `true` or `false`, and we can
check:

```javascript

  !!(1)
  //=> true
  
  !!(0)
  //=> false
  
  !!(-1)
  //=> true
  
  !!([])
  //=> true
  
  !!({})
  //=> true
  
  !!(null)
  //=> false
  
  !!('')
  //=> false
```

Conditionals are a way of essentially skipping over a block of code if it does not pass boolean expression.


* `if(expr) { code }`, run code block if `expr` is `true`

```javascript

var num = 22;

if (num % 2  === 0) {
  console.log("is even");
}

```

* `if (expr) { ... } else { ... }`
  *  you can specifiy the `else` block to run if `expr` is `false`
* `if (expr1) { ... } else if (expr2) { ... } ... else { ... }`
  *  if `expr1` is false then each `else if` expression will be evaluated until one is `true`, and an `else` will be run otherwise.
  


```javascript

var expr1 = true;
var expr2 = true;


if (expr1) {
  console.log("expr1 is true!");
} else if (expr2){
  console.log("expr2 is true!");
}


```

The above example will print `"expr1 is true"` and the `else if` is never reached. If `expr1` is `false` it would only print `"expr2 is true"`


### Exercises


#### Warming up

1. Use conditionals to check if a hardcoded number is `odd` or `even`, and then 
`console.log` the number is `odd` or `even` with the numbers value.

  ```
  var num = ;// write a number here
  
  // write your conditions here
  
  ```

2. Use conditionals to check if a hardcoded number is divisible by `2` or  `3` 
and then `console.log` that the number is divisible by two or three.

  ```
  var num = ;// write a number here
  
  // write your conditions here
  
  ```

3. Use conditionals to check if a hardcoded `quantity` is `1` or greater than 
one. If the `quantity`  is one or greater `console.log` either `1 pet` or 
`quantity + " pets"` respectively.

  ```
  var quantity = ;// write a number here
  
  // write your conditions here
  
  ```
#### Intermediate

4. There is an event where guests will be sitting in three sections based on 
their names: "left", "middle", and "right". If they have a premium ticket they 
can sit in first `3` rows in their section, otherwise they can take any seat 
behind row 3. Using hardcoded variables for `name` and `ticketType` print out 
appropriate seating instructions.

5. There is an event with ticket prices that are `$50`, `$65`, `$85` for 
standard, premier, and premier plus (for drinks) seating. Seniors, veterans, 
and students receive a `$10` discount while standard patrons receive no 
discount. Based on hardcoded variables for `ticketType` and `discountType`, 
print out a patrons `ticketPrice`.

#### Ternary Operators

Another way to write a very shorthand conditional is using a **ternary operator**, `expr1 ? expr2 : expr3 `. 

```
true ? console.log("it is true"): console.log("it is false");
//=>  "it is false"
false ? console.log("it si true"): console.log("it is false");
//=> "it is false"
```

## JavaScript Loops

- Identify the necessary parts of a while loop (action, mutable condition,
  and condition update).
- Identify the parts of a for loop (iterator, break condition, and 
  condition update).
- Explain how for loops work with reference to while/until loops.
- Differentiate when to use while loops and for loops, and give specific
  use cases.
- Use a for loop to iterate over an array.

### Iterating

It is a way of incrementally repeating a task. Iterating is a way of describing procedures like 

```
print "hello world" 50 times
``` 
It is also a way of describing 

```
print each item in a shopping list
```

It can also be a way of solving problems like

```
how would I print all vegetables in a shoppping list
```


Typically iteration has three or four main parts 

* an initial state
* a condition for repeating
* process to be run for each repetition 
* a state change for proceeding to the next step

It isn't surprising that the primary means of iterating in most languages is called a `for` loop, which has the following structure

```

for ( intial state; check condition; change state) {
  run this code for before changing state
}

```


or a  more concrete example


```

var friends = ["larry", "moe", "curly"];

for (var index = 0; index < friends.length; index = index + 1) {
  console.log(friends[index]))
}

```

#### Exercises


1. Iterate through a shopping list and print each item in a shopping list.

  ```
    var shoppingList = ["apples", "oranges", "carrots"];
    
    // iterate here
  ```

2. Iterate through a list of shopping lists and print each item in each list.

  ```
    var shoppingLists = [
                ["apples", "oranges", "carrots"],
                ["ham", "turkey", "cheese"],
                ["fruits", "vegetables", "meat"]
              ];
    // iterate here
  ```


3. Word counting:
  a. Count the number of space separated words in a string (Hint: do this with and without a `for` loop.).
  b. Count the number of words that in a string that have the letter `a` in them.


4. Capitalize the first letter in every word in a string, i.e
  
  ```
  "hello world" => "Hello World"
  
  ```

5. Find the largest number in a hardcoded array using a for loop. Find the smallest number in a hardcoded array.


6. You have a list of numbers below that somehow got shuffled and one is missing. Luckily you know that the numbers were from `1 to 100`. Find the missing number. 

  ```
  var numbers = [56, 74, 31, 89, 8, 
          22, 5, 19, 28, 100,
          82, 72, 39, 25, 90, 
          1, 97, 83, 58, 38, 
          57, 71, 70, 7, 3, 
          12, 48, 45, 43, 84, 
          68, 49, 37, 41, 92, 
          96, 6, 66, 95, 15, 
          67, 2, 59, 4, 91, 
          44, 50, 17, 30, 88, 
          34, 55, 64, 9, 27, 
          73, 60, 32, 81, 10, 
          53, 61, 63, 51, 65, 
          36, 26, 99, 76, 47, 
          21, 14, 16, 40, 79, 
          75, 85, 42, 86, 18, 
          23, 24, 46, 69, 29, 
          77, 20, 54, 80, 87, 
          13, 94, 98, 93, 62, 
          35, 33, 11, 52];
          
          
          
  ```
  
7. Find the `sum` of the values in an array and the `average`. 
8. Find the average of only the odd numbers in an array.
9. Write a loop that creates an array of `100` random integers (not decimal numbers).
10. Find the numbers in common in two different lists of numbers.

### While loops

The while loop is the other type of repetitive control flow structure. However, `for` handled most of the general iteration tasks we could hope to perform. You should hardly ever need just a `while` loop. It will run so long as a condition is true.


```
while (true) {}

```

This should be enough to break a browser.

In the browser try the [`prompt`](https://developer.mozilla.org/en-US/docs/Web/API/Window.prompt) function out. 


#### Exercise 

1. Re-write exercise `1` for `for` loops using a `while` loop.
2. Use `prompt` and the `while` loop create an array of `5` names.
3. Use [`confirm`](https://developer.mozilla.org/en-US/docs/Web/API/Window.confirm) to check if a user wants to continue looping. If `yes` print `hello`, and if anything else print `goodbye` and `stop` looping.
4. Implement a guessing game using `prompt` and `while`.
