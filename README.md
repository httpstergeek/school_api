school_api
====================

This is a simple php/javascript app that mimics an API. All JSON data is return from data/seattle_schools.js

## Requirements
* webserver
* PHP 5.5+
* clientside Javascript enabled

## Install
To install clone repo and copy files to your webserver.
Once install you can view a demo by visiting http://yourwebsever/school_api/api_demo.html

## Usage
To return all json data browse to http://yourwebsever/school_api/schoolapi.php. The schoolapi.php also accept filter
arguments, any key value pair within data/seattle_schools.js can be a filter argument.  Multiple filter arguments can be
passed.

## Examples
* Returns all data: http://yourwebsever/school_api/schoolapi.php
* Return school with type Elementary: http://yourwebsever/school_api/schoolapi.php?type=Elementary
* Return school with zipcode 98106: http://yourwebsever/school_api/schoolapi.php?zip=98106
* Return school with zipcode 98106 and type Elementary: http://yourwebsever/school_api/schoolapi.php?zip=98106&type=Elementary


