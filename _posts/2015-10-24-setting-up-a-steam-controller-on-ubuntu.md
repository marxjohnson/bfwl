---
id: 270
title: Setting up a Steam Controller on Ubuntu
date: 2015-10-24T15:11:11+00:00
author: mark
layout: post
guid: http://barrenfrozenwasteland.com/?p=270
permalink: /2015/10/setting-up-a-steam-controller-on-ubuntu/
categories:
  - HTPC
---
I recently received my pre-ordered Steam Controller, which I&#8217;ve be itching to use with my home-built HTPC/Steam Machine.  I do all my gaming (and everything else) on Ubuntu, and discovered at that the time the pre-releases were shipped, there was a bit of tweaking to do to get the controller working.  Thanks go to [this Ask Ubuntu question](http://askubuntu.com/questions/686214/how-do-i-get-a-steam-controller-working?sgp=2) and [this Steam Community thread](http://steamcommunity.com/groups/steamuniverse/discussions/2/490123197954740680/).  If you are using Ubuntu 15.10 or later, steps 1-3 shouldn&#8217;t be necessary, and hopefully a fix will be in place by the time the controllers are on general sale.

  1. Before you plug in your controller, edit (or create) file /lib/udev/rules.d/99-steam-controller-perms.rules.  This already existed on my system.  Edit to to contain at least these lines (it may also contain others): 
    <pre>SUBSYSTEM=="usb", ATTRS{idVendor}=="28de", MODE="0666" 

KERNEL=="uinput", MODE="0660", GROUP="yourusernamehere", OPTIONS+="static_node=uinput"
</pre>
    
    Make sure you change &#8220;yourusernamehere&#8221; to the user you run steam as, or if there are several, the name of a group containing them all.  This will ensure that the controller is correctly recognised and can emulate a gamepad.</li> 
    
      * Run `sudo apt-get install python3-autopilot`.  This will install some packages which will add you to a group with write access to /dev/uinput.  This is necessary for the controller to work properly.
      * Reboot
      * Plug in your steam controller dongle.
      * Press the Steam button. It should beep and light up (if not, check the batteries are installed).
      * Launch Steam.  You should see a notification that your controller is detected.
      * Launch Big Picture Mode (if you don&#8217;t, Steam will tell you to).
      * Ensure the Steam overlay is enabled in Settings -> In-game.  If not, your controller configurations will simply not work.
      * Select a game, pick a controller configuration, and play!</ol>