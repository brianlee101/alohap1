

$(function(){
    
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });    
    
    $('.main-carousel').flickity({
        cellAlign: 'left',
        contain: true, 
        autoPlay: 1000,
        preNextButtons: false,
    });

    $('.buttonWrap').on('click', '.subInput', function(){
        $(this).val('');
    });

    $('.buttonWrap').on('click', 'button', function(){
        console.log(this);
        event.preventDefault();
        var textValue = $('.subInput').val();              

        function isEmail(email) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
        }

        if(isEmail(textValue)){
            alert('Thanks For Subscribing!');
        } else {
            alert('Please Enter a Valid Email!');
        }
        
    });

});