---
id: 7
title: Displaying MySQL enum values in PHP
date: 2009-03-29T22:08:06+00:00
author: mark
layout: post
permalink: /2009/03/displaying-mysql-enum-values-in-php/
---
I&#8217;ve always been in the habit of using MySQL&#8217;s enum data types, allowing you to define a set of values allowed in a particular field. This saves having to create an extra table which only has 2 fields while still having a strict set of values for a field. The problem with this over the other option is that you can&#8217;t just do a SELECT query to get all the available options for the field, for example to display in an HTML <select> box.

After some googling I turned up a HowTo by Bill Heaton with a reasonable solution. However, there&#8217;s 2 niggles I had with his solution: it uses a load of string processing functions when it could use a single Regular Expression, and it&#8217;s a function, not a class.

The solution I&#8217;ve got in practice uses a &#8220;query&#8221; class I wrote, but for the example I&#8217;ll use plain old mysql_query():

<pre>class enum_values {
	
	public $values;
	
	public function __construct($table, $column){
		
		$sql = "SHOW COLUMNS FROM $table LIKE '$column'";
		if ($result = mysql_query($sql)) { // If the query's successful
			
			$enum = mysql_fetch_object($result);
			preg_match_all("/'([\w ]*)'/", $enum->Type, $values);
			$this->values = $values[1];
			
		} else {
			
			die("Unable to fetch enum values: ".mysql_error());
			
		}
		
	}
}</pre>

Let&#8217;s have a look at that code. If you&#8217;re not familiar with OOP in PHP 5, we start off by creating a class called &#8220;enum_values&#8221; with 1 property ($values) and a constructor that accepts 2 arguments, the table and column we&#8217;re getting the values from. This constructor is called when we create an instance of the class (an object), e.g.

<pre>$example = new enum_values('table_name', 'column_name');</pre>

Right, so within the constructor with have a &#8220;SHOW COLUMNS&#8221; query. This will show us the structure of a specified column in a specified table. The fields returned include &#8220;Name&#8221; (containing the column&#8217;s name) and &#8220;Type&#8221;, which contains the column&#8217;s data type, and in the case of enum, it&#8217;s possible values. This is the field we&#8217;re interested in.

To get at the values field we use mysql\_fetch\_object to create an object containing the fields and their values. We could equally use mysql\_fetch\_array here, but I like objects.
  
The next line is where the magic happens. The string we&#8217;ve got to work with in the Type field looks like:

<pre>enum('value1','value2','value3')</pre>

Bill&#8217;s solution suggests using [substr](http://uk.php.net/manual/en/function.substr.php) to cut the string down to the list of values within the brackets (after finding the position with [strpos](http://uk.php.net/manual/en/function.strpos.php)), using [explode](http://uk.php.net/manual/en/function.explode.php) to split the resulting string into an array by using the commas as delimeters, then looping through the array and removing the quotes around each value with [str_replace](http://uk.php.net/manual/en/function.str-replace.php). But wouldn&#8217;t it be a lot nicer if we could just extract the values without the quotes in the first place?

The way I solved this was with [preg\_match\_all](http://uk.php.net/manual/en/function.preg-match-all.php), which has the wonderful ability to do all this in a single line. Firstly I needed a [regular expression](http://regular-expressions.info) that matched characters in single quotes. The regex &#8216;([\w ]*)&#8217; will match a single quote, followed by any number of alphanumeric characters and spaces, followed by another single quote. Note that I haven&#8217;t used a . to allow any character inside the quotes, since this would allow single quotes, meaning the entire string would be matched. The parentheses are used to &#8220;group&#8221; the characters inside the quotes, meaning we can refer back to them.
  
The regex is then delimited with slashes (to show PHP it&#8217;s a regex), then double quotes (since we need to pass it as a string). The resulting argument passed to the function is &#8220;/'([\w ]*)&#8217;/&#8221;.

The second argument is simply the string we&#8217;re operating on, $enum->Type. The third argument is a variable that&#8217;s going to store every match found in an array. But it&#8217;s even better than that. What we actually get is a multidimensional array, with \[0] containing an array of the entire matched string, and [1] containing the contents of the first &#8220;group&#8221; within that match. If there was a second group, it would be in [2], a third in [3], etc. So while $values[0\]\[0\] would contain &#8216;value1&#8217; with the single quotes, $values\[1\]\[0\] would simply contain value1, as the characters inside the quotes were grouped.

Now we&#8217;ve got our array of values we store it in the object&#8217;s $values property (note that it&#8217;s referred to as $this->values, it&#8217;s not the same as the $values array I was just referring to). Now we can access an array of the values like this:

<pre>// Db connection stuff goes here
$example = new enum_values('table_name', 'column_name');
print_r($example->values);</pre>

Lovely!
