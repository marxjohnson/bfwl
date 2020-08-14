---
id: 344
title: Using a Steam controller with the Nintendo switch
date: 2020-11-01T21:00:00+00:00
author: mark
layout: post
guid: https://barrenfrozenwasteland.com/344
permalink: /2020/11/using-a-stream-controller-with-the-nintendo-switch
image: https://barrenfrozenwasteland.com/images/steam-switch.jpeg
---
I have been playing [Hades](https://www.supergiantgames.com/games/hades/) a lot recently on my Switch. I've had the switch for a couple of years ago, but the long sessions of Hades are the first time I have been dissatisfied with the Joy-cons. The Pro Controller is highly reccommended by Switch fans, but I don't have £55 to spend on a new controller right now, so I started wondering if I can use my current favourite controller, the Steam controller on the Nintendo Switch.

![Steam controller, with a Switch logo](/images/steam-switch.jpeg)

The answer came from the [OpenSteamController](https://github.com/greggersaurus/OpenSteamController) project on GitHub. The project contains several different threads and lots of documentation, so I've pulled together just the bits you need to make make this possible.

## You will need:
1. A steam controller.
2. A USB-A to micro-B cable, long enough to reach your Switch from your chair.
3. A computer.
4. The OpenSteamController firmware, configured for the Switch: [OpenSteamControllerNinSwitch.bin](https://github.com/greggersaurus/OpenSteamController/blob/master/Firmware/bin/OpenSteamControllerNinSwitch.bin)

## Steps:
1. Hold the right trigger of your Steam controller, and connect it to your computer with the USB controller. This will put it in USB programming mode, and show up as a USB storage device called "CRP DISABLD"
2. Back up the default firmware.bin file. On Ubuntu, run `dd "if=/media/$USER/CRP DISABLD/firmware.bin" of=~/backup.bin`. On other platforms, consult the [Loading Firmware](https://github.com/greggersaurus/OpenSteamController/blob/master/LoadingFirmware.md) documentation.
3. Load the custom firmware. On Ubuntu, run `dd conv=nocreat,notrunc oflag=direct bs=512 if=OpenSteamControllerNinSwitch.bin "of=/media/$USER/CRP DISABLD/firmware.bin"`
4. Unplug the USB cable from your computer, and plug it in to the Switch's dock. Press L+R to connect, it will show up as a generic "USB" controller. You're ready to play!

A few things to be aware of about this solution:

* This process isn't supported by Valve, Nintendo, me, or anyone else. Proceed at your own risk.
* The current firmware doesn't support connecting to the Switch via Bluetooth, you must use a USB cable.
* The controller won't work with Steam while using the custom firmware. You can restore the original firmware by running step 3 above with `backup.bin` as the input file.
* The A and B buttons on the Switch and Steam controllers are the other way around, so the Steam controller button labelled "B" will function as "A" on the Switch, and vice-versa.
* The right hand touch pad (which operates as the right stick) is quite sensitive, it will sometimes detect your thumb when you press a button next to it if you aren't careful.
