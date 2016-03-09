##Changing state, changing history

Let's start off simply, we'll setup git to track a file we create in a folder, and then see how we can change work with files in 
different states to suit our needs. The following commands should look familiar to you. 

```bash
$ mkdir git-versions
$ cd git-versions
$ git init
$ echo "hello world" >> file.txt
$ git add -A
$ git commit -m "create file.txt"
```

As we have seen before, we can examine both the HEAD reference(which will be pointed at the commit object we just made), and all of
the objects created in the *.git/objects* folder. 

What's important to realize though is that there is one *version* of our project that git has sealed in memory, which is a commit. So what happens now
as we modify it? 

```bash
$ echo "hello again world" >> file.txt
```

We have now modified the file since we made the commit...how aware of this is git?...what does it know exactly? Try the *git diff* command. 

```bash
$ git diff

#output> diff --git a/file.txt b/file.txt
#        index 3b18e51..79328f6 100644
#        --- a/file.txt
#        +++ b/file.txt
#        @@ -1 +1,2 @@
#         hello world
#        +hello again world
```

This appears to show us that there is indeed a difference between our file and what we had in the last commit, is this exactly what git is 
showing us? 

```bash
$ git add -A

$ git diff

#output> 
```

Hmmm......we haven't made a commit, yet adding the file to the Index/Staging has removed any visible diff?...what exactly is git diff showing us? A vanilla
*git diff* will show us the differences between the **working directory** and the **staging area**. When the file has not been added to the staging area you'll see
the changes made to that file from the last commit.
 
To illustrate the point, lets add file.txt to the staging area *and then make further changes to it.*

```
#git status will show there are changes to file.txt
$ git status

#we'll add it to the index
$ git add -A

#make further changes to file.txt 
$ echo "further modifications" >> file.txt

#check the diff again
$ git diff

#output> diff --git a/file.txt b/file.txt
#        index 3b18e51..79328f6 100644
#        --- a/file.txt
#        +++ b/file.txt
#        @@ -1 +1,2 @@
#         hello world
#        +hello again world
```

So how we really intend to use *git diff* is by using it to compare what we are about to commit..**the staging area**, with our working directory, to see if there 
are any differences in files that we actually want to include in the next commit. 

Git is flexible though and will let you be more specific if with regard to what you want to compare. If you are really interested in seeing
how the working directory is different from the last commit, you can use the following:

```bash
#we add the changes to the index
#so git diff shows nothing
$ git add -A

#we pass the last commit(HEAD), as the thing to diff against
$ git diff HEAD
 
```

Now that allowed us to see all the changes that have been made to the file since the last commit, which can be very useful. 
 
We can also examine the difference between the index/staging area and the last commit:
 
```bash
#show difference between the index and last commit
$ git diff --cached
 
```

##Discarding and time travel 

Two git operations can behave differently depending on whether they are being used on a file, or on a commit. 
> Reset
> Checkout

Let's fist take a look at what reset can help us to do.

###Changes with *reset* and *checkout* on a file

Previously we had added changes we made to *file.txt* to the staging area. By doing so we had informed git that we wanted the changes we had
made to *file.txt* to be recorded in the next commit. However what happens if we maybe we decide our changes are finished, and that we have
more we would like to to do before committing? 

In this case we can remove the file from the staging area, but the changes we have made thus far will be preserved in the working directory

```bash
#remove from staging area
$ git reset file.txt

#verify that file.txt shows up in red, indicating
#that there are changes, but that the file is not in
#the staging area ready to go in the next commit
$ git status
```

So at the end of the day, remember that *git reset filename <a file name>*, by default, will not erase changes in the working directory. 

*git checkout* is not so delicate, and you should be very careful with it. What if we add the changes to *file.txt* back in to the index and
use git checkout?

```bash
#we add the changes to file.txt to the index
$ git add file.txt

#git checkout will effectively erase all of our changes
$ git checkout HEAD file.txt

```

