---
id: 348
title: Missing Linux save games on Steam Deck
date: 2022-05-08T15:00:00+01:00
author: mark
layout: post
guid: https://barrenfrozenwasteland.com/349
permalink: /2022/05/missing-linux-saves-on-steam-deck
image: https://barrenfrozenwasteland.com/images/pillars.jpg
---

I recently recieved my Steam Deck, and I have realised an odd quirk when installing some of my games. I've doing all my PC gaming on Linux for a long time,
so when I installed Pillars of Eternity to carry on my current playthrough, I was a bit surprised to find that none of my save games were showing up.

![Pillars of Eternity in Steam Deck library](/images/pillars.jpg)

I checked that Steam Cloud was working, and it told me that it was in-sync. I checked on the filesystem at `.local/share/PillarsOfEnernity`, and there
were my savegame files, as they should be, but the game wasn't seeing them.

I tried creating a new save game, quit and reloaded, and the game found it fine. What was going on?

The answer came when I tried searching for .savegame files in my home folder:

```
(deck@steamdeck ~)$ find . -type f -name "*.savegame"
...
./.local/share/PillarsOfEternity/SavedGames/cbd27084-3c24-4566-a371-ab09b4c175f2 quicksave.savegame
./.local/share/PillarsOfEternity/SavedGames/e21b6851-61ce-478a-8a0c-6392aa40cdf5 autosave_2.savegame
./.local/share/PillarsOfEternity/SavedGames/e21b6851-61ce-478a-8a0c-6392aa40cdf5 autosave_0.savegame
./.local/share/Steam/steamapps/compatdata/291650/pfx/drive_c/users/steamuser/Saved Games/Pillars of Eternity/cceab8afef9c4e4cbc58904c0f8d9667 7656277 Encampment.savegame
./.local/share/Steam/steamapps/compatdata/291650/pfx/drive_c/users/steamuser/Saved Games/Pillars of Eternity/cceab8af-ef9c-4e4c-bc58-904c0f8d9667 autosave_0.savegame

```

There were all my old save games in `./local/share/PillarsOfEternity`, but my new ones were under a a completely different path. `drive_c` is the clue here,
it's under a WINE prefix! Checking the game's files confirms that I've got the Windows build of the game installed, running under Proton.

```
(deck@steamdeck ~)$ ls -l .steam/steam/steamapps/common/Pillars\ of\ Eternity/
total 15624
drwxr-xr-x  2 deck deck     4096 May  8 14:47 Docs
drwxr-xr-x  2 deck deck     4096 May  8 14:47 EmptySteamDepot
-rwxr-xr-x  1 deck deck   188416 May  8 14:46 GalaxyCSharpGlue.dll
-rwxr-xr-x  1 deck deck  3824640 May  8 14:47 Galaxy.dll
drwxr-xr-x  2 deck deck     4096 May  8 14:47 Links
drwxr-xr-x 10 deck deck    20480 May  8 14:48 PillarsOfEternity_Data
-rwxr-xr-x  1 deck deck 11632128 May  8 14:39 PillarsOfEternity.exe
-rwxr-xr-x  1 deck deck   187584 May  8 14:47 steam_api.dll
-rwxr-xr-x  1 deck deck        6 May  8 14:47 steam_appid.txt
-rwxr-xr-x  1 deck deck   126976 May  8 14:47 SteamworksNative.dll
```

One solution would be to copy the old saves into the WINE prefix, meaning the Windows build should see them. This assumes that the Linux save files are 
compatible with the Windows version of the game, so your mileage may vary.

## Forcing Steam Deck to install the Linux build

The other solution which I have found works well for the games I've tried, is to force Steam to install the Linux build, rather than using Proton.

To do this:
1. Find the game in your Steam library, go to the "cog" icon on the right, then select "Manage > Uninstall".
2. Click the "cog" icon again. Go to "Properties > Compatibility".
3. Check "Force the use of a specific Steam Play compatibility tool".
4. Select "Steam linux runtime" from the list.
5. Go back and install the game again. You will now have the Linux version installed.

## Why is this happening?

It came to me as a surprise that games with a native Linux build would have the Windows build installed by default. Especially as this isn't true for
all games. In my brief experimentation, I found that Pillars of Eternity and Nuclear Throne both behave this way, but Wildermyth does not, and
installs the Linux build by default.

One possibility is that the former 2 games have a Steam Deck Compatilbity rating, where Wildermyth does not yet. Valve have undertaken a big
task in testing the Steam catalogue for Deck compatibility. As many games they are testing require Proton, they may have decided to do all
their testing via Proton, and once they have verified a game it will default to the version of Proton it was verified on.

This does make me curious about Valve's strategy for Linux compatibility. I has assumed that Proton was intended as a gateway to show developers
that Linux was a viable platform, to encourage them to produce native builds. But, if "Steam linux runtime" is just one on a list of compatibility
tools, and Proton is the default, maybe the strategy is instead to make Proton the preferred option for running games on Linux?
