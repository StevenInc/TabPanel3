//center.jQuery.js
//Steven Benajmin 2008
(function($){
	jQuery.fn.center = function(o){
	    o = $.extend({
						backgroundColor : 'white',
						border			: '1px black none'
    				 }, o || {});
	
		var element = this;
		
		var thisEl = $(element);
		var thisWin = $(window);
		
		
		$(window).load(function(){
			setCSS();
		}); //load
			
			thisWin.bind("resize",function(){setCSS()});
			
			function setCSS(){
				var imgHeight = thisEl.height();
				var imgWidth = thisEl.width();
				var winHeight = thisWin.height();
				var winWidth = thisWin.width();
				
				$(element).css({
					"position":"absolute",
					"left" : winWidth/2 - imgWidth/2,
					"top"  : winHeight/2 - imgHeight/2,
					"backgroundColor"  : o.backgroundColor,
 				});
			}; //setCSS
		
		
		
	}; //jQuery.fn.center
})(jQuery) //ensure that the '$' is used by the jQuery library in our plugin.