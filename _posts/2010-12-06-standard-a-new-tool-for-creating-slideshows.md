---
id: 26
title: 'Standard &#8211; A new tool for creating slideshows'
date: 2010-12-06T12:56:58+00:00
author: mark
excerpt: |
  <h2>Presentations</h2>
  I've given a few presentations in my time.  At <a href="http://solent.ac.uk">University</a>, at work, at <a href="http://transfersummit.com/programme/47">conferences</a> and <a href="http://oggcamp.org/schedule">barcamps</a>, and recently to some students at the <a href="http://port.ac.uk">University of Portsmouth</a>. They've all had one thing in common: a slideshow.
  
  <h2>Slideshows Suck</h2>
  There's no reason that a presentation has to include a slideshow, but it can help focus the audiences attention on what you're saying at a particular point.  The problem I've found is that the most pervasive format for slideshows (PowerPoint) sucks, and the main alternative (OpenDocument) isn't a lot better.  They both rely on you having a local copy of the slideshow file, and having the appropriate software (and often the correct version) to display your slides as intended.
  
  <h2>S5 Sucks Less</h2>
  Recently, I started using a format called <a href="http://meyerweb.com/eric/tools/s5/">S5</a> (Simple Standards-based Slideshow System), created by <a href="http://meyerweb.com">Eric Myer</a>.  Eric was inspired by the <a href="http://www.opera.com/browser/tutorials/operashow/documentation/doc_fileformat.dml">Opera Show Format</a> which allows you to create slideshows in XHTML to run in the Opera browser.  S5 extends this idea using some simple Javascript and CSS to enable slideshows to run in any Standards-supporting browser.  This eliminates the need for presentation software to be installed, meaning you don't have to worry if your laptop dies and you're presenting from another machine.  It also makes it super-portable - you can run it from the local filesystem, upload it to some web hosting, or I just stick my slideshow in my public <a href="http://dropbox.com">Dropbox</a> folder, and present it from there.  This gives me the double-whammy of being able to give a URL to my slides straight away.
  
  <h2>Standard Makes Slideshows</h2>
  The problem presented (ho, ho) by S5 is that it lacks the familiar editing tools of current formats.  The easiest way to create one is to hand-code an HTML file, which is likely to be beyond the vast majority of presenters.  Even <abbr title="What You See Is What You Get">WYSIWYG</abbr> HTML editors aren't ideal, as you'd have to edit the slideshow as a linear page, which is confusing unless you understand exactly how S5 works.
  
  <img style="float:left" src="http://marxjohnson.github.com/standard-slideshow-moodle/standard_icon64.png" />
  So here we reach the purpose of this post.  Last night I released the first product of the <em>Standard</em> project, a new open source project I've started to produce tools for creating S5 slideshows.  The key to these products is that you won't need them to present the slideshow - you can use a web browser of your choice.  The current editor is a plugin for <a href="http://moodle.org">Moodle 2</a>, which I decided to create after using an S5 slideshow at work and seeing the potential for the format in a web-based Virtual Learning Environment.  I also plan to create a simple desktop application that can be downloaded and run, and am looking at options for the best platform (I've had <a href="http://www.adobe.com/products/air/">AIR</a> suggested, but would prefer an open source solution, I'm currently looking at Ruby/Qt).
  
  The first release is now in <a href="http://cvs.moodle.org/contrib/plugins/mod/standardslideshow/">Moodle Contrib CVS</a>, and the latest code will always be available from <a href="http://marxjohnson.github.com/standard-slideshow-moodle/">Github</a>.  If you want to keep track of the project, I'll be blogging here with the <em><a href="{{ "/index.php?q=taxonomy/term/7" | prepend: site.baseurl }}">Standard</a></em>  tag, <a href="http://twitter.com/marxjohnson">Tweeting</a> about it, and you can email me on mark at this domain.
  
  Rock and roll!
layout: post
permalink: /2010/12/standard-a-new-tool-for-creating-slideshows/
---
## Presentations

I&#8217;ve given a few presentations in my time. At [University](http://solent.ac.uk), at work, at [conferences](http://transfersummit.com/programme/47) and [barcamps](http://oggcamp.org/schedule), and recently to some students at the [University of Portsmouth](http://port.ac.uk). They&#8217;ve all had one thing in common: a slideshow.

## Slideshows Suck

There&#8217;s no reason that a presentation has to include a slideshow, but it can help focus the audiences attention on what you&#8217;re saying at a particular point. The problem I&#8217;ve found is that the most pervasive format for slideshows (PowerPoint) sucks, and the main alternative (OpenDocument) isn&#8217;t a lot better. They both rely on you having a local copy of the slideshow file, and having the appropriate software (and often the correct version) to display your slides as intended. 

## S5 Sucks Less

Recently, I started using a format called [S5](http://meyerweb.com/eric/tools/s5/) (Simple Standards-based Slideshow System), created by [Eric Myer](http://meyerweb.com). Eric was inspired by the [Opera Show Format](http://www.opera.com/browser/tutorials/operashow/documentation/doc_fileformat.dml) which allows you to create slideshows in XHTML to run in the Opera browser. S5 extends this idea using some simple Javascript and CSS to enable slideshows to run in any Standards-supporting browser. This eliminates the need for presentation software to be installed, meaning you don&#8217;t have to worry if your laptop dies and you&#8217;re presenting from another machine. It also makes it super-portable &#8211; you can run it from the local filesystem, upload it to some web hosting, or I just stick my slideshow in my public [Dropbox](http://dropbox.com) folder, and present it from there. This gives me the double-whammy of being able to give a URL to my slides straight away.

## Standard Makes Slideshows

The problem presented (ho, ho) by S5 is that it lacks the familiar editing tools of current formats. The easiest way to create one is to hand-code an HTML file, which is likely to be beyond the vast majority of presenters. Even WYSIWYG HTML editors aren&#8217;t ideal, as you&#8217;d have to edit the slideshow as a linear page, which is confusing unless you understand exactly how S5 works.

<img style="float:left" src="http://marxjohnson.github.com/standard-slideshow-moodle/standard_icon64.png" />
  
So here we reach the purpose of this post. Last night I released the first product of the _Standard_ project, a new open source project I&#8217;ve started to produce tools for creating S5 slideshows. The key to these products is that you won&#8217;t need them to present the slideshow &#8211; you can use a web browser of your choice. The current editor is a plugin for [Moodle 2](http://moodle.org), which I decided to create after using an S5 slideshow at work and seeing the potential for the format in a web-based Virtual Learning Environment. I also plan to create a simple desktop application that can be downloaded and run, and am looking at options for the best platform (I&#8217;ve had [AIR](http://www.adobe.com/products/air/) suggested, but would prefer an open source solution, I&#8217;m currently looking at Ruby/Qt).

The first release is now in [Moodle Contrib CVS](http://cvs.moodle.org/contrib/plugins/mod/standardslideshow/), and the latest code will always be available from [Github](http://marxjohnson.github.com/standard-slideshow-moodle/). If you want to keep track of the project, I&#8217;ll be blogging here with the _[Standard](/index.php?q=taxonomy/term/7)_ tag, [Tweeting](http://twitter.com/marxjohnson) about it, and you can email me on mark at this domain.

Rock and roll!
