---
id: 348
title: Software RAID on Ubuntu 20.04
date: 2022-04-03T21:00:00+00:00
author: mark
layout: post
guid: https://barrenfrozenwasteland.com/348
permalink: /2022/03/software-raid-on-ubuntu-2004
image: https://barrenfrozenwasteland.com/images/raid1.jpg
---

I recently decided to rebuild my HP Microserver, replacing the NAS appliance I use with extra disks in the microserver configured as a RAID 5. There are various guides online for the commands to set this up manually with mdadm, but as part of the rebuild I upgraded the Ubuntu OS to version 20.04, which presented a much nicer option. Following the upgrade, the login prompt included a message directing me to a web console at https://hostname:9090, which is using [Cockpit](https://cockpit-project.org/).

## Setting up RAID with Cockpit

[!Cockpit login screen on Ubuntu 20;04 LTS](images/raid2.jpg)

Cockpit provides a modern web interface for a number of common but complex server administration tasks, including setting up networking and storage devices. Logging in an navigating to Host > Storage will provide a comprehensive overview of disk I/O, mounted filesystems, available devices, and more.

[!Cockpit storage overview](images/raid3.png)

Creating a RAID with Cockpit is very straightforward. From this screen, click the hamburger menu by the "Devices" heading, and select "Create RAID device". You'll be prompted for a name, the RAID level, and a chunk size, then you simply check the boxes next to the drives you want to use, and click "Create". Drives that are already in use won't be listed, so no need to worry about accidentally formatting the wrong drive.

[!Cockpit create RAID button](images/raid4.jpg)

Once the RAID is created, you will see the progress of its set-up job. This may take several hours depending on the size and set-up you are creating, so you can check back on this page to see how it is going. While this is going on, you can also use cockpit to create your filesystems.

Click on the newly created RAID device and you'll see a page  listing the configuration, disks, state and content. The new device will be empty, so clicking "Create Partition Table" will let you define your new partitions in a similar manner to a graphical partitioner like GNOME Disks or gparted. In my case I followed the defaults and created a single XFS partition, but you may want to set up multiple partitions, LVM, or LUKS-encrypted partitions, which are all supported. You can also mount the new filesystem right from the web console.

[!Cockpit RAID device overview page](images/raid1.jpg)

Under the hood, this is all using mdadm, for which the [Arch Wiki RAID page](https://wiki.archlinux.org/title/RAID) provides lots of in-depth information on configuration and maintenance, but for basic set-up and monitoring, this web console is all you need.

Cockpit has set a new bar for me in linux server administration. It's a massive step up in terms of discoverability, and making those complex operations a lot less scary. I look forward to using it more in the future.
