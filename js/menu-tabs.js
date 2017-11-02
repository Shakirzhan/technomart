(function($) {
	$(function() {
		$('ul.menu-tabs').each(function() {
			$(this).find('li').each(function(i) {
				$(this).click(function(){
					$(this).addClass('active').siblings().removeClass('active').closest('div.tabs').find('section.tabs__content').removeClass('active').eq(i).addClass('active');	
				});	
			});	
		});	
	})
})(jQuery)