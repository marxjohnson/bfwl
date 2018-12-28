---
id: 46
title: 'What I learnt at Dev8D 2012 - Day 3'
date: 2012-02-17T15:53:16+00:00
author: mark
layout: post
permalink: /2012/02/what-i-learnt-at-dev8d-2012-day-3/
---
### Day 3

I decided that I&#8217;d spend the final day trying to write some code, so I began trying to implement the Google Docs Viewer idea from Day 1.

I started off trying to write a Moodle Filter plugin to change file download links into iframes. However it quickly became apparent that the link I wanted to change wasn&#8217;t actually processed by the filter, so I had to try something else.

I moved on to modifying the Moodle File Resource plugin &#8211; it currently attempts to embed PDF files if it can, so I used that as a starting point. However due to the previous 2 days of information being stuffed in my head, I didn&#8217;t do things in any logical order and ended up in a bit of a mess. I really need to start again with the following approach:
  
* Create a new table in Moodle&#8217;s database to hold single-use tokens against a file&#8217;s path
  
* Create a copy of Moodle&#8217;s file.php that allows you to request a file without logging in, but only if requested with a token that&#8217;s stored against that file&#8217;s path.
  
* Get this page working so that Google Docs Viewer can request the test file with the test token and display it.
  
* Change the code that attempts to embed PDFs to embed any file type supported by Google Docs Reader
  
* Get the embed code working for the test file with the test token
  
* Implement code to generate and store a single-use token when the resource page is requested, pass it to Google via the embed code and delete it after the file is requested once. Also implement a cron job to clean up expired tokens if they aren&#8217;t used.

I finished off the afternoon by having a chat with Ian Tasker from SchoolsICT (who also sponsored the event), and James and Nigel from ULCC who produce the Moodle ILP plugin. The discussion we had gave me a great insight into what their system is capable of, and I&#8217;m looking forward to get to grips with writing some plugins for it myself.
