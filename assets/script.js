window.onscroll = function() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById('nav').classList.add('sticky');
  } else {
    document.getElementById('nav').classList.remove('sticky');
  }
};
function addDropDown() {
  if ($(window).width() < 900) {
    $('#nav ul li ul')
      .removeClass('dropdown')
      .addClass('dropdownmenu');
  } else {
    $('#nav ul li ul')
      .addClass('dropdown')
      .removeClass('dropdownmenu drop');
  }
}
$(window).resize(addDropDown);
$(document).ready(addDropDown);

$('.menu').on('click', function() {
  $('#nav').toggleClass('show-nav');
});

$('ul').click(function(event) {
  var target = $(event.target);
  if (target.is('a')) {
    if (target.next().hasClass('drop')) {
      target.next().removeClass('drop');
    } else {
      target.next().addClass('drop');
    }
  }
});
