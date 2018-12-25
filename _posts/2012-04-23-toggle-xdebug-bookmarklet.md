---
id: 49
title: Toggle XDebug Bookmarklet
date: 2012-04-23T11:05:37+00:00
author: mark
excerpt: |
  If you code PHP, you probably use <a href="http://www.xdebug.org/">XDebug</a> for debugging your code.  Some IDEs deal with the gubbins required for starting and stopping the debugger for you, but other debugging clients (like <a href="http://www.vim.org/scripts/script.php?script_id=1929">DBGp Client for Vim</a>) require you to manually append XDEBUG_SESSION_START=1 to the end of your page's query string before you try to connect the debugger.
  
  Inspired by <a href="http://irmantas.com/2011/04/13/simple-bookmarklet-to-enable-xdebug-profiler/">this blog post</a>, I wrote a bookmarklet to toggle XDebug on or off at the click of a button, by adding XDEBUG_SESSION_START=1 if it's not already in the URL, or toggling between XDEBUG_SESSION_START=1 and XDEBUG_SESSION_STOP=1 if it is.
  
  To add it to your browser, drag the following link to your Bookmarks toolbar
  <a href='javascript:(function(){var a=window.location.href;if(a.indexOf("XDEBUG_SESSION_START")!=-1){window.location.href=a.replace("START","STOP")}else if(a.indexOf("XDEBUG_SESSION_STOP")!=-1){window.location.href=a.replace("STOP","START")}else{if(a.indexOf("?")!=-1){window.location.href=a+"&XDEBUG_SESSION_START=1"}else{window.location.href=a+"?XDEBUG_SESSION_START=1"}}})()'>Toggle XDebug</a>
  
  The un-minified code is shown below:
  <pre><code>javascript: (function() {
  var href=window.location.href;
  if (href.indexOf("XDEBUG_SESSION_START") != -1) {
  window.location.href = href.replace("START", "STOP")
  } else if (href.indexOf("XDEBUG_SESSION_STOP") != -1) {
  window.location.href = href.replace("STOP", 'START")
  } else {
  if (href.indexOf("?") != -1) {
  window.location.href = href+"&XDEBUG_SESSION_START=1"
  } else {
  window.location.href = href+"?XDEBUG_SESSION_START=1"
  }
  }
  })()</code></pre>
layout: post
permalink: /2012/04/toggle-xdebug-bookmarklet/
---
If you code PHP, you probably use [XDebug](http://www.xdebug.org/) for debugging your code. Some IDEs deal with the gubbins required for starting and stopping the debugger for you, but other debugging clients (like [DBGp Client for Vim](http://www.vim.org/scripts/script.php?script_id=1929)) require you to manually append XDEBUG\_SESSION\_START=1 to the end of your page&#8217;s query string before you try to connect the debugger.

Inspired by [this blog post](http://irmantas.com/2011/04/13/simple-bookmarklet-to-enable-xdebug-profiler/), I wrote a bookmarklet to toggle XDebug on or off at the click of a button, by adding XDEBUG\_SESSION\_START=1 if it&#8217;s not already in the URL, or toggling between XDEBUG\_SESSION\_START=1 and XDEBUG\_SESSION\_STOP=1 if it is.

To add it to your browser, drag the following link to your Bookmarks toolbar
  
[Toggle XDebug](javascript:(function(){var a=window.location.href;if(a.indexOf("XDEBUG_SESSION_START")!=-1){window.location.href=a.replace("START","STOP")}else if(a.indexOf("XDEBUG_SESSION_STOP")!=-1){window.location.href=a.replace("STOP","START")}else{if(a.indexOf("?")!=-1){window.location.href=a+"&XDEBUG_SESSION_START=1"}else{window.location.href=a+"?XDEBUG_SESSION_START=1"}}})())

The un-minified code is shown below:

    javascript: (function() {
        var href=window.location.href;
        if (href.indexOf("XDEBUG_SESSION_START") != -1) {
            window.location.href = href.replace("START", "STOP")
        } else if (href.indexOf("XDEBUG_SESSION_STOP") != -1) {
            window.location.href = href.replace("STOP", 'START")
        } else {
            if (href.indexOf("?") != -1) {
               window.location.href = href+"&XDEBUG_SESSION_START=1"
            } else {
             window.location.href = href+"?XDEBUG_SESSION_START=1"
            }
        }
    })()