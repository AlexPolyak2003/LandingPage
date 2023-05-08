

$(document).ready(function(){
	var lpn = new LPNavigator('.screen');
	// const block = document.getElementById('block'),
	// 	blockH = document.getElementById('block').clientHeight
	
	$('#navLogo').click(function(){
		lpn.scrollTo(0);
	});
	


	lpn.onShowScreen = function(idx) {
		let scroll = window.scrollY
		
		
		// if (idx > 0)

		if (idx > 0)
		$('.navbar').addClass('smooth-show').removeClass('smooth-hide');
		else $('.navbar').addClass('smooth-hide').removeClass('smooth-show');


		
		
		
		// $('.navbar').removeClass('smooth-hide').addClass('smooth-show');
		// else $('.navbar').removeClass('smooth-show').addClass('smooth-hide');

	
		
		// $('.navbar').removeClass('smooth-hide')
		
		
		// .addClass('smooth-hide');
		// else $('.navbar').removeClass('smooth-hide').addClass('smooth-show');
 		
		// if (scroll < 464)
		// $('.navbar').removeClass('smooth-show').addClass('smooth-hide')



	}
	
	lpn.onShowScreen(); // handle refresh for scrolled down page





});
