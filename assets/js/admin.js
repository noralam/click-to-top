;(function($){
	$(document).ready(function(){
		$('.notic-click-dissmiss').on('click',function(){
			var url = new URL(location.href);
			url.searchParams.append('cdismissed',1);
			location.href= url;
		});
		$('.btnend').on('click',function(){
			var url = new URL(location.href);
			url.searchParams.append('besdismiss',1);
			location.href= url;
		});
	});
})(jQuery);