---
id: 52
title: Converting Drupal 6 to WordPress
date: 2012-08-04T15:20:45+00:00
author: mark
layout: post
guid: http://barrenfrozenwasteland.com/?p=52
permalink: /2012/08/converting-drupal-6-to-wordpress/
---
I&#8217;ve just moved my blog from [Drupal](http://drupal.org) 6 to [WordPress](http://wordpress.org). There&#8217;s several reasons for this:

  * I was only using Drupal in the first place to get some experience using it. It&#8217;s a great CMS but is overkill for just running a blog.
  * WordPress comes with <a href="http://akismet.com/wordpress" shape="rect">Akismet</a> for reducing comment spam out-of-the-box.
  * I just got a <a href="http://google.com/nexus/#/7" shape="rect">Nexus 7</a>, and there&#8217;s a nice WordPress app for Android.

I wasn&#8217;t, however, keen on losing my old posts and comments. No problem, Drupal and WordPress are both open source and widely used, there&#8217;ll be tools to convert between them, right? Actually, not so much.

The best thing I found was this post on [Migrating Drupal to WordPress](http://modeling-languages.com/migrating-drupal-6-to-wordpress-3) and the [associated Java script](http://modelling-languages.com/wp-content/uploads/DrupalToWordpress.java) (that&#8217;s a script, written in Java, not a JavaScript file).  I had to tweak the code a bit to get it working, I&#8217;ve put [the resulting code](https://gist.github.com/3258088) on Github.

I&#8217;m not really a Java guy, so getting it to run was new for me. Here&#8217;s the steps I took (on Ubuntu 12.04):

  1. Dumped the databases for my existing Drupal and a clean WordPress install from my web server to SQL files on my local machine.
  2. Imported both files into a new database on my local machine.
  3. Downloaded the .java file
  4. Edited the database credentials in the .java file to match those on my local machine (wpPrefix variable, drPrefix variable and return line of getConnection method)
  5. Installed the dependencies required to compile and run the file
          
    `~/$: sudo apt-get install openjdk-6-jdk libmysql-java`
  6. Compiled and ran the file
  
    `~/$: javac -cp . DrupalToWordpress.java<br />
~/$: java -cp .:/usr/share/java/mysql.jar DrupalToWordpress`
  7. Exported the resulting WordPress tables from the local database, and imported them back into the database on my web server

A bit of a palava I think you&#8217;ll agree, but as you can see, it worked!</ol>