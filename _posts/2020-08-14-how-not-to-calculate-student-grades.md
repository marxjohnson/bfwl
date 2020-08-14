---
id: 343
title: How (not) to calculate student grades
date: 2020-08-14T21:00:00+00:00
author: mark
layout: post
guid: https://barrenfrozenwasteland.com/343
permalink: /2020/08/how-not-to-calculate-student-grades
image: https://barrenfrozenwasteland.com/images/exams.jpeg
---
In my first job out of university, I had the task of developing a tool to calculate "minimum target grades" for FE students based on GCSE scores and regression
statistics. These grades would be used by teachers as a basis for setting target grades for their students.

![Students taking an exam](/images/exams.jpeg)

I'm no statistican. When I did my maths A-level I chose Decisions for my applied units. However, looking at the regression statistics, began to notice that some
some of these statistics looks suspect. Some of the sample sizes were tiny. Some of the standard deviations were larger than a whole grade boundary.

After realising this, I felt like it would be irresponsible for me to use these datasets to calculate target grades. I built safeguards in to the system so that it
wouldn't calculate grades if the data was of insuffient quality, and target grades would have to be determined by other means.

I hope that anyone designing algorithms to determine students' final grades would take a similar level of care.

Image credit: <a href="http://www.flickr.com/photos/23046603@N00/4721011635">"Exams 10"</a><span> by <a href="http://www.flickr.com/photos/23046603@N00">charbeck10</a></span> is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/2.0/?ref=ccsearch&atype=html" style="margin-right: 5px;">CC BY-NC-SA 2.0</a><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/?ref=ccsearch&atype=html" target="_blank" rel="noopener noreferrer" style="display: inline-block;white-space: none;margin-top: 2px;margin-left: 3px;height: 22px !important;"><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc_icon.svg" /><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc-by_icon.svg" /><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc-nc_icon.svg" /><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc-sa_icon.svg" /></a>