##Commit level operations with *reset* and *checkout*

Interestingly, at the file level, checkout is destructive and reset is not(by default), however at the commit level, things are much different:

> reset is destructive whereas checkout is not 

When you use checkout at the commit level, you are essentially just moving your head to that particular commit. So for instance you might have a branch
you have created, and want to switch to that branch from another. Assume that you have previously created a branch called *feature-branch*, but are now
on the master. You can change branches using the checkout command.

```bash
#this will show you that master is the current branch
$ cat .git/HEAD
 
#switch to feature-branch, assuming you have created it 
#previously
$ git checkout feature-branch 

#show that your HEAD is now pointing at the new branch
$ cat .git/HEAD

#output> ref: refs/heads/feature-branch
```

> Here's how you can create a branch and check it out at the same time

```bash
$ git checkout -b new-branch
```

You can use checkout also to look at previous commits, if you want to see the state of your project at a certain point in time. This can be dangerous though
as it will put the HEAD in a detached state. 


```bash
#look at the project 2 commits ago
$ git checkout HEAD~2

```

**git reset**, when used at the commit level, will rewrite the commit history. 
 
Let's make another commit so that we have two total commits 
 
```bash

$ echo "more text" >> file.txt
$ git add -A
$ git commit -m "second commit"
```

One of the best things to familiarize yourself with is the *git log* and *git reflog*. These two commands are the helpers that will let you see what commits
have been made, and also the history of where the HEAD pointer has been. 

> So we can use git log to see a list of previous commits:

```bash
#show full commit details
$ git log

#show a nice one line summary
$ git log --oneline

#output> f23acd8 second commit
#        5126562 first commit
```

I prefer --oneline as it gives a nice short summary of the commits that have been made. The log is helpful when you want to figure out where a revision 
has happened and also which commit you want to maybe revert or reset. 

It's also very useful to know the positions of the commits relative to where HEAD is currently pointing, as this gives us an easy way to refer to the commits 
as we shall see. 

> Show the reflog:

```bash 
$ git reflog

#output> f23acd8 HEAD@{0}: commit: second commit
#        5126562 HEAD@{1}: commit (initial): first commit
```

So when we do something like *git reset HEAD*, *HEAD* is considered to be HEAD{0}, which just means that it is pointing at the last or most recent commit.
If we do something like *git reset HEAD~1*, then that is pointing to the commit before the most recent, in our case the first commit. So think of it like
HEAD~1 means HEAD - 1, it goes backwards in time.  

At this point, our HEAD is now pointing at our second commit, so what happens if we reset to the previous commit? If we do a *git reset <COMMIT>*, then git
will move back the project to match the state at the commit you pass it. 

> Reset the project back to the state of the first commit
 
```bash
#git will reset in --mixed mode, not wiping the working dir
$ git reset HEAD~1

$ git log --oneline

#output> 5126562 first commit
```

What's **very important** to realize, as the above git log shows, is that there is now no record at all of the second commit, it has been completely erased from
git's memory. This can be a **very bad** thing to do on a public branch, and is the reason it is **strongly** advised to not use reset for **commit** scoped
operations on a **public** branch. 

The use of **git reset** at the commit level should be used to discard commits **locally**, or on a branch you're working on that's not public. It's your tool for
correcting the embarrassing things you create with code on your own computer. 

So let's go ahead and re-do the changes we just undid with *reset*, and let's now see how *revert* would handle the same task. 

> Make the second commit again

```bash
$ echo "second commit" >> file.txt
$ git add -A
$ git commit -m "second commit"

#confirm we're back to where we started
$ git log --oneline

#output> 1b41042 second commit
#        5126562 first commit

```

With git revert instead of passing the commit that we would like to reset back to, we pass it a reference to a commit we would like to get rid of. Git revert
will undo the changes made in that particular commit. The way that *revert* undoes the changes is by actually creating a new commit. This has the effect
of preserving the commit history. This is why we say that *revert* is non destructive, it leaves the actual commits alone and instead creates a new
commit. 

