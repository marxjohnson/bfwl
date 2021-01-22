---
id: 345
title: Syncing Rocketbook to Nextcloud notes
date: 2021-01-22T21:00:00+00:00
author: mark
layout: post
guid: https://barrenfrozenwasteland.com/345
permalink: /2021/01/syncing-rocketbook-to-nextcloud
image: https://barrenfrozenwasteland.com/images/rocketbook.jpeg
---
In an effort to write more often and more legibly,
I recently bought myself a [Rocketbook](http://
getrocketbook.com) Core, an erasable pen-and-
not quite-paper notebook with a companion
app. The app will scan your notes and send
a cloud service of your choice. For
work, [OneNote](https://www.onenote.com/) is supported which suits me
fine. However, at home I use the [Nextcloud](https://nextcloud.com/)
[Notes app](https://apps.nextcloud.com/apps/notes) to keep my notes on my own
server, which stores notes in .txt files and gives you a markdown-aware editor on web and mobile.

![Rocketbook Core notepad and pen](/images/rocketbook.jpeg)

There is a [beta Rocketbook app](https://play.google.com/apps/testing/com.rb.rocketbook) with Nextcloud
Support, but it relies on WebDAV and I couldn't
get it working, so I decided to roll my own.
The first step is to share my notes via
email. I set it to a dedicated address with
OCR transcription enabled.

![Rocketbook settings screen](/images/rb_settings.jpeg)

On my Nextcloud server, I run the following script :

{% highlight bash %}
!/bin/bash
MAILDIR=$1
DESTINATION=$2
offlineimap
mkdir /tmp/rocketbook
cd /tmp/rocketbook
for i in `ls $MAILDIR`
do
    munpack $MAILDIR/$i
    rm $MAILDIR/$i
done
rm ./*.desc
mv ./* $DESTINATION
rm -rf /tmp/rocketbook
offlineimap
{% endhighlight %}

The heavy lifting is done by `offlineimap` and
`munpack`.

`offlineimap` will syncronise your email
account to a local directory in my case
I configure it to sync a single folder.
My offlineimap config looks like this:

{% highlight ini %}
[general]
accounts = Rocketbook

[Account Rocketbook]
localrepository = Local
remoterepository = Remote

[Repository Local]
type = Maildir
localfolders = ~/Rocketbook

[Repository Remote]
type = IMAP
remotehost = mail.xxx.net
remoteuser = xxx@barrenfrozenwasteland.com
remotepassfile = ~/.imappassword

sslcacertfile = /etc/ssl/certs/ca-certificates.crt
{% endhighlight %}

munpack will extract the parts of an email
(such as attachments) into separate files
This gives me a .pdf containing the image,
a .txt file containing the transcribed text,
and and the email body in a .desc file
which I discard.
At this point, you could use the txt and pdf files however you like.
I move these files to
Nextcloud's Notes folder, delete the email
and re-run offlineimap to sync the deletion.
The script runs on a cron job to check for new notes every 5 minutes.

How well does it work? I hand-wrote this
blog post, so if you're reading it, it
worked pretty well!