
###Anatomy of a Repository

It's important to have a good understanding of the git repository structure, so let's look at what is created after running the initialization command inside of a folder. 

```bash
#create and initialize a git repo in the current directory
$ git init
```

---

This will create a hidden .git folder inside the current directory with the following structure

![inline](http://s3.amazonaws.com/grant-wdi/git-basics/git-rep-struct.png )

---

For now, let's concern ourselves with the **objects** sub-directory, which is where the entire history of all our source files is stored, along with the **actual** source files themselves. 

![inline](http://s3.amazonaws.com/grant-wdi/git-basics/git-snapshots.png )

---
There are 3  main types of objects stored in the objects directory:

>Commit objects
>Tree objects
>Blob objects


---
####The Commit Object

This is sort of the high level book keeping object. It contains the committer's name, email, and any commit comment. But most importantly it contains a reference to the **tree** object. 

---
####The Tree Object

A git tree object is basically a **map** of the structure of the filesystem at the time of the 
commit. 

---

####The Blob Object

This is the **content one**. The blob object is the actual content of
your repo...your actual source files.  

---

> Here is a visual of the structure

![inline](http://s3.amazonaws.com/grant-wdi/git-basics/git-objects.png)

---

##A Walkthrough

Let's start by creating an empty repo inside of a folder somewhere on our computer

```bash
#these steps will create a new folder, and then a git repo inside that folder
$ mkdir git-journey

$ cd git-journey

$ git init
 
```

---
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
---
We want to figure out how git works and stores our code, and most importantly we want to understand
how git stores different versions of our code. 
To do this we will examine the objects database in some depth. Let's have a look at it in it's 
current state: 

```bash
$ cd objects

$ ls 
#output> info pack

```
---
Take note that the only thing we see are two folders: **info** and **pack**. If you want you can cd into them and list out their contents to see that they are empty, or you can take 
my word for it. 

---

```bash
$ cd ../..
$ echo '<title>Hello World</title>' > index.html
$ nano index.html
$ ls .git/objects

```
---
We see that nothing has happened inside of the objects database, so git hasn't recorded anything 
yet. So is git doing anything?

```bash
#let's check out what if anything git has been up to
$ git status

```
---
###Constructing the blob object


```bash
#add everything   
$ git add -A

```
---

Okay so now we have added a file to the staging area, let's re-examine the objects folder and
see what we have. 

```bash
$ ls .git/objects
#output:> ee info pack
```

---

After adding the file to git, it is now tracked in the .git/objects directory

```bash
#find everything in the .git/objects dir that is a file
$ find .git/objects -type f

#output> .git/objects/ee/cfbadb489544a18756b590b360aa86f3f56135
```

---

>Visualizing

 Heads point to **commit objects** , and the actual content of the files contained within
the commits are stored in **blob objects**.

Each commit has a parent commit that was the commit before it, this is how git tracks diffs in the filesystem. 

---

> Here's another look where we see the commit object represented in name by it's hash, which is
how it actually is in git. 

![inline](http://s3.amazonaws.com/grant-wdi/git-basics/git-commits.jpeg )

---

Those long names are hashes, more on that later. 

What we want to do is see the contents of these files. 

```bash
$ git cat-file -p eecfbadb489544a18756b590b360aa86f3f56135

#output> <title>Hello World</title>
```

---
###Constructing the commit object

We have a file in our staging area we need to commit. 

```bash
$ git commit -m "Add index.html"

#you can run this command to see that the working directory is clean
$ git status
```
---

Let's see how many files we have now

```bash

#let's search again
$ find .git/objects -type f

#output> .git/objects/6c/79d613efa30d0a5ad017e276c4d5c5d26d0279
#        .git/objects/c7/c5b146498ff436ae6cae8aa94041ae49641694
#        .git/objects/ee/cfbadb489544a18756b590b360aa86f3f56135

```
---


Let's start at the top

```bash
#make sure to be in the *objects* directory
$ git cat-file -p 6c79d613efa30d0a5ad017e276c4d5c5d26d0279

#output> tree c7c5b146498ff436ae6cae8aa94041ae49641694
#        author Grant Roy <grant.m.roy@gmail.com> 1430178039 -0700
#        committer Grant Roy <grant.m.roy@gmail.com> 1430178039 -0700
#         
#        Add index.html
```

---

##Git Reset and Git Checkout

##Reset

```bash
#go back to the state things were in 
#at a previous commit 
$ git reset HEAD~1 
 
```
---

```bash
#basically unstage everything, does not erase changes in the working directory
$ git reset --mixed HEAD

#same as above, mixed mode is the default
$ git reset HEAD

#will wipe everything out, including changes in the working directory
$ git reset --hard HEAD

```
---

###Checkout

When checkout is used at the commit level it has the affect of switching branches. Remember that the HEAD pointer is moved to 
the specified commit.
 
This can be useful for looking at an old version of your project

```bash
#checkout a branch that was created for a bugfix
$ git checkout fix-login
```
---

The following will put you in a detached HEAD state because there is no branch reference to the commit you check out. Don't add commits
here because you can't get back to them. You must create a branch there to start creating commits. 

```bash

$ git checkout HEAD~1

```
