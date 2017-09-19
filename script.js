$(document).ready(function() {
	
		$( function() {
    $( ".checkradio input" ).checkboxradio({
      
    });
  } );

  $('#table').DataTable({
  });

	
  $('.slide').slick({
	arrows: false,
	dots: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
  });

	$('pre').hide();
	$('.button-toggle').on('click touch', function() {
		$(this).next('pre').toggle('fast');
	});
	
	
	$('.button-toggle-d').on('click touch', function() {
		$('.pre-d').toggle(500);
		$('.pre-h').toggle(false);
		$('.pre-f').toggle(false);
	});
	
	
	$('.button-toggle-h').on('click touch', function() {
		$('.pre-h').toggle(500);
		$('.pre-d').toggle(false);
		$('.pre-f').toggle(false);
	});
	
	
	$('.button-toggle-f').on('click touch', function() {
		$('.pre-f').toggle(500);
		$('.pre-h').toggle(false);
		$('.pre-d').toggle(false);
		
	});
	
	$('div.panel').hide();
	 $("button.accordion").on('click touch ', function() {
		$(this).next().toggle('fast');
	 });
		
	 /* $('.modular-header h3').on('click touch', function() {
		$('.modular-body, .modular-footer').slideToggle('fast');
	}); */
	 	
});