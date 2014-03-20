// JavaScript Document

//## All site fuctionality javascript 


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

var grid = {
	_width_print : function () {
		jQuery(".grid_1, .grid_2, .grid_3, .grid_4, .grid_5, .grid_6, .grid_7, .grid_8, .grid_9, .grid_10, .grid_11, .grid_12").each(function(){
			var width = jQuery(this).width()+"px";			
			jQuery("p",this).text(width);
			});
		}
	};

/*
	Dependent jquery.
*/
jQuery(document).ready(function() {
grid._width_print();

});
jQuery(window).resize(function(){
	grid._width_print();
	});






