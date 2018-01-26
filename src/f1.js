const $ = require('jquery');


  const divToRight = $('#divToRight');
  const cordRight = divToRight.offset().top - 200;

  $.fn.toRight = function() {
    $(window).scroll(function() {
      if (window.scrollY >= cordRight) {
        $('#divToRight').css('position', 'relative');
        /* Para que quede centrado, la función animate toma el ancho del div padre del div que se moverá y la divide en 2
        *luego le resta el ancho del div que se moverá dividido en 2
        */
        $('#divToRight').animate({left: $('#divToRight').parent().width() / 2 - $('#divToRight').width() / 2});
      };
    });
  };
  toRight();