When you run the *git revert <COMMIT>* command, you will be placed in the *vim* text editor in the bash console. This is because git is prompting you to 
enter a commit message for the new commit it will create as part of the revert process. Simply type *:q* to quit as the defualt message should suffice. You
can always edit the commit message as needed. 

```bash

$ git revert HEAD

$ git log --oneline

#output> e85f4e0 Revert "second commit"
#        1b41042 second commit
#        5126562 first commit

```

As we can see above from the output, we now have a third commit, whereas reset wiped out the second and we had only the first. In public branches we prefer
to always have a complete history, and this is why *reset* is to be avoided. 


##Divergents

The most powerful workflow in git, and really a central core idea, is the divergent or branching workflow. As a developer it's really important to have the strongest
grasp of branching possible, never being unsure of what affect working with them will have on your code base.
 
So when you do a *git init* you will start on the *master* branch. If you want, you can confirm this now with *cat .git/HEAD* and you'll see that your refs
are pointed at master. Remember this is essentially a file sitting in the .git folder that has an entry which is a hash corresponding to a commit object, and that
commit object is where your head is currently pointing. 

When we create a branch we really intend to do a unit of work, it may be a feature or a bug-fix. Don't get in the habit of doing branches by team or person
name, this often leads to problems when things don't fit into those containers, which will inevitably happen. 

> We can create a branch, or create and checkout a branch at the same time

```bash
#create a new branch
$ git branch fix-login

#checkout the branch
$ git checkout fix-login

#combine the above two commands into one
$ git checkout -b fix-login

```

Now there are two branches in our project, *master* and *fix-login*. Just to have a complete mental picture of what's going to happen, let's stress the point
that right now, *master* and *fix-login* currently, at the time of *fix-login's* initial checkout, share the same commit. This will not be the case as 
we move forward and make changes to files on the *fix-login* branch. 


So let's pretend that we want to 'fix a problem' in the file.txt source file that is causing a bug. Let's add the text 'code that fixes bug' to the file and
call it a day. We'll commit our changes so they are sealed. 

```bash

$ echo "code that fixes bug" >> file.txt

$ git add -A 

$ git commit -m "fix login bug"

#only look at the commits on this branch that are
#different from master, assuming your branch was created
#off of master
$ git cherry -v master

#output> + 1d5b1f35936dde76519cc176066c12354c07cc31 fix login bug

```

We can see from the above log that we have one commit that is different than master. So what happens if we switch back to master?...what should we expect?
I think this is what makes new developers nervous when using git. Thoughts like...'where are my changes?'...'did I overwrite something?'  A couple key points

* You made a snapshot of what the files in the git index looked like on the *fix-login* branch.
* This snapshot consists of: the commit object, the tree object or objects, and the blobs of the actual file content. 
* The master, where you left it, is still based off of the same commit object as when you left it, with the same tree, pointing to the same blobs. 
 
So what do you expect the working directory to be when you switch back to *master* from the *fix-login* branch? Let's find out. 
  
  
```bash 
#we switch back to master
$ git checkout master 

#open up file and see what state it's in 
$ nano file.txt 

#nano file.txt> first commit
```

The thing that can be unnerving with git is *how fast it really is*. Does it really update all my files to match the state they were in on that branch...
that quickly? The answer is yes...git was developed with speed as a primary goal of the software. A bit of history...

> the same guy that invented Linux invented 
git as a tool for managing the codebase for ongoing work on the linux kernel. Both of these are written in the C language...which is as fast as you can tell
a computer to go without going down into processor specific languages. To sum it up...it's the language that allows you to write the fastest code while still maintaing
some semblance of sanity...so git is fast...very fast. 

So we switched branches and we have seen that git has prepared everything nicely for us just as we left it. By thinking about the git operations in terms of objects,
it's easy for us to reason about what happened with our branching workflow. Again, let's go over step by step what happened:

