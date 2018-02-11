$(function(){
    $(window).scroll(function(){
        var scted  = $(window).scrollTop();
        var cue = $('.sec1').offset().top;
        // console.log(cue);

        $('.main_slider .click').click(function(){
            $('html, body').stop().animate({'scrollTop':1080}, 500)
        })
    })

    $(window).scroll(function(e){
      	parallax();
    });

    function parallax(){
     	var scrolled = $(window).scrollTop();
        var sec2 = $('.contents_per').offset().top;
        console.log(sec2);
      	$('.contents_per').css('top',-(scrolled*0.7)+'px');
        console.log(scrolled);
    }

    })




// })
