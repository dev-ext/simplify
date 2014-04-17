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

//Found in www.stackoverflow.com//
jQuery.fn.ToggleInputValue = function(){
    return jQuery(this).each(function(){
        var Input = jQuery(this);
        var default_value = Input.val();

        Input.focus(function() {
           if(Input.val() == default_value) Input.val("");
        }).blur(function(){
            if(Input.val().length == 0) Input.val(default_value);
        });
    });
}
/*jQuery(document).ready(function(){
    jQuery('.toggle').ToggleInputValue();
});*/