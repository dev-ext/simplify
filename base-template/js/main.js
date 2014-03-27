// JavaScript Document
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
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 1.9.0 located at
        // js/lib/jquery-1.9.0.js, relative to
        // the HTML page.
        jquery: 'vendor/jquery-1.10.2.min',
		plugin: 'plugins',
		modernizr: 'modernizr'
		
    }
});
require(['jquery'], function(  ) {
   console.log("Jquery Load");
   site.basic();
});
require(['plugin'], function(  ) {
   console.log("Plugin Load");
});


/*
	Dependent jquery.
*/
var site = {};

site.basic = function () {
jQuery(document).ready(function() {
console.log('jQuery Runing.');
// Invoke to use chrome frame for IE 7 User
// Chrome Frame.
jQuery('.ie7 body').prepend('<p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>');
//remove dreamwever class from body
jQuery('.drw').removeClass('drw');


});

/* Google Analytic */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','devtool');

devtool('create', 'UA-XXXX-Y', 'auto');
devtool('send', 'pageview');
/* end Google Analytic */
}