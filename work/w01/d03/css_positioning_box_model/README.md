# Living within the Box

![Transmogrify](http://www.lovine.com/hobbes/comics/chimage.php?image=transmogrifier2.gif)

## CSS Box Model & Positioning

| Lesson Objectives - SWBAT:               |
| ---------------------------------------- |
| Explain how margin, border, padding, and content relate to one another in the box model |
| Adjust element spacing using padding and margin |
| Describe the difference between block, inline, and inline-block elements |
| Explain the difference between and use cases of static, relative, absolute, and fixed positioning |
| Use floats to position/remove content from the standard document flow. |
| Create a page with multicolumn layout    |
| Identify the element's boxes when viewing a website. |
| Use Chrome's Web Inspector to explore an element's box properties. |

##### Road Map

1. Intro to the Box Model
2. The Box Model and Its Components
3. Display
4. Positioning
5. Floats and Clears
6. Outro

## Intro to the Box Model

![Panels](http://www.collectivenext.com/sites/default/files/styles/medium/public/blog-images/understanding-comics-p61.png?itok=iibrRHw2)

I'm going to first make a crazy comparison, and follow it up with a wild assumption.

First, for the comparison:

>  *Website design is quite similar to comics' panel layout.*
> 
> — Ezra Arez Raez, 2016

Now for the wild assumption: open chrome and visit any site.

Now, if you'll relax your eyes as you stare into that website, I'm sure you'll make out a number of rectangles in that site - go ahead, count them!

I can assume this because, much like comics - predominantly relying on the rectangular panel for the majority of their page layout - **the web is made of rectangles.**

We use HTML to decide what rectangles we want and what should go in them.

We use CSS to decide how they should look (recall yesterday's lesson), and where they should go (welcome to this lesson).

##### Assets

Today we'll be working from the `starter_code/` directory in the repo. Please copy the code outside of the `instructor/` folder. 

## The Box Model and its Components

You may be familiar with the following diagram:

![box-model](http://s6.postimg.org/gi8r6c341/css_box_model.png)

Open Chrome's Dev Tools by using cmd+opt+i.

Click "Elements" (in the dev tools toolbar), then `<div id="box-model">` in the page source. Find the multicolored rectangles at the bottom of "Styles," then follow along with me: 

- **Margin** - The empty area around a border, where we don't want anything else on the page to render.
- **Border** - A solid (or dashed, or dotted, etc.) line around the padding and content. Can be zero pixels (invisible) or bigger.
- **Padding** - The area between the border and the content, where we can give the content some breathing room
- **Content** - The contents of the box; also what we size when we set a width and height in CSS.
- **Box-Sizing** - `box-sizing` is an interesting property. By default it's set to `content-box`, but we often assume sizing works in terms `border-box`. The difference is subtle but important. `content-box` sets the `height` and `width` of a box to the content, whereas `border-box` assigns them to the size of the border. 

Let's add to our `.box-model` class and see what these do:

``` css
.box-model {
  margin: 50px auto;
  border: 3px solid red;
  padding: 50px;
  width: 100px;
}
```

#### Love thy Dev Tools

Chrome's Dev Tools are one of the nicest things to ever happen to developers. This is because we can alter our webpages __while__ viewing them in the browser!

Take the next 5 minutes to play with the following:

- **Margins** - Remember that the values for a single margin property works clockwise from the top, `margin: Abovepx Rightpx Belowpx Leftpx;`
- **Borders** - Find new textures and sizes.
- **Padding** - See what negative values can accomplish.
- **Height, Width, and Box-Sizing** - See what these do to your box!

> Remember, if you've ever gone too far off the deep-end, simply refresh the page!

## Display

![inline vs block](http://netdna.webdesignerdepot.com/uploads/2012/08/boxmodel-block-vs-inline.png)

At the heart of positioning is the `display` property. There are five values that greatly effect our webpage.

1. An **inline** element renders without a line break above or below it, so that other content is right next to it. Inline elements can't be given a width, height, or margins.
2. A **block** element renders with a line break above and below it, so they don't have anything next to them. By default, they take up the entire width of their parent element. Block elements can be given a height and a width.
3. An **inline-block** element is placed as an inline element (on the same line as adjacent content), but it behaves like a block element. This makes the element a block box but will allow other elements to sit next to it on the same line.
4. If you assign **none** as the value of the display, this will make the element and its content disappear from the page entirely!
5. **flex** is a new and interesting display option for CSS3. I'm planning to cover it in greater detail in a later lesson on responsive CSS, so I don't want to spend too much time on it now. However just to mention, it obviates the need for floats (see below in "Positioning") and removes the margins between things. It essentially makes your positioning more *flexible*, while simultaneously making your site less accodmodating (`display: flex;` will not work with browsers IE9 and older).

Lets see the difference between inline, block, and inline-block by adding these rules to our CSS.

``` css
.inline-vs-block {
  border: 1px dotted gray;
}

.inline {
  display: inline;
}

.block {
  display: block;
}

.inline-block {
  display: inline-block;
}
```

#### Practice Display

In `<div id="inline-vs-block">`, notice what happens when you change width, height, margin, and padding for inline, block, and inline-block elements. Take 5 minutes to alter these in the Chrome Dev Tools.

## Positioning

![](http://www.forbiddenplanet.co.uk/blog/wp-content/uploads/2010/08/what01.gif)

The `position` property in CSS allows the content to move around the page in four separate fashions: static, relative, absolute, and fixed.

##### Static Positioning

HTML elements are `position: static` by default. A "static positioned" element is always positioned according to the normal flow of the page and are not affected by the top, bottom, left, and right properties.

##### Relative Positioning

Declaring `position:relative` allows you to position the element top, bottom, left, or right relative to where it would normally occur.

##### Absolute Positioning

Setting `position: absolute` on an element lets you position it according to the edges of its parent element. This has the side effect of removing it from the flow– that is, other elements will act like it isn't there.

##### Fixed Positioning

An element with `position: fixed` is positioned relative to the edges of the browser window.  It will not move even if the window is scrolled, so a fixed positioned element will stay right where it is.

### CSS Directions

Siblings to the `position` property, the `left`, `right`, `top`, and `bottom` properties are known as the CSS Directions. By Default, they're set to `auto`, and these properties do nothing while `position: static;`. They move an element by adding a pixel amount to the respective direction between it and the nearest element or border.

Again, let's see what happens when we add these new position properties to our code (go ahead and overwrite classes `.spacing container`, `.one`, `.two`, `.three`, and `.four`).

``` css
.spacing-container {
  height: 500px;
  width: 500px;
  background-color: gray;
  position: relative;
}

.one {
  background-color: red;
  position: static;
}

.two {
  background-color: blue;
  position: relative;
  top: -100px;
  left: 100px;
}

.three {
  background-color: green;
  position: absolute;
  top: 200px;
  left: 200px;
}

.four {
  background-color: black;
  position: fixed;
  right: 100px;
  top: 80%;
}
```

## Floats

The float property defines whether or not an element should stick to the side and contain it's own line.

![Float Layout](https://cloud.githubusercontent.com/assets/40461/8234489/3b61ef02-15d4-11e5-8864-435fb6e0c3cc.png)

Note that "absolutely positioned" elements ignore the float property as they are removed from the normal document flow.

Floated elements remain a part of the flow of the web page. This is distinctly different than page elements that use absolute positioning.

There are four valid values for the float property. "Left" and "right" float elements those directions, respectively. "None" (the default) ensures the element will not float and "inherit" which will assume the float value from that elements parent element.

### Clear

As a sister attribute to Float, `clear` allows an element to ignore float rules, and move itself *past* the float. You can set a clear to `left`, `right`, `both`, and `none` (default).

Compare these two photos. A footer with `clear:none;`.

![](https://css-tricks.com/wp-content/csstricks-uploads/unclearedfooter.png)

Versus a footer with `clear: both` or `clear: left`:

![](https://css-tricks.com/wp-content/csstricks-uploads/clearedfooter.png)

Finally, let's see how these floats work!

``` css
.img-example {
  float: left;
  width: 400px;
}

.columns > div {
  float: left;
  width: 50%;
}
```

## Outro

While positioning can be a struggle early on, consistent practice will eventually lead to full groking. As you can see, viewing html elements as the rectangular panels that they are will assist you in conquering this tricky CSS beast.

##### Final Questions

- Explain the difference between `margin`, `border`, `padding`, and `content`.
- How do floats work with clears to create a multicolumn layout?
- Compare inline-block, block, and inline.

#### References

[Box-Sizing](https://css-tricks.com/box-sizing/)

[All About Floats](https://css-tricks.com/all-about-floats/)

[CSS Positioning Tutorial](http://www.barelyfitz.com/screencast/html-training/css/positioning/)