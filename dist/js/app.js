// Avoid `console` errors in browsers that lack a console
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/**
 * bxSlider v4.2.4
 * Copyright 2013-2015 Steven Wanderski
 * Written while drinking Belgian ales and listening to jazz

 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */

!function(a){var b={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,ariaLive:!0,ariaHidden:!0,keyboardEnabled:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",stopAutoOnClick:!1,autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,shrinkItems:!1,onSliderLoad:function(){return!0},onSlideBefore:function(){return!0},onSlideAfter:function(){return!0},onSlideNext:function(){return!0},onSlidePrev:function(){return!0},onSliderResize:function(){return!0}};a.fn.bxSlider=function(c){if(0===this.length)return this;if(this.length>1)return this.each(function(){a(this).bxSlider(c)}),this;var d={},e=this,f=a(window).width(),g=a(window).height();if(!a(e).data("bxSlider")){var h=function(){a(e).data("bxSlider")||(d.settings=a.extend({},b,c),d.settings.slideWidth=parseInt(d.settings.slideWidth),d.children=e.children(d.settings.slideSelector),d.children.length<d.settings.minSlides&&(d.settings.minSlides=d.children.length),d.children.length<d.settings.maxSlides&&(d.settings.maxSlides=d.children.length),d.settings.randomStart&&(d.settings.startSlide=Math.floor(Math.random()*d.children.length)),d.active={index:d.settings.startSlide},d.carousel=d.settings.minSlides>1||d.settings.maxSlides>1?!0:!1,d.carousel&&(d.settings.preloadImages="all"),d.minThreshold=d.settings.minSlides*d.settings.slideWidth+(d.settings.minSlides-1)*d.settings.slideMargin,d.maxThreshold=d.settings.maxSlides*d.settings.slideWidth+(d.settings.maxSlides-1)*d.settings.slideMargin,d.working=!1,d.controls={},d.interval=null,d.animProp="vertical"===d.settings.mode?"top":"left",d.usingCSS=d.settings.useCSS&&"fade"!==d.settings.mode&&function(){for(var a=document.createElement("div"),b=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"],c=0;c<b.length;c++)if(void 0!==a.style[b[c]])return d.cssPrefix=b[c].replace("Perspective","").toLowerCase(),d.animProp="-"+d.cssPrefix+"-transform",!0;return!1}(),"vertical"===d.settings.mode&&(d.settings.maxSlides=d.settings.minSlides),e.data("origStyle",e.attr("style")),e.children(d.settings.slideSelector).each(function(){a(this).data("origStyle",a(this).attr("style"))}),i())},i=function(){var b=d.children.eq(d.settings.startSlide);e.wrap('<div class="'+d.settings.wrapperClass+'"><div class="bx-viewport"></div></div>'),d.viewport=e.parent(),d.settings.ariaLive&&!d.settings.ticker&&d.viewport.attr("aria-live","polite"),d.loader=a('<div class="bx-loading" />'),d.viewport.prepend(d.loader),e.css({width:"horizontal"===d.settings.mode?1e3*d.children.length+215+"%":"auto",position:"relative"}),d.usingCSS&&d.settings.easing?e.css("-"+d.cssPrefix+"-transition-timing-function",d.settings.easing):d.settings.easing||(d.settings.easing="swing"),d.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),d.viewport.parent().css({maxWidth:m()}),d.settings.pager||d.settings.controls||d.viewport.parent().css({margin:"0 auto 0px"}),d.children.css({"float":"horizontal"===d.settings.mode?"left":"none",listStyle:"none",position:"relative"}),d.children.css("width",n()),"horizontal"===d.settings.mode&&d.settings.slideMargin>0&&d.children.css("marginRight",d.settings.slideMargin),"vertical"===d.settings.mode&&d.settings.slideMargin>0&&d.children.css("marginBottom",d.settings.slideMargin),"fade"===d.settings.mode&&(d.children.css({position:"absolute",zIndex:0,display:"none"}),d.children.eq(d.settings.startSlide).css({zIndex:d.settings.slideZIndex,display:"block"})),d.controls.el=a('<div class="bx-controls" />'),d.settings.captions&&x(),d.active.last=d.settings.startSlide===p()-1,d.settings.video&&e.fitVids(),("all"===d.settings.preloadImages||d.settings.ticker)&&(b=d.children),d.settings.ticker?d.settings.pager=!1:(d.settings.controls&&v(),d.settings.auto&&d.settings.autoControls&&w(),d.settings.pager&&u(),(d.settings.controls||d.settings.autoControls||d.settings.pager)&&d.viewport.after(d.controls.el)),j(b,k)},j=function(b,c){var d=b.find('img:not([src=""]), iframe').length,e=0;return 0===d?void c():void b.find('img:not([src=""]), iframe').each(function(){a(this).one("load error",function(){++e===d&&c()}).each(function(){this.complete&&a(this).load()})})},k=function(){if(d.settings.infiniteLoop&&"fade"!==d.settings.mode&&!d.settings.ticker){var b="vertical"===d.settings.mode?d.settings.minSlides:d.settings.maxSlides,c=d.children.slice(0,b).clone(!0).addClass("bx-clone"),f=d.children.slice(-b).clone(!0).addClass("bx-clone");d.settings.ariaHidden&&(c.attr("aria-hidden",!0),f.attr("aria-hidden",!0)),e.append(c).prepend(f)}d.loader.remove(),r(),"vertical"===d.settings.mode&&(d.settings.adaptiveHeight=!0),d.viewport.height(l()),e.redrawSlider(),d.settings.onSliderLoad.call(e,d.active.index),d.initialized=!0,d.settings.responsive&&a(window).bind("resize",R),d.settings.auto&&d.settings.autoStart&&(p()>1||d.settings.autoSlideForOnePage)&&H(),d.settings.ticker&&I(),d.settings.pager&&D(d.settings.startSlide),d.settings.controls&&G(),d.settings.touchEnabled&&!d.settings.ticker&&M(),d.settings.keyboardEnabled&&!d.settings.ticker&&a(document).keydown(L)},l=function(){var b=e.outerHeight(),c=null,f=a();if("vertical"===d.settings.mode||d.settings.adaptiveHeight)if(d.carousel){c=1===d.settings.moveSlides?d.active.index:d.active.index*q(),f=d.children.eq(c);for(var g=1;g<=d.settings.maxSlides-1;g++)f=c+g>=d.children.length?f.add(d.children.eq(c+g-d.children.length)):f.add(d.children.eq(c+g))}else f=d.children.eq(d.active.index);else f=d.children;return"vertical"===d.settings.mode?(f.each(function(c){b+=a(this).outerHeight()}),d.settings.slideMargin>0&&(b+=d.settings.slideMargin*(d.settings.minSlides-1))):b=Math.max.apply(Math,f.map(function(){return a(this).outerHeight(!1)}).get()),"border-box"===d.viewport.css("box-sizing")?b+=parseFloat(d.viewport.css("padding-top"))+parseFloat(d.viewport.css("padding-bottom"))+parseFloat(d.viewport.css("border-top-width"))+parseFloat(d.viewport.css("border-bottom-width")):"padding-box"===d.viewport.css("box-sizing")&&(b+=parseFloat(d.viewport.css("padding-top"))+parseFloat(d.viewport.css("padding-bottom"))),b},m=function(){var a="100%";return d.settings.slideWidth>0&&(a="horizontal"===d.settings.mode?d.settings.maxSlides*d.settings.slideWidth+(d.settings.maxSlides-1)*d.settings.slideMargin:d.settings.slideWidth),a},n=function(){var a=d.settings.slideWidth,b=d.viewport.width();if(0===d.settings.slideWidth||d.settings.slideWidth>b&&!d.carousel||"vertical"===d.settings.mode)a=b;else if(d.settings.maxSlides>1&&"horizontal"===d.settings.mode){if(b>d.maxThreshold)return a;b<d.minThreshold?a=(b-d.settings.slideMargin*(d.settings.minSlides-1))/d.settings.minSlides:d.settings.shrinkItems&&(a=Math.floor((b+d.settings.slideMargin)/Math.ceil((b+d.settings.slideMargin)/(a+d.settings.slideMargin))-d.settings.slideMargin))}return a},o=function(){var a=1,b=null;return"horizontal"===d.settings.mode&&d.settings.slideWidth>0?d.viewport.width()<d.minThreshold?a=d.settings.minSlides:d.viewport.width()>d.maxThreshold?a=d.settings.maxSlides:(b=d.children.first().width()+d.settings.slideMargin,a=Math.floor((d.viewport.width()+d.settings.slideMargin)/b)):"vertical"===d.settings.mode&&(a=d.settings.minSlides),a},p=function(){var a=0,b=0,c=0;if(d.settings.moveSlides>0)if(d.settings.infiniteLoop)a=Math.ceil(d.children.length/q());else for(;b<d.children.length;)++a,b=c+o(),c+=d.settings.moveSlides<=o()?d.settings.moveSlides:o();else a=Math.ceil(d.children.length/o());return a},q=function(){return d.settings.moveSlides>0&&d.settings.moveSlides<=o()?d.settings.moveSlides:o()},r=function(){var a,b,c;d.children.length>d.settings.maxSlides&&d.active.last&&!d.settings.infiniteLoop?"horizontal"===d.settings.mode?(b=d.children.last(),a=b.position(),s(-(a.left-(d.viewport.width()-b.outerWidth())),"reset",0)):"vertical"===d.settings.mode&&(c=d.children.length-d.settings.minSlides,a=d.children.eq(c).position(),s(-a.top,"reset",0)):(a=d.children.eq(d.active.index*q()).position(),d.active.index===p()-1&&(d.active.last=!0),void 0!==a&&("horizontal"===d.settings.mode?s(-a.left,"reset",0):"vertical"===d.settings.mode&&s(-a.top,"reset",0)))},s=function(b,c,f,g){var h,i;d.usingCSS?(i="vertical"===d.settings.mode?"translate3d(0, "+b+"px, 0)":"translate3d("+b+"px, 0, 0)",e.css("-"+d.cssPrefix+"-transition-duration",f/1e3+"s"),"slide"===c?(e.css(d.animProp,i),e.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(b){a(b.target).is(e)&&(e.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),E())})):"reset"===c?e.css(d.animProp,i):"ticker"===c&&(e.css("-"+d.cssPrefix+"-transition-timing-function","linear"),e.css(d.animProp,i),e.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(b){a(b.target).is(e)&&(e.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),s(g.resetValue,"reset",0),J())}))):(h={},h[d.animProp]=b,"slide"===c?e.animate(h,f,d.settings.easing,function(){E()}):"reset"===c?e.css(d.animProp,b):"ticker"===c&&e.animate(h,f,"linear",function(){s(g.resetValue,"reset",0),J()}))},t=function(){for(var b="",c="",e=p(),f=0;e>f;f++)c="",d.settings.buildPager&&a.isFunction(d.settings.buildPager)||d.settings.pagerCustom?(c=d.settings.buildPager(f),d.pagerEl.addClass("bx-custom-pager")):(c=f+1,d.pagerEl.addClass("bx-default-pager")),b+='<div class="bx-pager-item"><a href="" data-slide-index="'+f+'" class="bx-pager-link">'+c+"</a></div>";d.pagerEl.html(b)},u=function(){d.settings.pagerCustom?d.pagerEl=a(d.settings.pagerCustom):(d.pagerEl=a('<div class="bx-pager" />'),d.settings.pagerSelector?a(d.settings.pagerSelector).html(d.pagerEl):d.controls.el.addClass("bx-has-pager").append(d.pagerEl),t()),d.pagerEl.on("click touchend","a",C)},v=function(){d.controls.next=a('<a class="bx-next" href="">'+d.settings.nextText+"</a>"),d.controls.prev=a('<a class="bx-prev" href="">'+d.settings.prevText+"</a>"),d.controls.next.bind("click touchend",y),d.controls.prev.bind("click touchend",z),d.settings.nextSelector&&a(d.settings.nextSelector).append(d.controls.next),d.settings.prevSelector&&a(d.settings.prevSelector).append(d.controls.prev),d.settings.nextSelector||d.settings.prevSelector||(d.controls.directionEl=a('<div class="bx-controls-direction" />'),d.controls.directionEl.append(d.controls.prev).append(d.controls.next),d.controls.el.addClass("bx-has-controls-direction").append(d.controls.directionEl))},w=function(){d.controls.start=a('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+d.settings.startText+"</a></div>"),d.controls.stop=a('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+d.settings.stopText+"</a></div>"),d.controls.autoEl=a('<div class="bx-controls-auto" />'),d.controls.autoEl.on("click",".bx-start",A),d.controls.autoEl.on("click",".bx-stop",B),d.settings.autoControlsCombine?d.controls.autoEl.append(d.controls.start):d.controls.autoEl.append(d.controls.start).append(d.controls.stop),d.settings.autoControlsSelector?a(d.settings.autoControlsSelector).html(d.controls.autoEl):d.controls.el.addClass("bx-has-controls-auto").append(d.controls.autoEl),F(d.settings.autoStart?"stop":"start")},x=function(){d.children.each(function(b){var c=a(this).find("img:first").attr("title");void 0!==c&&(""+c).length&&a(this).append('<div class="bx-caption"><span>'+c+"</span></div>")})},y=function(a){a.preventDefault(),d.controls.el.hasClass("disabled")||(d.settings.auto&&d.settings.stopAutoOnClick&&e.stopAuto(),e.goToNextSlide())},z=function(a){a.preventDefault(),d.controls.el.hasClass("disabled")||(d.settings.auto&&d.settings.stopAutoOnClick&&e.stopAuto(),e.goToPrevSlide())},A=function(a){e.startAuto(),a.preventDefault()},B=function(a){e.stopAuto(),a.preventDefault()},C=function(b){var c,f;b.preventDefault(),d.controls.el.hasClass("disabled")||(d.settings.auto&&d.settings.stopAutoOnClick&&e.stopAuto(),c=a(b.currentTarget),void 0!==c.attr("data-slide-index")&&(f=parseInt(c.attr("data-slide-index")),f!==d.active.index&&e.goToSlide(f)))},D=function(b){var c=d.children.length;return"short"===d.settings.pagerType?(d.settings.maxSlides>1&&(c=Math.ceil(d.children.length/d.settings.maxSlides)),void d.pagerEl.html(b+1+d.settings.pagerShortSeparator+c)):(d.pagerEl.find("a").removeClass("active"),void d.pagerEl.each(function(c,d){a(d).find("a").eq(b).addClass("active")}))},E=function(){if(d.settings.infiniteLoop){var a="";0===d.active.index?a=d.children.eq(0).position():d.active.index===p()-1&&d.carousel?a=d.children.eq((p()-1)*q()).position():d.active.index===d.children.length-1&&(a=d.children.eq(d.children.length-1).position()),a&&("horizontal"===d.settings.mode?s(-a.left,"reset",0):"vertical"===d.settings.mode&&s(-a.top,"reset",0))}d.working=!1,d.settings.onSlideAfter.call(e,d.children.eq(d.active.index),d.oldIndex,d.active.index)},F=function(a){d.settings.autoControlsCombine?d.controls.autoEl.html(d.controls[a]):(d.controls.autoEl.find("a").removeClass("active"),d.controls.autoEl.find("a:not(.bx-"+a+")").addClass("active"))},G=function(){1===p()?(d.controls.prev.addClass("disabled"),d.controls.next.addClass("disabled")):!d.settings.infiniteLoop&&d.settings.hideControlOnEnd&&(0===d.active.index?(d.controls.prev.addClass("disabled"),d.controls.next.removeClass("disabled")):d.active.index===p()-1?(d.controls.next.addClass("disabled"),d.controls.prev.removeClass("disabled")):(d.controls.prev.removeClass("disabled"),d.controls.next.removeClass("disabled")))},H=function(){if(d.settings.autoDelay>0){setTimeout(e.startAuto,d.settings.autoDelay)}else e.startAuto(),a(window).focus(function(){e.startAuto()}).blur(function(){e.stopAuto()});d.settings.autoHover&&e.hover(function(){d.interval&&(e.stopAuto(!0),d.autoPaused=!0)},function(){d.autoPaused&&(e.startAuto(!0),d.autoPaused=null)})},I=function(){var b,c,f,g,h,i,j,k,l=0;"next"===d.settings.autoDirection?e.append(d.children.clone().addClass("bx-clone")):(e.prepend(d.children.clone().addClass("bx-clone")),b=d.children.first().position(),l="horizontal"===d.settings.mode?-b.left:-b.top),s(l,"reset",0),d.settings.pager=!1,d.settings.controls=!1,d.settings.autoControls=!1,d.settings.tickerHover&&(d.usingCSS?(g="horizontal"===d.settings.mode?4:5,d.viewport.hover(function(){c=e.css("-"+d.cssPrefix+"-transform"),f=parseFloat(c.split(",")[g]),s(f,"reset",0)},function(){k=0,d.children.each(function(b){k+="horizontal"===d.settings.mode?a(this).outerWidth(!0):a(this).outerHeight(!0)}),h=d.settings.speed/k,i="horizontal"===d.settings.mode?"left":"top",j=h*(k-Math.abs(parseInt(f))),J(j)})):d.viewport.hover(function(){e.stop()},function(){k=0,d.children.each(function(b){k+="horizontal"===d.settings.mode?a(this).outerWidth(!0):a(this).outerHeight(!0)}),h=d.settings.speed/k,i="horizontal"===d.settings.mode?"left":"top",j=h*(k-Math.abs(parseInt(e.css(i)))),J(j)})),J()},J=function(a){var b,c,f,g=a?a:d.settings.speed,h={left:0,top:0},i={left:0,top:0};"next"===d.settings.autoDirection?h=e.find(".bx-clone").first().position():i=d.children.first().position(),b="horizontal"===d.settings.mode?-h.left:-h.top,c="horizontal"===d.settings.mode?-i.left:-i.top,f={resetValue:c},s(b,"ticker",g,f)},K=function(b){var c=a(window),d={top:c.scrollTop(),left:c.scrollLeft()},e=b.offset();return d.right=d.left+c.width(),d.bottom=d.top+c.height(),e.right=e.left+b.outerWidth(),e.bottom=e.top+b.outerHeight(),!(d.right<e.left||d.left>e.right||d.bottom<e.top||d.top>e.bottom)},L=function(a){var b=document.activeElement.tagName.toLowerCase(),c="input|textarea",d=new RegExp(b,["i"]),f=d.exec(c);if(null==f&&K(e)){if(39===a.keyCode)return y(a),!1;if(37===a.keyCode)return z(a),!1}},M=function(){d.touch={start:{x:0,y:0},end:{x:0,y:0}},d.viewport.bind("touchstart MSPointerDown pointerdown",N),d.viewport.on("click",".bxslider a",function(a){d.viewport.hasClass("click-disabled")&&(a.preventDefault(),d.viewport.removeClass("click-disabled"))})},N=function(a){if(d.controls.el.addClass("disabled"),d.working)a.preventDefault(),d.controls.el.removeClass("disabled");else{d.touch.originalPos=e.position();var b=a.originalEvent,c="undefined"!=typeof b.changedTouches?b.changedTouches:[b];d.touch.start.x=c[0].pageX,d.touch.start.y=c[0].pageY,d.viewport.get(0).setPointerCapture&&(d.pointerId=b.pointerId,d.viewport.get(0).setPointerCapture(d.pointerId)),d.viewport.bind("touchmove MSPointerMove pointermove",P),d.viewport.bind("touchend MSPointerUp pointerup",Q),d.viewport.bind("MSPointerCancel pointercancel",O)}},O=function(a){s(d.touch.originalPos.left,"reset",0),d.controls.el.removeClass("disabled"),d.viewport.unbind("MSPointerCancel pointercancel",O),d.viewport.unbind("touchmove MSPointerMove pointermove",P),d.viewport.unbind("touchend MSPointerUp pointerup",Q),d.viewport.get(0).releasePointerCapture&&d.viewport.get(0).releasePointerCapture(d.pointerId)},P=function(a){var b=a.originalEvent,c="undefined"!=typeof b.changedTouches?b.changedTouches:[b],e=Math.abs(c[0].pageX-d.touch.start.x),f=Math.abs(c[0].pageY-d.touch.start.y),g=0,h=0;3*e>f&&d.settings.preventDefaultSwipeX?a.preventDefault():3*f>e&&d.settings.preventDefaultSwipeY&&a.preventDefault(),"fade"!==d.settings.mode&&d.settings.oneToOneTouch&&("horizontal"===d.settings.mode?(h=c[0].pageX-d.touch.start.x,g=d.touch.originalPos.left+h):(h=c[0].pageY-d.touch.start.y,g=d.touch.originalPos.top+h),s(g,"reset",0))},Q=function(a){d.viewport.unbind("touchmove MSPointerMove pointermove",P),d.controls.el.removeClass("disabled");var b=a.originalEvent,c="undefined"!=typeof b.changedTouches?b.changedTouches:[b],f=0,g=0;d.touch.end.x=c[0].pageX,d.touch.end.y=c[0].pageY,"fade"===d.settings.mode?(g=Math.abs(d.touch.start.x-d.touch.end.x),g>=d.settings.swipeThreshold&&(d.touch.start.x>d.touch.end.x?e.goToNextSlide():e.goToPrevSlide(),e.stopAuto())):("horizontal"===d.settings.mode?(g=d.touch.end.x-d.touch.start.x,f=d.touch.originalPos.left):(g=d.touch.end.y-d.touch.start.y,f=d.touch.originalPos.top),!d.settings.infiniteLoop&&(0===d.active.index&&g>0||d.active.last&&0>g)?s(f,"reset",200):Math.abs(g)>=d.settings.swipeThreshold?(0>g?e.goToNextSlide():e.goToPrevSlide(),e.stopAuto()):s(f,"reset",200)),d.viewport.unbind("touchend MSPointerUp pointerup",Q),d.viewport.get(0).releasePointerCapture&&d.viewport.get(0).releasePointerCapture(d.pointerId)},R=function(b){if(d.initialized)if(d.working)window.setTimeout(R,10);else{var c=a(window).width(),h=a(window).height();(f!==c||g!==h)&&(f=c,g=h,e.redrawSlider(),d.settings.onSliderResize.call(e,d.active.index))}},S=function(a){var b=o();d.settings.ariaHidden&&!d.settings.ticker&&(d.children.attr("aria-hidden","true"),d.children.slice(a,a+b).attr("aria-hidden","false"))};return e.goToSlide=function(b,c){var f,g,h,i,j=!0,k=0,m={left:0,top:0},n=null;if(!d.working&&d.active.index!==b){if(d.working=!0,d.oldIndex=d.active.index,0>b?d.active.index=p()-1:b>=p()?d.active.index=0:d.active.index=b,j=d.settings.onSlideBefore.call(e,d.children.eq(d.active.index),d.oldIndex,d.active.index),"undefined"!=typeof j&&!j)return d.active.index=d.oldIndex,void(d.working=!1);if("next"===c?d.settings.onSlideNext.call(e,d.children.eq(d.active.index),d.oldIndex,d.active.index)||(j=!1):"prev"===c&&(d.settings.onSlidePrev.call(e,d.children.eq(d.active.index),d.oldIndex,d.active.index)||(j=!1)),"undefined"!=typeof j&&!j)return d.active.index=d.oldIndex,void(d.working=!1);d.active.last=d.active.index>=p()-1,(d.settings.pager||d.settings.pagerCustom)&&D(d.active.index),d.settings.controls&&G(),"fade"===d.settings.mode?(d.settings.adaptiveHeight&&d.viewport.height()!==l()&&d.viewport.animate({height:l()},d.settings.adaptiveHeightSpeed),d.children.filter(":visible").fadeOut(d.settings.speed).css({zIndex:0}),d.children.eq(d.active.index).css("zIndex",d.settings.slideZIndex+1).fadeIn(d.settings.speed,function(){a(this).css("zIndex",d.settings.slideZIndex),E()})):(d.settings.adaptiveHeight&&d.viewport.height()!==l()&&d.viewport.animate({height:l()},d.settings.adaptiveHeightSpeed),!d.settings.infiniteLoop&&d.carousel&&d.active.last?"horizontal"===d.settings.mode?(n=d.children.eq(d.children.length-1),m=n.position(),k=d.viewport.width()-n.outerWidth()):(f=d.children.length-d.settings.minSlides,m=d.children.eq(f).position()):d.carousel&&d.active.last&&"prev"===c?(g=1===d.settings.moveSlides?d.settings.maxSlides-q():(p()-1)*q()-(d.children.length-d.settings.maxSlides),n=e.children(".bx-clone").eq(g),m=n.position()):"next"===c&&0===d.active.index?(m=e.find("> .bx-clone").eq(d.settings.maxSlides).position(),d.active.last=!1):b>=0&&(i=b*q(),m=d.children.eq(i).position()),void 0!==typeof m&&(h="horizontal"===d.settings.mode?-(m.left-k):-m.top,s(h,"slide",d.settings.speed))),d.settings.ariaHidden&&S(d.active.index*q())}},e.goToNextSlide=function(){if(d.settings.infiniteLoop||!d.active.last){var a=parseInt(d.active.index)+1;e.goToSlide(a,"next")}},e.goToPrevSlide=function(){if(d.settings.infiniteLoop||0!==d.active.index){var a=parseInt(d.active.index)-1;e.goToSlide(a,"prev")}},e.startAuto=function(a){d.interval||(d.interval=setInterval(function(){"next"===d.settings.autoDirection?e.goToNextSlide():e.goToPrevSlide()},d.settings.pause),d.settings.autoControls&&a!==!0&&F("stop"))},e.stopAuto=function(a){d.interval&&(clearInterval(d.interval),d.interval=null,d.settings.autoControls&&a!==!0&&F("start"))},e.getCurrentSlide=function(){return d.active.index},e.getCurrentSlideElement=function(){return d.children.eq(d.active.index)},e.getSlideElement=function(a){return d.children.eq(a)},e.getSlideCount=function(){return d.children.length},e.isWorking=function(){return d.working},e.redrawSlider=function(){d.children.add(e.find(".bx-clone")).outerWidth(n()),d.viewport.css("height",l()),d.settings.ticker||r(),d.active.last&&(d.active.index=p()-1),d.active.index>=p()&&(d.active.last=!0),d.settings.pager&&!d.settings.pagerCustom&&(t(),D(d.active.index)),d.settings.ariaHidden&&S(d.active.index*q())},e.destroySlider=function(){d.initialized&&(d.initialized=!1,a(".bx-clone",this).remove(),d.children.each(function(){void 0!==a(this).data("origStyle")?a(this).attr("style",a(this).data("origStyle")):a(this).removeAttr("style")}),void 0!==a(this).data("origStyle")?this.attr("style",a(this).data("origStyle")):a(this).removeAttr("style"),a(this).unwrap().unwrap(),d.controls.el&&d.controls.el.remove(),d.controls.next&&d.controls.next.remove(),d.controls.prev&&d.controls.prev.remove(),d.pagerEl&&d.settings.controls&&!d.settings.pagerCustom&&d.pagerEl.remove(),a(".bx-caption",this).remove(),d.controls.autoEl&&d.controls.autoEl.remove(),clearInterval(d.interval),d.settings.responsive&&a(window).unbind("resize",R),d.settings.keyboardEnabled&&a(document).unbind("keydown",L),a(this).removeData("bxSlider"))},e.reloadSlider=function(b){void 0!==b&&(c=b),e.destroySlider(),h(),a(e).data("bxSlider",this)},h(),a(e).data("bxSlider",this),this}}}(jQuery);

