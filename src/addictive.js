const $ = require('jquery');

const addictive = {};

addictive.toUp = function() {
  (function($) {
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
  }($));
};

addictive.toUp();

addictive.toRight = function() { // está creando una key al objeto addictive la cuál tendrá como value una función
  (function($) { // plugin empieza de esta manera para que así todas las variables creadas dentro de él no choquen con las de otros plugins.
    $.fn.slideRight = function() { // nombre del plugin slideRight.
      const divToRight = $(this); // a la variable divToRight le pasamos como valor el elemento al que se le aplicó el plugin.
      const cordRight = divToRight.offset().top - 200; // cordenadas de la posición de la parte superior del elemento.
      $(window).scroll(function() { // función a aplicar cuando se haga scroll a la página
        if (window.scrollY >= cordRight) { // condición: si la las coordenadas del scroll de la pantalla y las cordenadas de la posición del elemento son iguales.
          $(divToRight).css('position', 'relative'); // se le agregará al elemento la posición relativa y se desencadenará la animación.
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