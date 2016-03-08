# Intro to HTML and Markdown

---

## HTML: HyperText Markup Language

- The original Internet consisted of HTML only
- CSS and Javascript were later added on to make things prettier
- HTML provides the Layout & Content for a website
- It does not deal with styling (CSS) or user interaction (Javascript)
- Example: See class repo: work/w01/d02/intro_html_markdown/html-example.md

---

## Markdown

- A shorthand syntax for writing HTML only documents
- Most non-semantic HTML elements have a Markdown equivalent
- Example: HTML -> `<h1>Little Birdie</h1>` , Markdown -> `#Little Birdie`
- Requires a Markdown viewer to view
- Download Typora: https://www.typora.io/

---

## HTML Elements

![Element Diagram](http://evc-cit.info/cit040/screenshots/terminology.png)

---
## Pair Activity: Tag!

```html
<a>, <blockquote>, <br>, <button>, <div>, <form>, <h3>, <img>, <input>, <link>, <ol>, <p>, <script>, <select>, <span>, <table>, <ul>
```

You will be assigned two of the following elements. With your partner, answer the following:

- What is it's primary purpose?
- Does it require a closing tag?
- Does the tag require other tags to be useful?  If so, what are they and what do they do?
- Is there a Markdown equivalent for the tag?
- Write out an example of the tag being used with its common attributes

---

## DOM Hierarchy

- The DOM is arranged in a tree data structure
- The root node is the <html> tag
- Every other tag has a parent tag
- Tags can have child tags

---

## DOM Tree

![DOM Tree](http://www.webstepbook.com/supplements/slides/images/dom_tree.gif)

---

## Pair Activity: Identify the relationships between elements in the HTML5 Boilerplate

- The HTML5 boilerplate is the basic boilerplate you will use to start off every project
- The file is in the repo at work/w01/d02/intro_html_markdown/html5-boilerplate.html

---

## Fix-Pair-Share Activity

Fix the ugly.html code snippet so that it uses proper markup and convention. The code snippet is available at work/w01/d02/intro_html_markdown/ugly.html

---

## Semantic HTML elements

- Descriptive HTML elements that say something about their content
- Makes HTML code more readable
- Generally don't have a Markdown equivalent

---

## Some Semantic Tags

```html
<article>
<aside>
<figure>
<footer>
<header>
<main>
<nav>
<section>
```

---

## Fix-Pair-Share Activity

Improve the beautified HTML snippet you previously created so that it uses semantic markup whenever possible

---

## Lab

- Write a HTML document that represents your own personal blog using semantic HTML. 
- Focus on structure and include some sample content. Include attributes such as class and id. Don't forget your boilerplate!
- Create and include an empy external stylesheet and empty external javascript file.
- **BONUS**: Use CSS to add some styling to the page.