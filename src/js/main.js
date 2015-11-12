// Application Scripts:

// Десктоп меню (выпадайки)
// Мобильное меню
// Сообщения об отправке формы
// Кнопка скролла страницы
// Модальное окно
// Если браузер не знает о svg-картинках

jQuery(document).ready(function ($) {
    //Кэшируем
    var $window = $(window),
        $body = $('body');

    //
    // Десктоп меню (выпадайки)
    //---------------------------------------------------------------------------------------
    var initDesktopMenu = (function () {
        $('.js-menu li').on({
            mouseenter: function () {
                $(this).find('ul:first').stop(true, true).fadeIn('fast');
                $(this).find('a:first').addClass('hover');
            },
            mouseleave: function () {
                $(this).find('ul').stop(true, true).fadeOut('slow');
                $(this).find('a:first').removeClass('hover');
            }
        })
    })();

    //
    // Мобильное меню
    //---------------------------------------------------------------------------------------
    var initMobileMenu = (function () {
        var $hidden = '<div class="g-hidden" id="menu_clone"></div>';//необходимо запустить мобильное меню, предварительно удалив из него css-классы
        $body.append($hidden);//добавили временный скрытый блок
        $('.js-menu').clone().appendTo($('#menu_clone'));//клонировали в него десктоп-меню
        $('#menu_clone').find('ul, li').removeAttr('class');//убрали в нем классы десктоп-меню
        $('#menu_clone a').each(function () {//пробежались по линкам
            var isCurrent = false;
            if ($(this).hasClass('menu__link--current') || ($(this).hasClass('submenu__link--current'))) {
                isCurrent = true;//если содержит класс текущей страницы - изменили значение флага
            }
            $(this).removeAttr('class');//прибили в них классы десктоп-меню
            if (isCurrent) {
                $(this).addClass('current');//передали класс текущей страницы в мобильное меню
            }
        });
        $('#menu_clone > ul').slicknav({//запускаем мобильное меню
            label: '',
            allowParentLinks: true,//разрешаем переход по линкам, содержащим под-меню
            openedSymbol: '<i class="icon-down-dir"></i>',
            closedSymbol: '<i class="icon-right-dir"></i>',
            init: function () {
                $('#menu_clone').remove(); //убиваем временный скрытый блок
            }
        });
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

    //slider init
    $('.js-slider').bxSlider({
        infiniteLoop: false,
        hideControlOnEnd:true
    });

    
});
