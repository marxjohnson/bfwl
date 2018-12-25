---
id: 37
title: 5-line Random Password generator
date: 2011-07-02T12:13:43+00:00
author: mark
excerpt: |
  I needed to generate a random password. There's plenty of scripts out there for doing this, but most involve creating a dictionary of characters, then looping for a given number of times generating a random number and picking out a character based on the number.  I wanted a more compact solution so here's what I came up with:
  
  <pre>
  $chars = str_split(sha1(rand()),2);
  foreach ($chars as $k => $char) {
  $chars[$k] = chr((hexdec($char)/255*95)+31);
  }
  $password = implode($chars);
  </pre>
  It's PHP, but can probably be replicated easily in other languages. Here's what it does:
  <ol>
  <li>Generates an SHA1 hash of a random number, then splits the hash into groups of 2 characters (each is a hexadecimal number =<255).</li>
  <li>Converts each hex number into decimal, scales it to value between 32 and 127, then converts that number to an ASCII character</li>
  <li>Creates a string from the array of characters</li>
  </ol>
layout: post
permalink: /2011/07/5-line-random-password-generator/
---
I needed to generate a random password. There&#8217;s plenty of scripts out there for doing this, but most involve creating a dictionary of characters, then looping for a given number of times generating a random number and picking out a character based on the number. I wanted a more compact solution so here&#8217;s what I came up with:

<pre>$chars = str_split(sha1(rand()),2);
foreach ($chars as $k => $char) {
    $chars[$k] = chr((hexdec($char)/255*95)+31);
}
$password = implode($chars);
</pre>

It&#8217;s PHP, but can probably be replicated easily in other languages. Here&#8217;s what it does:

  1. Generates an SHA1 hash of a random number, then splits the hash into groups of 2 characters (each is a hexadecimal number =<255).
  2. Converts each hex number into decimal, scales it to value between 32 and 127, then converts that number to an ASCII character
  3. Creates a string from the array of characters