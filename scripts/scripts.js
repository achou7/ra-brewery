$('.hamburger').click(function() {
  $('.hamburger span').toggleClass('selected');
  $('nav').toggleClass('open');
  $('nav').toggleClass('close');
});