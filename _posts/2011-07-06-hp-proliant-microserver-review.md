---
id: 33
title: HP Proliant Microserver review
date: 2011-07-06T16:04:21+00:00
author: mark
layout: post
permalink: /2011/07/hp-proliant-microserver-review/
---
I&#8217;ve been looking for a while for a machine that can run a RAID array, giving me somewhere to put my media and backups that wont lose everything if a hard disk dies. My real problem when looking for something that fits my needs is price. There&#8217;s plenty of capable devices out there, but they tend to get expensive quickly &#8211; a [Drobo](http://www.drobo.com/) or multi-disk NAS box can set you back £300 before you&#8217;ve bought any disks.

HP have a product that fits the bill in both features and price &#8211; the Proliant Microserver. The unit retails at £199 + VAT, and HP have been running some amazing cashback schemes netting you the box for about £140 all in.

<img src="http://farm4.static.flickr.com/3069/5873347212_e7d4f424ff.jpg" width="500" height="333" alt="Microserver on a desk" />
  
The form factor is similar to that of a shuttle case, but not as deep. It sits quite nicely on a desk, and is small enough to hide away anywhere with decent ventilation.

<img src="http://farm4.static.flickr.com/3109/5872825421_1759dd2b90.jpg" width="500" height="333" alt="Microserver front panel" />
  
The front of the Microserver has 4 USB ports, the power button, and two indicator lights &#8211; 1 for disk activity and one for network activity. The power button glows orange when in standby and green when powered on. Additionally there&#8217;s a nice blue light that illuminates the HP logo when the machine&#8217;s on.

<img src="http://farm6.static.flickr.com/5074/5872835615_00c8154d62.jpg" width="500" height="333" alt="Microserver back panel" />
  
Things are kept simple round the back, with a couple of extra USB ports, the Gigabit Ethernet interface and an e-SATA interface. There&#8217; also a VGA port for connecting a monitor during installation. It&#8217;s worth noting the lack of PS/2 interfaces &#8211; you&#8217;ll need a USB keyboard (or at least an adapter) for installation.

<img src="http://farm6.static.flickr.com/5236/5873430500_7d28c352b9.jpg" width="500" height="333" alt="Microserver with front panel open" />
  
Opening up the Microserver is simple. The keys provided open the lock on the right of the front panel, which swings open like a door to reveal the innards. Here you have the 4 hard drive bays, with the power supply tucked away on the left, and the motherboard underneath.

<img src="http://farm4.static.flickr.com/3236/5872961223_1bd6ac020b.jpg" width="500" height="333" alt="Microserver Motherboard" />
  
The motherboard is easily accessibile by removing a couple of torx screws (using the supplied torx wrench) and unplugging a few cables, after which is slides out. Notable features here include an internal USB port (could be used to add WiFi, or even USB storage for the OS) and the passive heat sink on the processor at the back. All cooling is provided by the large fan at the back of the case &#8211; luckily this is big enough to be able to run reasonably quietly while still providing adequate cooling.
  
There&#8217;s 2 RAM slots available &#8211; the model I bought came with a single 1GB stick, but up to 8GB is supported. There&#8217;s also a couple of half-height PCI-e slots which can be used to expand the server&#8217;s functionality.

<img src="http://farm4.static.flickr.com/3172/5872814989_ec7700020c.jpg" width="500" height="333" alt="Microserver hard drive bays" />
  
There&#8217;s room in the server for 4 hard drives. Each needs to be screwed into one of the supplied mounts, after which is can be easily slotted in to the mounted SATA connectors &#8211; no faffing around with cables! The disks dont connect to a RAID controller, although Fake RAID is supported by the motherboard. However, I&#8217;ve been advised it&#8217;s safer to rely on software RAID in this case. My server was supplied with a 250GB drive &#8211; I&#8217;ve added 2 1TB drives in a RAID 1 (mirroring) configuration. There&#8217;s room for an optical drive in the bay above the hard drives, but this can also be converted to fit an extra hard drive. Of course, if that&#8217;s still not enough for you, the e-SATA port and PCI-e slots leave room for even more storage to be added on.

Installing the server was straightforward &#8211; I created a bootable USB drive and popped it in the front, then told the server to boot it (it defaults to PXE boot when there&#8217;s no OS installed). Once up and running, it&#8217;s nice and quiet thanks to the single large fan, although it does vibrate slightly. Placing the server on my wooden desk amplified this somewhat beyond acceptable levels, so I ended up sitting it on some of the plastic foam that came in the box (as shown in the first picture) which fixed the problem straight away. The 1GB of RAM is easily enough for my purposes (more on that in the next few posts), although the processor isn&#8217;t going to win you any races. You get a dual-core 1.3GHz Athlon, which spends a lot of its time dynamically throttled down to 0.8GHz. This can make some things (like installing updates) take longer than you might expect, but it does give the machine a big advantage &#8211; [very low power consumption](http://www.techhead.co.uk/video-hp-proliant-microserver-power-consumption).

All in all, this server is one of those devices, like the O2 Joggler, that&#8217;s not amazing in itself but is great for the money you pay. At the time of writing, [HP are still offering £100 cashback](http://www.serversplus.com/microserver_cashback) for up to 5 units, and we&#8217;re running a competition to win one in an upcoming episode of the [Ubuntu UK Podcast](http://podcast.ubuntu-uk.org).

I mentioned on the show that I&#8217;ve been using the server to replace some of the cloud services I use with self-hosted applications. My next few posts will talk about how I&#8217;ve done it!
