jQuery(document).ready(function(){
	checksite();
	});
function checksite() {
var s = {};
// check has h1	
s.h1 = jQuery("h1")	;
if (s.h1.length=='' || s.h1.length==null || s.h1.length>1) {
	console.log(s.h1.length,"H1 Tag problem");
	}
// check entry 
s.entry = jQuery(".entry");
if (s.entry.length=='' || s.entry.length==null || s.entry.length>1) {
	console.log(s.entry.length,"Check HTML structure.");
	}
	
	}