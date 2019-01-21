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
    
    // для мобильного меню
    $('#menu').click(function() {
        $('.menu__closed').toggle();
        $('.menu__opened').toggleClass('visible');
    });


    // слайдер
    var sliderNum = 1; //переменная для номера слайдера

    //функция для проверки номера слайдера
    function checkSliderNum(sliderNum) {
        switch (sliderNum) {
            case 1:
                slider01();
                break;
            case 2:
                slider02();
                break;
            case 3:
                slider03();
                break;
            case 4:
                slider04();
                break;
            case 5:
                slider05();
                break;
        }
    }

    //для удаления класса active для кнопки
    function removeActiveBtn() {
        $('.header-slider__button').removeClass('header-slider__button-active');
    }

    $("#next_slider").click(function () {
        if (sliderNum < 5) {
            sliderNum++;
        }
        checkSliderNum(sliderNum);
    });

    $('#prev_slider').click(function () {
        if (sliderNum > 1) {
            sliderNum--;
        }
        checkSliderNum(sliderNum);
    });


    function slider01() {
        sliderNum = 1;
        $(".header-slider").removeClass('header-slider02 header-slider03 header-slider04 header-slider05').addClass('header-slider01');
        removeActiveBtn();
        $('#slider01').addClass('header-slider__button-active');
    }

    function slider02() {
        sliderNum = 2;
        $(".header-slider").removeClass('header-slider01 header-slider03 header-slider04 header-slider05').addClass('header-slider02');
        removeActiveBtn();
        $('#slider02').addClass('header-slider__button-active');
    }

    function slider03() {
        sliderNum = 3;
        $(".header-slider").removeClass('header-slider01 header-slider02 header-slider04 header-slider05').addClass('header-slider03');
        removeActiveBtn();
        $('#slider03').addClass('header-slider__button-active');
    }

    function slider04() {
        sliderNum = 4;
        $(".header-slider").removeClass('header-slider01 header-slider03 header-slider02 header-slider05').addClass('header-slider04');
        removeActiveBtn();
        $('#slider04').addClass('header-slider__button-active');
    }

    function slider05() {
        sliderNum = 5;
        $(".header-slider").removeClass('header-slider01 header-slider03 header-slider02 header-slider02').addClass('header-slider05');
        removeActiveBtn();
        $('#slider05').addClass('header-slider__button-active');
    }


    $("#slider01").click(slider01);
    $("#slider02").click(slider02);
    $("#slider03").click(slider03);
    $("#slider04").click(slider04);
    $("#slider05").click(slider05);

});