* We created a new branch named *fix-login*, which is a branch off of *master*
* Because *feature-branch* is a branch off master, initially it shares a base commit with master. 
* The best way to think of that is the point of forking is a commit...this is the base from which the branches begin to diverge. 
* The next commit we make on *fix-login* is, like every other commit, capable of recreating our entire project directory as it looks at that point
in time. 
* When we make that next commit in *fix-login*, HEAD now moves forward on *fix-login* by one step(there's one extra commit on *fix-login* that
is not on the *master* branch)
* When we switch back to master, what effectively happens is our HEAD pointer is updated to point at the last commit on record for *master*, and our working directory
is updated to reflect what was captured in that commit. 
* It's this fact above that clues us in as to why we find our files in the state we left them in when we switched to *fix-login*
* This also means that if we switch now into *fix-login* form master, we will find our working directory in the state of our last commit on *fix-login*, which
is ahead by one. 

##The Inverse Fork

Our branches have diverged, and so at some point again they must merge. This is the point where most git related troubles occur. The problem is usually what's
know as a *merge-conflict*. But first before we deal with that, let's look at a standard clean merge, which the current state of our branches will allow. 

Our status:

* **Branch Count:** 2 
* **master:** our main production branch, containing only *good code*
* **fix-login:** a branch off of master created to fix a bug, this branch is ahead by one commit

Our goal:
> We want to bring the changes we made in *fix-login* into the master branch because they are now ready.

To accomplish this we are going to do a **git merge**. When we do a git merge, we make sure that **we are in the branch we want to merge changes into**. So in this
case we want to merge changes from *fix-login* into *master*. For this to happen we need to be sitting in the *master* branch. 

```bash
#switch into branch that will receive changes
$ git checkout master

#specify which branch you want to pull in changes from
$ git merge fix-login

#we can look at file.txt to see that in master, the changes from
#the fix-login branch are now present
$ nano file.txt
```

Everything went smoothly, git is a breeze??.......uh.........until it isn't:(
 
As mentioned above, everything is good until we have a conflict while merging that git can't resolve. What will happen is you'll be working in *fix-login* on 
*file.txt*, meanwhile someone has changed *file.txt* on the master branch. Now *file.txt* has been changed in two separate branches, git won't know which version
to go with, this is the infamous *merge conflict*. Let's see it in action. 

>The fix-login side of things: 

```bash

$ git checkout fix-login

$ echo "a change in fix-login" >> file.txt

$ git commit -a -m "a change to file.txt in fix-login"


```

>The master side of things: 

```bash
$ git checkout master

$ echo "a change in master" >> file.txt

$ git commit -a -m "a change to file.txt in master"

```

>And now for the merging 

```bash
$ git merge fix-login

#output> Auto-merging file.txt
#        CONFLICT (content): Merge conflict in file.txt
#        Automatic merge failed; fix conflicts and then commit the result.
```

What we have done is create a merge conflict, which is usually caused by the same file being changed in two different branches. What git has done is actually
lay down some conflict markers in the offending file that mark the file as *conflicted*. By removing the conflict markers and making a commit, we can move forward.
This process is known as *resolving a merge conflict*. 

> Here's what the file looks like

```bash
$ nano file.txt

#output> first commit
#         code that fixes bug
#         <<<<<<< HEAD
#         a change in master
#         =======
#         a change in fix-login
#         >>>>>>> fix-login
```

As we can see git has fenced off the area around where the two separate changes were made, it's not sure which version of the file you want to keep. Let's say 
that we want to keep both what was added in *master* and in *fix-login*. 

> We change file.txt to look like this:

```vim

first commit
code that fixes bug
a change in master
a change in fix-login

```

We have removed all of the git conflict markers, and now we are able to commit the result, which is now a successful merge. 

```bash
$ git commit -m "merge fix-login into master"

```
