---
id: 15
title: Playing with Kubuntu Netbook Edition
date: 2009-11-28T15:27:18+00:00
author: mark
layout: post
permalink: /2009/11/playing-with-kubuntu-netbook-edition/
---
Being the KDE fanboy that I am I was delighted to see that Kubuntu 9.10 was to include a release of Kubuntu Netbook Edition (KNE), with the new KDE Plasma Netbook desktop.
  
After several failed install attempts (the image on the HTTP download mirror I used appears to be corrupt) I managed to get it installed today thanks to bit torrent. Here&#8217;s what I think!

Firstly, lets establish some points of reference. The previous OS I had on my eeePC was EasyPeasy 1.1, based on Ubuntu Netbook Remix (UNR) 8.10, running a few KDE apps. I&#8217;ve always used KDE on my desktop, and have run Kubuntu since its first release.

### Booting

KNE booted in under 10 seconds. That&#8217;s about a quarter of the time taken by EasyPeasy 1.1 on the same machine, and a few seconds faster than the full-blown Kubuntu install on my 2 GHz desktop. The latter difference is probably down to the eeePC&#8217;s solid-state drive.
  
However, logging in was where it fell down. KDE is a rather heavy desktop with lots of components and config to load. The inital log in took about 30 seconds, with subsequent logins taking about as long as the machine takes to boot. It&#8217;s not a problem in the grand scheme of things, but compared to EasyPeasy, it does feel sluggish.

### Appearance

The &#8220;desktop&#8221; itself looks slick and shiny, benefiting from KDE 4 and all of it&#8217;s eye candy. The window manager even manages to provide some compositing effects. When you log in, the splash screen fades smoothly into the desktop, and switching between applications is done via the &#8220;Present Windows&#8221; feature (like Mac OSX&#8217;s exposé). Considering integrated graphics and the 900MHz processor in my eeePC, this really impressive and all the effects are delivered flawlessly.

### Interface

This is the real paradigm shift in KNE. The interface introduces two new Plasma &#8220;Activities&#8221; to KDE: Search and Locate Containment, and Newspaper. The newspaper is basically a container for 2 columns of plasmoids, delivering online content from various feeds and streams (such as RSS, Weather, comic strips and so on) all in one page. The Search and Locate Containment is like the full-screen application launcher found in UNR. Application categories are displayed as a row of large icons, which take you to a set of icons for the applications in that category. There&#8217;s also a container for &#8220;favourite&#8221; applications, which show all the time. The feature here that&#8217;s supposed to differentiate it from UNR is the search feature, but at the moment it just falls short of the mark.
  
At the far right of the panel (located at the top of the screen) is the Search plasmoid. Clicking this (or pressing the assigned shortcut) summons a search box. Typing in here will search through your applications and files and display the results in the Search and Locate containment, in place of the application category icons. This is great &#8211; I use KRunner all the time on my desktop in place of the menu, which works just like this. The problem is that KRunner is better, and it&#8217;s present on KNE too. Here are the problems with the Search at the moment, which KRunner doesn&#8217;t suffer from:

  * There&#8217;s no shortcut key assigned by default
  * When the search box is summoned, it doesn&#8217;t automatically get focus
  * When you&#8217;ve found what you&#8217;re looking for, you still have to click the icon &#8211; there&#8217;s no keyboard interface for selecting the one you want

The other &#8220;elephant in the room&#8221; is ever-present in KDE, and that&#8217;s KWallet&#8217;s lack of PAM integration. On EasyPeasy, my WPA password was unlocked when I logged in, and Network Manger could connect straight away. However if I want to connect with KNE I get prompted for my password to unlock KWallet. I can put up with this on my desktop because when I log in to my desktop the time it takes for me to re-enter my password in negligible compared to the time it&#8217;ll be on for. However, with my netbook (and the new super-fast boot time) I&#8217;m far more likely to turn it off and on to check my emails, look something up, take some notes at a conference, and the dual-password requirement would start to become a hassle. 

### Conclusions

Now, it would be grossly unfair of me to pass judgement on KDE&#8217;s netbook offering based on this. KNE&#8217;s download page and installer both clearly state that this is a technology preview release, and that the first production release will be with Ubuntu Lucid (10.04 LTS), after KDE 4.4 is released. Looking at it as a technology preview I&#8217;m excited. I never imagined when I bought my eeePC that a machine as low spec as that could have such a good-looking interface running so smoothly. The Newspaper view needs a bit of spit and polish, but reflects and accommodates the way I use my netbook very well. The Application launcher needs some work, though. If it doesn&#8217;t get as easy-to-use as KRunner, I&#8217;d remove it and use that instead.
  
For now, I&#8217;m to switch to UNR 9.10. We&#8217;ll see how it goes once Lucid is released!
