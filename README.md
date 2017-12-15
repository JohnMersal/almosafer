# Almosafer

![Almosafer](https://i.imgur.com/veP72xu.jpg)

This is my submission for the task provided.
Please feel free to ask me any questions.

# File structure

* index.html
* css
	* |----Responsive.scss / css (unused at the moment)
	* |----variable.scss (for all font variables).
	* |----bootstrap.scss (Main framework css file)
	* |----screen.scss / css (custom style for the design)
	* |---- fonts
	* |-------|----mosafer.eot/svg/ttf/woff (custom icon font made by Icomoon.io)
* images
* images-source (source folder with unoptimized images)
* js
	* |----bootstrap.bundle.min.js (main framework js)
	* |----datepicker.min.js (vendor for datepicker)
	* |----html5shiv.js (pollyfill)
	* |----index.js (custom js for the page)
	* |----jQuery.min.js
	* |----owl.carousel.min.js (slider vendor)
	* |----scrollmagic.min.js (unused for animation)
	* |----tether.js
* package.json (node modules needed for the application).
* gulpfile.js


# Gulp

I've used 
Browsersync, Image optimization with 3 different methods, sass.


To run image optimization in terminal:
`gulp image`

To start server with all functions in terminal:
`gulp`

First you need to install packages assosiated with the project: 
`npm install`

Thank you for watching