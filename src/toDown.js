const $ = require('jquery');


 $.fn.toDown = function() {
  $.fn.deploy = function(prop, speed, callback) {
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

  const divToDown = $('.plegable');
  const cordDown = divToDown.offset().top - 400;

    $(window).scroll(function() {
      if (window.scrollY >= cordDown) {
        console.log('somos iguales');
        $('.plegable').addClass('desplegado').deploy('height', 500);
      }
    });
  };