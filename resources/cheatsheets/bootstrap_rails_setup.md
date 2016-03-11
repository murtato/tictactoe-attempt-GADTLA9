# How To Add Twitter Bootstrap To Your Rails App

![Bootstrap](http://masteryit.com/blog/wp-content/uploads/2014/01/bootstrap-3.jpg)

## Overview

Follow these steps to **Bootstrapify** your Rails App.



### Step 1

Add Bootstrap Gem

``` 
gem 'bootstrap-sass', '~> 3.2.0'
gem 'bootstrap_form'  # if you want bootstrap forms!
```

***Check your ticks!***

### Step 2

From Command Line:

``` 
bundle install
```

### Step 3

Start Servers in different Command Line tabs 

`rails s` or `rails server`



### Step 4

Within the file `app` > `assets` > `javascripts` > `application.js`,   
add:

``` 
//= require bootstrap-sprockets
//= require bootstrap
```

to directives ***after jquery:***

``` 
//= require jquery
//= require jquery_ujs
//= ...
//= require bootstrap-sprockets
//= require bootstrap
//= require_tree .

```

### Step 5

Within the `app` > `assets` > `stylesheets` > `application.css`,   
add to bottom of file:

```
@import "bootstrap-sprockets";
@import "bootstrap";
```

and, if you want to use forms, add:

``` 
 *
 *= require rails_bootstrap_forms
 *= ...
 */
```

**Importantly**, re-arrange the "requires" at the bottom of the
page to put the `require_self` *after* any libraries (including
`rails_bootstrap_forms` but *before* user-generated CSS!

``` 
 *
 *= require rails_bootstrap_forms
 *= require_self
 *= require_tree .
 */
```

Then, ***rename file `application.css.scss`!***

Make sure you keep them in this order! As you can see, we're also adding 

bootstrap forms to make our forms simpler!

### Step 6

Within the `apps` > `views` > `layouts` > `application.html.erb`   
add these scripts/links to the `<head>`:

``` 
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
```

This enables jquery animations!

### RESTART YOUR SERVER to Bootstrap away! Then, [docs](getbootstrap.com)!
