

const addictive = {};


addictive.toDown = function() {
  (function($) {
    $.fn.deploy = function() {
  $.fn.down = function(prop, speed, callback) {
      var elem, height, width;
      return this.each(function(i, el) {
        el = $(el), elem = el.clone().css({
          'height': 'auto',
          'width': 'auto'}).appendTo('body');
        height = elem.css('height'),
        width = elem.css('width'),
        elem.remove();
        if (prop === height)
          el.animate({'height': height}, speed, callback);
        else if (prop === 'width')
          el.animate({'width': width}, speed, callback);
        else if (prop === 'both')
          el.animate({'width': width,
            'height': height}, speed, callback);
      });
    };

  const divToDown = $(this);
  const cordDown = divToDown.offset().top - 400;

    $(window).scroll(function() {
      if (window.scrollY >= cordDown) {
        $(divToDown).addClass('desplegado').down('height', 500);
      }
    });
    };
}($));
  };

addictive.toDown();

 
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
        $(divToRight).animate({left: $(divToRight).parent().width() / 2 - $('#divToRight').width() / 2});
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