---
id: 6
title: "Don't thank me, thank Super GRUB Disk!"
date: 2009-03-16T14:46:06+00:00
author: mark
layout: post
permalink: /2009/03/dont-thank-me-thank-super-grub-disk/
---
The last thing I needed when turning my desktop back on this afternoon was GRUB merrily announcing it had experienced &#8220;Error 2&#8221;. This left my system unbootable, at a crucial time when I really really need it. Fortunately for me, I had my netbook handy, so I whipped it out and Googled the error. This told me that GRUB can&#8217;t find my hard disk. This was interesting since it&#8217;s the disk it&#8217;s on that it&#8217;s booting from, so I took comfort in the fact that the drive at least was still there.

The solution I found resided on the ever-useful[Ubuntu forums](http://ubuntuforums.org), advising me to edit the GRUB menu to change the disk it&#8217;s trying to boot from. Fine, if I had GRUB set up to display a menu. Unfortunately, so such luck. Lucky for me, some months ago I had the foresight to download a burn a handy utility called [Super Grub Disk](http://www.supergrubdisk.org/). Essentially, it&#8217;s a CD (or hard drive partition) that boots into GRUB, with a load of pre-configured menu options. These do anything from trying to boot your system as best it can to re-installing GRUB to your Master Boot Record (very handy if you&#8217;ve just installed Windows to dual boot with Linux). It really is the best system recovery tool since sliced [Knoppix](http://knoppix.org). In particular, I chose the option to boot Linux manually, which gave me the same error as I&#8217;d seen before, then dropped me out at the boot menu for my own GRUB installation. This let me change the disk I was trying to boot from, et voilà, one working system!
