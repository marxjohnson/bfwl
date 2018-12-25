---
id: 295
title: Blu-Ray playback with Kodi
date: 2016-11-27T22:27:18+00:00
author: mark
layout: post
guid: http://barrenfrozenwasteland.com/?p=295
permalink: /2016/11/blu-ray-playback-with-kodi/
categories:
  - HTPC
---
I recently upgraded my HTPC&#8217;s optical drive to Blu-Ray (primarily for The Force Awakens). The DRM on Blu-Rays is problematic when you&#8217;ve built your own player &#8211; you can&#8217;t just stick the disc in and hit the play button like you can with DVDs. I&#8217;m using [MakeMKV](http://www.makemkv.com/)<sup><a href="#makemkvfootnote">1</a></sup> which lets you rip Blu-Rays for encoding with Handbrake, but I don&#8217;t really have the storage to be ripping Blu-Rays on an ongoing basis. Fortunately, MakeMKV also allows a disc to be streamed over UPnP, which Kodi supports natively.

To make this a bit more usable, I&#8217;m using a script to launch the stream with MakeMKV&#8217;s CLI interface, wait until the UPnP share is ready, then switch Kodi to the share ready to select the title from the disc.



I&#8217;m using the Advanced Launcher addon for Kodi to create a launcher for disc_trigger.sh. I&#8217;ve created a Favourite for the launcher and added it to the main menu. Now the process is:

  * Insert disc
  * Activate launcher
  * Wait until it&#8217;s ready
  * Select title and watch

  1. <a name="makemkvfootnote"></a>MakeMKV is proprietary, but free-as-in-beer as it&#8217;s in &#8220;perpetual beta&#8221;. You do however need to keep updating the beta registration code, so I paid for a license as I want this to be &#8220;setup and forget&#8221;.