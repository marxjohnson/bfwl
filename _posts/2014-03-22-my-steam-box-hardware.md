---
id: 179
title: 'My Steam Box - Hardware'
date: 2014-03-22T17:37:56+00:00
author: mark
layout: post
guid: https://barrenfrozenwasteland.com/?p=179
permalink: /2014/03/my-steam-box-hardware/
categories:
  - HTPC
---
Having played with SteamOS for my last post, I decided that it would be a lot more fun if my gaming PC, rather than being in my spare room connected to a small screen, was in my living room attached to my big TV.  In addition to this, I had several devices under my PC to provide me with various media-viewing functions (streaming services, DVD playback, TV), which was a pain and took up a lot of room.  To this end, I elected to build a box which could do all these jobs in one.  I&#8217;ve now got the box in a &#8220;stable&#8221; enough state that I thought it time to write about it, starting this post with the hardware.

## Innards

I started the build by cannibalising the insides of my existing gaming PC, which I&#8217;d upgraded not long ago.  This gave me a starting point of an AMD A8 APU (quad-core with integrated 3D accelerated graphics), 8GB of RAM, a motherboard along the lines of [this one](http://www.amazon.co.uk/ASRock-FM2A55M-DGS-R2-0-Motherboard-Express/dp/B00E0V50T6/ref=sr_1_13?ie=UTF8&qid=1395352836&sr=8-13&keywords=ASRock+fm2), and a 240GB SSD.

It also gave me a very noisy heatsink. This was a problem as a box sitting under my TV needs to be quiet. After some research I bought a [Zalman CPNS8900 Quiet](http://www.zalman.com/na/contents/products/view.html?no=340) heatsink, which does a great job of cooling with minimal noise and a low profile, but takes up a lot of horizontal room around the processor. So much, in fact, it lent against one of the RAM DIMMs.

To solve this problem along with screen limited resolution due to my TV&#8217;s poor VGA support, I upgraded my motherboard to [An AsRock FM2A88M Extreme 4+](http://www.asrock.com/mb/AMD/FM2A88M%20Extreme4+/) which had 3 key features: the FM2 socket for the processor, an HDMI port to ease connection to the TV, and 4 RAM Slots, meaning I could move the 2 DIMMs away from the processor allowing room for the heatsink. As an added bonus, the stock heatsink mount was screwed on rather than using plastic toggle bolts at the old one had, making mounting the Zalman much easier than it had been as I could just screw it onto the existing back plate.

The final piece of the puzzle was a power supply. Again, I wanted something quiet so went for a [Corsair CM430M](http://www.amazon.co.uk/Corsair-Builder-Series-Modular-Certified/dp/B00ALYP208/ref=wl_it_dp_o_nS_nC?ie=UTF8&colid=1I6VG5W1WPBND&coliid=INVVZ7BQXULNR) which is 80+% efficient and has a 120mm fan. It&#8217;s also modular, meaning only the required cables need to be attached, so reducing cable management needs inside the case.

<div id="attachment_188" style="width: 745px" class="wp-caption aligncenter">
  <a href="{{ "/wp-content/uploads/2014/03/IMG_20140322_155057.jpg" | prepend: site.baseurl }}"><img class=" wp-image-188 " alt="Photo showing the inside of the steam box from above." src="{{ "/wp-content/uploads/2014/03/IMG_20140322_155057.jpg" | prepend: site.baseurl }}" width="735" height="578" /></a>
  
  <p class="wp-caption-text">
    Obligatory internal shot, taken from above. The big power supply in the bottom right draws air from vents in the underside of the case and straight out the back, while the big heatsink on the left draws air in through vents above and out through vents in the side and back. Note the RAM slot nearest the heatsink is obstructed. Top-right is a short-depth DVD drive, with the SSD mounted underneath.
  </p>
</div>

## Case

When building a PC you can basically pick 2 qualities from powerful, small, and quiet. My main concerns for this machine were power (for gaming) and quietness, meaning I&#8217;d inevitably be building something fairly big.  I plumped for a [SilverStone ML03B](http://www.silverstonetek.com/product.php?pid=283&area=en) &#8211; a half-height MicroATX case which isn&#8217;t the most beautiful case, but is really well designed and fits everything inside nicely. I&#8217;ve written a [full review here](http://www.amazon.co.uk/review/R3A5JL747MSRQI/ref=cm_cr_pr_perm?ie=UTF8&ASIN=B004HE2YZE&linkCode=&nodeID=&tag=).

<div id="attachment_187" style="width: 683px" class="wp-caption aligncenter">
  <a href="{{ "/wp-content/uploads/2014/03/IMG_20140322_154633.jpg" | prepend: site.baseurl }}"><img class="size-full wp-image-187" alt="Photo showing the front of the Silverstone case, with a DVD drive and Gamecube USB adaptor installed." src="{{ "/wp-content/uploads/2014/03/IMG_20140322_154633.jpg" | prepend: site.baseurl }}" width="673" height="233" /></a>
  
  <p class="wp-caption-text">
    The completed steam box viewed from the front, with Gamecube USB adapter on top.
  </p>
</div>

## Controllers

I&#8217;ve always been a big fan on Nintendo controllers, I&#8217;ve still got a few Gamecube controllers as well as a couple of Wii Remotes.  With the launch of Steam&#8217;s Big Picture Mode, Valve are encouraging games developers to make their games with well with gamepads.  For those games, I use a Gamecube controller via a USB adapter (found via the [Dolphin Emulator site](https://dolphin-emu.org/docs/guides/recommended-accessories-dolphin/#GameCube_Controller)).  I&#8217;ve owned several Gamecube-USB adapters, but this one is particularly good, firstly because it has 2 inputs, and secondly because it&#8217;s the only adapter I&#8217;ve found which works with Wavebird wireless controllers.

For games designed to be used with a mouse cursor, I connect a Wii Remote using a bluetooth dongle and a USB-powered sensor bar.

I also needed a keyboard and mouse that I could use from across the room.  There&#8217;s some nice IR remotes out there, but I went for the easy option and got a [Rii Touch](http://www.amazon.co.uk/gp/product/B004FSFYG8/ref=noref?ie=UTF8&psc=1&s=computers) handheld keyboard with built-in touchpad.  I initially bought a bluetooth model but bluetooth connectivity requires pairing the device and the OS to boot before it can connect, which wasn&#8217;t terribly smooth.  I ended up with the  proprietary RF version which connects as long as the USB port has power, and just appears as a regular wired keyboard and touch pad to the OS.  It&#8217;s not perfect perfect but I&#8217;d give it 9/10 as a solution.

## TV

While my TV has Freeview built in, I didn&#8217;t have a way to watch live HD channels.  To enable this I bought a [PCTV nanoStick T2](http://www.pctvsystems.com/Products/ProductsEuropeAsia/DVBTT2products/PCTVnanoStickT2/tabid/248/language/en-GB/Default.aspx), a USB DVB-T2 (Freeview HD) dongle.  Notably, this is the only USB DVB-T2 tuner which has support in the Linux kernel at the time of writing, so it Just Works with no additional drivers needed.

## Next&#8230;

That&#8217;s all for the hardware at the moment. In my next post I&#8217;ll look at how I&#8217;ve set up the OS and Steam.
