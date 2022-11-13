---
id: 350
title: Updating Autohandbrake
date: 2022-11-14T15:00:00+01:00
author: mark
layout: post
guid: https://barrenfrozenwasteland.com/350
permalink: /2022/11/updating-autohandbrake
image: https://barrenfrozenwasteland.com/images/pillars.jpg
---

[A few years ago](https://barrenfrozenwasteland.com/2017/08/autohandbrake-dvd-ripping-wizard/), I was ripping a large collection of DVDs, but I found the
standard open source tool, Handbrake, to be very fiddly especially when ripping multiple episodes from the same disc or set of discs. To make my life a bit
easier, I wrote [AutoHandbrake](https://github.com/marxjohnson/autohandbrake), a script which attempts to identify whether a disk contains a single long title (likely a movie) or several similar-length
titles (likely a set of episodes), then assists with naming and numbering the resulting files. The heavy lifting is done by 
[HandBrakeCLI](https://handbrake.fr/docs/en/latest/cli/cli-options.html), which reads, rips and encodes the videos.

![Pillars of Eternity in Steam Deck library](/images/pillars.jpg)

Since I wrote the tool, things have moved on a bit. DVD manufacturers often employ various tricks to bamboozle rippers: adding dozens of tiny titles,
duplicate titles, putting titles in strange orders, or other tricks to make it hard to tell which titles you want to rip. At the same time, the rising
populatity of Blu-Ray means that the HD version of a movie or show is often only a few quid more than the DVD, and even less when buying second-hand.

Both of these have led me to change my workflow when ripping disks. [MakeMKV](https://www.makemkv.com/) is not only capable of ripping Blu-Ray disks as
well as DVDs, but has much smarter algoithms than mine for working out which titles on a disk are the ones you actually want. MakeMKV doesn't do
encoding, so I still rely on Handbrake to encode the ripped files and save on disk space.

This has required some changes to AutoHandbrake. I have added a new `--directory` option which allows it to by pointed at a directory of titles that have
already been ripped by MakeMKV, rather than pointing it at a disk itself. In this case, it will list the files and treat them as a movie (if a single file)
or a set of episodes (if multiple files), and use HandBrakeCLI to encode them as before.

As well as fixing a few bugs on the way, I discovered that `gdialog` which I use to provide GUI dialogs has been replaced with a wrapper for 
[Zenity](https://help.gnome.org/users/zenity/3.32/), a similar tool that doesn't interface with the rdialog gem quite so nicely. I hope to find 
time to improve this, probably by detecting if we're in a graphical environment and using a Ruby Zenity gem instead.

You can find AutoHandbrake on my [GitHub page](https://github.com/marxjohnson), and I will mention future developments on 
[Mastodon](https://octodon.social/@marxjohnson).

