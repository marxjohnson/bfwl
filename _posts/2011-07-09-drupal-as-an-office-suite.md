---
id: 35
title: Drupal as an office suite
date: 2011-07-09T15:44:06+00:00
author: mark
layout: post
permalink: /2011/07/drupal-as-an-office-suite/
---
So right now, ownCloud looks like it&#8217;s going to provide a platform for running Google Apps-style web apps (presumably with access to the files you have stored in ownCloud), but it doesn&#8217;t provide it yet. My next task, then, is to find a system that can provide me with &#8220;office productivity&#8221; functionality on my Microserver. There&#8217;s a few things that this functionality could include, but I&#8217;m looking for the &#8220;big three&#8221; functions of documents (primarily simple stuff for note-taking), spreadsheets and presentations. There&#8217;s a few solutions out there that aim to provide an open source could office suite, including Feng and Zimbra, but neither provide all three functions that I&#8217;m after, and both provide a lot of extra functionality (such as email) that I don&#8217;t need.

When I found a solution that gave me the three functions and was installable on my own server, I have to say it surprised me a bit &#8211; it was Drupal. The thing with Drupal is that while it&#8217;s a &#8220;content management system&#8221; (CMS), it&#8217;s extremely extensible and configurable, and can be made to handle pretty much any content you want in the way you want. Here are the steps I took to turn Drupal into my cloud office suite:

  1. I did a standard install of Drupal 6.2
  2. I disabled anonymous access, so even viewing the front page requires a login
  3. I installed [Sheetnode](https://drupal.org/project/sheetnode). This is a Drupal module that&#8217;s based on [SocialCalc](http://peapodcast.com/sgi/olpc/), a Javascript-based spreadsheet system created by the co-author of VisiCalc, the original spreadsheet software. The SocialCalc code needs to be downloaded from GitHub seperately from the Sheetnode module. Once this is set up, you can create new Drupal nodes that contain a spreadsheet.
  4. I installed the [Content Construction Kit](https://drupal.org/project/cck) (CCK) and [s5 Presentational Player](https://drupal.org/project/s5) module. This allows you to view specially marked-up pages using Eric Myer&#8217;s [Simple Standards-based Slideshow System](http://s5project.org/) (s5), which has been my preferred presentation format for a while. Getting it working required a fair bit of tweaking, and again some of the code (specifically the s5 engine) needs to be downloaded separately from the module. Luckily the author had a pretty good video explaining how to  set it all up although it appears to be based on a slightly older version of Drupal so I still had to tinker a bit.
  5. As part of the s5 setup, I installed the [Markdown](https://drupal.org/project/markdown) filter. This lets you really easily create formatted text with wiki-like syntax that&#8217;s human readable and can be rendered as HTML. Only a subset of HTML tags are supported, but it&#8217;s fine for about 90% of the documents I&#8217;ll write, and I&#8217;m happy enough to code tags for anything else I need.
  6. Now the main functions were taken care of, all that remained was to make it easier to get to my documents. I started this by enabling the Search module, meaning all my documents would be indexed and searchable.
  7. I added 3 Primary Links which appear at the top of every page. One to create a new document (or presentation, since they use the same page), one to create a new spreadsheet, and one to view the list of all my documents. I also set the site&#8217;s homepage to show the list of all my documents, which gives it a nice Google Docs feel.
  8. I enabled Tags to allow my to quickly categorise all my documents as I go
  9. For Mobile access, I enabled the [Mobile Theme](https://drupal.org/project/mobile_theme) module with [Browscap](https://drupal.org/project/browscap) to automatically switch the theme for mobile browsers. The theme I found to work best was [Nokia Mobile](https://drupal.org/project/nokia_mobile), with the following tweaks to the styles.css improve the editing form when viewed on my phone (an HTC Legend): 
    <pre>#edit-body {height: 20em;}
.collapsible.collapsed {display:none;}</pre>

This solution may not be spot on for everyone, although I see it as fairly optimal for the way I work. Alternatives (for the less text-oriented) might include using the s5 Book module included in the Presentational Player package, and using a [WYSIWYG](https://drupal.org/project/wysiwyg) editor instead of Markdown.

One other things that is missing is real-time collaborative editing. There have been several projects started to implement these features in Drupal but not a lot of progress seems to have been made. The one promising-looking module is [Etherpad Integration](https://drupal.org/project/etherpad), although it appears to pull Etherpads from an existing installation rather than having the functionality in Drupal. Probably still worth a look if that&#8217;s what you&#8217;re after, especially if it can be made to work in conjunction with the new [Node.js implementation of Etherpad](https://github.com/Pita/etherpad-lite).
