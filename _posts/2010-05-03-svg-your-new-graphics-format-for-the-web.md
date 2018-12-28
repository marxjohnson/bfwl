---
id: 19
title: 'SVG: Your new graphics format for the web'
date: 2010-05-03T16:49:51+00:00
author: mark
excerpt: |
  This post is a write-up of the talk I gave at <a href="http://oggcamp.org">OggCamp10</a> over the weekend.
  
  It's been announced that IE9 will finally support SVG rendering, bringing it up to speed (in this area at least) with the other modern browsers. This has some potentially huge implications for web designers and developers, as it gives us a fundamentally different way of displaying content on the web.
  
  <h2>What's SVG?</h2>
  SVG stands for "Scalable Vector Graphics". <a href="http://www.w3.org/Graphics/SVG/">It's a W3C Standard</a> format which, surprisingly enough, defines a vector graphics. What's different about that? Well, the graphics in use on the web until now have been bitmap formats such as JPEG, PNG and GIF. A bitmap requires that the colour, position and (where supported) opacity of each pixel in the image is stored. Compression can be used, but in general this means that a lot of data is stored and transferred for each image, which increases exponentially as the image becomes larger or more complex.
  Vector Graphics take a fundamentally different approach. Rather than storing individual pixels, they store data about shapes. Each shape in the image has properties such as it's height, width, position and colors stored. When the image is displayed, these properties are used to dynamically render the image. This provides 2 advantages. Firstly, the file size is, generally speaking, a lot smaller for a vector image than for a bitmap image since less data has to be stored. Also, it allows the image to be scaled and stretched up or down in size, without losing resolution and becoming pixelated.
  SVG is also an XML format, so is pretty easy to learn for anyone used to XHTML or other XML formats. <a href="{{ "/dev8d/" | prepend: site.baseurl }}">It even supports CSS styling</a>, including pseudo-classes like :hover!
  
  <h2>What's so good about that then?</h2>
  One of the great advantages that vector graphics offers on the web is screen resolution-agnostic images. All too often images are a constraint on the width of a web page where they're required for a heahttp://raphaeljs.com/analytics.htmlding graphic or an important layout element. With SVG, you can have a design which scales to fit the user's screen, rather than the other way around. Furthermore, SVG already has solutions for many of the problems that CSS 3 has been trying to solve, such as rounded corners (all SVG rectangles can have a corner radius defined) and custom fonts (fonts are just vectors after all, so they can be easily embedded in an SVG).
  
  Another cool thing that SVG's good for is data visualization. As SVG is an XML format, there's various ways of dynamically generating <a href="http://raphaeljs.com/pie.html">graphs</a> from raw data.
  
  For me, the real selling point of SVG is it's potential to provide a realistic, open alternative to the proprietary Flash format for multimedia in the browser.
  SVG can be manipulated through Javascript just like HTML can (albeit currently with a standard XML DOM). This combination of vectors and scripting is remarkably similar to Flash's use of vector graphics in conjunction with ActionScript. In fact, ActionScript and JavaScript are both based on the ECMAScript standard, so moving from one to the other certainly isn't a huge paradigm shift.
  And video, I hear you ask? Well, SVG also supports a tag called "foreignobject", allowing you to easily include elements from another XML spec inside an SVG image. <a href="http://people.mozilla.com/~prouget/demos/round/index.xhtml">This can be used very effectively in conjunction with HTML5's video tag</a> to display video, with the added advantage that you're not limited to a rectangular player.
  There's still work to be done in this area. While this is all *possible* at present, there's nothing with the ease of Adobe Flash for producing SVG with animation or embedded video/audio.
  
  <h2>How do I produce SVG?</h2>
  There's 3 main options at the moment:
  <ol>
  <li>Hand-Code it
  
  Like any other XML format, you can produce an SVG document quickly and easily with a text editor. The following line is all that's needed to display a simple rectangle.
  <code>&lt;svg width="100" height="100"&gt;&lt;rect width="100" height="100" /&gt;&lt;/svg&gt;</code>
  </li>
  <li>Dynamically Generate it
  
  As an XML format, it's possible to transform any other XML data into an SVG graphic using XSLT. You can also use javascript libraries like <a href="http://raphaeljs.com">Raphael</a> and <a href="http://g.raphaeljs.com/">gRaphael</a> to do the hard work for you!</li>
  <li>Draw it
  
  There are a few packages that support SVG, but the best by far is <a href="http://www.inkscape.org/">Inkscape</a>. With full support for all SVG elements, layers, and even a raw XML editor if you want, you can't do a lot better if you want to produce an SVG quickly. Inkscape's native format is SVG with some extra metadata, but you can also save to "Plain SVG" which is web-ready.
  </li>
  </ol>
  
  This material is just a preview if what's going to be available. We are going to have to wait and see exactly how good IE9's SVG support is and how long it takes people to switch over, but with SVG as a reliably-supported format to complement not only existing image formats, but HTML itself, I can see exciting things in the next few years of the web.
