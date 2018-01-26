
$(document).ready(function() {
  const divToLeft = $('#divToLeft');
  const cordLeft = divToLeft.offset().top - 200;
  const divToRight = $('#divToRight');
  const cordRight = divToRight.offset().top - 200;
  const toDown = $('.plegable');
  const cordDown = toDown.offset().top - 300;


  jQuery.fn.toLeft = function() {
    $(window).scroll(function() {
      if (window.scrollY >= cordLeft) {
        $('#divToLeft').css('position', 'relative');
        /* Para que quede centrado, la función animate toma el ancho del div padre del div que se moverá y la divide en 2
        *luego le resta el ancho del div que se moverá dividido en 2
        */
        $('#divToLeft').animate({right: $('#divToLeft').parent().width() / 2 - $('#divToLeft').width() / 2});
      };
    });
  };

  jQuery.fn.toRight = function() {
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


  jQuery.fn.toDown = function() {
    jQuery.fn.deploy = function(prop, speed, callback) {
      var elem, height, width;
      return this.each(function(i, el) {
        el = jQuery(el), elem = el.clone().css({'height': 'auto', 'width': 'auto'}).appendTo('body');
        height = elem.css('height'),
        width = elem.css('width'),
        elem.remove();
        if (prop === 'height')
          el.animate({"height":height}, speed, callback);
      else if(prop === "width")
         el.animate({"width":width}, speed, callback);
      else if(prop === "both")
         el.animate({"width":width,"height":height}, speed, callback);
   });
}
$(window).scroll(function() {
if (window.scrollY >= cordDown) {
  console.log("somos iguales");
  $('.plegable').addClass('desplegado').deploy("height",500);
}
   
});
};


});




