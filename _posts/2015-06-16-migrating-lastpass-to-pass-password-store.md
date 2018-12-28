---
id: 253
title: Migrating Lastpass to pass password store
date: 2015-06-16T12:48:43+00:00
author: mark
layout: post
guid: https://barrenfrozenwasteland.com/?p=253
permalink: /2015/06/migrating-lastpass-to-pass-password-store/
---
I&#8217;ve been a [Lastpass](http://lastpass.com) customer for several years, and it&#8217;s been pretty much the only service I&#8217;ve used which stores my data on someone else&#8217;s servers (albeit encrypted).  I&#8217;ve never been particualrly happy with this, but haven&#8217;t found a solution that allows me to access to my passwords easily from multiple devices across multiple platforms, so have stuck with it until now.

My Lastpass subscription is due for renewal this month, and this week [Lastpass suffered a security breach](https://blog.lastpass.com/2015/06/lastpass-security-notice.html/).  This coincides with my discovery of [pass](http://www.passwordstore.org/), a unix password manager that stores your passwords locally in plain text files encrypted with GPG.  It also integrates with git to allow your password store to be easily shared between devices, and has clients for Android (which I need for my phone) and Windows (which I need for work).  I decided to have a go at migrating to see how I got on.

## Linux

Setting up on Linux was straightforward.  I&#8217;m running Ubuntu 14.04, so installed with `apt-get install pass`  I generated a key with `gpg --gen-key` and ran `pass init` to create a password store using the key.  I then ran `pass git init` to initialise the git repository.  Next, I exported my passwords from LastPass using their CSV export feature, and ran the file through [this script](http://git.zx2c4.com/password-store/tree/contrib/importers/lastpass2pass.rb) to import then into pass.  Similar scripts are available for migration from other password stores.

I installed the [Firefox extension](https://addons.mozilla.org/en-US/firefox/addon/zx2c4-pass-manager-addon/?src=search), and it works like a charm, matching the current site and filling in login forms for me.

Before I could install a client on another device, I needed to push the git password store to a server.  I logged into my server that&#8217;s accessible via the Internet, created a folder and ran `git init --bare` since I don&#8217;t need to have the files checked out on the server.  I then ran `pass git add remote` to add the server, and `pass git push` to sync the passwords.

## Android

For Android, there is a client called [Password Store](https://f-droid.org/repository/browse/?fdfilter=Password&fdid=com.zeapo.pwdstore&fdpage=2) which can be found in [F-Droid](https://f-droid.org) or the Play Store.  First, you need to install [OpenKeychain](https://f-droid.org/repository/browse/?fdfilter=OpenKeychain&fdid=org.sufficientlysecure.keychain) (available from the same places), and import your GPG key.  I followed [this guide](http://www.debuntu.org/how-to-importexport-gpg-key-pair/) to export my key, copied it to my phone and used the &#8220;Import from File&#8221; option to add it to OpenKeychain.

In Password Store, I set up the Git repository and synced down my passwords.  I then set OpenKeychain the the OpenPGP provider, and I was set.  When unlocking a password, Password Store will automatically copy it to the clipboard for a defined number of seconds, then clear it.  OpenKeychain allows you to cache your key&#8217;s password for a defined number of minutes, so you don&#8217;t have to enter it repeatedly.  It then forgets it automatically.

## Windows

**Update:** I&#8217;ve since worked out how to set up pass properly on Windows, including the Firefox extension.  [See this post for a full guide]({{ "/2015/06/configuring-pass-on-windows/" | prepend: site.baseurl }}).

There are several solutions for Windows, none of them are as complete as the Linux equivalents yet (for example, no Firefox plugin).  However, you can get a similar copy-to-clipboard-then-auto-delete workflow like on Android.

Firstly, you need to install Git and GPG.  I already had [msysgit](https://msysgit.github.io/) installed which includes gpg, but it&#8217;s an older version so I installed [GPG4Win](http://www.gpg4win.org/index.html) as well.  You then need to import your key into gpg.  I found this was easiest using the gpg CLI in git-bash (see the guide linked above again).

The &#8220;Windows Client&#8221; listed on the pass website is [Pass4Win](https://github.com/mbos/Pass4Win), but I found this to be buggy.  Instead, I went for the &#8220;Cross-platform GUI&#8221; listed in the site, [QtPass](https://qtpass.org/).  This gives you the option to use native pass, or to use GPG and Git directly.  I went for the latter option (be sure to select the gpg2.exe executable installed by GPG4Win, not the older one provided by msysgit).

Running QtPass prompted me to create a password store &#8211; I selected the key I&#8217;d already added to GPG and it created the empty store.  To configure the git repository, I found it easiest to use the command line (it didn&#8217;t prompt me for git details in QtPass. I went to the password store directory that had just been created, then ran `git init` `git remote add` added the remote details to .git/config and ran `git pull`  Closing an re-opening QtPass found the git repository and I was good to go.

## Conclusion

Lastpass has invested a lot in the usablitity of its soltution.  The browser plugins and Android apps take care of identifying websites and filling in the password for you.  pass is part way there, but still has a long way to go.  I&#8217;m willing to comprimise on the usability for the peace of mind of holding all my own data.  However, I wouldn&#8217;t recommend it to anyone who primarily uses Windows, and I wouldn&#8217;t want anyone who&#8217;s not familiar with what GPG is to try and set it up for themselves.  Once set up with the browser extension, it&#8217;s certainly a decent alternative to Lastpass on Linux, and a pretty good one on Android.
