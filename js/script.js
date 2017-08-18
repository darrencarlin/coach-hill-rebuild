$(document).ready(function() {
  // Scroll to top animate
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(500); // Fade in the arrow
    } else {
      $('#return-to-top').fadeOut(500); // Else fade out the arrow
    }
  });
  $('#return-to-top').click(function() { // When arrow is clicked
    $('body,html').animate({
      scrollTop: 0 // Scroll to top of body
    }, 500);
  });
  // scroll down animate
  $('a').click(function() {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
  });
  // fade in 
  $('.fadein').hide().fadeIn(2000).removeClass('fadein');
  // Navigation Dropdown
  $(".burger-nav").on('click touch', function() {
    $("header nav ul").toggleClass("open");
    $("header nav ul").attr("aria-expanded","true");
    $('.cover-text').toggleClass("close");
  });
  // Activities Dropdown
  $('.act-links').hide();
  $(".activities img").on('click touch ', function() {
    $(this).next().toggle('slow');
  });
  // h2 underline on hover
  $('.card img').hover(function() {
    $(this).siblings('h2').addClass('active');
  }, function() {
    $(this).siblings('h2').removeClass('active');
  });
});