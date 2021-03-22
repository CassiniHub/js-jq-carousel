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
   
   console.log('aperto');
}

function init() {
   
   $('.next').click(nextClick);
   $('.prev').click(prevClick);
}

$(document).ready(init);