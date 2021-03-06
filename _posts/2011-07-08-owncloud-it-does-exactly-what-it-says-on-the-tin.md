---
id: 36
title: 'ownCloud - It does exactly what it says on the tin'
date: 2011-07-08T15:50:32+00:00
author: mark
layout: post
permalink: /2011/07/owncloud-it-does-exactly-what-it-says-on-the-tin/
---
The first step of my self-hosted cloud is to find a replacement for [DropBox](http://dropbox.com), the habitual solution for storing files online and syncing them to your various machines. While there&#8217;s lots of alternatives to DropBox (there&#8217;s even one built in to Ubuntu), they all follow the same model of renting disk space on the provider&#8217;s server, with no scope for installing on your own hardware. So I looked for an open source solution, and while there&#8217;s about 3 in the works, none of them are a drop-in (pardon the pun) replacement for DropBox. These include [SparkleShare](http://sparkleshare.org/), which seems more geared towards collaborating on documents than Dropbox-style functionality, not that that&#8217;s an undesirable feature in itself, [Syncany](http://syncany.org), which allows you to use any storage you care to name, but doesn&#8217;t have a stable release yet, and [ownCloud](http://owncloud.org/), which doesn&#8217;t yet sync your files.

This sounds like a bit of a non-starter, but on closer inspection ownCloud does something wonderfully simple and frightfully clever. You install it as a PHP web application, and it provides a web interface to upload and access your files, nothing too exciting there. It also acts as a WebDAV server, however, which allows you to access your files in most desktop file managers on Linux, Mac and Windows. I&#8217;ve even found a decent WebDAV client that gives me access via my Android phone, and provides functionality on par with the Android DropBox client (which doesn&#8217;t do syncing anyway). It does rely on you having an Internet connection at the moment, but a syncing client is in the works as part of Google&#8217;s Summer of Code, and it could even work in conjunction with Syncany since Syncany supports WebDAV as a storage engine. The other brilliant thing about the choice of WebDAV is that it operates over HTTP, which means that you can pretty much guarantee access through any firewalls you might be behind.

There are additional merits to ownCloud&#8217;s file storage alongside WebDAV access, some of which are already in the stable version (1.2) and others which are in the works for the next version (2.0). These include version control using Git, automated backups of all your files, and encryption.

Aside from the file storage, ownCloud has serious ambitions. It provides a plugin architecture, which it looks like will enable web applications to be written and run on top of the ownCloud platform. Once the API of the new version is stable and documented, I&#8217;m hoping it&#8217;ll be possible to build some seriously cool stuff on top of ownCloud (open source Google Docs anyone?). However, that&#8217;s for the future.