layout: post
permalink: /2010/05/svg-your-new-graphics-format-for-the-web/
---
This post is a write-up of the talk I gave at [OggCamp10](http://oggcamp.org) over the weekend.

It&#8217;s been announced that IE9 will finally support SVG rendering, bringing it up to speed (in this area at least) with the other modern browsers. This has some potentially huge implications for web designers and developers, as it gives us a fundamentally different way of displaying content on the web.

## What&#8217;s SVG?

SVG stands for &#8220;Scalable Vector Graphics&#8221;. [It&#8217;s a W3C Standard](http://www.w3.org/Graphics/SVG/) format which, surprisingly enough, defines a vector graphics. What&#8217;s different about that? Well, the graphics in use on the web until now have been bitmap formats such as JPEG, PNG and GIF. A bitmap requires that the colour, position and (where supported) opacity of each pixel in the image is stored. Compression can be used, but in general this means that a lot of data is stored and transferred for each image, which increases exponentially as the image becomes larger or more complex.
  
Vector Graphics take a fundamentally different approach. Rather than storing individual pixels, they store data about shapes. Each shape in the image has properties such as it&#8217;s height, width, position and colors stored. When the image is displayed, these properties are used to dynamically render the image. This provides 2 advantages. Firstly, the file size is, generally speaking, a lot smaller for a vector image than for a bitmap image since less data has to be stored. Also, it allows the image to be scaled and stretched up or down in size, without losing resolution and becoming pixelated.
  
SVG is also an XML format, so is pretty easy to learn for anyone used to XHTML or other XML formats. [It even supports CSS styling](/dev8d/), including pseudo-classes like :hover!

## What&#8217;s so good about that then?

One of the great advantages that vector graphics offers on the web is screen resolution-agnostic images. All too often images are a constraint on the width of a web page where they&#8217;re required for a heahttp://raphaeljs.com/analytics.htmlding graphic or an important layout element. With SVG, you can have a design which scales to fit the user&#8217;s screen, rather than the other way around. Furthermore, SVG already has solutions for many of the problems that CSS 3 has been trying to solve, such as rounded corners (all SVG rectangles can have a corner radius defined) and custom fonts (fonts are just vectors after all, so they can be easily embedded in an SVG).

Another cool thing that SVG&#8217;s good for is data visualization. As SVG is an XML format, there&#8217;s various ways of dynamically generating [graphs](http://raphaeljs.com/pie.html) from raw data.

For me, the real selling point of SVG is it&#8217;s potential to provide a realistic, open alternative to the proprietary Flash format for multimedia in the browser.
  
SVG can be manipulated through Javascript just like HTML can (albeit currently with a standard XML DOM). This combination of vectors and scripting is remarkably similar to Flash&#8217;s use of vector graphics in conjunction with ActionScript. In fact, ActionScript and JavaScript are both based on the ECMAScript standard, so moving from one to the other certainly isn&#8217;t a huge paradigm shift.
  
And video, I hear you ask? Well, SVG also supports a tag called &#8220;foreignobject&#8221;, allowing you to easily include elements from another XML spec inside an SVG image. [This can be used very effectively in conjunction with HTML5&#8217;s video tag](http://people.mozilla.com/~prouget/demos/round/index.xhtml) to display video, with the added advantage that you&#8217;re not limited to a rectangular player.
  
There&#8217;s still work to be done in this area. While this is all \*possible\* at present, there&#8217;s nothing with the ease of Adobe Flash for producing SVG with animation or embedded video/audio.

## How do I produce SVG?

There&#8217;s 3 main options at the moment:

  1. Hand-Code it 
    Like any other XML format, you can produce an SVG document quickly and easily with a text editor. The following line is all that&#8217;s needed to display a simple rectangle.
  
    `<svg width="100" height="100"><rect width="100" height="100" /></svg>` </li> 
    
      * Dynamically Generate it 
        As an XML format, it&#8217;s possible to transform any other XML data into an SVG graphic using XSLT. You can also use javascript libraries like [Raphael](http://raphaeljs.com) and [gRaphael](http://g.raphaeljs.com/) to do the hard work for you!</li> 
        
          * Draw it 
            There are a few packages that support SVG, but the best by far is [Inkscape](http://www.inkscape.org/). With full support for all SVG elements, layers, and even a raw XML editor if you want, you can&#8217;t do a lot better if you want to produce an SVG quickly. Inkscape&#8217;s native format is SVG with some extra metadata, but you can also save to &#8220;Plain SVG&#8221; which is web-ready. </li> </ol> 
            
            This material is just a preview if what&#8217;s going to be available. We are going to have to wait and see exactly how good IE9&#8217;s SVG support is and how long it takes people to switch over, but with SVG as a reliably-supported format to complement not only existing image formats, but HTML itself, I can see exciting things in the next few years of the web.
