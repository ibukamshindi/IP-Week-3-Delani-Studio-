$(document).ready(function(){
  $(".thumbnail1,.thumbnail2,.thumbnail3").mouseenter(function(){
    $('#definitions').stop().show();
  });

  $(".thumbnail1,.thumbnail1,.thumbnail2  #definitions").mouseleave(function(){
    if(!$('#definitions').is(':hover')){
      $('#definitions').hide();
    };
  });
});