/*Slideout mobile menu core https://github.com/Mango/slideout  Licensed under MIT */
!function (e) { if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else { var t; "undefined" != typeof window ? t = window : "undefined" != typeof global ? t = global : "undefined" != typeof self && (t = self), t.Slideout = e() } }(function () { var e, t, n; return function i(e, t, n) { function o(r, a) { if (!t[r]) { if (!e[r]) { var u = typeof require == "function" && require; if (!a && u) return u(r, !0); if (s) return s(r, !0); var l = new Error("Cannot find module '" + r + "'"); throw l.code = "MODULE_NOT_FOUND", l } var f = t[r] = { exports: {} }; e[r][0].call(f.exports, function (t) { var n = e[r][1][t]; return o(n ? n : t) }, f, f.exports, i, e, t, n) } return t[r].exports } var s = typeof require == "function" && require; for (var r = 0; r < n.length; r++) o(n[r]); return o }({ 1: [function (e, t, n) { "use strict"; var i = e("decouple"); var o = e("emitter"); var s; var r = false; var a = window.document; var u = a.documentElement; var l = window.navigator.msPointerEnabled; var f = { start: l ? "MSPointerDown" : "touchstart", move: l ? "MSPointerMove" : "touchmove", end: l ? "MSPointerUp" : "touchend" }; var c = function v() { var e = /^(Webkit|Khtml|Moz|ms|O)(?=[A-Z])/; var t = a.getElementsByTagName("script")[0].style; for (var n in t) { if (e.test(n)) { return "-" + n.match(e)[0].toLowerCase() + "-" } } if ("WebkitOpacity" in t) { return "-webkit-" } if ("KhtmlOpacity" in t) { return "-khtml-" } return "" }(); function h(e, t) { for (var n in t) { if (t[n]) { e[n] = t[n] } } return e } function p(e, t) { e.prototype = h(e.prototype || {}, t.prototype) } function d(e) { e = e || {}; this._startOffsetX = 0; this._currentOffsetX = 0; this._opening = false; this._moved = false; this._opened = false; this._preventOpen = false; this._touch = e.touch === undefined ? true : e.touch && true; this.panel = e.panel; this.menu = e.menu; if (this.panel.className.search("slideout-panel") === -1) { this.panel.className += " slideout-panel" } if (this.menu.className.search("slideout-menu") === -1) { this.menu.className += " slideout-menu" } this._fx = e.fx || "ease"; this._duration = parseInt(e.duration, 10) || 300; this._tolerance = parseInt(e.tolerance, 10) || 70; this._padding = this._translateTo = parseInt(e.padding, 10) || 256; this._orientation = e.side === "right" ? -1 : 1; this._translateTo *= this._orientation; if (this._touch) { this._initTouchEvents() } } p(d, o); d.prototype.open = function () { var e = this; this.emit("beforeopen"); if (u.className.search("slideout-open") === -1) { u.className += " slideout-open" } this._setTransition(); this._translateXTo(this._translateTo); this._opened = true; setTimeout(function () { e.panel.style.transition = e.panel.style["-webkit-transition"] = ""; e.emit("open") }, this._duration + 50); return this }; d.prototype.close = function () { var e = this; if (!this.isOpen() && !this._opening) { return this } this.emit("beforeclose"); this._setTransition(); this._translateXTo(0); this._opened = false; setTimeout(function () { u.className = u.className.replace(/ slideout-open/, ""); e.panel.style.transition = e.panel.style["-webkit-transition"] = e.panel.style[c + "transform"] = e.panel.style.transform = ""; e.emit("close") }, this._duration + 50); return this }; d.prototype.toggle = function () { return this.isOpen() ? this.close() : this.open() }; d.prototype.isOpen = function () { return this._opened }; d.prototype._translateXTo = function (e) { this._currentOffsetX = e; this.panel.style[c + "transform"] = this.panel.style.transform = "translate3d(" + e + "px, 0, 0)" }; d.prototype._setTransition = function () { this.panel.style[c + "transition"] = this.panel.style.transition = c + "transform " + this._duration + "ms " + this._fx }; d.prototype._initTouchEvents = function () { var e = this; this._onScrollFn = i(a, "scroll", function () { if (!e._moved) { clearTimeout(s); r = true; s = setTimeout(function () { r = false }, 250) } }); this._preventMove = function (t) { if (e._moved) { t.preventDefault() } }; a.addEventListener(f.move, this._preventMove); this._resetTouchFn = function (t) { if (typeof t.touches === "undefined") { return } e._moved = false; e._opening = false; e._startOffsetX = t.touches[0].pageX; e._preventOpen = !e._touch || !e.isOpen() && e.menu.clientWidth !== 0 }; this.panel.addEventListener(f.start, this._resetTouchFn); this._onTouchCancelFn = function () { e._moved = false; e._opening = false }; this.panel.addEventListener("touchcancel", this._onTouchCancelFn); this._onTouchEndFn = function () { if (e._moved) { e._opening && Math.abs(e._currentOffsetX) > e._tolerance ? e.open() : e.close() } e._moved = false }; this.panel.addEventListener(f.end, this._onTouchEndFn); this._onTouchMoveFn = function (t) { if (r || e._preventOpen || typeof t.touches === "undefined") { return } var n = t.touches[0].clientX - e._startOffsetX; var i = e._currentOffsetX = n; if (Math.abs(i) > e._padding) { return } if (Math.abs(n) > 20) { e._opening = true; var o = n * e._orientation; if (e._opened && o > 0 || !e._opened && o < 0) { return } if (o <= 0) { i = n + e._padding * e._orientation; e._opening = false } if (!e._moved && u.className.search("slideout-open") === -1) { u.className += " slideout-open" } e.panel.style[c + "transform"] = e.panel.style.transform = "translate3d(" + i + "px, 0, 0)"; e.emit("translate", i); e._moved = true } }; this.panel.addEventListener(f.move, this._onTouchMoveFn) }; d.prototype.enableTouch = function () { this._touch = true; return this }; d.prototype.disableTouch = function () { this._touch = false; return this }; d.prototype.destroy = function () { this.close(); a.removeEventListener(f.move, this._preventMove); this.panel.removeEventListener(f.start, this._resetTouchFn); this.panel.removeEventListener("touchcancel", this._onTouchCancelFn); this.panel.removeEventListener(f.end, this._onTouchEndFn); this.panel.removeEventListener(f.move, this._onTouchMoveFn); a.removeEventListener("scroll", this._onScrollFn); this.open = this.close = function () { }; return this }; t.exports = d }, { decouple: 2, emitter: 3 }], 2: [function (e, t, n) { "use strict"; var i = function () { return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (e) { window.setTimeout(e, 1e3 / 60) } }(); function o(e, t, n) { var o, s = false; function r(e) { o = e; a() } function a() { if (!s) { i(u); s = true } } function u() { n.call(e, o); s = false } e.addEventListener(t, r, false) } t.exports = o }, {}], 3: [function (e, t, n) { "use strict"; var i = function (e, t) { if (!(e instanceof t)) { throw new TypeError("Cannot call a class as a function") } }; n.__esModule = true; var o = function () { function e() { i(this, e) } e.prototype.on = function t(e, n) { this._eventCollection = this._eventCollection || {}; this._eventCollection[e] = this._eventCollection[e] || []; this._eventCollection[e].push(n); return this }; e.prototype.once = function n(e, t) { var n = this; function i() { n.off(e, i); t.apply(this, arguments) } i.listener = t; this.on(e, i); return this }; e.prototype.off = function o(e, t) { var n = undefined; if (!this._eventCollection || !(n = this._eventCollection[e])) { return this } n.forEach(function (e, i) { if (e === t || e.listener === t) { n.splice(i, 1) } }); if (n.length === 0) { delete this._eventCollection[e] } return this }; e.prototype.emit = function s(e) { var t = this; for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) { i[o - 1] = arguments[o] } var s = undefined; if (!this._eventCollection || !(s = this._eventCollection[e])) { return this } s = s.slice(0); s.forEach(function (e) { return e.apply(t, i) }); return this }; return e }(); n["default"] = o; t.exports = n["default"] }, {}] }, {}, [1])(1) });


