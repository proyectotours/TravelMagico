// java script del menu
jQuery('document').ready(function(e){
let btn = $('#toggle');
let menu = $('.navigation');

btn.click(function(){
  if(menu.hasClass('show')){
    menu.removeClass('show');
  }else{
    menu.addClass('show');
  }
})



});