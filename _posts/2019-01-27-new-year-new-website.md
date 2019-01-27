---
id: 341
title: New year, new website
date: 2019-01-27T13:30:00+00:00
author: mark
layout: post
guid: https://barrenfrozenwasteland.com/341
permalink: /2019/01/new-year-new-website
image: https://barrenfrozenwasteland.com/images/wp-to-jekyll.png
---
For about 10 years, I've had my website hosted by [Surpass Hosting](https://www.surpasshosting.com), and served my blog variously with [Drupal](https://drupal.org), [Wordpress](https://wordpress.org) and manually crafted static pages.
Unfortunately, Surpass no longer offer the package that I originally signed up with, and the cheapest package the offered me was double the cost I have been paying.  On top of that, they were charging me over $20 to renew my domain name.  Given that I only host a simple blog and an old [fansite](/sacktrick), it was time to move to something simpler and cheaper.

I've already had experience building [a website](https://oss-watch.ac.uk) with [Jekyll](https://jekyllrb.com), and using this removed the need for me to find a host that provided a database and scripting language like PHP. Jekyll builds your site as plain old HTML.

![Wordpress to Jekyll exporter logo](/images/wp-to-jekyll.png)

Since my old website was using Wordpress, I needed to extract it to something Jekyll-friendly. Of course, someone's already done the work for me. I installed the [Jekyll exporter](https://wordpress.org/plugins/jekyll-exporter/) plugin for Wordpress, and was able to download my whole site as static HTML files, that I could add to a fresh Jekyll site. As the site had been previously converted from Drupal, I needed to do a bit of find-and-replace across the site to standardise all the metadata.

I had heard that [AWS S3](https://aws.amazon.com/s3/) was a good choice for hosting static websites. While it's primarily intended for file storage for cloud applications, it also supports serving files over HTTP using a simple webserver. However, it seems that S3 is only really designed to be accessed programmatically.  While command line tools exist and its possible to mount an S3 filesystem locally, building a Jekyll locally site and syncing it to an S3 bucket is not a simple process.  Furthermore, the limited nature of the webserver it provides made it difficult to achieve what I wanted.

After looking at some other hosts, I decided that [GitHub Pages](https://pages.github.com/) was the simplest solution. You can enable Pages on any public repository, and Jekyll will automatically compute your site when you push a new commit. This does limit you to the basic Jekyll software without plugins, but you can use it with your own domain name, it supports HTTPS, and its free.

Finally, I needed a new domain registrar and email host. After asking friends for some recommendations, I settled on [Gandi](https://gandi.net). Along with your domain, you get a straightforward DNS interface and subdomain redirects (so you can point www.yourdomain.com to yourdomain.com, for example). You also get email with Sieve support, and alias that support wildcards, so you can make unique addresses for each service you sign up to, and filter them as required.

This whole solution costs me about £10 a year, where my previous solution cost me around £40, and was going up to something closer to £100.