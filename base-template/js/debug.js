jQuery(document).ready(function(){
	checksite();
	});
function checksite() {
var s = {};
// check has h1	
s.h1 = jQuery("h1")	;
if (s.h1.length=='' || s.h1.length==null || s.h1.length>0) {
	console.log("H1 Tag problem");
	}
// check entry 

	
	}