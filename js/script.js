$(document).ready(function(){
	// gallary start

	// init Isotope
var $grid = $('.item_detail').isotope({
  // options
});
// filter items on button click
$('.g_menu').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

	// gallary end

	// sticky top start

$(window).on('scroll',function(){
	if($(window).scrollTop()){
		$('header').addClass('header_bg');
	}else{
		$('header').removeClass('header_bg');
	}
});

	// sticky top end
});