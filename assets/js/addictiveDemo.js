const addictive = {};

addictive.toUp = function() {
  (function(jQuery) {
    $.fn.slideTop = function() {
      console.log('holi');
      const up = $(this);
      up.append('<a href="#" style="text-decoration: none; color: white">&#9650;</a>');
      up.css({'background-color': 'black',
        'border-radius': '100%',
        'font-size': '2.5em',
        'position': 'fixed',
        'padding-right': '0.3em',
        'padding-left': '0.3em',
        'padding-bottom': '0.2em',
        'opacity': '0.7',
        'display': 'none',
        'right': '75px',
        'bottom': '50px'});
      $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
          $(up).fadeIn();
        } else {
          $(up).fadeOut();
        }
      });
      $(up).click(function() {
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });
    };
  }(jQuery));
};
addictive.toUp();


addictive.toRight = function() {
  (function(jQuery) {
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
  }(jQuery));
};

addictive.toRight();
addictive.toLeft = function() {
  (function(jQuery) {
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
  }(jQuery));
};
addictive.toLeft();

module.exports = addictive;