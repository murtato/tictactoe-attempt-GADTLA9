# Tic-Tac-Toe Weekend Project

![Tic Tac Toe](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Losers-tictactoe-X.svg/400px-Losers-tictactoe-X.svg.png)

### Objective

Build a Tic-Tac-Toe game incorporating the three web app technologies you've

worked with this week:

- HTML
- CSS
- JavaScript

Save this project as `project0` in your projects folder!

- `cd ~/code/wdi/WDI_DTLA_6/projects`

### Minimum Requirements

- Display an empty tic-tac-toe board when the page is initially displayed.
- A player can click on the nine cells to make a move.
- Every click will alternate between marking an `X` and `O`.
- Once occupied with an `X` or `O`, the cell cannot be played again.
- Provide a `Reset Game` button that will clear the contents of the board.

### Getting Started

- Create an `index.html` page.
  
- Create and include in your `index.html` page, `style.css` and `script.js`
  
  files.
  
- Start by writing the HTML and CSS that displays a 3x3 grid and the
  
  `reset game` button.

#### Suggested Model

Programs, including games, are frequently focused on manipulating data and

displaying that data to a user. Decide on the data structures, held in

variables, that will maintain the **state** (data / status) of the game. This is

known as your game's **model**.

While it's not neccessary, it may be easier to model the board using a 2-D

array (aka nested arrays). Then, you can use your own version of a reverse

Cartesian Coordinates (think row & column).

For instance:

``` javascript
var board = [
  [_, _, _], // this code will break, b/c _
  [_, _, _], // is not a valid data type!
  [_, _, _]  // choose your own data types instead!
];
```

1. **`_` is a placeholder.** How would you represent *blank*, *X* or *O* here?
2. Hint: how would you check for a winner?

### Hints

- Using `id` and/or `class` attributes will help you wire up your click events
  
  with JavaScript - using these will help you manipulate your css properties,
  
  such as color, sizing, or borders.
  
- Locate the element first to use it within your app. Think about using
  
  `document.getElementById`, `document.getElementsByClassName` or something
  
  similar to locate your target elements. Try this in your console to make sure
  
  your selection works.
  
- After finding the elements, start writing logic to listen for click events on
  
  those elements. Using a single listener with event bubbling is recommended
  
  but not required.
  
- Use functions for code that needs to run multiple times.

### Bonus

1. Display whose turn it is ("X" or "O").
2. Provide win logic and display a winning message.
3. Provide logic for a cat's game (tie), also displaying a message.
4. Add your personal touch with unique styling.

### Resources

[DOM Events](http://www.smashingmagazine.com/2013/11/12/an-introduction-to-dom-events/)

[CodePen](http://codepen.io/)

[W3 School's Docs on the DOM](http://www.w3schools.com/jsref/dom_obj_all.asp)

[MDN Docs on the DOM](https://developer.mozilla.org/en-US/docs/Web/Events)