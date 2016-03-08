![](http://c2journal.com/wp-content/uploads/2014/07/css3-markup.jpg)
# CSS - Basics

| Learning Objectives - SWBAT|
| :--- |
| Add Styles to a Web Page |
| Use Basic Selectors to Target Elements for Styling |
| Apply Basic Styles to Selected Elements |

## Roadmap
1. Intro to Cascading Style Sheets (5 mins)
2. CSS Properties (20 mins)
3. Adding Styles to a Web Page (25 mins)
4. CSS Selectors (25 mins)
5. Further Study

### 1. Intro to Cascading Style Sheets<small> (5 mins)</small>

#### What is CSS?

CSS is a web technology used to format HTML documents.

CSS enables us to separate the structure & content (HTML) of a document from its presentation.  This concept of *separation of concerns* is widespread throughout software development because it helps make programs more maintainable and provides better code reuse.

#### Basic CSS Syntax

![](http://learnwebcode.com/wp-content/uploads/2010/02/anatomy-of-a-css-rule.gif)
   
- **Selectors**:
	- Used to target the element(s) to be styled.
	- Can range from simple to complex.
	- Multiple selectors can be separated with commas
- **Properties**:
	- There are over two hundred CSS properties that can be used to style the color, size, text, position, border, animation, etc. of elements.
- **Value**:
	- The value to apply to a property is, of course, specific to that property. For example, the CSS property, _font-family_, accepts values of names of fonts such as _Georgia_, _Arial_, etc.

### 2. CSS Properties<small> (20 mins)</small>

#### Basic Properties

We're going to pair up and take 5 minutes to research CSS Properties.<br>[Here is the top listing](http://www.w3schools.com/cssref/) if you google "css properties".

Be prepared to share with the class:

- What the property styles (usually obvious thanks to logical naming)
- Some of the values that can be applied to the property.

#### Shorthand Properties

Shorthand properties are CSS properties that let you set the values of several CSS properties simultaneously.
   
Using a shorthand property, a web developer can write more concise and often more readable CSS.
  
A shorthand property groups properties of a common theme.  Here are some examples:

##### font
  
```css
p {
   font-style: italic;
   font-weight: bold;
   font-size: 12px;
   line-height: 14px;
   font-family: Helvetica;
}
```

The five lines of CSS declarations above can be merged into a single declaration as follows:

```css
p {
   font: italic bold 12px/14px Helvetica;
}
```

##### margin
  
```css
div {
   margin-top: 10px;
   margin-right: 5px;
   margin-bottom: 15px;
   margin-left: 25px;
}
```

The four lines of CSS declarations above can be merged into a single declaration as follows:
  
```css
div {
   margin: 10px 5px 15px 25px;
}
```
   
The above `margin` example specifies margins for all four sides (top, right, bottom & left - in that order).

A good word to help remember the order of these values is **TR**ou**BL**e.
   
[This documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) explains all about shorthand properties.

### 3. Adding Styles to a Web Page<small> (code along - 30 mins)</small>

#### Setup

Before we can add styles to a web page, we're going to need one to style!

```
? mkdir css-basics
? cd css-basics
? touch index.html
? subl .
```

Now let's add some HTML to `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <h1>WDI Rocks!</h1>
</body>
</html>
```

With our boilerplate in place, let's check it out in the browser by right-clicking in the editor and selecting _Open in Browser_ or by typing _open index.html_ in terminal.

#### Three Ways to Add Styles

There are three ways to add styling to a web page:

  - Inline Styles
  - Internal Stylesheets
  - External Stylesheets

##### Inline Styles

An **inline style** can be used to apply style to a single element using the `style` attribute.

The use of inline styles breaks our separation of concerns by mixing content with presentation, therefore this technique should be avoided whenever possible.

>Note: Several JS libraries and frameworks such as _AngularJS_ add styles dynamically using inline styling to perform their magic behind the scenes. However, as application developers, our magic should be follow the best practice of _separation of concerns_.

To demonstrate inline styling, let's use it to change the color of the  background and font:

```html
<body style="background-color: #eedd8e; color: darkblue">
``` 

Above we have used both a "[named color](http://www.w3schools.com/cssref/css_colornames.asp)" and a RGB hex value. There's a link in the References section if you want to learn more about colors in CSS.

Save and refresh - bam!

##### Internal Stylesheet

An **internal stylesheet** can be created by using a `<style>` element nested within the document's `<head>` element:

```html
<head>
  <meta charset="UTF-8">
  <title>CSS Basics</title>
  <style>
    h1 {
      text-align: center;
    }
  </style>
</head>
```

Now the text within our `<h1>` will be centered!

Although an improvement over using inline styling, inline stylesheets are also not the preferred method to add styles to your web page. That leads us to...

##### External Stylesheets

Styling a page using **external stylesheets** is considered a best practice because it provides the best separation of concerns and thus provides better reusability and maintainability.

External stylesheets are separate files with a `.css` extension and are "linked" to the document using the `<link>` element.

First, let's create our stylesheet inside of a new `css` folder:

```
? mkdir css
? touch css/style.css
```

Now we can link in the `style.css` external stylesheet like this:

```html
<head>
  <meta charset="UTF-8">
  <title>CSS Basics</title>
  <style>
    h1 {
      text-align: center;
    }
  </style>
  <link rel="stylesheet" href="css/style.css">
</head>
```

>Note that the *href* path in this case is relative to **index.html**.  
     
Let's add a css rule inside our new `style.css` file to test it out:

```css
body {
  font-family: "Lucida Grande";
}
```
Save & refresh. Cool!

#### Load Order Matters

Often, there will be multiple CSS stylesheets that you want to include in your web page. For example, you will often want to load a CSS file from a third-party CSS framework and include your own custom CSS file as well.

When multiple stylesheets exist, the load order matters if they define the same CSS rule.

To demonstrate, let's update `style.css` as follows:

```css
body {
  font-family: "Lucida Grande";
  background-color: red;
}

h1 {
  text-align: right;
}
```
Save, refresh and discuss the results...<br><br>

**? - When identical CSS rules conflict, who wins?**

>Normally inline styling has the highest priority and overrides identical CSS rules contained within stylesheets.

**? - What are the three methods to add styles to a HTML document?<br>
? - Which method is considered a best practice and why?** 

### 4. CSS Selectors

As shown earlier, the **CSS Selector** in a CSS rule, selects, or targets, an element, or elements, to be styled by the CSS _property:value_ declarations.

#### Setup

To practice with CSS selectors, copy & paste this additional HTML inside of the `<body>` below our existing `<h1>`:

```html
  <p>This is a paragraph element</p>

  <div>This is a DIV</div>
  <div class="crazy-div">This is another DIV</div>
  <div class="crazy-div another-class">
  	<p>This is the third DIV</p>
  </div>

  <p id="comments-title">Comments</p>
  <ul>
    <li>Comment One</li>
    <li class="another-class">Comment Two</li>
    <li>Comment Three</li>
  </ul>
```

Next, let's rid ourselves of that inline stylesheet and inline style on the `<body>`.

Lastly, let's update `style.css` to start with the following:

```css
body {
  font-family: "Lucida Grande";
}

h1 {
  text-align: center;
}
```

#### Basic Selectors

##### *element* Selector

This is how we could select all `<h1>` and `<h2>` tags:

```css
h1, h2 { ... }
```

**PRACTICE:<br>- Set the margin on the `<body>` element to 15 pixels on all four sides<br>- Set the text color of all `<div>` elements to blue.**

##### *ID* Selector

We select an element that matches the value of an `id` attribute by prefixing it with `#`:

```css
#id-name { ... }
```

>Note: **id**'s on elements should always be unique.

**PRACTICE:<br>- Set the size of the font to 28px on the `<p>` element with an `id="comments-title"`**

##### *class* Selector

Selects elements that match one of the values of the *class* attribute (yes, the *class* attribute accepts multiple space separated values)

```css
.classname { ... }
span.classname { ... }  /* This will selected all <span class="classname"> tags */
```

**PRACTICE:<br>- Set the border of the `<li>` with a class of `another-class` to be solid, 2px in width and red in color.**

##### *attribute* Selector

Selects elements based upon its attributes.

This is not very common, but if you come across square brackets in a selector, you'll know what they are for :)

```css
[attr] { ... }  /* Matches elements that have an attribute named attr */
a[href="#about"] { ... }  /* This will selected anchor tags with an href set to "#about" */
```

#### Combinators

Combinators provide a powerful way to select an element based upon its relationship to another element.

The most common is the **descendant selector** which is simply a space between two specified elements.

```css
/* This will match <span> tags nested anywhere within a <h3> tag that has a class of "sub-title"*/
h3.sub-title span { ... }
```

**PRACTICE:<br>- Set the background color of the `<p>` tag with the text of "This is the third DIV" to yellow.**

##### There are three additional combinators:

These are not quite as common but can come in handy...

- The **child selector** (>)

	```css
	div > p {...}
	```

	Selects all `<p>` tags that are **direct** children of a `<div>`.
	
- The **adjacent sibling selector** (+)

	```css
	div + p {...}
	```

   Would select `<p>` tags only if they were preceded immediately by a `<div>`.

- The *general sibling* Selector (~)

	```css
	div.my-class ~ p {...}
	```

	Would select all `<p>` elements that are a sibling of a `<div>` with a class of "my-class".
	
**Questions?**

#### Specificity

*Specificity* is the means by which a browser decides which CSS rule gets applied when there is a conflict.  For example:

```css
.my-class {
    color: blue;
}

div {
    color: red;
}

<div class="my-class">What color am I?</div>
```

A conflict exists because the `<div>` matches both CSS selector rules.  The selector with the **highest** *Specificity* wins based upon this list of increasing specificity:

- Universal (*) selector
- Type (element) selectors
- Class selectors
- Attributes selectors
- Pseudo-classes
- ID selectors
- Inline styles

**? - What color will the `<div>` in the above example be?**

There is an exception to the concept of *specificity* known as the **!important** declaration.  Use of *!important* is not recommended because it can make debugging CSS more difficult than it already is.

#### Pseudo-classes

Pseudo-classes (along with pseudo-elements) let you style elements not just based upon their class, type, id or position in the document, but also in relation to other factors like whether an `<input type="checkbox">` is checked or not.

Some common pseudo-classes are `:active`, `:disabled`, `:empty`, `:first-child`, `:nth-child`, `:nth-of-type`, `:focus`, `:hover`, and many more!

Try chaining pseudo-classes!  `li:nth-child(3):hover`

**PRACTICE:<br>- Use the `:hover` pseudo-class to change the cursor to the little hand-pointer when it's over any of the `<li>` elements.<br>- Use the `::first-letter` pseudo-element to set the size of the "C" in "Comments" to be 60px.**

Here's a link to learn more about [pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/pseudo-classes) and [pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements).

#### CSS Selectors - Key Takeaway

CSS selectors provide enormous capability and flexibility to target any element(s) for styling!  You will spend a good amount of time as a front-end developer learning how to wield their power.

### 5. Further Study

Learning CSS, like much of coding, is a never-ending process and in this lesson, we've done slightly more than scratch the surface.

As you code, you will undoubtably rely on the numerous resources available to you on the Internet. Hopefully, this lesson has provided you with some context to help you better understand the results returned by your web searches.

Lastly, Chrome's DevTools are invaluable in helping debug among other things, CSS.  [Here's a link to Google's docs that discuss inspecting pages and styles](https://developers.google.com/web/tools/iterate/inspect-styles/basics)

## Resources

[CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)

[CSS Colors](http://www.w3schools.com/cssref/css_colors.asp)


