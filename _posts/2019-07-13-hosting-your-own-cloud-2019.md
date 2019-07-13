---
id: 342
title: Hosting your own cloud, 2019 edition
date: 2019-07-13T13:00:00+00:00
author: mark
layout: post
guid: https://barrenfrozenwasteland.com/342
permalink: /2019/07/hosting-your-own-cloud-2019
image: https://barrenfrozenwasteland.com/images/hosting-your-own-cloud.png
---
It's been a long time since [I first wrote about self hosting "cloud" services](/2011/07/self-hosted-cloud/) to avoid reliance on third party companies that harvest your data. Things have moved on a lot since then, so I thought it was about time to write about my current set-up.

![A photo of my presenting my "Hosting your own cloud" talk at Oggcamp 2011](/images/hosting-your-own-cloud.png)

## Hardware
I'm still running the same [HP Proliant Microserver](https://barrenfrozenwasteland.com/2011/07/hp-proliant-microserver-review/) that I have for years. I've upgraded the RAM and added an extra gigabit ethernet interface.  The big change is how I handle my storage.

Rather than using software RAID on the microserver, I now have a separate RAID appliance. I'm using a [Neatgear ReadyNAS Ultra 4](https://www.netgear.com/support/product/RNDU4000%20(ReadyNAS%20Ultra%204).aspx) with 4 2TB disks. This gives me total usable storage of around 5TB.

Since the server and NAS each have 2 gigabit network interfaces, as well as having them both connected to my LAN, I also have them directly connected together. I then mount the NAS volume on the Microserver using this dedicated connection, to avoid any contention from other network traffic when accessing the storage.

