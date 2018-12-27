---
id: 175
title: SteamOS first impressions
date: 2013-12-14T14:56:53+00:00
author: mark
layout: post
guid: https://barrenfrozenwasteland.com/?p=175
permalink: /2013/12/steamos-first-impressions/
---
Being the casual gamer and general geek that I am, I&#8217;m currently planning to build a living room PC, primarily for gaming. My current conundrum is, will it be running [Ubuntu](http://ubuntu.com) with Steam installed, or will it be running [SteamOS](http://store.steampowered.com/livingroom/SteamOS/)? This week [Valve released SteamOS for download](http://steamcommunity.com/groups/steamuniverse/discussions/1/648814395741989999/), so I popped it on a spare hard drive to take my first steps in answering this question. Here&#8217;s how I got on&#8230;

The current version of the Debian-based SteamOS is only recommended for &#8220;intrepid Linux hackers&#8221;, mainly due to the install process, and they&#8217;re not wrong. One option uses Clonezilla to copy a pre-built system image onto your hard drive, which while simple enough requires a spare 1TB hard drive laying around, unless you want to completely overwrite your current system. The second option is to use the installer which is based on Debian&#8217;s own installer, followed by some manual post-install steps. The installer gives you the option to do an &#8220;Automatic&#8221; install (use whatever hard drive it finds and default settings) or &#8220;Expert&#8221; (letting you choose custom configuration options). I went with Automatic, although I unplugged my main hard drive first as I didn&#8217;t want my Ubuntu install getting overwritten.

Once the initial install completes, you need to log in as the &#8220;steam&#8221; user (an unprivileged account that just runs Steam and your games) to get Steam set up, pre-configured to launch in [Big Picture mode](http://store.steampowered.com/bigpicture). You then need to switch to the &#8220;desktop&#8221; user (a regular user capable of running commands as root) to run a script which installs drivers, does some configuration and then reboots to Clonezilla, which will capture an image of your configured system to a recovery partition.

This process all went reasonably smoothly for me, except that the Steam icon in the Applications menu didn&#8217;t seem to do anything. I had to poke around in a terminal to find the Steam binary and run it manually.

Once this is all done, your system boots directly into Steam in Big Picture Mode, asks you for some configuration and lets you log in to your Steam account. From here it&#8217;s basically your standard Steam experience. I plugged in my Gamecube controller via USB and set up a mapping in Steam&#8217;s utility, and was able to download an play games with it no problem.

Far from being a locked-down appliance, SteamOS has the option to allow you to access the regular Gnome Shell desktop which is stock with Debian Wheezy. This option can be enabled in Steam&#8217;s preferences then accessed via the &#8220;Exit&#8221; menu. The way this actually works is by having 2 user sessions, one for Steam and one for the desktop, with a button for each to switch to the other. Once in the desktop, you can do whatever you&#8217;d normally do on a Linux system, with the caveat that APT is configured by default to use Steam&#8217;s own package repository, not Debian&#8217;s.

One slight niggle I had was the lack of display settings provided by Steam. I was able to access the normal Display utility on the desktop user, but these settings didn&#8217;t transfer over to the steam user. This meant that Steam ran in mirrored-screen mode on my dual-head system, and I&#8217;m not sure what resolution it was using. That said, in a more typical situation it&#8217;ll be plugged into a single TV, and PC games tend to have their own resolution settings, so this will be less of a problem.

All in all, SteamOS gives a nice experience once set up, but if you&#8217;re not an OS geek it&#8217;s probably best to wait until you can buy a box with it already set up for you. I&#8217;m no closer to deciding what my living room PC will be running, but from my first impressions SteamOS is a definite contender.
