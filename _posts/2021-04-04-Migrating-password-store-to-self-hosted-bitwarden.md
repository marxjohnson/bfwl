---
id: 346
title: Migrating password store to self hosted Bitwarden
date: 2021-04-04T21:00:00+00:00
author: mark
layout: post
guid: https://barrenfrozenwasteland.com/346
permalink: /2021/04/migrating-password-store-to-self-hosted-bitwarden
image: https://barrenfrozenwasteland.com/images/safe.jpg
---
I've been using [password store](https://www.passwordstore.org/) to manage my passwords for several years.
I really like its simplicity, it's just a shell script that relies on gpg and git
to handle the encryption and synchronisation. However, the apps and browser extensions
are all third-party, so are of varying quality. Also, using it across devices requires
you to manage your gpg keys across those devices, something I've never managed with 100%
success.

![](/images/safe.jpg)

I've been hearing a lot about [Bitwarden](https://bitwarden.com) recently. It's another open-source password manager
with free, premium, hosted or self-hosted options, it doesn't rely on gpg and the apps are developed
by the same project, so are far more consistent. I thought I'd give it a go!

Self-hosting Bitwarden is fairly involved, it's not just "snap install bitwarden".
However, it's [a very well documented process](https://bitwarden.com/help/article/install-on-premise/) 
and I didn't have any issue getting it running after an evening's tinkering. The result is a cluster 
of about a dozen docker containers, which provide a web UI and the API for any apps.

As with [my other self-hosted services](https://barrenfrozenwasteland.com/2019/07/hosting-your-own-cloud-2019), 
I have this running behind an nginx reverse proxy to have everything running over HTTPS on standard ports.

This all worked well, but I am running it on my HP Microserver and it was feeling the strain a bit.
Running 12 containers including an mssql database might make sense if you're running a service that 
needs to scale up to serve a company's users, but for a single user or a few family members it's a 
bit excessive.

Luckily there is an alternative. [Bitwarden_rs](https://github.com/dani-garcia/bitwarden_rs) 
is a third-party implementation of the Bitwarden API, so its compatible with the apps, 
but it runs as a single, much lighter container and uses SQLite by default. 
Also [very well documented](https://github.com/dani-garcia/bitwarden_rs/wiki), I set it up to 
[run on boot using systemd-docker](https://github.com/dani-garcia/bitwarden_rs/wiki/Running-with-systemd-docker). 
I mapped the container to the same port as I had the original Bitwarden, so my nginx config pointed at the new service with no changes.

To migrate from pass, I used pass2csv to output all of my passwords to a CSV flatfile. I then used 
[this script](https://gist.github.com/Yukaii/baa8b6fda3a25b043a109fcdbe460395) from github to convert
the file to be bitwarden-compatible, and imported through the web interface. The script is written in
javascript so runs with nodejs, and requires the fast-csv package to be installed through npm.

When switching from Bitwarden to bitwarden_rs, the new service doesn't know about users and password stores
imported to the original service. To handle this migration, I used the web interface to export an import in 
Bitwarden's own JSON format.

Image credit: [Safe](https://www.flickr.com/photos/15131913@N00/288491653) 
by [Rob Pongsajapan](https://www.flickr.com/photos/pong/)
