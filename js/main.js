$(function () {
    $('.main_slide').slick({
        //arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
    })
})