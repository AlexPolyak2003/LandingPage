$(document).ready(function(){
	var lpn = new LPNavigator('.screen');
	
	$('#navLogo').click(function(){
		lpn.scrollTo(0);
	});
	
	lpn.onShowScreen = function(idx) {
		if (idx > 0) $('.navbar').removeClass('smooth-hide').addClass('smooth-show');
		else $('.navbar').removeClass('smooth-show').addClass('smooth-hide');
	};
	
	lpn.onShowScreen(lpn.screenIndex); // handle refresh for scrolled down page
});

