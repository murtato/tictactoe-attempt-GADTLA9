##Adding files to your global .gitignore

```bash

$ nano ~/.gitignore

$ git config --global core.excludesfile '~/.gitignore'

```

> .gitignore

```bash
.DS_Store?
*.DS_Store

```

##git script


> Create a new repository on Github named 'git-practice' 

> Set up a local repository on your machine 

> Create 2 files src.txt and file.txt 

> Enter the text "code inside src.txt" into src.txt and "code inside file.txt" into file.txt

> Enter the necessary commands to create a snapshot of the file contents at this point in time. 

> Create an isolated area named 'update-src' where you can work off of the master branch. Make sure that you are setup to begin work
in this isolated area. 

> Add the text "further code added" to src.txt, stage src.txt

> Now un-stage src.txt, because it was not ready to be included in the next snapshot yet. 

> Add the text "correct code added" to src.txt, snapshot src.txt 

> Switch back to the master branch

> Add the text  "more hopefully working code added" to src.txt, snapshot src.txt

> Merge the branch you created earlier into master now. 

> Likely the attempt to merge has caused a merge conflict, resolve the merge conflict, keeping the changes in *update-src*
 and *master*. 
 
> Destroy the *update-src* branch 
 
> Create a new branch called 'undoing' and switch into that branch

> Add the text "bad code" into src.txt, make a snapshot.

> Undo the commit you just made while preserving the commit history. You can view the history with the command 'git-log'

> Enter some more text "more bad code" into src.txt, and again snapshot. 

> Examine the difference between your working directory and the staging area using a git command

> Using the same command, examine the difference between your working directory and the last commit

> This time, undo the changes just made to src.txt while destroying the commit history

> Since were on a roll..let's put more bad code into src.txt: "even more bad code"

> Simply wipe out the changes you just made to the file using a git command. 

> Push master to the Github repo 'git-practice' you created in the first step 

> Create a new branch called 'several-mistakes', switch into the new branch

> Make two edits, and two commits, first adding the text "a mistake", and then "another mistake" to file.txt. Wipe out
these two commits so that HEAD is now where it began at the point the branch was created. 

> Destroy the branch "several-mistakes", create a new one named 'good-code', switch to this new branch, use one command to do it. 

> Add the text "terse, efficient,tested,readable,maintainable code" into src.txt

> Push this branch up to the remote 'git-practice' repository. Issue a pull request

> Merge the branch by pulling it into master, then pushing master back up to the remote 
