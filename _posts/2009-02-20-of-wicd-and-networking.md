---
id: 4
title: Of Wicd and networking
date: 2009-02-20T18:17:22+00:00
author: mark
layout: post
permalink: /2009/02/of-wicd-and-networking/
---
I&#8217;ve got an Asus EeePC 900 sporting a funky purple design. As with all my computers, it&#8217;s running the Linux operating system. Up until about a month ago it was running Ubuntu eee, an excellent netbook specialised version of the [Ubuntu](http://ubuntu.com) Linux distribution. When the first major update came for Ubuntu eee, they decided a name change was in order (primarily because their name was a composite of 2 different companies&#8217; trade marks), and became [Easy Peasy](http://en.wikipedia.org/wiki/Ubuntu_eee). A quick reinstall later (the Easy Peasy forum was awash with upgrade problems so I decided to save the hassle) I was running the new OS, based on Ubuntu Intrepid. However, as I began using it, a problem arose: I couldn&#8217;t connect to WPA networks. I use WPA at home and at uni, so obviously this was a problem, and I knew my wireless card was working as I could connect to my girlfriend&#8217;s WEP network fine.

A poke around the [Easy Peasy](http://www.ubuntu-eee.com/wiki/index.php5?title=Main_Page) wiki led me to the discovery of [Wicd](http://wicd.net), an alternative to the NetworkManager tool that&#8217;s currently standard with most Linux distros. I thought I&#8217;d give it a go.
  
Installation was pretty painless. I plugged in to the network (I was at home), added the Wicd APT repository [as instructed](http://www.ubuntu-eee.com/wiki/index.php5?title=How_to_use_Wicd_instead_of_Network_Manager), and installed with no problems. It even removed NetworkManager for me. The only weirdness here was the fact that I had to add the APT repository for Ubuntu Hardy, not Intrepid, but all seemed to work OK.
  
A quick restart later and some fiddling with configuration (the Wiki gave me some incorrect info that slowed my boot time right down by always trying to configure the wired interface, even if it&#8217;s not plugged in), I had a nicely set up Wicd installation with a pretty tray applet, much like that of NetworkManager. What&#8217;s more, it connected to my WPA network with no trouble.

Next I decided to try and install it on my desktop running KDE 4. Again, installation was a simple case of adding the APT repo and giving the order. The real test here was to see how it handled bridging &#8211; I have the wired connection bridged to allow [VirtualBox](http://www.virtualbox.org/) to connect directly to the network. Since I set up the bridge, NetworkManager has always seen the wired connection as &#8220;unmanaged&#8221; and left it to it&#8217;s own devices, giving me no feedback as to whether it&#8217;s connected or not. Wicd didn&#8217;t make a lot of sense of the connection at first, but a few seconds in the preferences menu allowed me to change the default wired interface from eth0 to br0, and would you believe it, it all works. Auto connection, bridging, visual feedback, and wireless (although the desktop is a little to close to the radiator for a decent signal). Full marks for Wicd!

PS: I&#8217;ve now added a feed of my Twitter posts on the right as my &#8220;Little Blog&#8221;, with this being the &#8220;Big Blog&#8221;. Enjoy.
