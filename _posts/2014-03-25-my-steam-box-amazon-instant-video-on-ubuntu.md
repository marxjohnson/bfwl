---
id: 204
title: 'My Steam Box &#8211; Amazon Instant Video on Ubuntu'
date: 2014-03-25T11:00:16+00:00
author: mark
layout: post
guid: https://barrenfrozenwasteland.com/?p=204
permalink: /2014/03/my-steam-box-amazon-instant-video-on-ubuntu/
categories:
  - HTPC
---
While my Steam Box is running XBMC for media playback, there&#8217;s one service I use which XBMC can&#8217;t provide: Amazon Instant Video (formerly Lovefilm Instant).

AIV can be streamed through various apps or through Silverlight in a web browser. However, none of these options are supported on desktop Linux.  Of course, with the Ubuntu ecosystem being what it is, &#8220;not supported&#8221; is far from &#8220;impossible&#8221;.

The solution to the problem comes in the form of [Pipelight](https://launchpad.net/pipelight) &#8211; a browser plugin for Firefox which runs Silverlight and other Windows-only browser plugins in a special version of [Wine](http://winehq.org).  This clever little hack (installed from a PPA through apt-get) allows you to watch Silverlight content within Firefox for Linux! It&#8217;s worth noting that I use the pipelight-multi package which allows you to set up Pipelight and Pipelight&#8217;s WINE installation for specific users, rather than for every user on the system.<aside style="border:red solid 1px; padding: 1em; margin-bottom: 1em;">There&#8217;s a potential gotcha when enabling the Silverlight plugin. You&#8217;ll be prompted to accept the Silverlight licence, then given optional instructions on creating a licence file called 

<tt>wine-wininet-installer.accept-license</tt>. **Don&#8217;t do this** as it stops Amazon Instant Video from working. If you&#8217;re upgrading from an old version of Pipelight this file may be been created automatically, and will need manually deleting. [See this Launchpad Q&A question for more details.](https://answers.launchpad.net/pipelight/+question/244853 "Amazon Instant Video service Error 1002")</aside> 

With this problem solved, I wanted to make the user experience of accessing AIV a bit smoother.  To acheive this, I created a small autorun script which runs when the lovefilm user logs in to openbox.  The script contains the following commands:

`firefox<br />
switch-to-xbmc &<br />
pkill -u lovefilm<br />
` 

This means that firefox launches on login. Firefox is configured to open AIV when it starts, and to run in fullscreen mode, has all but a few toolbar buttons removed and consolidated into a single toolbar. When we&#8217;re done watching, we close firefox, which lets switch-to-xbmc execute to return us to the XBMC menu, then pkill kills any other processes belonging to the lovefilm user, logging it out.

The final issue with using AIV on a TV is that the web page is noisy and not designed to be used on a big screen on the other side of the room. To fix this I&#8217;ve written [a GreaseMonkey userscript](https://github.com/marxjohnson/LFMC) (very much a work-in-progress) to remove a lot of the Amazon bumf and reformat the page to make it work better on a large screen.

My next and final post in this series will look at how I&#8217;ve got Steam and some associated utilities set up.
