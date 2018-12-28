---
id: 5
title: Calling PUT and DELETE on RESTful PHP services with Prototype.js
date: 2009-03-06T11:08:20+00:00
author: mark
layout: post
permalink: /2009/03/calling-put-and-delete-on-restful-php-services-with-prototype-js/
---
So I was asked to create a [RESTful](http://en.wikipedia.org/wiki/REST) web service in [PHP](http://php.net). No problem. I was asked to create a PHP client that connects to it through [cURL](http://uk.php.net/curl). No problem. I was asked to create an [AJAX](http://en.wikipedia.org/wiki/Ajax_(programming)) interface to administer it. Problem.

The problem wasn&#8217;t the [same origin policy](https://developer.mozilla.org/En/Same_origin_policy_for_JavaScript), as the AJAX interface was to run on the same server as the service. The problem was implementing the HTTP methods.
  
I use [Prototype.js](http://prototypejs.org) for all of my Javascript coding. I&#8217;d recommend it to anyone, especially for AJAX as it makes your life a doddle. The basic syntax of an [AJAX request](http://www.prototypejs.org/api/ajax) using Prototype looks like this:

<pre>ajax = new Ajax.Request('test.php',{
      method: get,
      onSuccess: function(xmlHTTP) {
	$('response').update(xmlHTTP.responseText);
      }
     });</pre>

There&#8217;s [a host of options](http://www.prototypejs.org/api/ajax/options) for making various types of request, but that&#8217;s the gist of it. The problem with this, however, is that not all browsers support the PUT and DELETE methods, which in REST are used to update and delete records, respectively. As such, Prototype&#8217;s Ajax objects don&#8217;t try and send an XmlHttpRequest object using PUT or DELETE.
  
It turns out that these two methods are implemented using POST as a proxy. It then tells the web service the method you really wanted in $\_POST[&#8216;\_method&#8217;]. This means that to implement calls through AJAX, where your code would have looked something like this:

<pre>if($_SERVER["REQUEST_METHOD"] == "GET") {

  echo("This looks like a GET request to me!");

} else if ($_SERVER["REQUEST_METHOD"] == "POST") {

  echo("This looks like a POST request to me!");

} else if ($_SERVER["REQUEST_METHOD"] == "PUT") {

  echo("This looks like a PUT request to me!");

} else if ($_SERVER["REQUEST_METHOD"] == "DELETE") {

  echo("This looks like a DELETE request to me!");

}</pre>

It would now need to look like this:

<pre>if($_SERVER["REQUEST_METHOD"] == "GET") { 

  echo("This looks like a GET request to me!");

} else if ($_SERVER["REQUEST_METHOD"] == "POST" && !isset($_POST['_method'])) {

  echo("This looks like a POST request to me!");

} else if ($_SERVER["REQUEST_METHOD"] == "PUT" || $_POST['_method'] == 'put') {

  echo("This looks like a PUT request to me!");

} else if ($_SERVER["REQUEST_METHOD"] == "DELETE" || $_POST['_method'] == 'delete') {

  echo("This looks like a DELETE request to me!");

}</pre>

I&#8217;m guessing that any data you&#8217;re trying to send to PUT that would normally be read in from php://input would have to by hidden in the _POST array somewhere. More experimentation required methinks!
