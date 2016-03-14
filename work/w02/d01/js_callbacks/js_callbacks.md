<img src="http://elegantcode.com/wp-content/uploads/2011/07/image.png" height="500">

# JavaScript Callback Functions

| Learning Objectives - SWBAT: |
| :--- |
| Describe the Use Case for Callbacks |
| Use a Named Function as a Callback |
| Use an Anonymous Function as a Callback |

## Roadmap

1. Opening/hook/review/learning objectives (5 mins)
2. What is a callback function? (5 mins)
3. Uses of callback functions (30 mins)
  * In response to events (5 mins)
  * Passed to iterator methods (10 mins)
  * Passed to an asynchronous process (15 mins)
4. Callback syntax: Anonymous function syntax vs named callbackes (10 mins)
5. Exercises (30 mins)
  * Iterator function exercise (15 mins)
  * Async function exercise (15 mins)

----


### 1. Opening Hook

Hook exercise -- the rap call and response - "When I say ... you say ..."

play: https://www.youtube.com/watch?v=hVOm8fkGGro

(this needs some guts to deliver :)

Lead the class in the following call and responses

1. When I say Javascript you say awesome
2. When I say callback you say functions
3. When I say DOM Manipulation you say Slow
4. When I saw events, you say asynchronous

### 2. What's a Callback Function?<small>  (5 mins)</small>

First, relax, **callback functions** are not a new type of function that you have to learn - they are just functions.

Review: what is a function? A function is a set of instructions you can give to the computer as a block. A function can take a parameter as input, which affects its output

In fact, you've already seen callbacks in use in the DOM Manipulation lesson and you used them in your Tic-Tac-Toe project because your event listener(s) needed a function to call, a _callback function_, when the event happens.

When we pass a function to another function as an argument, and execute that function that's being passed in, we often refer to the function being passed in as a **_callback_** function.

Something like this should look familiar:

```js
var myElement = document.getElementById('my-element');

myElement.addEventListener('click', function(event) {
  alert('Clicked!');  
});
```

The function that's the second argument in the `addEventListener` method is a _callback function_.

**?: Besides being a _callback function_, what's another distinction of that function?**


### 3. When are Callbacks Used?<small>  (5 mins)</small>

Callback functions are functions that get called later by the method/function we pass them to.

Here are three scenarios where callback functions are used:

1. To provide a function that should be executed each time an event happens - just like the `addEventListener` example above.

2. To provide a function to an iterator method, for example, the `forEach` method on arrays.

3. To provide a function that should be executed when an _asynchronous_ process has completed.

#### 3.a Events - Review (5 mins)

Review events. Come up with a list of events that might trigger callbacks. 

#### 3.b Talk about iterators. (10 mins)

Exercise: Fortune cookie callbacks

Materials: two post-its, list of fortune cookie fortunes

Write on one post it: "Add the words 'in bed' to the end of the fortune and whisper the result in the 'callback's ear.

Write on the other post it: "Sing (in opera voice) whatever is whispered in your ear"

Ask for two volunteers -- an "iterator" and a "callback" -- give the first post it to the iterator and then the second to the callback

Go through the collection, having iterator add "in bed" to the fortune and then having callback sing it. Hilarity Ensues

Point out each persons role, and how they are similar to a real iterator/callback

Exercise: Find iterators

Almost all iterators operate on arrays. Have each students (on their own) visit the MDN documentation and write down all the iterator functions they can find, then ask each student to name one in a whip-around**

3.c Talk about callbacks for asychronous functions (15 min)**

Analogy: calling a government office -- how it use to work, vs how it works now -- you used to wait on hold, then neccesity (lesser hours) led them to introduce callbacks -- where you give your number and then they call you back

Point out the difference between the synchronous process of being on hold, and the asynchronous process of going about your day while you wait to be called back

Exercise: Have students spend time on their own coming up with another real life example of an asynchronous process, then pair share, then quick share outs

Now move to common asynchronous processes in web applications -- timeout, http calls, etc. -- why are these processes asynchronous?

Let's see how the above synchronous example would operate differently if one of the functions were a long-running async function:

```js
var sync1 = function() { console.log('sync1 executed'); };
var sync2 = function() { console.log('sync2 executed'); };
var async1 = function() {
  // simulate a long-running async operation
  setTimeout(function() {
    console.log('async1 executed');
  }, 1000);
};
sync1();
async1();
sync2();
```
Running the above code produces the following output:

```
sync1 executed
sync2 executed
async1 executed
```
Note how `sync2 executed` was printed before `async1 executed`, even though it was called afterwards. JS did not wait for `async1` to finish before executing the next line of code - thanks to JavaScript's event-driven model.

A good example of asynchronous code execution is the browser itself loading a web page. The browser does not load one image, script or CSS file at a time. It kicks off the requests for those resources and they run in parallel, informing the browser when they have loaded so that they can then be processed.

JavaScript's event-driven programming model is very performant and efficient, however, it can be more complex to code than synchronous languages such as Ruby.

Writing async code is more complex because you have to take into consideration the fact that async function calls will likely not have completed before you need to use or process the data it is supposed to return.

For example, the `getFriends()` function below is not asynchronous, it returns the data when invoked, and everything works just fine:

