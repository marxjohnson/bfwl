---
id: 21
title: Getting wiipresent working on Ubuntu Lucid
date: 2010-06-23T17:50:45+00:00
author: mark
excerpt: |
  I wanted wiipresent (a handy tool that lets you use a WiiMote as a handy wireless presenter) running on Ubuntu Lucid (10.04). Here's how I did it:
  
  First, I had to download the latest rpm from <a href="http://packages.sw.be/wiipresent/">The Wiipresent site</a>.
  
  Next I needed to install alien to allow me to install the rpm on my debian-based system:
  <code>sudo apt-get install alien
  sudo alien -i wiipresent-0.7.5.2-1.el5.rf.x86_64.rpm</code>
  
  That worked fine, but wiipresent can't find the wiimote or bluetooth libraries it needs. So first, make sure they're installed:
  <code>sudo apt-get install libcwiimote3 libbluetooth3</code>
  
  Then symlink the installed libraries to the place wiipresent is looking for them:
  <code>sudo ln -s /usr/lib/libbluetooth.so.3 /usr/lib/libbluetooth.so.2
  sudo ln -s /usr/lib/libcwiimote.so.3 /usr/lib/libcwiimote.so.0</code>
  
  Run wiipresent, press 1+2 on your Wiimote, job done!
layout: post
permalink: /2010/06/getting-wiipresent-working-on-ubuntu-lucid/
---
I wanted wiipresent (a handy tool that lets you use a WiiMote as a handy wireless presenter) running on Ubuntu Lucid (10.04). Here&#8217;s how I did it:

First, I had to download the latest rpm from [The Wiipresent site](http://packages.sw.be/wiipresent/).

Next I needed to install alien to allow me to install the rpm on my debian-based system:
  
`sudo apt-get install alien<br />
sudo alien -i wiipresent-0.7.5.2-1.el5.rf.x86_64.rpm`

That worked fine, but wiipresent can&#8217;t find the wiimote or bluetooth libraries it needs. So first, make sure they&#8217;re installed:
  
`sudo apt-get install libcwiimote3 libbluetooth3`

Then symlink the installed libraries to the place wiipresent is looking for them:
  
`sudo ln -s /usr/lib/libbluetooth.so.3 /usr/lib/libbluetooth.so.2<br />
sudo ln -s /usr/lib/libcwiimote.so.3 /usr/lib/libcwiimote.so.0`

Run wiipresent, press 1+2 on your Wiimote, job done!