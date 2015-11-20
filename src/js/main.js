// Application Scripts:

// Узнаем ширину окна браузера
// Запускаем моб.меню
// Десктоп-меню: ховер-эффект при наведении на ссылку
// Меняем прозрачность десктоп-меню при скролле контента
// Слайдер логотипов партнеров
// Слайдер цитат
// SEO-block - покажем скрытый текст по клику на ссылку "читать далее"
// График цикла проектов на Главной
// Анимация элементов страницы при скролле
// Счетчики на странице
// Тултипы

// Сообщения об отправке формы
// Кнопка скролла страницы
// Модальное окно
// Если браузер не знает о svg-картинках
jQuery(document).ready(function ($) {
    //Кэшируем
    var $window = $(window),
        $body = $('body'),
        BREAKPOINT = 768, //брекпоинт медиа-запросов
        winW = 0;//будем хранить ширину окна браузера

    //
    // Узнаем ширину окна браузера
    //---------------------------------------------------------------------------------------
    var getWindowWidth = (function () {
        winW = verge.viewportW();
        return winW;
    })();

    $window.on('resize', function () {//при резайзе окна получим актуальные значения
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
                'tolerance': 70,
                'side': 'right'
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

            //проверим, нет ли скролла при загрузке главной страницы
            var offset = $content.offset().top - $window.scrollTop();
            if (offset < topOffset) {//если есть - зафиксируем хидер
                $header.addClass('scrolled');
                flag = true;
                stickHeader();
            }
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
    // Слайдер логотипов партнеров
    //---------------------------------------------------------------------------------------
    if ($('.js-slider-partners').length) {
        initPartnersSlider();
    };
    function initPartnersSlider() {
        var slider,
        settings = function () {//будем показывать разное кол-во слайдов на разных разрешениях
            var setting,
                setting1 = {
                    maxSlides: 1,
                },
                setting2 = {
                    maxSlides: 2,
                },
                setting3 = {
                    maxSlides: 3,
                },
                setting4 = {
                    maxSlides: 4,
                },
                setting5 = {
                    maxSlides: 5,
                },
                common = {
                    minSlides: 1,
                    moveSlides: 1,
                    slideWidth: 170,
                    slideMargin: 18,
                    pager: false,
                    controls: false,
                    auto: true,
                    pause: 6000
                };

            if (winW <= 400) {
                setting = $.extend(setting1, common);
            }
            if (winW > 400 && winW <= 500) {
                setting = $.extend(setting2, common);
            }
            if (winW > 500 && winW <= 760) {
                setting = $.extend(setting3, common);
            }
            if (winW > 760 && winW <= 1000) {
                setting = $.extend(setting4, common);
            }
            if (winW > 1000) {
                setting = $.extend(setting5, common);
            }
            return setting;
        };

        function reloadSettings() {
            var set = settings();
            slider.reloadSlider($.extend(set, { startSlide: slider.getCurrentSlide() }));
        }

        var set = settings();
        slider = $('.js-slider-partners').bxSlider(set);

        $window.on('resize', function () {
            setTimeout(reloadSettings, 500);
        });
    };

    //
    // Слайдер работ портфолио
    //---------------------------------------------------------------------------------------
    function initPortfolioSlider() {
        $('.js-p-slider').find('.captions-list__link:first').addClass('active');

        var $left = $('.p-slider__arrow--left'),
            $right = $('.p-slider__arrow--right'),
            $list=$('.captions-list li'),
            $pager = $list.find('a'),
            $slider = $('.p-slider__list').bxSlider({
            auto: false,
            mode:'fade',
            infiniteLoop: false,
            pager: false,
            nextSelector: $right,
            prevSelector: $left,
            nextText: '',
            prevText: '',
            hideControlOnEnd:true,
            onSlideBefore: function ($slideElement, oldIndex, newIndex) {
                $pager.removeClass('active');
                $list.eq(newIndex).find('a').addClass('active');
            }
        });

        $('.js-p-slider').on('click', '.captions-list__link', function (e) {
            e.preventDefault();
            var $el = $(this);
            if ($el.hasClass('active')) {
                return false;
            } else {
                var index = $el.parent('li').index();
                $slider.goToSlide(index);
            }
        });
    }

    if ($('.js-p-slider').length) { initPortfolioSlider(); }

    //
    // Слайдер цитат
    //---------------------------------------------------------------------------------------
    function initQuotesSlider() {
        var $left = $('.q-slider__arrow--left'),
            $right = $('.q-slider__arrow--right'),
            $slider = $('.q-slider__list').bxSlider({
                auto: false,
                infiniteLoop: false,
                pager: false,
                nextSelector: $right,
                prevSelector: $left,
                nextText: '',
                prevText: '',
                hideControlOnEnd: true,
                adaptiveHeight: false
            });
    }
    if ($('.js-q-slider').length) {
        initQuotesSlider();
    }


    //
    // SEO-block - покажем скрытый текст по клику на ссылку "читать далее"
    //---------------------------------------------------------------------------------------
    $('.seo').one('click', '.js-seo', function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $(target).removeClass('g-hidden');
        $(this).fadeOut();
    });


    //
    // График цикла проектов на Главной
    //---------------------------------------------------------------------------------------
    function showGraph() {
        $window.unbind('scroll', initGraph);
        $('.graph__line').addClass('active');
        setTimeout(function () {
            $('.graph__part--1').fadeIn(1200, function () {
                $('.graph__num--1').addClass('active');
                $('.graph__part--2').fadeIn(1200, function () {
                    $('.graph__num--2').addClass('active');
                    $('.graph__part--3').fadeIn(1200, function () {
                        $('.graph__num--3').addClass('active');
                        $('.graph__part--4').fadeIn(1200, function () {
                            $('.graph__num--4').addClass('active');
                            $('.graph__part--5').fadeIn(1000, function () {
                                $('.graph__num--5').addClass('active');
                                $('.graph__part--6').fadeIn(800, function () {
                                    $('.graph__num--6').addClass('active');
                                });
                            });
                        });
                    });
                });
            });
        }, 3000); //3с - длительность css-анимации линии, после ее окончания начинаем поочередно показывать блоки диаграммы и номера блоков
    };

    function initGraph() {//покажем анимированную диаграмму, когда прокрутим страницу
        if (verge.inY($('.graph'))) {
            showGraph();
        }
    }

    if ($('.graph').length) {
        $window.bind('scroll', initGraph);
    }


    //
    // Анимация элементов страницы при скролле
    //---------------------------------------------------------------------------------------
    function animateOnScroll() {
        $('.animate').each(function () {
            var $el = $(this);
            if (verge.inY($el)) {
                var animate = $el.data('animate');
                $el.removeClass('animate').addClass('animated ' + animate);
                if (!$('.animate').length) {
                    $window.unbind('scroll', animateOnScroll);
                }
            }
        });
    }

    if ($('.animate').length) {
        $window.bind('scroll', animateOnScroll);
    }

    //
    // Счетчики на странице
    //---------------------------------------------------------------------------------------
    function initCounters() {
        $('.p-counter').each(function () {
            var $el = $(this);
            if (verge.inY($el) && $el.not('.started')) {
                $el.addClass('started').find('.p-counter__num').each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
            }
            if (!$('.p-counter').not('.started').length) {
                $window.unbind('scroll', initCounters);
            }
        });
    }

    if ($('.p-counter__item').length) {
        $window.bind('scroll', initCounters);
    }



    //
    // Тултипы
    //---------------------------------------------------------------------------------------
    var initTooltips = (function () {
        var setting1 = {
            position: {
                target: 'mouse',
                container: $('#page'),
                adjust: {
                    x: 15,
                    y: 15,
                    resize: true
                }
            },
            show: {
                delay: 600
            },
            hide: {
                event: 'click mouseleave'
            },
        },

        setting2 = {
            position: {
                target: 'mouse',
                container: $('#page'),
                adjust: {
                    x: 15,
                    y: 15,
                    resize: true
                }
            },
            show: {
                delay: 600
            },
            hide: {
                event: 'click mouseleave'
            },
        },
        content1 = {
            content: {
                attr: 'data-qtip'
            },
        },
        content2 = {
            content: {
                attr: 'data-qtip-alt'
            },
        },
        styling2 = {
            style: {
                classes: 'qtip-alt'
            },
        };
        

        $('[data-qtip]').qtip($.extend(setting1, content1));
        $('[data-qtip-alt]').qtip($.extend(setting2, content2, styling2));

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
            if (verge.scrollY() > 300) {
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
