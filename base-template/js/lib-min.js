// JavaScript Document
var site = {};
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Require js Object notation
require.config({
    baseUrl: 'js',
    paths: {       
        jquery: 'vendor/jquery-1.10.2.min',
		cycle2:'vendor/jquery.cycle2.min',
		wow:'vendor/wow.min',
		modernizr: 'vendor/modernizr',
		plugin: 'plugins'				
    }
});

require(['jquery','modernizr','wow','cycle2'], function(  ) {
	//complete function	
	site.animate();
    site.basic();   
	
	//site.analytic(); 
});

// animate css
site.modload_test = function () {
	Modernizr.load([
					{
					  load: '//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js',
					  complete: function () {
						if ( !window.jQuery ) {
							  Modernizr.load('js/libs/jquery-1.7.1.min.js');
						}
					  }
					},
					{
					  // This will wait for the fallback to load and
					  // execute if it needs to.
					  load: 'needs-jQuery.js'
					}
				  ]);	}
site.animate = function () {
	Modernizr.load([
					{
					  load: 'css/animate.min.css',
					  complete: function () {
						  console.log("css/animate.min.css loaded");						
					  }
					},
					{					  
					load: 'css/animate.min.css'
					}
				  ]);	}


site.basic = function () {
jQuery(document).ready(function() {
console.log('jQuery Runing.');
// Invoke to use chrome frame for IE 7 User
// Chrome Frame.
jQuery('.ie7 body').prepend('<p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>');
//remove dreamwever class from body
jQuery('.drw').removeClass('drw');


});

}
site.analytic = function () {
	/* Google Analytic */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','devtool');

devtool('create', 'UA-XXXX-Y', 'auto');
devtool('send', 'pageview');
/* end Google Analytic */
	}