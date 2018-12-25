---
id: 145
title: Dual-booting Android and Ubuntu Touch on the Nexus 7
date: 2013-03-17T10:55:03+00:00
author: mark
layout: post
guid: http://barrenfrozenwasteland.com/?p=145
permalink: /2013/03/dual-booting-android-and-ubuntu-touch-on-the-nexus-7/
---
Since I wrote [a silly app in QML](http://barrenfrozenwasteland.com/2013/01/jonoboard-now-with-100-more-ubuntu/) I&#8217;ve been keen to have a play around with Ubuntu&#8217;s developer preview for tablets (variously referred to as &#8220;Ubuntu Touch&#8221; and &#8220;phablet&#8221; (phone/tablet)). I have both a Nexus 7 tablet and a Nexus 4 phone which the images support. The trouble is, the images are designed to be run on &#8220;spare devices&#8221; &#8211; there&#8217;s no support for backing up and restoring an existing Android ROM. I&#8217;m not the kind of person who has a spare tablet or smartphone lying around, I use mine a lot, so I&#8217;ve been shying away from trying it out.

**Note: The current Ubuntu Touch images are definitely a _Developer Preview_. Not much actually works other than the web browser, it&#8217;s just to give you a feel for the interface and let you try out apps you&#8217;re writing on a touch screen. If you&#8217;re hoping this blog post will tell you how to dual-boot 2 usable systems, I&#8217;m afraid you&#8217;ll be disappointed. Maybe in 6 months.**

When we were discussing the phablet images on the [Ubuntu Podcast](http://podcast.ubuntu-uk.org), Alan Pope mentioned that there were people in the community who were playing around with getting devices to dual-boot. This seemed like a reasonable solution &#8211; I could boot into Ubuntu when I wanted to play around, then back in to Android when I actually needed to use my tablet.

It turns out the solution is called [MultiROM](http://forum.xda-developers.com/showthread.php?t=2011403). Using a modified version of the TWRP custom recovery system<sup><a href="#1">[1]</a></sup>, you first flash a modified kernel into the stock Android ROM then flash the MultiROM interface that sits in the boot process before the init system is loaded and allows you to select a ROM to boot. The custom recovery system then has an extra option allowing you to flash alternative ROMs to your internal storage which can be selected through this interface, which can be selected in the MultiROM interface (it&#8217;s just a touch-screen menu).

I followed this [How to install MultiROM video](http://www.youtube.com/watch?v=w-FRRzkhFiw) to install the custom recovery, MultiROM and modify the stock Android kernel<sup><a href="#2">[2]</a></sup>. I then followed this [Ubuntu Touch Preview](http://forum.xda-developers.com/showpost.php?p=38300214&postcount=104) guide to download the Ubuntu Touch image and flash it to the device&#8217;s internal storage alongside the stock Android ROM. After this, you can choose between the _Internal_ (Android) and _quantal-preinstalled_ (Ubuntu) ROMs in the MultiROM menu when the device boots.

It looks like it&#8217;s possible to add other ROMs too &#8211; there&#8217;s an option for an Ubuntu Desktop image and CyanogenMod should work, but support for other ROMs is dependant on a MultiROM-compatible kernel being available.


<a id="1"></a>

[1] The installation of which requires unlocking your bootloader, which will factory reset your Android system and possibly void your warranty, so backup all your data first. <del datetime="2013-08-01T11:58:39+00:00">I used <a href="http://forum.xda-developers.com/showthread.php?t=1809195">Google Nexus 7 Toolkit</a> to do my backup/unlock/restore. It&#8217;s Windows only but I had a hard time finding a Linux-based tool that&#8217;s as easy to use for doing the backups (I assume adb does it, but I didnt dig around enough).</del> [Holo Backup](http://omegavesko.github.io/SimpleADBBackup/) is a good cross-platform tool for doing backup/restore, and [unlock instructions](https://wiki.ubuntu.com/Touch/Install#Step_2_-_Device_unlock) can be found on the Ubuntu Wiki

<a id="2"></a> 

[2] Note that this video assumes your bootloader is already unlocked (see [1]). It also assumes you&#8217;re using Windows, but I just rebooted to the bootloader manually (Power Off, then hold Power Button+Volume Down) and used fastboot from the [Nexus 7 Installer PPA](https://wiki.ubuntu.com/Nexus7/Installation) on Ubuntu with no problem.