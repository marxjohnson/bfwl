---
id: 326
title: Dell Precision 5520 Ubuntu Review
date: 2017-07-20T15:00:37+00:00
author: mark
layout: post
guid: https://barrenfrozenwasteland.com/?p=326
permalink: /2017/07/dell-precision-5520-ubuntu-review/
---
Dell kindly sent me a [Precision 5520](http://www.dell.com/uk/business/p/precision-15-5520-laptop/pd?oc=xctop5520emea) to review for the [Ubuntu Podcast](http://ubuntupodcast.org/). This post goes into detail about some things we couldn&#8217;t fit in the show.

## In the box

The box the laptop shipped in contained the laptop, the power supply (power brick and UK plug), and a Thunderbolt Ethernet dongle.  The laptop itself was smartly presented in its own smaller padded box.

## Hardware

The laptop itself has an attractive metal body with carbon fiber or something similar on the surface around the keyboard.  A nice detail is that the underside of the body features a plate etched with the model number, which flips over to show the normal regulation compliance emblems hidden underneath.

### Ports

On the left, the device has the charging port (straight barrel connector), HDMI, 1 USB-A 3.0 port, a 3.5mm combined headphone/microphone jack, and 1 USB-C/Thunderbolt port.  On the right, there is another USB-A 3.0 and anSD card slot.  This side also features an Kensington lock port and a battery indicator.  Both of the USB-A ports support power sharing.

I tried plugging a pair of stereo headphones into the 3.5mm jack.  While audio played, the volume was noticeably lower in the left ear.  As there&#8217;s only 2 USB-A ports, I plugged in a mouse, keyboard and Ethernet dongle using a bus-powered USB hub.  Unfortunately, devices kept dropping out on the hub.  I switched to using the supplied Ethernet dongle and plugging in the mouse and keyboard directly, which worked without an issue.

While there aren&#8217;t a huge number of ports available on the body of the device, there are docking options available.  A USB-C dock is available with extra USB ports, ethernet, audio output, and ports to drive 2 monitors.  There&#8217;s also a Thunderbolt dock available with the similar ports, but the ability to drive 3 monitors.  I didn&#8217;t receive a dock with my review unit.

### Specification

My review unit featured the top options for most of the hardware.  This specification retails for around £2,618 on the Dell website, while the base specification retails for around <span class="pricing_sale_price">£1,649.</span>

  * Intel Xeon Quad-core 3GHz CPU (base Core i5, 2.5GHz)
  * 32GB DDR4 RAM (base 8GB)
  * UHD (3840&#215;2160) 15.6&#8243; touch screen (base FHD (1920&#215;1080), non-touch)
  * Intel WiFi 802.11ac/Bluetooth (standard)
  * 512GB SSD (base 500GB HDD)
  * NVIDIA Quadro M1200 w/4GB GDDR5 GPU (standard)
  * 6-cell 97Wh battery (base 3-cell 56Wh)

### Input/Output

I found the keyboard satisfying to type on.  The keys take a decent amount of force to get moving, and go down soothly with no sponginess.  The Super key is printed with a Windows logo, no vinyl sticker like Entroware, and no custom-printed keycap like Tuxedo.  The model I was sent had a US-layout keyboard, although the Dell UK site offers a UK keyboard as standard.  The keyboard lacks some keys such as Scroll Lock and Pause, which is an understandable omission but is slightly irksome for me as I use Pause as the summon key for [Tilda](https://github.com/lanoxx/tilda).

The touchpad is big and soft to the touch, with just the right amount of friction.  It supports multi-touch, supports clicking down anywhere for the primary button, and clicking the bottom-right area for secondary click.  By default, it&#8217;s configured to use &#8220;natural&#8221; scrolling, which matches the scroll behaviour of the touchscreen.

The screen fills the space inside the lid with only about a 2cm bezel all the way around.  The light from the screen is incredibly bright, so much so that I found it uncomfortable to look at a white page on full brightness.  It can be adjusted to a range of levels so it&#8217;s not hard to find a comfortable setting.  The screen is readable in direct sunlight, although has a glossy finish so is quite reflective when there is a dark background.  The touch screen works well, although only supports single touch, and picks up finger prints easily.

This was my first experience of a HiDPI screen.  The picture is very sharp and good quality, but doesn&#8217;t offer a particular advantage over an FHD screen for general use.  The place where it really makes a difference is with high-resolution photos and videos, which reveal a huge amount of detail not visible on lower DPI screens.

## Software

### First boot

The laptop came loaded with Ubuntu 16.04 LTS.  On first boot in launched into the OEM setup, which allows you to connect to WiFi, create a user, configure the locale, and create a recovery USB stick.  It finishes by installing updates, then reboots for you to log in to your new user.  This all went as expected, and the WiFi connected without a problem after reboot, something I&#8217;ve had issues with before.

In the interests of full disclosure, at this point I should mention that this was the second unit I had to review.  The first unit I was sent has a bug in the OEM setup which caused it to crash.  The error messages weren&#8217;t very friendly, and it left me unable to set up the machine.  Dell sent me a replacement unit, which worked without a problem.

Upon reboot, the LightDM login automatically scales to take the HiDPI screen into account.  However, after login, the Unity desktop wasn&#8217;t automatically scaled.  For usability, I adjusted the UI scale to 2x in the Screen Display settings, which gave me the equivalent screen estate of an FHD screen.

One serious letdown about the initial setup is that the Super key is disabled by default, and no key has been configured to replace it for usage with Unity.  This means that upon first boot, the list of Unity keyboard shortcuts is missing a lot of key features around the Dash, Launcher and window management.  There&#8217;s an article on Dell&#8217;s help website which explains how to re-enable the key, but as someone who makes heavy use of Unity&#8217;s keyboard shortcuts, I don&#8217;t feel like this represents a good default Ubuntu experience.

### Default software

The initial package selection differs from vanilla Ubuntu 16.04.  There&#8217;s a Dell-specific APT repository enabled that&#8217;s hosted by Canonical, and several hardware drivers installed, ensuring that all the hardware works as intended.

Something about the default package selection which confuses me somewhat is the choice of web browsers.  Instead of Ubuntu&#8217;s default Firefox, you get Chrome _and_ Chromium, which both have icons at the top of the Launcher.  As standard with Ubuntu 16.04, The QML Browser app is also installed and available from the Dash, and the Amazon icon in the Launcher uses this, which adds an additional inconsistency since this browser doesn&#8217;t pick up the UI scaling.

The rest of the installed apps are pretty much standard, with the addition of Dell utilities for installing drivers and creating recovery media.

## Experience

### Graphics

As mentioned above, the laptop features a dedicated Nvidia graphics card.  I ran the Superposition benchmark at various settings, although the only preset that provided a reasonably smooth experience was 720p Low, scoring 1930.  I also installed Tomb Raider through Steam (only usable in Big Picture mode due to the desktop UI not scaling) and ran the benchmark there. On 720p/Ultimate settings, it managed an average of 51 FPS.  On 1080p/Ultimate settings, it still managed a respectable 33 FPS.  Unfortunately, at native resolution, it only managed 9 FPS on average.

When the graphics are being exercised, the fan kicks into gear to an extent that is hard to ignore.  The noise isn&#8217;t at an irritating pitch, but it&#8217;s clearly audible over the sounds of the game.

### Battery endurance

I tested the battery endurance with each GPU by setting the screen brightness to minimum (still perfectly usable), the keyboard light off, the Wifi connected, and left it untouched to discharge.

With the Nvidia GPU, the 97Wh battery lasted 6:30. With the Intel GPU, it lasted about 11 hours.

I also tested the standby, which went for 18 hours with 8% battery drain.  Notably, when recharging, the top-left quadrant of the laptop&#8217;s body gets very hot.

## Verdict

The Precision 5520 is a great looking laptop on the outside, with a fantastic screen and innards to match.  It&#8217;s marketed as a &#8220;mobile workstation&#8221; and definitely fits into that role, offering an excellent option for upgrade from a class of machine such as a Macbook Pro.  The price point is above what most would consider for a personal device, but offers a good range of options for a professional purchase. Personally, I would stick with the FHD non-touch screen, as the UI scaling still has some gaps, and the single-point touch screen doesn&#8217;t offer much attraction given the very nice touchpad.
  
As an experienced Ubuntu user, I&#8217;d be very happy to have this device as my daily driver, as I&#8217;m confident that I could customise it to my preferences.  I would however have some reservations about recommending it to a first-time Ubuntu user, as I&#8217;d fear some of the changes from vanilla Ubuntu would create a confusing experience.
