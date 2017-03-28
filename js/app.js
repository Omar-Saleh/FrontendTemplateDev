jQuery(document).ready(function($) {
  
  var droptowntext = $('.droptown__text').text();
  $('.btn').each(function(){

      var buttonColor = $(this).data('button--color');
      $(this).css('background-color',buttonColor);

      var radius = $(this).data('radius');
      $(this).css('border-radius',radius+"%");

      var shadow = $(this).data('shadow');

      if(shadow){
        var shadowcolor= $(this).data('shadow--color');
      }
  });

  $('.dropdown__btn').click(function(event){
    $(this).siblings('.dropdown__content').toggleClass('open');
  });

  $('.dropdown__item').click(function(){
    var selecteditem = $(this).parent().parent().find('.dropdown--selected');
    var txtDiv = $(this).parent().parent().parent().find('.droptown__text');
    $(txtDiv).text($(this).text());
    $(selecteditem).removeClass('dropdown--selected');
    $(this).children('b').addClass('dropdown--selected');
    $(this).parent().parent().toggleClass('open');
  });
});