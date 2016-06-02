
var rotate=0;
function rot(){
    
    $('#rot').animate({borderSpacing: 3600}, {
    step: function(now,fx) 
    {
        rotate+=271.3;
      $(this).css('-webkit-transform','rotate('+rotate+'deg)'); 
      $(this).css('-moz-transform','rotate('+rotate+'deg)');
      $(this).css('transform','rotate('+rotate+'deg)');
    },
    duration:'fast'
    },'linear')
}