---
id: 281
title: Playing WINE games with the Steam Controller
date: 2015-10-29T14:00:34+00:00
author: mark
layout: post
guid: https://barrenfrozenwasteland.com/?p=281
permalink: /2015/10/playing-wine-games-with-the-steam-controller/
---
While I do the majority of my gaming through Steam on Ubuntu, there&#8217;s always a few games around that I&#8217;d like to play and aren&#8217;t out for Linux, so I play then through WINE.  This morning I discovered that it&#8217;s  possible to play WINE games with your Steam Controller.  As usual with WINE, your mileage may vary, but here&#8217;s what I did.

Firstly, you can&#8217;t just install the Windows version of Steam.  I don&#8217;t know if it would recognise the controller, but even if it would, Steam wont run Big Picture Mode if it&#8217;s running in WINE, so you&#8217;re out of luck there.

The trick is that you can add launchers for non-steam games (or actually, any application) to your steam library.  These will run with the Steam Overlay, and therefore will support Steam Controller configurations.  To do this, you&#8217;ll need to create a .desktop launcher file for your game.  You can do this with a text editor, but I used [Arronax](http://www.florian-diesch.de/software/arronax/).

[<img class="aligncenter size-medium wp-image-282" src="{{ /wp-content/uploads/2015/10/arronax-300x240.png | prepend: site.baseurl }}" alt="arronax" width="300" height="240" srcset="/wp-content/uploads/2015/10/arronax-300x240.png 300w, /wp-content/uploads/2015/10/arronax-188x150.png 188w, /wp-content/uploads/2015/10/arronax-150x120.png 150w, /wp-content/uploads/2015/10/arronax.png 615w" sizes="(max-width: 300px) 100vw, 300px" />](/wp-content/uploads/2015/10/arronax.png)Set a title and an icon if you like, then for the command, enter the command to launch your game using WINE.  If you&#8217;re using the default WINE prefix, then this can be as simple as:

    wine ~/.wine/path/to/your/game.exe

However, I tend to install WINE games using PlayOnLinux, which installs games into separate prefixes, with appropriate versions of WINE.  This means the default command doesn&#8217;t cut it.  Instead I created the following a shell script, and set the .desktop file&#8217;s command to execute that shell script.  Here&#8217;s an example that I used:

<pre>#!/bin/bash
export WINEPREFIX=/home/steam/.PlayOnLinux/wineprefix/DiabloIII
export WINELOADER=/home/steam/.PlayOnLinux/wine/linux-x86/1.7.15/bin/wine
export WINESERVER=/home/steam/.PlayOnLinux/wine/linux-x86/1.7.15/bin/wineserver
"$WINELOADER" "$WINEPREFIX/drive_c/Program Files/Diablo III/Diablo III Launcher.exe"</pre>

You can find the appropriate wine version by looking at the configuration dialogue for the game in PlayOnLinux.  Note that PlayOnLinux can generate a .desktop files for a game, but these launch PlayOnLinux, and don&#8217;t appear to work when launched through Steam.

Once you&#8217;ve created your shell script and .desktop file, launch Steam in desktop mode, access your library and select &#8220;Add a game&#8230; > Add a Non-Steam Game&#8230;&#8221;.  This will show a list of applications in /usr/share/applications.  Click &#8220;Browse&#8221; and find the .desktop file you have created, then press &#8220;Add Selected Programs&#8221;.  The game will now appear in your library.

Launch Big Picture Mode, and select the game from your library.  You can now configure the controller as normal, and the Steam Overlay will launch with the game, giving you full support for the controller!
