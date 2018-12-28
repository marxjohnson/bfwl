---
id: 202
title: 'My Steam Box - Media Playback'
date: 2014-03-24T11:00:50+00:00
author: mark
layout: post
guid: https://barrenfrozenwasteland.com/?p=202
permalink: /2014/03/my-steam-box-media-playback/
categories:
  - HTPC
---
For media playback on my Steam Box/HTPC I&#8217;m (mostly) using [XBMC](http://xbmc.org).  This lets me play videos from my server and watch DVDs from my DVD drive.  On top of this basic functionality I&#8217;ve installed the BBC iPlayer and YouTube plugins to allow me to stream content from the web.

## TV

I mentioned in my hardware post that I&#8217;d purchased a DVB-T2 USB dongle to allow me to watch HD TV.  For the past several years, the standard solution for TV/PVR functionality on Linux has been [MythTV](http://www.mythtv.org/).  However, these days XBMC also has a good deal of this functionality in its PVR plugins, as long as you can get a backend service installed to operate the tuner.

One of these options is, of course, MythTV Backend. However, after struggling through the &#8220;Setup Wizard&#8221; being asked every question under the sun and still not getting it working, I gave up and found [TVHeadEnd](http://wiki.xbmc.org/index.php?title=Tvheadend_PVR).  This gives you a simple web interface which detects your hardware and scans for channels with ease.  Adding the TVHeadEnd PVR plugin to XBMC gave me live TV and PVR functionality with minimum fuss.

## Control

XBMC gives you several remote control options, including a web interface and a service for other remote control apps to connect to.  I have a remote control widget on my android phone which works well enough, but I&#8217;ve found it easiest just to use the regular keys on my Rii Touch keyboard.

## Theme

I&#8217;m not a particular fan of XBMC&#8217;s default _Confluence_ theme, in particular it&#8217;s menu which only shows the selected option.  After looking around and finding [this guide on Lifehacker](http://lifehacker.com/5908682/how-to-make-xbmc-easier-to-use-especially-for-non-geeks), I switched to the _Transparency_ theme which has a much better menu, and could be customised to have just the bits I need.

## Switching Users

I mentioned in my last post that I&#8217;d written scripts using dm-tool to switch between users.  To run these from XBMC I installed the [Advanced Launcher](http://forum.xbmc.org/showthread.php?tid=85724) addon. This addon lets you create launchers for any executable within XBMC, and add them to the main menu in themes that support it.  Using this method I created launchers for the switch-to-steam and switch-to-lovefilm scripts on the main menu.
