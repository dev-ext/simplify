// add resizeEnd event
jQuery(window).resize(function() {
        if(this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function() {
            jQuery(this).trigger('resizeEnd');
        }, 500);
    });
// usage
/*

jQuery(window).bind('resizeEnd', function() {
    console.log("test 5");
});

*/