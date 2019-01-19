$(document).ready(function () {

    /*подстраиваем высоту секций со слайдером и видео к высоте девайса пользователя*/
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', (vh + 'px'));

    // для воспроизведения видео по нажатию кнопки
    var video = document.querySelector("#video"),
        button = document.querySelector(".video__button");

    button.addEventListener("click", function () {
        video.play()
        video.setAttribute("controls", "controls");
    }, false);

    $(".video__button").click(function () {
        $(".video__button").addClass('video-play__btn-hide');
        $(".video__poster-content").addClass('video__poster-content-hide');
        $(".video").addClass('video-on');
        $(".video-play").addClass('video-play-on');
    });


    // слайдер
    var i = 2;
    $("#next_slider").click(function () {
        var j = i;
        $(".header-slider").addClass('header-slider0' + i);
        if (i < 5) {
            i++;
        }
        $('#prev_slider').click(function () {
            $(".header-slider").removeClass('header-slider0' + j);
            if (j > 1 && j <= 5) {
                j--;
                if (i > 1) {
                    i--;
                }
            }
            $(".header-slider").addClass('header-slider0' + j);
        });
    });



    //кнопки слайдера 
    $("#slider01").click(function () {
        $(".header-slider").removeClass('header-slider02 header-slider03 header-slider04 header-slider05').addClass('header-slider01');
    });
    $("#slider02").click(function () {
        $(".header-slider").removeClass('header-slider01 header-slider03 header-slider04 header-slider05').addClass('header-slider02');
    });
    $("#slider03").click(function () {
        $(".header-slider").removeClass('header-slider01 header-slider02 header-slider04 header-slider05').addClass('header-slider03');
    });
    $("#slider04").click(function () {
        $(".header-slider").removeClass('header-slider01 header-slider03 header-slider02 header-slider05').addClass('header-slider04');
    });
    $("#slider05").click(function () {
        $(".header-slider").removeClass('header-slider01 header-slider02 header-slider03 header-slider04').addClass('header-slider05');
    });


    $('.header-slider__button').on('click', event => {
        $('.header-slider__button').removeClass('header-slider__button-active')
    }).on('click', event => {
        $(event.currentTarget).addClass('header-slider__button-active')
    });

});
