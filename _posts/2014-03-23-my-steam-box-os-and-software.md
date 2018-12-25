---
id: 199
title: 'My Steam Box &#8211; OS and Software'
date: 2014-03-23T11:00:27+00:00
author: mark
layout: post
guid: http://barrenfrozenwasteland.com/?p=199
permalink: /2014/03/my-steam-box-os-and-software/
categories:
  - HTPC
---
In my last post I went over the hardware I used for my new Steam Box/HTPC all-in-one living room PC.  In this post I&#8217;m going to go over how I&#8217;ve got the OS set up and touch on the software I&#8217;m running to provide me with gaming and media playing functions.  I&#8217;ll then go over the details of each function in separate posts.

To start with, I did a vanilla Ubuntu 12.04 LTS desktop install.  I&#8217;d considered going for SteamOS, but to be honest, Big Picture Mode isn&#8217;t quite there yet, and I know where I am when it comes to getting extra packages and cool hacks for Ubuntu.  One part of SteamOS I was really impressed with is how they&#8217;ve set up Steam and the desktop session on separate profiles letting you can switch easily between the two functions, so I chose to emulate that on my set up.

The 3 main functions I wanted were media playback, a basic desktop (mainly for administrative tasks) and a desktop session to run Steam.

For administrative functions, I created a user called &#8220;mark&#8221; during installation (as I usually do).  Mark is a sudoer, with a standard 12.04 Unity desktop.

For media playback, I installed XBMC.  I created an unprivileged user called &#8220;xbmc&#8221;, set to auto-login to the XBMC standalone session with no password, making XBMC the initial interface on boot.

For gaming, I created a second unprivileged user called &#8220;steam&#8221;, set to log in to a Unity desktop session with no password.  Steam is set to auto run on log in, and display the Library tab in Grid view (showing the artwork for each game like Big Picture Mode does).

There&#8217;s also a third unprivileged user called &#8220;lovefilm&#8221; which logs in to an openbox session with no password, but I&#8217;ll talk about that more in its own post.

To switch to each user, I&#8217;ve created a scripts called &#8220;switch-to-xbmc&#8221; etc. which use the [dm-tool](http://manpages.ubuntu.com/manpages/trusty/en/man1/dm-tool.1.html) utility.  These can be called from the appropriate interface (a menu item in XBMC, a non-Steam application launcher in Steam) to quickly switch to between users.

In the next post I&#8217;ll talk about how I&#8217;ve set up XBMC for media playback in a bit more detail.