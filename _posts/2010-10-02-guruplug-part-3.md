---
id: 24
title: 'GuruPlug - Part 3'
date: 2010-10-02T15:58:25+00:00
author: mark
layout: post
permalink: /2010/10/guruplug-part-3/
---
Now my GuruPlug was working again, it was time to set up the software.
  
The 3 functions wanted the &#8216;Plug to perform if possible are:

  * A web server
  * A bit torrent client
  * A UPnP Media Server

To start with, I wanted a nicer interface. I&#8217;m happy using the command line, but a default shell is a bit dull, and not very flexible. Using Ubuntu I&#8217;ve become a fan of [byobu](https://launchpad.net/byobu), a set of config profiles for GNU Screen which allows you to have a &#8220;tabbed&#8221; interface to within a shell and have useful system information displayed. Being built on Screen, it also leaves your session (and any commands) running when you log out, waiting to re-attach when you log in again.
  
Byobu isn&#8217;t currently in Debian Stable, so I found [the package for Unstable](http://packages.debian.org/unstable/byobu), installed the dependencies with apt-get, and installed the package manually.

<pre>$ sudo apt-get install debconf gettext-base python python-newt screen
$ wget http://ftp.uk.debian.org/debian/pool/main/b/byobu/byobu_2.80-1_all.deb
$ sudo dpkg -i byobu_2.80-1_all.deb</pre>

## Bit Torrent

Next I looked for a bit torrent client. I had the following criteria for a client:

  * It needed to run headless/daemonised
  * It needed a web interface
  * It needed to support encryption

After a bit searching and an abortive attempt at setting up [rtorrent](http://libtorrent.rakshasa.no/), I settled on [Transmission](http://www.transmissionbt.com/about/), which aside from having the GTK-based GUI used as Ubuntu&#8217;s default client, also runs as a daemon with a web interface. The transmission-daemon package was only available to install from the lenny-backports repository, which caused a few dependency issues, but forcing install of the packages from backports with <tt>apt-get install -t lenny-backports</tt> did the job nicely.
  
[<img src="http://farm5.static.flickr.com/4111/5047678260_66aa3696ab.jpg" width="500" height="354" alt="transmission" />](http://www.flickr.com/photos/52817101@N05/5047678260/ "transmission by marxjohnson00, on Flickr")

## UPnP Server

My plan was to share media from the &#8216;Plug&#8217;s external hard drive to other machines on my network (particularly my Wii, running [GeeXboX](https://wiibrew.org/wiki/GeeXboX)). I installed MediaTomb from APT and set it up to share the files, but when testing with [XMBC](http://xbmc.org/) on another machine, I couldn&#8217;t find them. Unfortunately, there seems to be very little in the way of troubleshooting documentation or other readily-available clients to test with, so I don&#8217;t know if I&#8217;d mis-configured MediaTomb or XMBC, or my network.
  
In the end, I decided to switch to using Samba.

## Samba

Setting up samba was a doddle. The GuruPlug comes preconfigured to share anything in /media, so I just needed to set it to allow guest access by adding some bits to /etc/samba/smb.conf:

<pre>[global]
...
security = share
...
guest user = nobody
map to guest = bad user
...
[media]
...
guest ok = yes</pre>

Another snag was that GeeXboX for Wii doesn&#8217;t support the Wii&#8217;s Wireless, which means I needed to plug it in to my network. This meant moving my router to be near my TV, and thus moving the Plug as well. Here&#8217;s the new setup.
  
[<img src="http://farm5.static.flickr.com/4152/5063932007_3d7490698b.jpg" width="500" height="333" alt="IMAG0161.jpg" />](http://www.flickr.com/photos/52817101@N05/5063932007/ "IMAG0161.jpg by marxjohnson00, on Flickr")
  
That&#8217;s the guruplug on the left, connected to the router behind the TV, and the hard drive is now in the shelf under the Wii.
  
[<img src="http://farm5.static.flickr.com/4147/5064546208_4c3e7af093.jpg" width="500" height="333" alt="IMAG0162" />](http://www.flickr.com/photos/52817101@N05/5064546208/ "IMAG0162 by marxjohnson00, on Flickr")
  
There&#8217;s the router behind the TV, with the Wii and GuruPlug connected.

Unfortunately, having the router behind the TV meant that the WiFi signal screws up the picture. Luckily, the &#8216;Plug acts as a Wireless Access Point!

## Wireless Access Point

The &#8216;Plug comes pre-configured as an open access point, and routes traffic through the Ethernet interface. I just needed to make a few changes to enable WPA2 encryption. The script /root/init_setup.sh is run on boot to set up the access point among other things, so I just had to add a few commands.

<pre>ifconfig uap0 192.168.1.1 up
/usr/bin/uaputl sys_cfg_ssid $SSID
/usr/bin/uaputl sys_cfg_protocol 32
/usr/bin/uaputl sys_cfg_wpa_passphrase "passphrase_here"
/usr/bin/uaputl sys_cfg_cipher 8 8
/usr/bin/uaputl bss_start</pre>

## Web Server

The GuruPlug comes with [Lighttpd](http://www.lighttpd.net/) installed and running to serve some CGI scripts used for some simple configuration tasks, like switching the WiFi to client mode. To keep these scripts intact in case I needed them, I fiddled with lighttpd.conf to create Lighttpd&#8217;s equivalent of a vhost in Apache, letting me have the main site served when the server&#8217;s accessed by the hostname (and eventually, domain name), and the config scripts when it&#8217;s accessed by it&#8217;s private IP address. This prevents access to the config scripts from outside, while still having the main site available to the world.

<pre>server.document-root       = "/var/www/sites"

$HTTP["host"] == "192.168.0.9" {
        server.document-root    = "/var/www/setup"
}</pre>

I&#8217;ve got some additional ideas for things to do with the Plug, but it&#8217;s certainly served very well so far, so that&#8217;s all for now. If you&#8217;re interested in the resource usage, Byobu currently reports that RAM usage is at 13% after all the above setup. I&#8217;ll probably make a few smaller posts as I experiment some more!
