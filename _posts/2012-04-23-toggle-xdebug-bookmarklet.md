---
id: 49
title: Toggle XDebug Bookmarklet
date: 2012-04-23T11:05:37+00:00
author: mark
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
