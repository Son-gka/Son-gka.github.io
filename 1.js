$(function(){
  var vitrikhoiedu = $('#khoiedu').offset().top;
   vitrikhoiedu = vitrikhoiedu -40;
  var vitricommit = $('#commit').offset().top;

  //console.log(vitrikhoiedu);

  $('.xuong, .kn').click(function(event) {
    $('html,body').animate({scrollTop:vitrikhoiedu}, 700);
  });
  $('.cm').click(function(event) {
  /* Act on the event */
    $('html,body').animate({scrollTop:vitricommit}, 700);
  });
})
