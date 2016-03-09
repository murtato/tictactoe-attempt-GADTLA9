###A Journey into the Git Object Database


Let's start by creating an empty repo inside of a folder somewhere on our computer

```bash
#these steps will create a new folder, and then a git repo inside that folder
$ mkdir git-journey

$ cd git-journey

$ git init
 
```

Now let's take a peek at the hidden .git folder, which was created by git when we ran the *git init* command. 

```bash
#list out everything in the current directory
#note that the git folder is hidden, as evidenced by the preceding '.'
$ ls -a

#we'll switch into the .git folder
$ cd .git

#let's look at everything in the folder 
$ ls 

```

We want to figure out how git works and stores our code, and most importantly we want to understand
how git stores different versions of our code. 
To do this we will examine the objects database in some depth. Let's have a look at it in it's 
current state: 

```bash
$ cd objects

$ ls 
#output> info pack

```

Take note that the only thing we see are two folders: **info** and **pack**. If you want you can
cd into them and list out their contents to see that they are empty, or you can take 
my word for it. 


```bash
#we'll move back up to the top directory
$ cd ../..

#create a file named index.html with a title tag
$ echo '<title>Hello World</title>' > index.html

#open the file with nano to check that out text is indeed there
$ nano index.html

#let's look at the .git object database and see if anything is there
$ ls .git/objects

```

We see that nothing has happened inside of the objects database, so git hasn't recorded anything 
yet. So is git doing anything?

```bash
#let's check out what if anything git has been up to
$ git status

```

###Constructing the blob object

We can see that git is telling us we have untracked files, and then suggests that we do a 
git add <file> to add the un-tracked files. Okay, but what will this actually do?

Adding a file using **git add <filename>** will placed the file in the Staging Area, which is
signaling to git that you intend to include this file in your next commit. 
Let's go ahead and add this index.html into the Staging Area. Also remember that the staging area
is often referred to as the git index.

> Use one of the following 
```bash

#add the contents of the current directory
$ git add .

#add everything   
$ git add -A

#only add a specific file
$ git add index.html
```

Okay so now we have added a file to the staging area, let's re-examine the objects folder and
see what we have. 

```bash
$ ls .git/objects
#output:> ee info pack
```

What is going on with the ee buisness? Is that a directory? Indeed it is, but how did we get 
here? The following command will give us the contents of the ee folder

```bash
#find everything in the .git/objects dir that is a file
$ find .git/objects -type f

#output> .git/objects/ee/cfbadb489544a18756b590b360aa86f3f56135
```

The letters *ee* are the first two characters of the string *eecfbadb489544a18756b590b360aa86f3f56135*
which is an SHA1 hash of the file contents. So git creates a directory using the first two
characters, then there is a file inside that directory which is named using a hash constructed
from the file contents. Ok, shit just got real, and you're no doubt thinking...'wtf is an SHA1
hash of the file contents?'...don't worry...it's just hard core computer science coming at you, take
a deep breath and everything will be okay. 

What were going to do is actually pop open this hash so we can make a bit better sense out of
it. Let's have a look at what that nastiness actually is:

```bash
$ git cat-file -p eecfbadb489544a18756b590b360aa86f3f56135

#output> <title>Hello World</title>
```

So we can see that this thing sitting inside of the objects folder is a blob of our actual
content. It's essentially saved our source code in the objects folder as this blob thing. You can think of a blob as just
stuff: it's the source code inside a file, an image, whatever...it's **your content** that you have created. 

This is a good time to **really emphasize** the point that git uses a naming scheme that 
can be summed up as **content addressable**. Git does not internally refer to files by their names at
all, but rather by these hashes it constructs, and the **key point** is that these hashes are constructed from
the **content** of a file. Now, does this mean that two files with exactly the same content will
compute exactly the same hash? Yes it does, in fact it's a mathematical certainty they will compute to the
same hash, giving them the same name in git.  I'm going to drop this topic though like it's hot because we
don't have time to go into hashing in detail right now.

