(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    
    var isLateralNavAnimating = false;
    //open/close lateral navigation
    $('.nav-trigger-footer').on('click', toggle("footer"));
    	

    $('.nav-trigger-filter').on('click', toggle("filter"));

    let toggle = function(event, htmlType){
        	event.preventDefault();
        	//stop if nav animation is running 
        	if( !isLateralNavAnimating ) {
        		if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
        		
        		$('body').toggleClass(htmlType+'-navigation-is-open');
        		$(this).toggleClass('is-active');

        		$('.navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
        			//animation is over
        			isLateralNavAnimating = false;
        		});
        	}

  	}
});

})(jQuery, window, document);
