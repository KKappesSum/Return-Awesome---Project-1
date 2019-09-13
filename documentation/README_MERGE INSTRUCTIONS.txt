We have been doing our merges incorrectly. 
Don't try to merge remote branches in gitKraken. We tested extensively and it doesn't work too well.

Submitting code to GitHub:
 - Checkout your local branch, push that branch to Github.
 - Go to Github and do a pull request: in the pull request options, make sure you compare the master and your branch
 - check the pull request: 
 - if we don't need to discuss changes, and if there are no conflicts shown, then merge the branches on Github.
 - then pull master so you have the most recent version of master locally.

 If someone else merges the remote master while you are still working locally (i.e., your local master branch is now out of date):
 - Go to gitKraken and do a pull on your master branch
 - merge your local master with your local name branch (either on command line or in gitKraken)
 - resolve any merge conflicts from updated master and your named branch
 - now your local master and named branch should be at the same commit, continue working until ready to submit code