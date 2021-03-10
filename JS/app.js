/* Banner Slider Plugin */
$(document).ready(function(){
	$(".slider").simpleSlider();
});

/* Mobile Menu Plugin - Mmenu */
document.addEventListener("DOMContentLoaded", function() {
            new Mmenu( "#my-menu", {
               "extensions": [
                  "pagedim-black",
                  "position-right",
                  "theme-dark"
               ]
            });
        }
    );
 
// Cookie Compliancy BEGIN
if  ($.cookie('popup') == 'popped') //if the cookie exists with the value 'popped', no popup
  {
    console.log( 'The cookie is still valid, no popup today!' );
  }
else //if there's no cookie, fire the popup, then give them a cookie
  {
    $( ".popup" ).toggle(); //show the popup by toggling away its display-none status

    $( ".popup button .cookieButton" ).click(function() { //toggle the popup when close button is hit
    $( ".popup" ).toggle();
    });
      
    $.cookie('popup', 'popped', { expires: 1, path: '/' }); //this is the cookie, named popup with the value popped, expires after 1 day and is relevant to the whole site. see 'jquery-cookie' documentation for more details: https://github.com/carhartl/jquery-cookie
    
    console.log( 'The cookie is null, you get a popup' );

  }

  // Polyfill library
const polyfillLibrary = require('polyfill-library');

const polyfillBundle = polyfillLibrary.getPolyfillString({
	uaString: 'Mozilla/5.0 (Windows; U; MSIE 7.0; Windows NT 6.0; en-US)',
	minify: true,
	features: {
		'es6': { flags: ['gated'] }
	}
}).then(function(bundleString) {
	console.log(bundleString);
});  
