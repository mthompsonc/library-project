const $ = require('jquery');

  $.fn.toLeft = function() {
    const divToLeft = $('#divToLeft');
    const cordLeft = divToLeft.offset().top - 200;
    $(window).scroll(function() {
      if (window.scrollY >= cordLeft) {
        console.log('somos iguales');

        $('#divToLeft').css('position', 'relative');
        /* Para que quede centrado, la función animate toma el ancho del div padre del div que se moverá y la divide en 2, luego le resta el ancho del div que se moverá dividido en 2 */
        $('#divToLeft').animate({right: $('#divToLeft').parent().width() / 2 - $('#divToLeft').width() / 2});
      };
    });
  };