So in sum what we have done by doing a 'git add' is: record the file content as a blob, compute its name using a
hash of the contents, and place the blob object into a folder beginning with the first two characters in the hash. 
I know it's been rough, but we just went through the actual operations git performs when adding a file
to the staging area. 

We're ready to take the next step: **committing** a file. This will create our first **version**. 

###Constructing the commit object

We have a file in our staging area with some content we have created. In order to create a git saved version
of the file in it's current state, we need to make a commit. 


```bash
$ git commit -m "Add index.html"

#you can run this command to see that the working directory is clean
$ git status
```

So after committing, there are no other files that have been modified(we have only one file and we
just committed the changes to it), so our working directory is clean. Our staging area is empty because
any files that were in the staging area at the time of the commit have been recorded as part of the 
commit object, which we'll now examine. 

```bash

#let's search again
$ find .git/objects -type f

#output> .git/objects/6c/79d613efa30d0a5ad017e276c4d5c5d26d0279
#        .git/objects/c7/c5b146498ff436ae6cae8aa94041ae49641694
#        .git/objects/ee/cfbadb489544a18756b590b360aa86f3f56135

```

WHAT?? Now there are three objects? It's okay, we know what one is already so just look at it like we're 
1/3 of the way done. Guess what's next........yep....we're going to **git cat-file** the $#!T out of these objects
to peek in and figure out what they are exactly. 

Let's start at the top

```bash
$ git cat-file -p 6c79d613efa30d0a5ad017e276c4d5c5d26d0279

#output> tree c7c5b146498ff436ae6cae8aa94041ae49641694
#        author Grant Roy <grant.m.roy@gmail.com> 1430178039 -0700
#        committer Grant Roy <grant.m.roy@gmail.com> 1430178039 -0700
#         
#        Add index.html
```

Can you guess which one of the git object types this one is?

It's a commit message right? We have the tree, which is a record of the directory stucture, we have the
author name and committer name, which in this case are the same(author is who created the file), and
at the very end we have the commit message. 

Notice that the tree has a hash next to it, and if you look closely you'll see right away that this hash
matches the hash of the second object listing in our git objects folder. It wouldn't be a stretch at all
for us to guess what that second object is now: it's a tree object. 

```bash
$ git cat-file -p c7c5b146498ff436ae6cae8aa94041ae49641694

#output> 100644 blob eecfbadb489544a18756b590b360aa86f3f56135	index.html
```

So we see that the tree object has stored within it a reference to the blob of index.html. So we can see how
the chain of links leads us from the commit object, to the tree object, and then to the actual blob object that
has our content. These links are what make up the mechanics of git.

How about we try looking at the git log now and see what it says

```bash
#take a look at the log of commits
$ git log

#output> commit 6c79d613efa30d0a5ad017e276c4d5c5d26d0279
#        Author: Grant Roy <grant.m.roy@gmail.com>
#        Date:   Mon Apr 27 16:40:39 2015 -0700
#         
#        Add index.html
```

It looks like we know exactly how git came up with this log information and exactly where it came from.   


Let's see what our HEAD is referring to: 

```bash

$ cat .git/HEAD

#output> ref: refs/heads/master
```
What is this showing us exactly? There is a file inside the directory .git/refs/heads named **master**. We can take
a peek inside this file and see what it holds.

```bash
#look inside the master file
$ nano .git/refs/heads/master


#output> 6c79d613efa30d0a5ad017e276c4d5c5d26d0279 
```

So what do we have here? It's the hash of our commit object. So HEAD is behaving as we would expect, it's a marker
essentially that is pointing to our most recent commit object. We say 'pointing', and all that really means is that
master has some way of figuring out which commit object it is associated with, and the way git manages this is by storing
the commit objects hash inside of the master file. 



##A more complicated working directory

We'll now set up a new folder that we'll call 'stuff', and inside of stuff let's create a file called
'file.txt'. We'll throw some quick text into our file and then add the changes to the staging area so we can
peek into the object database and figure out what's going on. 

