---
id: 27
title: Using Dropbox as a DNS server
date: 2011-02-17T11:18:20+00:00
author: mark
excerpt: |
  So at <a href="http://dev8d.org">Dev8D</a> we had a session on sharing handy hints and tips to save time and effort.  The subject of <a href="http://dropbox.com">Dropbox</a> came up, so here's one of my favourite Dropbox hacks.
  
  At home I have about 4 devices on my network. I like to refer to each by hostname rather than IP address (I SSH a lot), but I dont want to have to run my own DNS server.
  
  The solution to this is pretty simple (and very hacky). On one machine, I configured <a href="http://unixhelp.ed.ac.uk/CGI/man-cgi?hosts"><tt>/etc/hosts</tt></a> to map each hostname to their IP address. Once I had it all set up correctly, I moved <tt>hosts</tt> to my Dropbox folder, and created a symlink in it's place (so <tt>/etc/hosts</tt> points to <tt>/home/mark/Dropbox/hosts</tt>). I then set up the same symlink on my other machines. Now updating the hosts file on one machine will sync the changes to all other machines, giving me hostname to IP address resolution without DNS.
layout: post
permalink: /2011/02/using-dropbox-as-a-dns-server/
---
So at [Dev8D](http://dev8d.org) we had a session on sharing handy hints and tips to save time and effort. The subject of [Dropbox](http://dropbox.com) came up, so here&#8217;s one of my favourite Dropbox hacks.

At home I have about 4 devices on my network. I like to refer to each by hostname rather than IP address (I SSH a lot), but I dont want to have to run my own DNS server.

The solution to this is pretty simple (and very hacky). On one machine, I configured [<tt>/etc/hosts</tt>](http://unixhelp.ed.ac.uk/CGI/man-cgi?hosts) to map each hostname to their IP address. Once I had it all set up correctly, I moved <tt>hosts</tt> to my Dropbox folder, and created a symlink in it&#8217;s place (so <tt>/etc/hosts</tt> points to <tt>/home/mark/Dropbox/hosts</tt>). I then set up the same symlink on my other machines. Now updating the hosts file on one machine will sync the changes to all other machines, giving me hostname to IP address resolution without DNS.