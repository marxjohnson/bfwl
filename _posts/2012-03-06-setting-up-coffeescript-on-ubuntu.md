---
id: 47
title: Setting up CoffeeScript on ubuntu
date: 2012-03-06T11:01:23+00:00
author: mark
layout: post
permalink: /2012/03/setting-up-coffeescript-on-ubuntu/
---
As I mentioned in a previous post, I recent learnt about [CoffeeScript](http://coffeescript.org/), a quick way of writing nice clean Javascript. The CoffeeScript website [has instructions for installing the compiler](http://coffeescript.org/#installation), first requiring installation of [Node.js](http://nodejs.org/), which a lot of tutorials show you how to install from Git, and also requiring [NPM](http://npmjs.org/) which is usually installed by <tt>curl</tt>ing a shell script directly into bash(!). On Ubuntu, the install process is much simpler and less ripe for security holes:

  1. Only required if running 10.04 LTS (Lucid Lynx): 
    <pre>sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update</pre>

  2. <pre>sudo apt-get install nodejs npm
sudo npm install -g coffeescript</pre>

Check that CoffeeScript is installed correctly by running 

<pre>coffee -v</pre>
