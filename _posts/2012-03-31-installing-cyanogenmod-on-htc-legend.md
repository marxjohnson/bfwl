---
id: 48
title: Installing CyanogenMod on HTC Legend
date: 2012-03-31T10:06:02+00:00
author: mark
layout: post
permalink: /2012/03/installing-cyanogenmod-on-htc-legend/
---
For various reasons, I decided that it was time to do away with the stock firmware on my HTC Legend and install CyanogenMod.
  
The CyanogenMod wiki details the process for rooting the phone, installing a custom recovery image, an installing CM, but I found the following process much simpler:

NB: You will need a Windows PC.

  * Sign up for an account at http://htcdev.com/bootloader and log in
  * Select &#8220;HTC Legend*&#8221; from the &#8211;Select your device&#8211; menu
  * Follow the process to unlock your bootloader &#8211; As the warnings say, this may void your warranty, and attract extra repair costs if your phone breaks.
  * When complete, download the [custom recovery image](http://download.clockworkmod.com/recoveries/recovery-clockwork-5.0.2.0-legend.img)
  * Place the image in C:\Android and rename it to recovery.img
  * Install the custom recovery image with the command `fastboot flash recovery recovery.img`. You can now boot into Recovery by selecting &#8220;RECOVERY&#8221; from the bootloader menu.
  * Install CyanogenMod using the Method via Recovery

Apparrently some phones have issues with this method as the kernel needs to be flashed seperately from CM, but I didn&#8217;t find this necessary with the Legend.

**Update 12/1/13**: There&#8217;s [a developer on the XDA-Developers forum](http://forum.xda-developers.com/showthread.php?t=1905588) who&#8217;s creating unoffical ports of newer CyanogenMod releases based on Android 4.x. I&#8217;ve just installed his CM 10 ROM using the same method as 7 and it runs great.
