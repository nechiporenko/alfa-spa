// Application Scripts:

// Узнаем размеры окна браузера
// Запускаем моб.меню
// Десктоп-меню: ховер-эффект при наведении на ссылку
// Меняем прозрачность десктоп-меню при скролле контента

// Сообщения об отправке формы
// Кнопка скролла страницы
// Модальное окно
// Если браузер не знает о svg-картинках
jQuery(document).ready(function ($) {
    //Кэшируем
    var $window = $(window),
        $body = $('body'),
        BREAKPOINT=768, //брекпоинт медиа-запросов
        winH = 0,//будем хранить высоту окна браузера
        winW = 0;//будем хранить ширину окна браузера

    //
    // Узнаем размеры окна браузера
    //---------------------------------------------------------------------------------------
    var getWindowHeight = (function () {
        winH = verge.viewportH(); //будем использовать verge - плагин для медиа-запросов
        return winH;
    })();
    var getWindowWidth = (function () {
        winW = verge.viewportW();
        return winW;
    })();

    $window.on('resize', function () {//при резайзе окна получим актуальные значения
        setTimeout(getWindowHeight, 300);
        setTimeout(getWindowWidth, 300);
    });

    //
    // Запускаем моб.меню
    //---------------------------------------------------------------------------------------
    var initMobileMenu = (function () {
        if (!$('html').hasClass('lt-ie9')) {
            var slideout = new Slideout({
                'panel': document.getElementById('page'),
                'menu': document.getElementById('slide'),
                'padding': 256,
                'tolerance': 70
            });
            // Показать-Скрыть
            $('.controls').on('click', '.menu__btn', function () {
                slideout.toggle();
            });
            //Закроем по клику по заголовку
            $('#slide').on('click', '.m-menu__title', function () {
                slideout.close();
            });

            //При ресайзе с маленького экрана на большой - спрячем моб.меню
            function closeMobileMenu() {
                winW = $window.width();
                if (winW > 750 && slideout.isOpen()) {
                    slideout.close();
                }
            }
            $(window).on('resize', function () {
                setTimeout(closeMobileMenu, 500);
            });

            //Гармошка - покажем-спрячем подменю
            $('.js-menu').on('click', '.m-menu__link--has-menu', function (e) {
                e.preventDefault();
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active').next('ul').slideUp('fast');
                } else {
                    $(this).addClass('active').next('ul').slideDown('fast');
                }
            });
        }
    })();

    //
    // Десктоп-меню: ховер-эффект при наведении на ссылку
    //---------------------------------------------------------------------------------------
    var hoverDesktopMenu = (function () {
        var $menu = $('.menu'),
            $link = $menu.find('a');
        $link.hover(function () {
            $menu.addClass('hover');
        }, function () {
            $menu.removeClass('hover');
        });
    })();

    //
    // Меняем прозрачность десктоп-меню при скролле контента
    //---------------------------------------------------------------------------------------
    var addOpacityToMenu = (function () {
        var $content = $('#content'),
            $header = $('.header'),
            topOffset = 90,//высота десктоп-меню
            isHomePage=false,
            flag=false,
            offset = 0;

        if ($header.hasClass('header--hero')) {
            isHomePage = true; //флаг Главной страницы
            $('.d-menu').wrap('<div class="d-menu__wrap"></div>');//обернем десктоп-меню
            var $wrapper = $('.d-menu__wrap');
        }
        $(window).on('scroll', function () {
            offset = $content.offset().top - $window.scrollTop();
            if (offset >= topOffset && flag) {
                $header.removeClass('scrolled');
                flag = false;
                if (isHomePage) {
                    unstickHeader();
                }
            };
            if (offset < topOffset && !flag) {
                $header.addClass('scrolled');
                flag = true;
                if (isHomePage) {
                    stickHeader();
                }
            };
        });

        function stickHeader() {//фиксируем хидер при скролле Главной страницы
            $wrapper.css('height', topOffset);
            $header.addClass('fixed');
        }
        function unstickHeader() {//убираем фиксацию
            $wrapper.removeAttr('style', 'height');
            $header.removeClass('fixed');
        }
    })();

    //
    // Сообщения об отправке формы
    //---------------------------------------------------------------------------------------
    // после аякс-отправки формы ($form), если все ок - $form.find('.g-notice--ok').fadeIn();
    // если вернуло ошибку - $form.find('.g-notice--bad').fadeIn();
    var showFormNotice = (function () {
        var $notice = $('.js-notice');
        $notice.append('<a class="g-notice__close"><i class="icon-cancel"></i></a>'); //иконка закрытия
        $notice.on('click', '.g-notice__close', function (e) {//закроем блок по клику на иконку
            e.preventDefault();
            $(this).parent('div').fadeOut();
        });
    }());

    //
    // Кнопка скролла страницы
    //---------------------------------------------------------------------------------------
    var initPageScroller = (function () {
        var $scroller = $('<div class="scroll-up-btn"><i class="icon-up-open-big"></i></div>');
        $body.append($scroller);
        $window.on('scroll', function () {
            if ($(this).scrollTop() > 300) {
                $scroller.show();
            } else {
                $scroller.hide();
            }
        });
        $scroller.on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });
    }());


    //
    // Модальное окно
    //---------------------------------------------------------------------------------------
    var showModal = (function (link) {
        var
        method = {},
        $overlay,
        $modal,
        $close;

        // добавим в документ
        $overlay = $('<div id="overlay"></div>'); //оверлей
        $close = $('<a class="modal__close" href="#"><i class="icon-cancel"></i></a>'); //иконка закрыть


        $close.on('click', function (e) {
            e.preventDefault();
            method.close();
        });

        // центрируем окно
        method.center = function () {
            var top, left;

            top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
            left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;

            $modal.css({
                top: top + $window.scrollTop(),
                left: left + $window.scrollLeft()
            });
        };


        // открываем
        method.open = function (link) {
            $modal = $(link);
            $modal.append($close);
            method.center();
            $body.append($overlay);
            $window.bind('resize.modal', method.center);
            $modal.fadeIn();
            $overlay.fadeIn();

            $overlay.bind('click', function () {
                method.close();
            });
        };

        // закрываем
        method.close = function () {
            $modal.fadeOut('fast');
            $overlay.fadeOut('fast', function () {
                $overlay.unbind('click').remove(); //убиваем оверлей
            });
            $window.unbind('resize.modal');
        };

        return method;
    }());

    // клик по кнопке с атрибутом data-modal - открываем модальное окно
    $('[data-modal]').on('click', function (e) {//передаем айди модального окна
        e.preventDefault();
        var link = $(this).data('modal');
        if (link) { showModal.open(link); }
    });

    //
    // Если браузер не знает о svg-картинках
    //---------------------------------------------------------------------------------------
    if (!Modernizr.svg) {
        $('img[src*="svg"]').attr('src', function () {
            return $(this).attr('src').replace('.svg', '.png');
        });
    }

    

    
});