## Server software
The Microserver is running [Ubuntu 18.04 LTS](https://ubuntu.com), which will come as no surprise to anyone who knows me. I have [Nextcloud](https://nextcloud.org/) installed using the [snap package](https://github.com/nextcloud/nextcloud-snap), which keeps it contained an updated. Since I am using the NAS for my storage, I had to allow the Nextcloud snap to access removable media using the following command:

`$ sudo snap connect nextcloud:removable-media`

With my NAS mounted at /media/nas, I can then use Nextcloud's external storage plugin to make folders on my NAS available to Nextcloud, using the "local" option.

The Nextcloud snap has its own instance of the apache web server, running on port 80 by default. Since I might have other web apps running on the server, I changed this to port 8080 (instructions in the snap readme linked above), and set up [nginx](http://nginx.org/) as a reverse proxy. This allows me to access nextcloud at http://myserver/nextcloud/.  The nginx configuration to make this possible goes in `/etc/nginx/sites-available/default.conf` and looks like this:

```
location /nextcloud/ {
    proxy_pass http://localhost:8080/;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```
I am also using the Nextcloud Contact and Calendar apps, to provide me with a CalDAV and CardDAV server.

Alongside Nextcloud, I want a way of serving my media so that I can stream music and video from my server to whereever I am without having to sync it. I have tried various solutions for this in the past including the Owncloud music app, Ampache, and Emby, but I am currently using [Plex](https://www.plex.tv/). Sadly Plex is not open source. I was using Emby for a long time because it was open source, but when they changed their licensing this advantage went away. Testing Plex as an alternative, I found it to be slightly better in every conceivable way, which makes it much better overall. They key is that I can still run it on my own server, and keep my data on my own hardware rather than having to upload it to someone else's service or rely on a subscription to another company's library.

## Client software
On my laptop, I am using the offical [Nextcloud client](https://nextcloud.com/install/#install-clients) to synchronise my files. In the past, the official OwnCloud and Nextcloud clients weren't up to the task when it came to syncing large volumes of data, so I used alternative solutions such as [Bittorrent Sync](https://www.resilio.com/) and [Syncthing](https://syncthing.net/). However, these days the modern Nextcloud client works like a charm.  It gives the option to choose which folders are synced to which device, so I exclude some folders such as my video collection from syncing to my laptop.  I could still access these files via WebDAV if I needed to.

On Ubuntu 19.04, you can add your Nextcloud server in the "Online accounts" settings, which will provide integration with the desktop calendar and add a shortcut in the file manager to view and access your files via WebDAV.

On on mobile, I again use the offical [Nextcloud app](https://f-droid.org/en/packages/com.nextcloud.client/), which doesn't sync your files automatically but does download them on demand. It also has an "instanct upload" feature which will watch configured directories for new images, and automatically upload them to the server. To synchronise the calendar and contacts, I use [DAVx⁵](https://f-droid.org/en/packages/at.bitfire.davdroid/).

Plex allows you to play media through its web interface using any browser, and also has native apps for many platforms, some of which require payment. The option I've found most effective is to run Kodi with the [Plex plugin](https://kodi.tv/plex-add-on-for-kodi), which is free and gives you full access to stream your media. I am currently running this on my steam box/HTPC for video, a Joggler for music, and laptop (with Kodi in windowed mode) for music. It's worth noting that the client is just for consuming your media. If you want to manage your library or edit playlists, you need to use the web interface.

## Configuration
A key part of this solution for me was being able to point my devices at my server a to access my data from anywhere, while avoiding a round-trip via the Internet when I'm at home with my server.
In order to do this, I need my server to be accessible to the Internet, on a domain name that I control. However, have a regular domestic ISP without a fixed IP address.

The first part of this solution is to make my web server available to the Internet. Since I've got nginx running on port 80, this is a simple case of configuring my router to allow inbound traffic on port 80, and forward it to my server's internal IP address. I did this through the web interface on my ISP's router.

The next thing to do was set up dynamic DNS, which provides me with a domain name that will always point to my current public IP address. There are several providers for this type of service, but I went with [afraid.org](http://freedns.afraid.org/).  This gives me an address like mydomain.afraid.org which will always point to my home. Putting http://mydomain.afraid.org/nextcloud/ into a web browser now gives me the Nextcloud login page.

With my data available over the Internet, I needed to set up HTTPS so that it's all encrypted in transit. [LetsEncrypt](https://letsencrypt.org/) is a free service that will issue you a certificate and configure your web service to use it, with its certbot tool. You can even set up a cron job so that it will auto-renew your certificate when needed. However, since mydomain.afraid.org isn't owned by me, I can't (or at least, should't) get an SSL certificate for that domain.

I already own a domain name that is registered with [Gandi](https://gandi.net) who I'd definitely recommend for good value and features. In my DNS settings, I have set up a CNAME record, which allows me to point myserver.mydomain.com to mydomain.afraid.org. This means that myserver.mydomain.com will now always resolve to my home IP address, and going to http://myserver.mydomain.com/nextcloud/ gives me access to Nextcloud.

Now I've got my own domain name pointing at my server, I was able to use certbot to issue a certificate for that domain and configure nginx, allowing me securely access to Nextcloud over the Internet.

This is fine when I'm not at home, but if I connect to myserver.mydomain.com, all the traffic will be routed via my Internet connection, rather than just over my LAN, which will slow things down.  When I'm connected to my LAN, I want myserver.mydomain.com to go straight to my Microserver's LAN address.

To do this, I have dnsmasq installed on my Microserver, which provides local DHCP and DNS services. I have turned off DHCP on my router, so whenever a device connects to my LAN, it will get its IP address from dnsmasq. The DCHP configuration will also tell the device to use the Microserver as its default DNS server. In dnsmasq's DNS records, I then point myserver.mydomain.com to the Microserver's LAN IP address. With all this configured, when I am connected the LAN, requests to myserver.mydomain.com stay within the LAN, but if I'm somewhere else they find their way over the Internet. The dnsmasq configuration to achieve this looks something like this:

```
interface=lo
bind-interfaces
listen-address=127.0.0.1
listen-address=192.168.0.10
server=1.1.1.1 # Upstream DNS servers for other domain names
server=1.0.0.1
address=/myserver.mydomain.com/192.168.0.10
dhcp-range=192.168.0.50,192.168.0.150,12h
dhcp-option=option:router,192.168.0.1
```
Plex is a bit awkward. The supported way to access your Plex server over the Internet is to enable the "Remote access" feature, then access your server via the plex.tv web client. It can't be configured to use an address like myserver.mydomain.com/plex, since it expects to be running at the root of the server, and it doesn't like it if it's in a subdirectory. To get around this, I set up a second CNAME record, plex.mydomain.com, a second SSL certificate with certbot, and [a second "site" in nginx](https://github.com/toomuchio/plex-nginx-reverseproxy/blob/master/nginx.conf). This now makes plex.mydomain.com the universal address for my Plex server.

