---
id: 14
title: The line of code that could
date: 2009-08-12T12:52:13+00:00
author: mark
layout: post
permalink: /2009/08/the-line-of-code-that-could/
---
<pre>--- a/theme/styles.php
+++ b/theme/styles.php

@@ -116,7 +116,7 @@ $files = array();
 // here can be overridden by theme CSS.
 if ($pluginsheets) {
     foreach ($THEME->pluginsheets as $plugintype) {
-        $files += get_sheets_for_plugin_type($plugintype);
+        $files = array_merge($files, get_sheets_for_plugin_type($plugintype));
     }
 }
</pre>

That&#8217;s the one-line patch I submitted to the [Moodle](http://moodle.org) tracker last week. It fixes a bug that was preventing plugins in the upcoming Moodle 2 from being able to include their own stylesheets.

Having been on holiday for a few days, I came back in to work today to find that the patch had been accepted and committed to the core Moodle CVS. This is a first for me, so rather chuffed with myself, I [tweeted](http://twitter.com/marxjohnson) about it.
  
This was picked up upon by Steve Lee from [OSS Watch](http://www.oss-watch.ac.uk/) who provide advice on the use of Open Source in education. He decided that it provided a good enough example of the benefits of the open development model to be worthy of a post in the [OSS Watch blog](http://osswatch.jiscinvolve.org/2009/08/12/contributing-to-an-open-source-project/). All because of one little line of code!

To pick up on some of they key points from Steve&#8217;s post, the Open Source model really does prove advantageous when developing software. I&#8217;ve been working to update our moodle plugins to use the Moodle 2.0 APIs over the last few weeks, when I hit this bug. The open nature of the code not only helped me find and fix the bug quickly (Tim Hunt, who maintains this code, was on holiday), but being able to submit the patch for inclusion in Moodle&#8217;s CVS repository makes it a lot easier for me to maintain the code at my end, rather than having to re-apply the fix every time I pull updates from moodle.org.
  
The opportunity to interact with the Moodle community is also invaluable, as it has allowed me to discuss various methods of solving the problems I&#8217;ve come across, giving me the knowledge to help others with similar problems. I&#8217;ve also contributed to discussions on future Moodle developments, such as the formation of the User Interface guidelines. When I studied HCI at university I thought it was a pain, but now I&#8217;m in the &#8220;real world&#8221; it turns out I can put my knowledge to good use!

This is also a prime example of what [Jono Bacon](http://www.jonobacon.org/2009/07/30/on-validation/) posted recently about validation, so thanks to Steve, [Tim](http://tjhunt.blogspot.com/) and [Tony](http://tonywhitmore.co.uk) for the encouragement!.
