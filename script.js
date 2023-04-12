$(document).ready(function(){

$(window).scroll(function(){
    if(this.scrollY>20){
        $('.navbar').addClass("sticky")
    }
    else{
        $('.navbar').removeClass("sticky")
    }
    if(this.scroll>500){
        $('.scroll-up-btn').addClass("show");

    }else{
        $('.scroll-up-btn').removeClass("show");

    }


});
    $('.scroll-up-btn').click(function(){
        $('.html').animate({scrollTop:0})
    });

    $('.menu-btn').click(function(){
        $('.navbar.menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
        var typed = new Typed(".typing",{
            strings:["DEVELOPPEUSE FULL STACK PYTHON","FREELANCER","DESIGNER","ETUDIANTE EN LICENCE 3 PCSM(UCAD)"],
            typeSpeed:100,
            backSpeed:60,
            loop:true,

        });
        var typed = new Typed(".typing-2",{
            strings:["DEVELOPPEUSE FULL STACK PYTHON","FREELANCER","DESIGNER","ETUDIANTE EN LICENCE 3 PCSM(UCAD)"],
            typeSpeed:100,
            backSpeed:60,
            loop:true,

        });
         var typed = new Typed(".typing-3",{
            strings:["NDIAYE dev full stack","DELZA NDIAYE dev full stack"],
            typeSpeed:100,
            backSpeed:60,
            loop:true,

        });
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                nav:false,

            },
             600:{
                items:2,
                nav:false,
                
            },
            1000:{
                items:3,
                nav:false,
                
            }
        }

    });

});