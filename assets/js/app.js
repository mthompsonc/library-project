/* Función Desplegable */

/*jQuery.fn.deploy = function(prop, speed, callback){
   var elem, height, width;
   return this.each(function(i, el){
      el = jQuery(el), elem = el.clone().css({"height":"auto","width":"auto"}).appendTo("body");
      height = elem.css("height"),
      width = elem.css("width"),
      elem.remove();
      if(prop === "height")
         el.animate({"height":height}, speed, callback);
      else if(prop === "width")
         el.animate({"width":width}, speed, callback);
      else if(prop === "both")
         el.animate({"width":width,"height":height}, speed, callback);
   });
}
$(window).ready(function(){
   $('.down').mouseover(function(){
      if($('.plegable').hasClass('desplegado')){
         $('.plegable').removeClass('desplegado').animate({height:0},500);
      }else{
         $('.plegable').addClass('desplegado').deploy("height",500);
      }
   })*/

$(document).ready(function(){

  /* Función para movimiento de div de izquierda al centro */
  $('#divToRight').parent().mouseover(function(){
    console.log($('#divToRight').parent().width());
    /* Añadiendo estilo al div que tendrá moviento, es importante que esté en position relative. */
    $('#divToRight').css("position", "relative");
    /* Para que quede centrado, la función animate toma el ancho del div padre del div que se moverá y la divide en 2, luego le resta el ancho del div que se moverá dividido en 2 */
    $('#divToRight').animate({left: $('#divToRight').parent().width() / 2 - $('#divToRight').width() / 2});
   });


  /* Función para movimiento de div de izquierda al centro */
  $('#divToLeft').parent().mouseover(function(){
    console.log($('#divToLeft').parent().width());
    /* Añadiendo estilo al div que tendrá moviento, es importante que esté en position relative. */
    $('#divToLeft').css("position", "relative");
    /* Para que quede centrado, la función animate toma el ancho del div padre del div que se moverá y la divide en 2, luego le resta el ancho del div que se moverá dividido en 2 */
    $('#divToLeft').animate({right: $('#divToLeft').parent().width() / 2 - $('#divToLeft').width() / 2});
   });

//  console.log('La posición es ' + $('#divToLeft').offset().top);
//  console.log('La posición es ' + $('#divToLeft').outerHeight());

})