```bash
$ mkdir stuff

$ echo '<script>alert("hello world")</script>' > stuff/page.html

$ git add -A

$ find .git/objects -type f

#output> .git/objects/56/ba4b273b9196b02ce182d1b10188970ba30369
#        .git/objects/6c/79d613efa30d0a5ad017e276c4d5c5d26d0279
#        .git/objects/c7/c5b146498ff436ae6cae8aa94041ae49641694
#        .git/objects/ee/cfbadb489544a18756b590b360aa86f3f56135

#we see that adding the file to git has created a blob just like before, and
#the commit object and tree object have not been created yet

#check that this new object is indeed the blob of page.html
$ git cat-file -p 56ba4b273b9196b02ce182d1b10188970ba30369

#output> <script>alert("hello world")</script>
```

What we would now like to do is commit this new file and see what has happened.

```bash
$ git commit -m "Add page.html"

$ find .git/objects -type f 

#output> .git/objects/3c/a04623ab564102cf6606950ca3602b362f5644
#        .git/objects/56/ba4b273b9196b02ce182d1b10188970ba30369
#        .git/objects/6c/79d613efa30d0a5ad017e276c4d5c5d26d0279
#        .git/objects/94/dd5ea8c5a25dc7a240291c6a03ac22b839fcaa
#        .git/objects/c7/c5b146498ff436ae6cae8aa94041ae49641694
#        .git/objects/ee/cfbadb489544a18756b590b360aa86f3f56135
#        .git/objects/f4/97807fd9216e9999864124cdedcebea979cd66
```

We can see that git has created three additional files this time, what did it do? It has to record
the entire state of our project at the time of the actual commit, in other words, if we tell it to, git
has to be able to perfectly reconstruct our project as it currently is, or at any point
in the past. 

So let's take a look at these files and figure out what git has done. The first one is our commit message, so 
we know exactly what that is....all good. 

```bash
$ git cat-file -p 3ca04623ab564102cf6606950ca3602b362f5644

#output> tree f497807fd9216e9999864124cdedcebea979cd66
#        parent 6c79d613efa30d0a5ad017e276c4d5c5d26d0279
#        author Grant Roy <grant.m.roy@gmail.com> 1430245683 -0700
#        committer Grant Roy <grant.m.roy@gmail.com> 1430245683 -0700
#         
#        Add page.html
```

What we can note however is that it now has an entry for **parent**. This is important, it allows git to keep
a chain of history so that we can move backwards and forwards through time if we need to. This commit has a tree
object that we'll inspect next

So let's now have a look at that tree to see what it contains. 

```bash
$ git cat-file -p f497807fd9216e9999864124cdedcebea979cd66

#output> 100644 blob eecfbadb489544a18756b590b360aa86f3f56135	index.html
#        040000 tree 94dd5ea8c5a25dc7a240291c6a03ac22b839fcaa	stuff
```

We see that this a tree representing the top level in our folder, it has a reference to a blob which is
the contents of index.html. 

The important thing to understand about this tree is that it has a reference to **another tree**. This is
important as git creates trees to represent folders that you create in your project. We can then follow this
chain to the other tree and then inspect the blob attached to that tree. 


Looking at the child tree we can verify that it is representing our stuff folder, and we can see how
this whole hierarchy is represented. 

```bash
$ git cat-file -p 94dd5ea8c5a25dc7a240291c6a03ac22b839fcaa

#output> 100644 blob 56ba4b273b9196b02ce182d1b10188970ba30369	page.html
```

Here is a visual of where git is at in terms of these connections

![git-hierarchy](http://s3.amazonaws.com/grant-wdi/git-basics/git-hierarchy.gif)


The whole central idea is that there are these objects that git keeps track of, and the sort of top
level book keeper in all of it is the commit object. The commit object has connections to trees that represent the structure
of your directory at that point in time. The tree objects then have connections to the blobs which represent the
actual files contained in the folder they represent. 