```js
// synchronous function
var getFriends = function() {
  return ['Fred', 'Barney'];
};

var friends = getFriends();

friends.forEach(function(friend) {
  console.log(friend);
});
``` 

However, if we use `setTimeout` in `getFriends()` to simulate fetching data from the network or internet asynchronously, we will generate an error because the `friends` variable will not be an array of data before we call `forEach` on it:

```js
// asynchronous function
var getFriendsAsync = function() {
  setTimeout(function() {
    return ['Fred', 'Barney'];
  }, 0);
};

var friends = getFriendsAsync();

// will fail because friends does not yet hold an array
friends.forEach(function(friend) {
  console.log(friend);
});
```

What's a programmer to do?

The async programming model requires the use of our new found friend, callbacks (or promises, which is a lesson for another day).

Let's refactor the `getFriendsAsync` function to accept a callback:

```js
// refactored to accept a callback
var getFriendsAsync = function(cb) {
  setTimeout(function() {
    cb(['Fred', 'Barney']);
  }, 0);
};

// execute and provide it with an anonymous callback function.
getFriendsAsync(function(friends) {
  friends.forEach(function(friend) {
    console.log(friend);
  });
});
```

In a bit, we're going to take a look at and practice with each of these scenarios...

### 4. Anonymous vs. Named Functions<small>  (10 mins)</small>

#### Anonymous Functions are Convenient

Not surprisingly, an **anonymous** function is an unnamed function.

Often in JavaScript we don't need certain functions to have a name - anonymous functions to the rescue!

Anonymous functions save us from having to unnecessarily think up names - very convenient indeed.

Let's take a look at that `addEventListener` example from above again:

```js
myElement.addEventListener('click', function(event) {
  alert('Clicked!');  
});
```

Since we are not going to be calling the function from anywhere else in our code, we don't need to name it and thus we are using an anonymous function as our callback.

#### Using Named Functions as Callbacks

We don't always have to write an inline anonymous function as our callback, we can pass a named function like this:

```js
myElement.addEventListener('click', myCallback);

function myCallback(event) {
	alert('Clicked!');
}
```
Note that we need to be sure to include any required parameters, like the `event` param above, when defining our function.  No different than with the anonymou


>Important: When we pass a function as an argument, don't type parenthesis after the name of the function! Otherwise, we will be invoking it and end up passing the result of executing that function instead of the function definition itself.

**?: Discuss with your pair for one minute and see if you can figure out when it would it be advantageous to using a named function vs. an anonymous function?**

### 4. Practice

#### 4.a Using Callbacks with Iterating Methods<small>  (15 mins)</small>

To practice in today's lesson, we will use [codepen.io](https://codepen.io). Let's open it up and test it using the above the following code:

var flowers = ['rose', 'orchid', 'daisy'];
	
flowers.forEach(function(flower, idx) {
	console.log((idx + 1) + ') ' + flower);
});

Feel free to collapse the HTML & CSS panes and be sure to open your console in DevTools.

You may work with a partner on this exercise.  Read all of the requirements below before you start:

1. Research the array `filter()` method.
2. Use `filter()` to retrieve the car objects which have been driven more than 20,000 miles per year from the following array:

	```js
	var cars = [
	  { make: 'Toyota', yrsOld: 5, mileage: 92399 },
	  { make: 'Ford', yrsOld: 12, mileage: 255005 },
	  { make: 'Ferrari', yrsOld: 9, mileage: 12966 },
	  { make: 'Subaru', yrsOld: 9, mileage: 111266 },
	  { make: 'Toyota', yrsOld: 2, mileage: 41888 },
	  { make: 'Audi', yrsOld: 3, mileage: 57720 }
	];
```

3. Instead of an unnamed inline function for the callback, use a function declaration or function expression for the callback.
4. Save the retrieved set of objects into a new array variable named `wellDrivenCars`.
5. Console.log `wellDrivenCars` to check your work.

We'll review a solution in 15 minutes...

#### 4.b practice with asynchronus code

Do this exercise in pairs.

The following starting code contains an asynchronous function named `withdrawFunds` and a variable, `balance`, set to a value of `100`:

```js
function withdrawFunds(curBal, amount, cb) {
  setTimeout(function() {
    if (curBal < amount) {
      console.log('NSF');
      cb(curBal);
    } else {
      var newBal = curBal - amount;
      console.log('New Balance: ' + newBal); 
      cb(newBal);
    }
  }, 500);
}

var balance = 100;

// Your code here...
```
Call the `withdrawFunds` function three times, withdrawing amounts in this Sequence: 40, 20 & 90.

The following values should display in the console's output, one at a time, a half-second from each other:

```
New Balance: 60
New Balance: 40
NSF
Final Balance: 40
```

Hint: Think nested!

We'll review a solution in 15 minutes...

For reference, here's [a CodePen with a possible solution](http://codepen.io/jim-clark/pen/PZRGNq?editors=0012). No cheating please.

#### Pyramid of Doom

You'll notice that when invoking multiple async functions with callbacks, the nested code starts to look like something referred to as "The Pyramid of Doom", also known as "Callback Hell".

Mention promises -- not to explain but as a possible extra credit assignment -- research promoises and explain how they solve callback hell

### Essential Question

**Take one minute to discuss the use case for callbacks with a partner. <br>Prepare to discuss...**

## References

[Understand JavaScript Callback Functions and Use Them](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/)