/*!
 * verge 1.9.1+201402130803
 * https://github.com/ryanve/verge
 * MIT License 2013 Ryan Van Etten
 */
!function (a, b, c) { "undefined" != typeof module && module.exports ? module.exports = c() : a[b] = c() }(this, "verge", function () { function a() { return { width: k(), height: l() } } function b(a, b) { var c = {}; return b = +b || 0, c.width = (c.right = a.right + b) - (c.left = a.left - b), c.height = (c.bottom = a.bottom + b) - (c.top = a.top - b), c } function c(a, c) { return a = a && !a.nodeType ? a[0] : a, a && 1 === a.nodeType ? b(a.getBoundingClientRect(), c) : !1 } function d(b) { b = null == b ? a() : 1 === b.nodeType ? c(b) : b; var d = b.height, e = b.width; return d = "function" == typeof d ? d.call(b) : d, e = "function" == typeof e ? e.call(b) : e, e / d } var e = {}, f = "undefined" != typeof window && window, g = "undefined" != typeof document && document, h = g && g.documentElement, i = f.matchMedia || f.msMatchMedia, j = i ? function (a) { return !!i.call(f, a).matches } : function () { return !1 }, k = e.viewportW = function () { var a = h.clientWidth, b = f.innerWidth; return b > a ? b : a }, l = e.viewportH = function () { var a = h.clientHeight, b = f.innerHeight; return b > a ? b : a }; return e.mq = j, e.matchMedia = i ? function () { return i.apply(f, arguments) } : function () { return {} }, e.viewport = a, e.scrollX = function () { return f.pageXOffset || h.scrollLeft }, e.scrollY = function () { return f.pageYOffset || h.scrollTop }, e.rectangle = c, e.aspect = d, e.inX = function (a, b) { var d = c(a, b); return !!d && d.right >= 0 && d.left <= k() }, e.inY = function (a, b) { var d = c(a, b); return !!d && d.bottom >= 0 && d.top <= l() }, e.inViewport = function (a, b) { var d = c(a, b); return !!d && d.bottom >= 0 && d.right >= 0 && d.top <= l() && d.left <= k() }, e });
jQuery.extend(verge);
// Application Scripts:

// Узнаем размеры окна браузера
// Узнаем значение скролла страницы
// Запускаем моб.меню
// Десктоп-меню: ховер-эффект при наведении на ссылку
// Меняем прозрачность десктоп-меню при скролле контента
// Слайдер логотипов партнеров
// SEO-block - покажем скрытый текст по клику на ссылку "читать далее"
// График цикла проектов на Главной
// Анимация элементов страницы при скролле

// Сообщения об отправке формы
// Кнопка скролла страницы
// Модальное окно
// Если браузер не знает о svg-картинках
jQuery(document).ready(function ($) {
    //Кэшируем
    var $window = $(window),
        $body = $('body'),
        BREAKPOINT = 768, //брекпоинт медиа-запросов
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
    // SEO-block - покажем скрытый текст по клику на ссылку "читать далее"
    //---------------------------------------------------------------------------------------
    $('.seo').one('click', '.js-seo', function (e) {
        e.preventDefault();
        $(this).parents('.seo').find('.g-hidden').removeClass('g-hidden');
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
