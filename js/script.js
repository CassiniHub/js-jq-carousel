function nextClick() {
   
   var activeImg = $('.active');

   if (activeImg.hasClass('last')) {
      
      var nextActiveImg = $('img.first');

      activeImg.removeClass('active');
      nextActiveImg.addClass('active');
   } else {

      var nextActiveImg = activeImg.next('img');

      activeImg.removeClass('active');
      nextActiveImg.addClass('active');
   }
}

function prevClick() {
   
   var activeImg = $('.active');

   if (activeImg.hasClass('first')) {

      var nextActiveImg = $('img.last')

      activeImg.removeClass('active');
      nextActiveImg.addClass('active');
   } else {

      var nextActiveImg = activeImg.prev('img');

      activeImg.removeClass('active');
      nextActiveImg.addClass('active');
   }
}

function init() {
   
   $('.next').click(nextClick);
   $('.prev').click(prevClick);
}

$(document).ready(init);