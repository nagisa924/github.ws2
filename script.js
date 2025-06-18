//  <!-- ヘッダーscrollTop -->
    
        $(document).ready(function () {
            var header = $('.header__inner');
            var scrollThreshold = 50;

            $(window).on('scroll', function () {
                if ($(this).scrollTop() > scrollThreshold) {
                    header.addClass('fixed');
                } else {
                    header.removeClass('fixed');
                }
            });
        });
    

    // <!-- スクロール -->
    
        $(document).ready(function () {
            const $scrollDownContainer = $('.scroll-down-container');
            const $toTopButton = $('.footer__totop');
            const $header = $('header');

            $(window).on('scroll', function () {
                const headerHeight = $header.outerHeight();
                const scrollTop = $(window).scrollTop();

                if (scrollTop > 300) {
                    $scrollDownContainer.fadeOut(500);
                    $toTopButton.addClass('show');
                } else {
                    $scrollDownContainer.fadeIn(500);
                    $toTopButton.removeClass('show');
                }
            });

            $toTopButton.on("click", function (e) {
                e.preventDefault();
                $("html, body").animate({ scrollTop: 0 }, 500);
            });
        });
    

    // <!-- works スライドショー -->
    // <scrip src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></scrip>
    
        $(document).ready(function () {
            var swiper = new Swiper('.swiper', {
                loop: true,
                observer: true,
                observeParents: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false
                },
                speed: 1000,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },

                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    hideOnClick: false
                },
                on: {
                    slideChange: function () {
                        swiper.pagination.update();
                    }
                }
            });
        });
    

    // <!-- ハンバーガーメニュー -->
    
        $(document).ready(function () {
            $('#js-hamburger').on('click', function () {
                // console.log("ハンバーガーメニューがクリック");
                $('#header__nav').toggleClass('open');
                $('#js-hamburger').toggleClass('open');
                $('.header__nav-list').toggleClass('open');

                // console.log("ナビゲーションのクラス:", $("#header__nav").attr("class"));
                // console.log("ハンバーガーのクラス:", $("#js-hamburger").attr("class"));

            });
        });
    
