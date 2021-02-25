$('document').ready(function()
{
  $('#reserve').click(function()
  {
    $('#reservemodal').modal('toggle');
  });
  $("#login").click(function()
  {
   $('#loginmodal').modal('toggle');
  });
  $('.dis').click(function()
  {
      $('#loginmodal').modal('hide');
  });
  $('.end').click(function()
  {
      $('#reservemodal').modal('hide');
  });

 
})
$("#carouselButton").click(function(){
    if ($("#carouselButton").children("span").hasClass('fa fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa fa-pause');
        $("#carouselButton").children("span").addClass('fa fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa fa-play')){
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa fa-play');
        $("#carouselButton").children("span").addClass('fa fa-pause');                    
    }
});