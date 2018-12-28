---
id: 44
title: 'What I learnt at Dev8D 2012 &#8211; Day 1'
date: 2012-02-17T14:17:30+00:00
author: mark
layout: post
permalink: /2012/02/what-i-learnt-at-dev8d-2012-day-1/
---
[Dev8D](http://dev8d.org) 2012 has come and gone this week. The event&#8217;s so intense that I tend to forget each day what I did the previous day, so this post will try and order my thoughts a bit and make sure I remember what happened.

### Day 1

In Alex Bilbie&#8217;s packed HTML5 talk, I finally understood that you really can start using HTML5 now. [html5shiv](https://code.google.com/p/html5shiv/) adds support for new block elements like <section> and <article> to old versions of IE, which means you can semantically mark up a page&#8217;s structure without having to resort to a million <div> elements.

In the Unix and Vim surgery I learnt that using lines selected visually in Vim can be reselected by typing <tt>gv</tt> which I&#8217;ll be using a lot.

I was planning to enter the Jorum API challenge. Jorum is a repository for open educational resources, and I thought it would be a cool idea to try and implement a Moodle repository plugin to pull in resources from Jorum. However, the Jorum API needs some serious re-engineering to make it useful &#8211; it just returns too much data. You need to be able to search for keywords within a collection, request details of an item within the results, and request individual files within that item. Currently, trying to do this gives you all sorts of data pertaining to an object&#8217;s parents, children and siblings, to the extent that you can&#8217;t even work out what needs to be thrown away to end up with just what you wanted. Until a better API is available, I won&#8217;t be looking at it any further.

During the Afternoon I had a chat with the Moodle developers from the University of Sussex. They showed me [Google Docs Viewer](https://googlesystem.blogspot.com/2015/02/google-docs-viewer-page-no-longer.html) which lets you embed any PDF or MS Office file in a web page, even without a Google Docs account. This would have seriously cool applications if used in conjunction with Moodle resources, as it could be used to allow a lot of files that currently require office software to view to be viewable right in the Moodle page. There&#8217;s a bit of work to do making this work securely, but I think it&#8217;s feasible.
