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


jQuery(document).ready(function() {
console.log('jQuery Runing.');
// Invoke to use chrome frame for IE 7 User
// Chrome Frame.
jQuery('.ie7 body, .ie8 body').prepend('<p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>');
//remove dreamwever class from body
jQuery('.drw').removeClass('drw');


});

site.analytic = function (uaid) {
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(3(i,s,o,g,r,a,m){i[\'5\']=r;i[r]=i[r]||3(){(i[r].q=i[r].q||[]).6(7)},i[r].l=1*8 9();a=s.b(o),m=s.c(o)[0];a.d=1;a.e=g;m.f.h(a,m)})(j,k,\'n\',\'//p.t-4.u/4.v\',\'2\');2(\'w\',x,\'y\');2(\'z\',\'A\');',37,37,'||devtool|function|analytics|GoogleAnalyticsObject|push|arguments|new|Date||createElement|getElementsByTagName|async|src|parentNode||insertBefore||window|document|||script||www||||google|com|js|create|uaid|auto|send|pageview'.split('|'),0,{}))
	};