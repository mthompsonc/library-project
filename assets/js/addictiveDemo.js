

const addictive = {};


addictive.toRight = function() {
   (function($) {
    $.fn.slideRight = function() {
      const divToRight = $(this);
    const cordRight = divToRight.offset().top - 200;
    $(window).scroll(function() {
      if (window.scrollY >= cordRight) {
        $(divToRight).css('position', 'relative');
        /* Para que quede centrado, la función animate toma el ancho del div padre del div que se moverá y la divide en 2
        *luego le resta el ancho del div que se moverá dividido en 2
        */
        $(divToRight).animate({left: $(divToRight).parent().width() / 2 - $(divToRight).width() / 2});
      };
    });
    };
}($));
};
addictive.toRight();
  
addictive.toLeft = function() {
     (function($) {
    $.fn.slideLeft = function() {
  const divToLeft = $(this);
    const cordLeft = divToLeft.offset().top - 200;
    $(window).scroll(function() {
      if (window.scrollY >= cordLeft) {
        console.log('somos iguales');

        $(divToLeft).css('position', 'relative');
        /* Para que quede centrado, la función animate toma el ancho del div padre del div que se moverá y la divide en 2, luego le resta el ancho del div que se moverá dividido en 2 */
        $(divToLeft).animate({right: $(divToLeft).parent().width() / 2 - $(divToLeft).width() / 2});
      };
    });
    };
}($));
  };
  addictive.toLeft();

module.exports = addictive;