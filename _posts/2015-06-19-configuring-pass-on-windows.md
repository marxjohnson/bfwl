---
id: 260
title: Configuring pass on Windows
date: 2015-06-19T14:31:07+00:00
author: mark
layout: post
guid: http://barrenfrozenwasteland.com/?p=260
permalink: /2015/06/configuring-pass-on-windows/
---
In [my last post](http://barrenfrozenwasteland.com/2015/06/migrating-lastpass-to-pass-password-store/), I concluded that pass wasn&#8217;t any good if you use Windows due to the lack of browser extension and flaky apps.  I&#8217;ve since discovered how to set up both the command-line pass client and the Firefox extension on Windows, so thought it was worth another post to explain what I did.  Note, this isn&#8217;t a straightforward process.  You&#8217;re probably only interested in this if you primarily use a Unix-like system, but need Windows support too.  pass isn&#8217;t currently an ideal solution if you primarily use Windows.  This also assumes you&#8217;re running 64-bit Windows 7, other versions may have slightly different paths in the commands.

## Dependencies

To run pass on Windows, you need GPG, Cygwin and some Cygwin packages.

For GPG, download and install [GPG4Win](http://www.gpg4win.org/).

Next, download [Cygwin](https://cygwin.com/) and run the setup.  Install the following packages: git, make, automake, tree.  If you are using git to sync your password store, you may also want to install ssh.

Run the Cygwin shell and create an alias for gpg:

<pre>alias gpg='/cygdrive/c/Program\ Files\ \(x86\)/GNU/GnuPG/gpg2.exe'
alias gpg &gt;&gt; .bash_profile</pre>

Optional: You might find it easier to set your cygwin home directory to you Windows home directory with this command:

    mkpasswd -l -p "$(cygpath -H)" > /etc/passwd

[Read this page for more information about that command.](http://stackoverflow.com/questions/225764/safely-change-home-directory-in-cygwin)

## pass

To install pass in cygwin, [download the zip](http://git.zx2c4.com/password-store/) and extract it.  In the cygwin shell, cd to the directory where you&#8217;ve extracted it, and run

<pre>make install</pre>

This will install pass to /usr/bin/pass within the cygwin environment.  You can now follow the [regular instructions](http://www.passwordstore.org/) for setting up your password store. If you are using git you may need to set the PASSWORD\_STORE\_DIR environment variable:

<pre>echo "export PASSWORD_STORE_DIR=/cygdrive/c/Users/username/.password-store" &gt;&gt; ~/.bash_profile
. .bash_profile</pre>

## Firefox extension

The firefox extension isn&#8217;t available for Windows on addons.mozilla.org (as it is for Linux), but you can [download it directly from the Github page](https://github.com/jvenant/passff/releases).

Once you&#8217;ve added it to Firefox, click the P icon on your toolbar and select Preferences.  Set the following values (note the double slashes!):

  * User Home: C:\\Users\\yourusername
  * Pass command: C:\\cygwin64\\bin\\bash.exe
  * Pass command line arguements: &#8211;login /usr/bin/pass

Thanks to [this discussion](https://github.com/jvenant/passff/issues/52) for that information.

And that&#8217;s it!