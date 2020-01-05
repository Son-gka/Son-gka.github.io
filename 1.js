$(function(){
  var vitrikhoiedu = $('#khoiedu').offset().top;
  vitrikhoiedu = vitrikhoiedu -40;
  //console.log(vitrikhoiedu);

  $('.xuong, .kn').click(function(event) {

    $('html,body').animate({scrollTop:vitrikhoiedu}, 700);
  });
})
