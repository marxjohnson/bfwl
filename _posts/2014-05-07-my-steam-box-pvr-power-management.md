---
id: 220
title: 'My Steam Box &#8211; PVR power management'
date: 2014-05-07T20:00:50+00:00
author: mark
layout: post
guid: http://barrenfrozenwasteland.com/?p=220
permalink: /2014/05/my-steam-box-pvr-power-management/
categories:
  - HTPC
---
**Update:** Updated post-record bash script for Ubuntu 16.04, and re-wrote ruby script to use HTTP instead of Telnet.

I mentioned before that I&#8217;m using tvheadend and XBMC as a PVR on my Steam box/HTPC. This allows me to schedule recordings and do things like series link recordings to ensure I dont miss an episode. However, it does have the slight disadvantage that I need to leave a full-power PC on all the time, otherwise it can&#8217;t record. I needed a smarter solution for the sake of my electricity bill, so I devised a way to have the PC turn on when a recording is scheduled, do the recording, then power off again when its done.

## Power on to record

My first discovery when hunting for a solution was the ACPI wake alarm feature. This allows you to set an alarm on your hardware clock at which point the computer will turn itself on, even if it&#8217;s completely powered off, just as though you&#8217;d pressed the power button.

There&#8217;s a couple of steps I needed to enable this feature, found thanks to the [MythTV wiki](http://www.mythtv.org/wiki/ACPI_Wakeup#Using_.2Fsys.2Fclass.2Frtc.2Frtc0.2Fwakealarm). Firstly, it needed to be enabled in the BIOS/UEFI. The setting for my motherboard was called something like &#8220;Hardware Clock Wake Up&#8221;. Secondly, Ubuntu&#8217;s shutdown scripts overwrite the hardware clock with the current time, erasing any alarm set, so a small modification to /etc/init/hwclock-save.conf was required. This ensures that the alarm is written back to the hardware clock.



With the feature enabled, I then needed a command to set the alarm. XBMC&#8217;s TV settings have a &#8220;Power Saving&#8221; section, with a &#8220;Set wakeup command&#8221; option. This lets you give a command which will be called with the unix timestamp of the next recording as an argument. I set this to `sudo /home/xbmc/wakeup.sh`. I used sudo since I needed permission to write to the wakealarm device, and added a sudoers rule to let XBMC run the command without a password:
  
`xbmc ALL=NOPASSWD: /home/xbmc/wakeup.sh`

Finally, the script itself:
  

  
The business is all on lines 4 and 5. 4 clears any previous alarms, and 5 sets a new one using the passed timestamp. XBMC has a &#8220;Wakeup before recording&#8221; option which lets you adjust the timestamp arugment to be a few minutes ahead of the actual record time. This script is triggered whenever XBMC is shut down. 

## Power off after recording

Powering off was a bit of a trickier business. Tvheadend has a &#8220;Post-processor command&#8221; setting which executes after a recording completes, which is simple enough. However, just putting `shutdown -h now` in there isn&#8217;t enough, since it wont cause XBMC to call its wakeup script, meaning the next recording could be missed. XBMC&#8217;s shutdown or exit command has to be called explicitly for this to happen. Furthermore, I didn&#8217;t always want the system to turn off &#8211; what if I was watching something, or playing a game at the time?

After some poking around, I found that using the shutdown button in XBMC&#8217;s web interface was sufficient to trigger the wakeup script. Furthermore, this was using XBMC&#8217;s JSONRPC interface, which could be fed commands by sending raw JSON strings over telnet. This gave me a way of triggering the shutdown and wakeup from a script, with the added bonus of giving me a way to find out if XBMC was currently playing something. This led to the creating of this ruby script and a bash script to call it:


  
The bash script is the command actually called by tvheadend, which calls the ruby script. The ruby script checks that no other users are logged in, no video is playing in XBMC, then calls XBMC&#8217;s shut down routine, which in turn sets the alarm for the next recording. Job done!