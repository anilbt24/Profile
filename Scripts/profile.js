$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
  if ($(document).scrollTop() > 500) {
    $('div.progress').addClass('anim');
  } else {
    $('div.progress').removeClass('anim');
  }
});
