// Application Scripts:

// Узнаем ширину окна браузера
// Image Lazy Load - будем подгружать картинки при скролле
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
// Дозагрузка новостей при скролле
// Портфолио
// Лайтбокс
// Вкладки на странице
// Стилизация фильтра сортировки на странице каталога
// Каталог товаров (фильтры)
// Сообщения об отправке формы
// Кнопка скролла страницы
// Ф-ция скролла к началу элеметна
// Если браузер не знает о svg-картинках
// Лоадер (будем показывать во время загрузки контента)
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
    // Image Lazy Load - будем подгружать картинки при скролле
    //---------------------------------------------------------------------------------------
    $('img[data-src]').unveil();

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
            if (!$(this).hasClass('menu__link--current')) {
                $menu.addClass('hover');
            }
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
            pager: false,
            nextSelector: $right,
            prevSelector: $left,
            nextText: '',
            prevText: '',
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
                pager: false,
                nextSelector: $right,
                prevSelector: $left,
                nextText: '',
                prevText: ''
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
    initTooltips = function () {
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
    }
    initTooltips();
    
    //
    // Дозагрузка новостей при скролле
    //---------------------------------------------------------------------------------------
    function loadMoreNews() {
        var $list = $('.js-news'), //список новостей
            total = $list.data('total'), //через дата-атрибут задаем максимальное кол-во новостей на странице
            bottom; //запишем высоту блока новостей
        
        checkTotal();

        function getListHeight() {//узнаем высоту блока новостей, чтобы определить в какой точке подгружать контент
            bottom = $list.position().top + $list.outerHeight(true);
            return bottom;
        }

        $window.on('resize', function () {//пересчитаем размеры блока при ресайзе окна
            setTimeout(getListHeight, 200);
        });

        function checkTotal() {//проверяем сколько новостей загружено
            var count = $list.find('li').length;
            if (count < total) {//если загружено меньше чем указано, включаем отслеживание скролла
                getListHeight();
                $window.bind('scroll', scrollToEnd);
            }
        }

        function scrollToEnd() {//когда докрутили до нижней точки - догружаем контент и отключаем отслеживание
            var scrollPos = bottom - verge.scrollY() - verge.viewportH();
            if (scrollPos <= 0) {
                $window.unbind('scroll', scrollToEnd);
                contentLoader.show();//показали иконку загрузки
                $list.after('<ul class="g-hidden" id="hidden"></ul>');
                var $hidden = $('#hidden');
                $hidden.load('ajax/_news_content.html li', function () {
                    $hidden.find('li').each(function () {
                        var $item = $(this);
                        $list.append($item);
                    });
                    $list.find('img[data-src]').unveil();//натравим на дозагруженный контент плагин подгрузки картинок
                    $hidden.remove();
                    contentLoader.hide();
                    checkTotal();//новая проверка кол-ва загруженных новостей
                });
            }
        }


    }

    if ($('.js-news').length) {
        loadMoreNews();
    }

    
    //
    // Портфолио
    //---------------------------------------------------------------------------------------
    function initPortfolioList() {

        $('.js-folio-list').find('.p-slider__link').each(function () {//если происходит переход на страницу по клику в слайдере на Главной
            if ($(this).hasClass('active')) {
                var $target = $(this).next('.g-container');
                smoothScroll($target, 18); //промотаем к активным блокам (18 - верхний маржин)
            }
        });

        $('.js-folio-list').on('click', '.p-slider__link', function (e) {
            e.preventDefault();
            var $el = $(this),
                $target = $el.next('.g-container');
            if ($el.hasClass('active')) {//складываем "гармошку" - прячем сетку портфолио
                $el.removeClass('active');
                $target.fadeOut();
            } else {
                if ($target.hasClass('loaded')) {//сетка портфолио уже загружена - просто покажем ее
                    $el.addClass('active');
                    $target.fadeIn();
                } else {//сетка не загружена - загружаем контент
                    loadPortfolioGrid($el, $target);
                }
            }
        });

        function loadPortfolioGrid(link, el) {
            contentLoader.show();//показали иконку лоадера
            el.load('ajax/_portfolio_content.html ul', function () {//подгрузили контент
                el.addClass('loaded').removeClass('g-hidden');//после загрузки, показали блоки
                link.addClass('active');
                initPortfolioGrid(el);//подключили функционал
                smoothScroll(el, 18); //прокрутили вверх к новым блокам
                contentLoader.hide();//скрыли лоадер
            });
        }

        function initPortfolioGrid(el) {
            var $grid = el.find('.js-folio').masonry({//запустили Masonry
                itemSelector: '.folio-grid__item'
            });

            el.find('img[data-src]').unveil();//натравим на дозагруженный контент плагин подгрузки картинок

            $('[data-qtip]').qtip('destroy', true);//перезапускаем тултипы
            $('[data-qtip-alt]').qtip('destroy', true);
            initTooltips();

            el.on('click', '.folio-grid__wrap', function (e) {//по клику покажем / спрячем блоки с доп.информацией
                e.preventDefault();
                var $el = $(this),
                    $target = $el.next('.folio-grid__link');
                if ($el.hasClass('active')) {
                    $el.removeClass('active');
                    $target.removeClass('active');
                } else {
                    $el.addClass('active');
                    $target.addClass('active');
                }
                $grid.masonry('layout');//перестроили сетку
            });
        }
    }

    if ($('.js-folio-list').length) {
        initPortfolioList();
    }

    if ($('.js-folio-post').length) {
        smoothScroll($('.js-folio-post'), 54); //при переходе на страницу работы, промотаем к началу блока
    }

    //
    // Лайтбокс
    //---------------------------------------------------------------------------------------
    $('.js-popup').lightbox({
        margin: 20,
        blur:false
    });

    //
    // Вкладки на странице
    //---------------------------------------------------------------------------------------
    function initTabs() {//покажем вкладку, спрячем остальные
        var $content = $('.p-tabs__content'),
            $tabs = $('.js-tabs'),
            className = 'p-tabs__link--current';
        $content.not(':first').hide();
        $tabs.each(function () {
            var current = $(this).find('.'+className);
            if (current.length<1) {
                $(this).find('.p-tabs__link').filter(':first').addClass(className);
            }
            current = $(this).find('.'+className).attr('href');
            $(current).show();
        });
        
        $tabs.on('click', '.p-tabs__link', function (e) {//клик по вкладкам
            e.preventDefault();
            var $el = $(this),
                $list = $el.parents('.js-tabs'),
                target = $el.attr('href'),
                tab_current = $list.find('.'+className).attr('href');
            if ($el.hasClass(className)) {
                return false;
            } else {
                console.log(target, tab_current);
                $(tab_current).hide();
                $list.find('.p-tabs__link').removeClass(className);
                $el.addClass(className);
                $(target).fadeIn();
                history.pushState(null, null, window.location.search + $el.attr('href'));
            }
        });

        //парсим линк и открываем нужную вкладку при загрузке страницы
        var wantedTag = window.location.hash;
        if (wantedTag != "") {           
            try {
                var $allTabs =  $tabs.find('a[href^=' + wantedTag + ']').parents('.js-tabs').find('.p-tabs__link');
                var defaultTab = $allTabs.filter('.'+className).attr('href');
                $(defaultTab).hide();
                $allTabs.removeClass(className);
                $tabs.find('a[href^=' + wantedTag + ']').addClass(className);
                var $target = $("#" + wantedTag.replace('#', ''));
                $target.show();//показали
                smoothScroll($target, 18);//прокрутили к началу контента
            } catch (e) {
                // I have no idea what to do here, so I'm leaving this for the maintainer.
            }
        }
    }

    if ($('.js-tabs').length) {
        initTabs();
    }


    //
    // Стилизация фильтра сортировки на странице каталога
    //---------------------------------------------------------------------------------------
    $('.js-select').customSelectMenu();


    //
    // Каталог товаров (фильтры)
    //---------------------------------------------------------------------------------------
    $('.c-filter').on('click', '.g-btn', function () {//пример - исправить в реальном приложении!
        contentLoader.show();
        //загружаем контент, а пока - 
        setTimeout(contentLoader.hide, 500);
    });
    if ($('html').hasClass('lt-ie9')) {//костыль для ie8
        $('.c-list__item').filter(':nth-child(3n-2)').css('clear', 'left');
    }

    $('.c-main').on('click', '.js-cat-load', function () {//дозагрузим тестовый контент
        contentLoader.show();//показали иконку загрузки
        var $block = $('.c-main'),
            $list = $block.find('.c-list');
        $block.append('<ul class="g-hidden" id="hidden"></ul>');
        var $hidden = $('#hidden');
        $hidden.load('ajax/_catalog_content.html li', function () {
            $hidden.find('li').each(function () {
                var $item = $(this);
                $list.append($item);
            });
            $list.find('img[data-src]').unveil();//натравим на дозагруженный контент плагин подгрузки картинок
            $hidden.remove();
            $('[data-qtip]').qtip('destroy', true);//перезапускаем тултипы
            $('[data-qtip-alt]').qtip('destroy', true);
            initTooltips();
            contentLoader.hide();
        });
    })



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
    // Ф-ция скролла к началу элеметна
    //---------------------------------------------------------------------------------------
    function smoothScroll(el, offset) {
        if (!offset) {
            offset = 0;
        }
        var topOffset = 35 + offset; //36 - высота хидера в моб.версии
        if (winW >= BREAKPOINT) {
            topOffset = 90 + offset; //90 - высота хидера на десктопе
        }
        $('html, body').animate({//после загрузки, промотаем к началу новых блоков
            scrollTop: el.offset().top - topOffset
        }, 800);
    }


    

    //
    // Если браузер не знает о svg-картинках
    //---------------------------------------------------------------------------------------
    if (!Modernizr.svg) {
        $('img[src*="svg"]').attr('src', function () {
            return $(this).attr('src').replace('.svg', '.png');
        });
    }

    
    //
    // Лоадер (будем показывать во время загрузки контента)
    //---------------------------------------------------------------------------------------
    var contentLoader = {
        init: function () {
            $body.append('<div class="overlay" id="overlay"></div><div class="loader" id="loader"></div>');
        },
        show: function () {
            $('#overlay').fadeIn('fast');
            $('#loader').fadeIn('fast');
        },
        hide: function () {
            $('#overlay').fadeOut('fast');
            $('#loader').fadeOut('fast');
        }
    }
    contentLoader.init();
    
});
