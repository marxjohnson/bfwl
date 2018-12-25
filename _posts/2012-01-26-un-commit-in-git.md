---
id: 43
title: Un-commit in Git
date: 2012-01-26T11:54:44+00:00
author: mark
excerpt: |
  I just accidentally made a commit in git that I didn't want - I'd made several changes at once and wanted to commit them separately. Instead I did one big commit so I wanted to get back to a state where I had the uncommitted changes.  The methods of undoing a commit (<tt>git reset</tt> and <tt>git revert</tt>) dont cut it here, as they just take you back to the previous commit, and lose the changes you made. Here's what I came up with:
  
  <pre>
  git show > ~/uncommit.patch # Take the commit I just made and store the differences in a patch
  git reset --hard HEAD^ # Reset to the previous commit
  patch -p1 < ~/uncommit.patch # Re-apply the changes
  </pre>
  
  If you've got some changes that aren't committed yet that you still want to keep, you'll want to do make a second patch from the output of <tt>git diff</tt> before resetting.
layout: post
permalink: /2012/01/un-commit-in-git/
---
I just accidentally made a commit in git that I didn&#8217;t want &#8211; I&#8217;d made several changes at once and wanted to commit them separately. Instead I did one big commit so I wanted to get back to a state where I had the uncommitted changes. The methods of undoing a commit (<tt>git reset</tt> and <tt>git revert</tt>) dont cut it here, as they just take you back to the previous commit, and lose the changes you made. Here&#8217;s what I came up with:

<pre>git show > ~/uncommit.patch # Take the commit I just made and store the differences in a patch
git reset --hard HEAD^ # Reset to the previous commit
patch -p1 &lt; ~/uncommit.patch # Re-apply the changes
</pre>

If you've got some changes that aren't committed yet that you still want to keep, you'll want to do make a second patch from the output of <tt>git diff</tt> before resetting.