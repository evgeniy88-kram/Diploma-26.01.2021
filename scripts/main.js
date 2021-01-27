;(function($){
    $(function (){
//Timer
        let countDownDate = new Date("Jan 26, 2021 18:25:00").getTime();
        let x = setInterval(function() {
            let now = new Date().getTime(),
                dist = countDownDate - now,
                day = Math.floor(dist / (1000 * 60 * 60 * 24)),
                hour = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                min = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60)),
                sec = Math.floor((dist % (1000 * 60)) / 1000);
            if (day < 10) {
                day = `0` + day;
            }
            if (hour < 10) {
                hour = `0` + hour;
            }
            if (min < 10) {
                min = `0` + min;
            }
            if (sec < 10) {
                sec = `0` + sec;
            }
            $('#timer').html(`${day} : ${hour} : ${min} : ${sec}`);

            if (dist <= 0) {
                clearInterval(x);
                $('#timer').html('Акция закончилась.');
                $('.special__content__right__price span:nth-child(2)').css('display','none');
                $('.special__content__right__price span:nth-child(1)').css({'color': '#FF2747',
                    'text-decoration': 'none', 'margin-right':'50px'});
                $('.special__content__left div').css('display', 'none');
                $('.special__content__right__price #buy__btn-7').hide();
                $('.special__content__right__price #buy__btn-8').css('display', 'flex');
            }
        }, 1000);

        ////////
        //Menu
        $('#hamburger').click(function() {
            var clicks = $(this).data('clicks');
            if (clicks) {
                $('#nav').css('display', 'none');
            } else {
                $('#nav').css({
                    'display': 'flex',
                     'flex-direction': 'column',
                     'width': '95px',
                     'align-items': 'start',
                     'height': '300px',
                     'margin' : '0 20px 0 0'
                });
            }
            $(this).data("clicks", !clicks);
        });
        //
        //Slick-sliders
        $('.accessories__slick').slick({
            autoplay:true,
            autoplaySpeed: 5000,
            arrows: true,
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1150,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 700,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                    }
                }]
        });
        $('.review__slick').slick({
            autoplay:true,
            autoplaySpeed: 5000,
            arrows:true,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 700,
                settings: {
                    arrows: false
                }
            }]
        });
        //
        //map menu
        $('.header__btn').on('click', function () {
            $('.modal__contact, .dark__background').css('display','flex');
        });
        $('.modal__contact__close').on('click', function (){
            $('.modal__contact, .dark__background').hide();
        })
        //
        //Reg form
        $('.header__navbar__btn').on('click', function () {
            $('.modal__enter, .dark__background').css('display','block');
        });
        //
        //Video
        $('#video').on('click', function (){
            $('.modal__news__video, .dark__background').show();
        });
        //
        //smooth scrolling
        $("body").on('click', '[href*="#"]', function(e){
            var fixed_offset = 100;
            $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
            e.preventDefault();
        });
        //
        //Close modal by html click
        $('html').mouseup(function (e) {
            let container = $(".modal__news__video, .modal__contact, .modal__enter, .modal__bag");
            if (container.has(e.target).length === 0){
                container.hide();
                $('.dark__background').hide();
            }
        });
        //Button buy
        let numbClicks = 0;
        $('.buy_btn').on('click', function(){
            $('#bagNumb').show().
            text(`${numbClicks += 1}`).
            css({'display':'flex', 'justify-content':'center', 'align-items':'center'});
            if (numbClicks > 0) {
                $('.modal__bag h3, .modal__bag svg').hide()
            }
        });
        //
        //Adding to Bag
        let Bag = [],
            Products = [599, 480, 720, 520, 18];
        $('#buy__btn-1').on('click', function(){
            $('.modal__bag ol').append('<li>STIHL MS 192C CHAINSAW <span>480.00 $</span></li>');
            Bag.push(Products[1]);
        });
        $('#buy__btn-2').on('click', function(){
            $('.modal__bag ol').append('<li>STIHL MS 185 CHAINSAW <span>599.00 $</span></li>');
            Bag.push(Products[0]);
        });
        $('#buy__btn-3').on('click', function(){
            $('.modal__bag ol').append('<li>STIHL MS 180 CHAINSAW <span>720.00 $</span></li>');
            Bag.push(Products[2]);
        });
        $('#buy__btn-4').on('click', function(){
            $('.modal__bag ol').append('<li>STIHL MS 185 CHAINSAW <span>599.00 $</span></li>');
            Bag.push(Products[0]);
        });
        $('#buy__btn-5').on('click', function(){
            $('.modal__bag ol').append('<li>STIHL MS 192C CHAINSAW <span>480.00 $</span></li>');
            Bag.push(Products[1]);
        });
        $('#buy__btn-6').on('click', function(){
            $('.modal__bag ol').append('<li>STIHL MS 180 CHAINSAW <span>720.00 $</span></li>');
            Bag.push(Products[2]);
        });
        $('#buy__btn-7').on('click', function(){
            $('.modal__bag ol').append('<li>STIHL MS 193 T Professional <span>520.00 $</span></li>');
                Bag.push(Products[3]);
        });
        $('#buy__btn-8').on('click', function(){
            $('.modal__bag ol').append('<li>STIHL MS 193 T Professional <span>720.00 $</span></li>');
            Bag.push(Products[2]);
        });
        $('#buy__btn-9').on('click', function(){
            $('.modal__bag ol').append('<li>МАСЛО CHAIN SAW OIL <span>18.00 $</span></li>');
            Bag.push(Products[4]);
        });
        $('#buy__btn-10').on('click', function(){
            $('.modal__bag ol').append('<li>Цепь ДЛЯ БЕНЗОПИЛЫ STIHL <span>18.00 $</span></li>');
            Bag.push(Products[4]);
        });
        $('#buy__btn-11').on('click', function(){
            $('.modal__bag ol').append('<li>Защита ЛИЦА STIHL G350 <span>18.00 $</span></li>');
            Bag.push(Products[4]);
        });
        $('#buy__btn-12').on('click', function(){
            $('.modal__bag ol').append('<li>Сумка STIHL G350 <span>18.00 $</span></li>');
            Bag.push(Products[4]);
        });
        //Bag
        $('.header__navbar__bag').on('click', function () {
            $('.modal__bag, .dark__background').css('display','block');
            function arraySum(array){
                let sum = 0;
                for(var i = 0; i < array.length; i++){
                    sum += array[i];
                }
                if (numbClicks > 0) {
                    $('.modal__bag__content p').html('Сумма Вашей покупки: ' + sum +' $');
                    $('.modal__bag__content__btn').css('display','flex');
                }
            }
            arraySum(Bag);
        });
        $('.modal__bag__close').on('click', function (){
            $('.modal__bag, .dark__background').hide();
        })
        //


    });
})(jQuery);

// Карта Google
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11.25,
        center: { lat: 48.73161, lng: 37.61589 },
    });
    const mark = new google.maps.Marker({
        position: { lat: 48.7343469, lng: 37.597213 },
        map,
        title: "STIHL",
        animation: google.maps.Animation.BOUNCE
    });
    const popUpContent = "Адрес: г.Краматорск, ул.Дворцовая, 100";
    console.log(popUpContent);
    const infoWindow = new google.maps.InfoWindow({
        content: popUpContent,
    });
    mark.addListener("click", () => {
        infoWindow.open(map, mark);
    });
}