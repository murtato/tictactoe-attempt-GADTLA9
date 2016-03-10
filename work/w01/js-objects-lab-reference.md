###Locking Down Properties

Is it always so easy to do this...add and remove properties for an object on a whim? More importantly...do we always want the 
ability to do this? Are there times when we want to lock down an object so to speak..and prevent these types of runtime modifications?
It turns out that the dynamic nature of javascript can make it unwieldy at times, and it's nice to have the ability to prevent our objects
from being tampered with. 

First, let's take note of the three attributes we can use to control the accessibility of our objects properties

* Writable - Can we write the property...in other words can we set it after creation?
* Enumerable - Can we list out our objects properties, like we did in the for(key in movie) loop?
* Configurable - Are the attributes of the property modifiable? 


Let's look at how we can figure out what the values of our property attributes are

```javascript
//pass the object as the first parameter and the prop name as the second
var moviePropValues = Object.getOwnPropertyDescriptor(movie,"title");

//output: 
//Object {value: "Ex-Machina", writable: true, enumerable: true, configurable: true}

```

We can see that the 'title' property has four attributes associated with it: a value, and three we talked about above that
control access to the property. We can see that all of these access properties are true, which may or may not be desirable depending
on the context. 


To construct objects and define their properties, we have to essentially pass a spec of what we want the values of these attributes to
be when we create an object. Let's look at a simple example, we'll create a read only version of our movie object, but with
just the title.

Below Object.defineProperties() will take as a first argument the object whose properties we wish to define, in this case by passing
an empty object we are in effect creating the object. The second argument is itself an object, where the property we wish to 
specify, in this case 'title', is created with another object that has all the specifications for the attributes.  
```javascript
 
 var movie = Object.defineProperties({},
  { title: { value: 'Ex-Machina', 
             writable: false, 
             enumerable:true, 
             configurable:true },
  } 
);

movie.title = "Mac and Me"; //fail

movie.title; //output: "Ex-Machina"
```
It is useful to prevent tampering with an object, often if you intend for certain functionality to be present or behave in a 
certain way, you don't want users of your code, or other developers to inadvertently break it. Setting the accessibility of properties
is one way that we do that. 


###Locking Down Objects

So far we have looked at accessibility at the property level, now let's turn our attention to the object level. 

Objects in Javascript have a property named **extensible**, and as you might imagine this governs whether or not an object can
be extended, which means it governs whether or not you can add additional properties to the object.

```javascript
//check quickly whether or not movie is extensible

Object.isExtensible(movie); //output: true

```

There are a few ways that we can prevent movie from being extended:
 
 * Object.preventExtensions(anObj)
 * Object.seal(anObj)
 * Object.freeze(anObj)
 
 In turn you can check if an object is in one of these states with:
 
 * Object.isExtensible(anObj)
 * Object.isSealed(anObj)
 * Object.isFrozen(anObj)
 
 so let's look at what each of them does. 


####preventExtensions

This method will prevent new properties from being added to the object, the way it's distinguished from the seal and freeze
is that it **does not modify properties** that are already defined on the object. 


```javascript
var course = { name: 'History', professor : 'Dr. Smith' }

Object.preventExtensions(course); 

//this will fail
course.courseNumber = 101; 

course.courseNumber //output: undefined

//we can still mess with properties already defined
course.name = 'Math';

course.name //output: Math

//delete the  course name
delete course.name

course.name //output undefined

```

Existing properties are not affected by Object.preventExtensions, and can be modified or deleted. 

**Important-** This is not reversible, you cannot open up an object to extensions once you call Object.preventExtensions on it. 



####seal

This does the same thing as above, but adds on the restriction that we cannot delete or mess with the configurations or the properties,
so we cannot change course name to be read only, or prevent it from being enumerated, we also cannot delete any properties. 

```javascript

var course = { name: 'History', professor : 'Dr. Smith' }

//let's seal our object
Object.seal(course);

delete course.name //this won't work

course.name  //output: 'History'

//we can still write to properties that are writable
course.name = 'Math'

course.name  //output: 'Math'


```

####freeze

Freeze is a layer of restriction on top of what seal does, so it will do everything that seal will do and additionally prevent any
properties from being written to. It basically snapshots an objects state at the instance it is called, preventing modifications to anything,
including properties already defined, whether or not they were previously writable or not. 


```javascript
var course  = { name: 'History, professor : 'Dr. Smith'}

Object.freeze(course);

course.name = 'Math';  //this will fail

```
