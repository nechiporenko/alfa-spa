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


/* qTip2 v2.2.1 | Plugins: viewport | Styles: core | qtip2.com | Licensed MIT | Mon Aug 10 2015 03:18:00 */
!function (a, b, c) { !function (a) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], a) : jQuery && !jQuery.fn.qtip && a(jQuery) }(function (d) { "use strict"; function e(a, b, c, e) { this.id = c, this.target = a, this.tooltip = z, this.elements = { target: a }, this._id = M + "-" + c, this.timers = { img: {} }, this.options = b, this.plugins = {}, this.cache = { event: {}, target: d(), disabled: y, attr: e, onTooltip: y, lastClass: "" }, this.rendered = this.destroyed = this.disabled = this.waiting = this.hiddenDuringWait = this.positioning = this.triggering = y } function f(a) { return a === z || "object" !== d.type(a) } function g(a) { return !(d.isFunction(a) || a && a.attr || a.length || "object" === d.type(a) && (a.jquery || a.then)) } function h(a) { var b, c, e, h; return f(a) ? y : (f(a.metadata) && (a.metadata = { type: a.metadata }), "content" in a && (b = a.content, f(b) || b.jquery || b.done ? b = a.content = { text: c = g(b) ? y : b } : c = b.text, "ajax" in b && (e = b.ajax, h = e && e.once !== y, delete b.ajax, b.text = function (a, b) { var f = c || d(this).attr(b.options.content.attr) || "Loading...", g = d.ajax(d.extend({}, e, { context: b })).then(e.success, z, e.error).then(function (a) { return a && h && b.set("content.text", a), a }, function (a, c, d) { b.destroyed || 0 === a.status || b.set("content.text", c + ": " + d) }); return h ? f : (b.set("content.text", f), g) }), "title" in b && (d.isPlainObject(b.title) && (b.button = b.title.button, b.title = b.title.text), g(b.title || y) && (b.title = y))), "position" in a && f(a.position) && (a.position = { my: a.position, at: a.position }), "show" in a && f(a.show) && (a.show = a.show.jquery ? { target: a.show } : a.show === x ? { ready: x } : { event: a.show }), "hide" in a && f(a.hide) && (a.hide = a.hide.jquery ? { target: a.hide } : { event: a.hide }), "style" in a && f(a.style) && (a.style = { classes: a.style }), d.each(L, function () { this.sanitize && this.sanitize(a) }), a) } function i(a, b) { for (var c, d = 0, e = a, f = b.split(".") ; e = e[f[d++]];) d < f.length && (c = e); return [c || a, f.pop()] } function j(a, b) { var c, d, e; for (c in this.checks) for (d in this.checks[c]) (e = new RegExp(d, "i").exec(a)) && (b.push(e), ("builtin" === c || this.plugins[c]) && this.checks[c][d].apply(this.plugins[c] || this, b)) } function k(a) { return P.concat("").join(a ? "-" + a + " " : " ") } function l(a, b) { return b > 0 ? setTimeout(d.proxy(a, this), b) : void a.call(this) } function m(a) { this.tooltip.hasClass(W) || (clearTimeout(this.timers.show), clearTimeout(this.timers.hide), this.timers.show = l.call(this, function () { this.toggle(x, a) }, this.options.show.delay)) } function n(a) { if (!this.tooltip.hasClass(W) && !this.destroyed) { var b = d(a.relatedTarget), c = b.closest(Q)[0] === this.tooltip[0], e = b[0] === this.options.show.target[0]; if (clearTimeout(this.timers.show), clearTimeout(this.timers.hide), this !== b[0] && "mouse" === this.options.position.target && c || this.options.hide.fixed && /mouse(out|leave|move)/.test(a.type) && (c || e)) try { a.preventDefault(), a.stopImmediatePropagation() } catch (f) { } else this.timers.hide = l.call(this, function () { this.toggle(y, a) }, this.options.hide.delay, this) } } function o(a) { !this.tooltip.hasClass(W) && this.options.hide.inactive && (clearTimeout(this.timers.inactive), this.timers.inactive = l.call(this, function () { this.hide(a) }, this.options.hide.inactive)) } function p(a) { this.rendered && this.tooltip[0].offsetWidth > 0 && this.reposition(a) } function q(a, c, e) { d(b.body).delegate(a, (c.split ? c : c.join("." + M + " ")) + "." + M, function () { var a = s.api[d.attr(this, O)]; a && !a.disabled && e.apply(a, arguments) }) } function r(a, c, f) { var g, i, j, k, l, m = d(b.body), n = a[0] === b ? m : a, o = a.metadata ? a.metadata(f.metadata) : z, p = "html5" === f.metadata.type && o ? o[f.metadata.name] : z, q = a.data(f.metadata.name || "qtipopts"); try { q = "string" == typeof q ? d.parseJSON(q) : q } catch (r) { } if (k = d.extend(x, {}, s.defaults, f, "object" == typeof q ? h(q) : z, h(p || o)), i = k.position, k.id = c, "boolean" == typeof k.content.text) { if (j = a.attr(k.content.attr), k.content.attr === y || !j) return y; k.content.text = j } if (i.container.length || (i.container = m), i.target === y && (i.target = n), k.show.target === y && (k.show.target = n), k.show.solo === x && (k.show.solo = i.container.closest("body")), k.hide.target === y && (k.hide.target = n), k.position.viewport === x && (k.position.viewport = i.container), i.container = i.container.eq(0), i.at = new u(i.at, x), i.my = new u(i.my), a.data(M)) if (k.overwrite) a.qtip("destroy", !0); else if (k.overwrite === y) return y; return a.attr(N, c), k.suppress && (l = a.attr("title")) && a.removeAttr("title").attr(Y, l).attr("title", ""), g = new e(a, k, c, !!j), a.data(M, g), g } var s, t, u, v, w, x = !0, y = !1, z = null, A = "x", B = "y", C = "width", D = "height", E = "top", F = "left", G = "bottom", H = "right", I = "center", J = "flipinvert", K = "shift", L = {}, M = "qtip", N = "data-hasqtip", O = "data-qtip-id", P = ["ui-widget", "ui-tooltip"], Q = "." + M, R = "click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "), S = M + "-fixed", T = M + "-default", U = M + "-focus", V = M + "-hover", W = M + "-disabled", X = "_replacedByqTip", Y = "oldtitle", Z = { ie: function () { for (var a = 4, c = b.createElement("div") ; (c.innerHTML = "<!--[if gt IE " + a + "]><i></i><![endif]-->") && c.getElementsByTagName("i")[0]; a += 1); return a > 4 ? a : 0 / 0 }(), iOS: parseFloat(("" + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) || y }; t = e.prototype, t._when = function (a) { return d.when.apply(d, a) }, t.render = function (a) { if (this.rendered || this.destroyed) return this; var b, c = this, e = this.options, f = this.cache, g = this.elements, h = e.content.text, i = e.content.title, j = e.content.button, k = e.position, l = ("." + this._id + " ", []); return d.attr(this.target[0], "aria-describedby", this._id), f.posClass = this._createPosClass((this.position = { my: k.my, at: k.at }).my), this.tooltip = g.tooltip = b = d("<div/>", { id: this._id, "class": [M, T, e.style.classes, f.posClass].join(" "), width: e.style.width || "", height: e.style.height || "", tracking: "mouse" === k.target && k.adjust.mouse, role: "alert", "aria-live": "polite", "aria-atomic": y, "aria-describedby": this._id + "-content", "aria-hidden": x }).toggleClass(W, this.disabled).attr(O, this.id).data(M, this).appendTo(k.container).append(g.content = d("<div />", { "class": M + "-content", id: this._id + "-content", "aria-atomic": x })), this.rendered = -1, this.positioning = x, i && (this._createTitle(), d.isFunction(i) || l.push(this._updateTitle(i, y))), j && this._createButton(), d.isFunction(h) || l.push(this._updateContent(h, y)), this.rendered = x, this._setWidget(), d.each(L, function (a) { var b; "render" === this.initialize && (b = this(c)) && (c.plugins[a] = b) }), this._unassignEvents(), this._assignEvents(), this._when(l).then(function () { c._trigger("render"), c.positioning = y, c.hiddenDuringWait || !e.show.ready && !a || c.toggle(x, f.event, y), c.hiddenDuringWait = y }), s.api[this.id] = this, this }, t.destroy = function (a) { function b() { if (!this.destroyed) { this.destroyed = x; var a, b = this.target, c = b.attr(Y); this.rendered && this.tooltip.stop(1, 0).find("*").remove().end().remove(), d.each(this.plugins, function () { this.destroy && this.destroy() }); for (a in this.timers) clearTimeout(this.timers[a]); b.removeData(M).removeAttr(O).removeAttr(N).removeAttr("aria-describedby"), this.options.suppress && c && b.attr("title", c).removeAttr(Y), this._unassignEvents(), this.options = this.elements = this.cache = this.timers = this.plugins = this.mouse = z, delete s.api[this.id] } } return this.destroyed ? this.target : (a === x && "hide" !== this.triggering || !this.rendered ? b.call(this) : (this.tooltip.one("tooltiphidden", d.proxy(b, this)), !this.triggering && this.hide()), this.target) }, v = t.checks = { builtin: { "^id$": function (a, b, c, e) { var f = c === x ? s.nextid : c, g = M + "-" + f; f !== y && f.length > 0 && !d("#" + g).length ? (this._id = g, this.rendered && (this.tooltip[0].id = this._id, this.elements.content[0].id = this._id + "-content", this.elements.title[0].id = this._id + "-title")) : a[b] = e }, "^prerender": function (a, b, c) { c && !this.rendered && this.render(this.options.show.ready) }, "^content.text$": function (a, b, c) { this._updateContent(c) }, "^content.attr$": function (a, b, c, d) { this.options.content.text === this.target.attr(d) && this._updateContent(this.target.attr(c)) }, "^content.title$": function (a, b, c) { return c ? (c && !this.elements.title && this._createTitle(), void this._updateTitle(c)) : this._removeTitle() }, "^content.button$": function (a, b, c) { this._updateButton(c) }, "^content.title.(text|button)$": function (a, b, c) { this.set("content." + b, c) }, "^position.(my|at)$": function (a, b, c) { "string" == typeof c && (this.position[b] = a[b] = new u(c, "at" === b)) }, "^position.container$": function (a, b, c) { this.rendered && this.tooltip.appendTo(c) }, "^show.ready$": function (a, b, c) { c && (!this.rendered && this.render(x) || this.toggle(x)) }, "^style.classes$": function (a, b, c, d) { this.rendered && this.tooltip.removeClass(d).addClass(c) }, "^style.(width|height)": function (a, b, c) { this.rendered && this.tooltip.css(b, c) }, "^style.widget|content.title": function () { this.rendered && this._setWidget() }, "^style.def": function (a, b, c) { this.rendered && this.tooltip.toggleClass(T, !!c) }, "^events.(render|show|move|hide|focus|blur)$": function (a, b, c) { this.rendered && this.tooltip[(d.isFunction(c) ? "" : "un") + "bind"]("tooltip" + b, c) }, "^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)": function () { if (this.rendered) { var a = this.options.position; this.tooltip.attr("tracking", "mouse" === a.target && a.adjust.mouse), this._unassignEvents(), this._assignEvents() } } } }, t.get = function (a) { if (this.destroyed) return this; var b = i(this.options, a.toLowerCase()), c = b[0][b[1]]; return c.precedance ? c.string() : c }; var $ = /^position\.(my|at|adjust|target|container|viewport)|style|content|show\.ready/i, _ = /^prerender|show\.ready/i; t.set = function (a, b) { if (this.destroyed) return this; { var c, e = this.rendered, f = y, g = this.options; this.checks } return "string" == typeof a ? (c = a, a = {}, a[c] = b) : a = d.extend({}, a), d.each(a, function (b, c) { if (e && _.test(b)) return void delete a[b]; var h, j = i(g, b.toLowerCase()); h = j[0][j[1]], j[0][j[1]] = c && c.nodeType ? d(c) : c, f = $.test(b) || f, a[b] = [j[0], j[1], c, h] }), h(g), this.positioning = x, d.each(a, d.proxy(j, this)), this.positioning = y, this.rendered && this.tooltip[0].offsetWidth > 0 && f && this.reposition("mouse" === g.position.target ? z : this.cache.event), this }, t._update = function (a, b) { var c = this, e = this.cache; return this.rendered && a ? (d.isFunction(a) && (a = a.call(this.elements.target, e.event, this) || ""), d.isFunction(a.then) ? (e.waiting = x, a.then(function (a) { return e.waiting = y, c._update(a, b) }, z, function (a) { return c._update(a, b) })) : a === y || !a && "" !== a ? y : (a.jquery && a.length > 0 ? b.empty().append(a.css({ display: "block", visibility: "visible" })) : b.html(a), this._waitForContent(b).then(function (a) { c.rendered && c.tooltip[0].offsetWidth > 0 && c.reposition(e.event, !a.length) }))) : y }, t._waitForContent = function (a) { var b = this.cache; return b.waiting = x, (d.fn.imagesLoaded ? a.imagesLoaded() : d.Deferred().resolve([])).done(function () { b.waiting = y }).promise() }, t._updateContent = function (a, b) { this._update(a, this.elements.content, b) }, t._updateTitle = function (a, b) { this._update(a, this.elements.title, b) === y && this._removeTitle(y) }, t._createTitle = function () { var a = this.elements, b = this._id + "-title"; a.titlebar && this._removeTitle(), a.titlebar = d("<div />", { "class": M + "-titlebar " + (this.options.style.widget ? k("header") : "") }).append(a.title = d("<div />", { id: b, "class": M + "-title", "aria-atomic": x })).insertBefore(a.content).delegate(".qtip-close", "mousedown keydown mouseup keyup mouseout", function (a) { d(this).toggleClass("ui-state-active ui-state-focus", "down" === a.type.substr(-4)) }).delegate(".qtip-close", "mouseover mouseout", function (a) { d(this).toggleClass("ui-state-hover", "mouseover" === a.type) }), this.options.content.button && this._createButton() }, t._removeTitle = function (a) { var b = this.elements; b.title && (b.titlebar.remove(), b.titlebar = b.title = b.button = z, a !== y && this.reposition()) }, t._createPosClass = function (a) { return M + "-pos-" + (a || this.options.position.my).abbrev() }, t.reposition = function (c, e) { if (!this.rendered || this.positioning || this.destroyed) return this; this.positioning = x; var f, g, h, i, j = this.cache, k = this.tooltip, l = this.options.position, m = l.target, n = l.my, o = l.at, p = l.viewport, q = l.container, r = l.adjust, s = r.method.split(" "), t = k.outerWidth(y), u = k.outerHeight(y), v = 0, w = 0, z = k.css("position"), A = { left: 0, top: 0 }, B = k[0].offsetWidth > 0, C = c && "scroll" === c.type, D = d(a), J = q[0].ownerDocument, K = this.mouse; if (d.isArray(m) && 2 === m.length) o = { x: F, y: E }, A = { left: m[0], top: m[1] }; else if ("mouse" === m) o = { x: F, y: E }, (!r.mouse || this.options.hide.distance) && j.origin && j.origin.pageX ? c = j.origin : !c || c && ("resize" === c.type || "scroll" === c.type) ? c = j.event : K && K.pageX && (c = K), "static" !== z && (A = q.offset()), J.body.offsetWidth !== (a.innerWidth || J.documentElement.clientWidth) && (g = d(b.body).offset()), A = { left: c.pageX - A.left + (g && g.left || 0), top: c.pageY - A.top + (g && g.top || 0) }, r.mouse && C && K && (A.left -= (K.scrollX || 0) - D.scrollLeft(), A.top -= (K.scrollY || 0) - D.scrollTop()); else { if ("event" === m ? c && c.target && "scroll" !== c.type && "resize" !== c.type ? j.target = d(c.target) : c.target || (j.target = this.elements.target) : "event" !== m && (j.target = d(m.jquery ? m : this.elements.target)), m = j.target, m = d(m).eq(0), 0 === m.length) return this; m[0] === b || m[0] === a ? (v = Z.iOS ? a.innerWidth : m.width(), w = Z.iOS ? a.innerHeight : m.height(), m[0] === a && (A = { top: (p || m).scrollTop(), left: (p || m).scrollLeft() })) : L.imagemap && m.is("area") ? f = L.imagemap(this, m, o, L.viewport ? s : y) : L.svg && m && m[0].ownerSVGElement ? f = L.svg(this, m, o, L.viewport ? s : y) : (v = m.outerWidth(y), w = m.outerHeight(y), A = m.offset()), f && (v = f.width, w = f.height, g = f.offset, A = f.position), A = this.reposition.offset(m, A, q), (Z.iOS > 3.1 && Z.iOS < 4.1 || Z.iOS >= 4.3 && Z.iOS < 4.33 || !Z.iOS && "fixed" === z) && (A.left -= D.scrollLeft(), A.top -= D.scrollTop()), (!f || f && f.adjustable !== y) && (A.left += o.x === H ? v : o.x === I ? v / 2 : 0, A.top += o.y === G ? w : o.y === I ? w / 2 : 0) } return A.left += r.x + (n.x === H ? -t : n.x === I ? -t / 2 : 0), A.top += r.y + (n.y === G ? -u : n.y === I ? -u / 2 : 0), L.viewport ? (h = A.adjusted = L.viewport(this, A, l, v, w, t, u), g && h.left && (A.left += g.left), g && h.top && (A.top += g.top), h.my && (this.position.my = h.my)) : A.adjusted = { left: 0, top: 0 }, j.posClass !== (i = this._createPosClass(this.position.my)) && k.removeClass(j.posClass).addClass(j.posClass = i), this._trigger("move", [A, p.elem || p], c) ? (delete A.adjusted, e === y || !B || isNaN(A.left) || isNaN(A.top) || "mouse" === m || !d.isFunction(l.effect) ? k.css(A) : d.isFunction(l.effect) && (l.effect.call(k, this, d.extend({}, A)), k.queue(function (a) { d(this).css({ opacity: "", height: "" }), Z.ie && this.style.removeAttribute("filter"), a() })), this.positioning = y, this) : this }, t.reposition.offset = function (a, c, e) { function f(a, b) { c.left += b * a.scrollLeft(), c.top += b * a.scrollTop() } if (!e[0]) return c; var g, h, i, j, k = d(a[0].ownerDocument), l = !!Z.ie && "CSS1Compat" !== b.compatMode, m = e[0]; do "static" !== (h = d.css(m, "position")) && ("fixed" === h ? (i = m.getBoundingClientRect(), f(k, -1)) : (i = d(m).position(), i.left += parseFloat(d.css(m, "borderLeftWidth")) || 0, i.top += parseFloat(d.css(m, "borderTopWidth")) || 0), c.left -= i.left + (parseFloat(d.css(m, "marginLeft")) || 0), c.top -= i.top + (parseFloat(d.css(m, "marginTop")) || 0), g || "hidden" === (j = d.css(m, "overflow")) || "visible" === j || (g = d(m))); while (m = m.offsetParent); return g && (g[0] !== k[0] || l) && f(g, 1), c }; var ab = (u = t.reposition.Corner = function (a, b) { a = ("" + a).replace(/([A-Z])/, " $1").replace(/middle/gi, I).toLowerCase(), this.x = (a.match(/left|right/i) || a.match(/center/) || ["inherit"])[0].toLowerCase(), this.y = (a.match(/top|bottom|center/i) || ["inherit"])[0].toLowerCase(), this.forceY = !!b; var c = a.charAt(0); this.precedance = "t" === c || "b" === c ? B : A }).prototype; ab.invert = function (a, b) { this[a] = this[a] === F ? H : this[a] === H ? F : b || this[a] }, ab.string = function (a) { var b = this.x, c = this.y, d = b !== c ? "center" === b || "center" !== c && (this.precedance === B || this.forceY) ? [c, b] : [b, c] : [b]; return a !== !1 ? d.join(" ") : d }, ab.abbrev = function () { var a = this.string(!1); return a[0].charAt(0) + (a[1] && a[1].charAt(0) || "") }, ab.clone = function () { return new u(this.string(), this.forceY) }, t.toggle = function (a, c) { var e = this.cache, f = this.options, g = this.tooltip; if (c) { if (/over|enter/.test(c.type) && e.event && /out|leave/.test(e.event.type) && f.show.target.add(c.target).length === f.show.target.length && g.has(c.relatedTarget).length) return this; e.event = d.event.fix(c) } if (this.waiting && !a && (this.hiddenDuringWait = x), !this.rendered) return a ? this.render(1) : this; if (this.destroyed || this.disabled) return this; var h, i, j, k = a ? "show" : "hide", l = this.options[k], m = (this.options[a ? "hide" : "show"], this.options.position), n = this.options.content, o = this.tooltip.css("width"), p = this.tooltip.is(":visible"), q = a || 1 === l.target.length, r = !c || l.target.length < 2 || e.target[0] === c.target; return (typeof a).search("boolean|number") && (a = !p), h = !g.is(":animated") && p === a && r, i = h ? z : !!this._trigger(k, [90]), this.destroyed ? this : (i !== y && a && this.focus(c), !i || h ? this : (d.attr(g[0], "aria-hidden", !a), a ? (this.mouse && (e.origin = d.event.fix(this.mouse)), d.isFunction(n.text) && this._updateContent(n.text, y), d.isFunction(n.title) && this._updateTitle(n.title, y), !w && "mouse" === m.target && m.adjust.mouse && (d(b).bind("mousemove." + M, this._storeMouse), w = x), o || g.css("width", g.outerWidth(y)), this.reposition(c, arguments[2]), o || g.css("width", ""), l.solo && ("string" == typeof l.solo ? d(l.solo) : d(Q, l.solo)).not(g).not(l.target).qtip("hide", d.Event("tooltipsolo"))) : (clearTimeout(this.timers.show), delete e.origin, w && !d(Q + '[tracking="true"]:visible', l.solo).not(g).length && (d(b).unbind("mousemove." + M), w = y), this.blur(c)), j = d.proxy(function () { a ? (Z.ie && g[0].style.removeAttribute("filter"), g.css("overflow", ""), "string" == typeof l.autofocus && d(this.options.show.autofocus, g).focus(), this.options.show.target.trigger("qtip-" + this.id + "-inactive")) : g.css({ display: "", visibility: "", opacity: "", left: "", top: "" }), this._trigger(a ? "visible" : "hidden") }, this), l.effect === y || q === y ? (g[k](), j()) : d.isFunction(l.effect) ? (g.stop(1, 1), l.effect.call(g, this), g.queue("fx", function (a) { j(), a() })) : g.fadeTo(90, a ? 1 : 0, j), a && l.target.trigger("qtip-" + this.id + "-inactive"), this)) }, t.show = function (a) { return this.toggle(x, a) }, t.hide = function (a) { return this.toggle(y, a) }, t.focus = function (a) { if (!this.rendered || this.destroyed) return this; var b = d(Q), c = this.tooltip, e = parseInt(c[0].style.zIndex, 10), f = s.zindex + b.length; return c.hasClass(U) || this._trigger("focus", [f], a) && (e !== f && (b.each(function () { this.style.zIndex > e && (this.style.zIndex = this.style.zIndex - 1) }), b.filter("." + U).qtip("blur", a)), c.addClass(U)[0].style.zIndex = f), this }, t.blur = function (a) { return !this.rendered || this.destroyed ? this : (this.tooltip.removeClass(U), this._trigger("blur", [this.tooltip.css("zIndex")], a), this) }, t.disable = function (a) { return this.destroyed ? this : ("toggle" === a ? a = !(this.rendered ? this.tooltip.hasClass(W) : this.disabled) : "boolean" != typeof a && (a = x), this.rendered && this.tooltip.toggleClass(W, a).attr("aria-disabled", a), this.disabled = !!a, this) }, t.enable = function () { return this.disable(y) }, t._createButton = function () { var a = this, b = this.elements, c = b.tooltip, e = this.options.content.button, f = "string" == typeof e, g = f ? e : "Close tooltip"; b.button && b.button.remove(), b.button = e.jquery ? e : d("<a />", { "class": "qtip-close " + (this.options.style.widget ? "" : M + "-icon"), title: g, "aria-label": g }).prepend(d("<span />", { "class": "ui-icon ui-icon-close", html: "&times;" })), b.button.appendTo(b.titlebar || c).attr("role", "button").click(function (b) { return c.hasClass(W) || a.hide(b), y }) }, t._updateButton = function (a) { if (!this.rendered) return y; var b = this.elements.button; a ? this._createButton() : b.remove() }, t._setWidget = function () { var a = this.options.style.widget, b = this.elements, c = b.tooltip, d = c.hasClass(W); c.removeClass(W), W = a ? "ui-state-disabled" : "qtip-disabled", c.toggleClass(W, d), c.toggleClass("ui-helper-reset " + k(), a).toggleClass(T, this.options.style.def && !a), b.content && b.content.toggleClass(k("content"), a), b.titlebar && b.titlebar.toggleClass(k("header"), a), b.button && b.button.toggleClass(M + "-icon", !a) }, t._storeMouse = function (a) { return (this.mouse = d.event.fix(a)).type = "mousemove", this }, t._bind = function (a, b, c, e, f) { if (a && c && b.length) { var g = "." + this._id + (e ? "-" + e : ""); return d(a).bind((b.split ? b : b.join(g + " ")) + g, d.proxy(c, f || this)), this } }, t._unbind = function (a, b) { return a && d(a).unbind("." + this._id + (b ? "-" + b : "")), this }, t._trigger = function (a, b, c) { var e = d.Event("tooltip" + a); return e.originalEvent = c && d.extend({}, c) || this.cache.event || z, this.triggering = a, this.tooltip.trigger(e, [this].concat(b || [])), this.triggering = y, !e.isDefaultPrevented() }, t._bindEvents = function (a, b, c, e, f, g) { var h = c.filter(e).add(e.filter(c)), i = []; h.length && (d.each(b, function (b, c) { var e = d.inArray(c, a); e > -1 && i.push(a.splice(e, 1)[0]) }), i.length && (this._bind(h, i, function (a) { var b = this.rendered ? this.tooltip[0].offsetWidth > 0 : !1; (b ? g : f).call(this, a) }), c = c.not(h), e = e.not(h))), this._bind(c, a, f), this._bind(e, b, g) }, t._assignInitialEvents = function (a) { function b(a) { return this.disabled || this.destroyed ? y : (this.cache.event = a && d.event.fix(a), this.cache.target = a && d(a.target), clearTimeout(this.timers.show), void (this.timers.show = l.call(this, function () { this.render("object" == typeof a || c.show.ready) }, c.prerender ? 0 : c.show.delay))) } var c = this.options, e = c.show.target, f = c.hide.target, g = c.show.event ? d.trim("" + c.show.event).split(" ") : [], h = c.hide.event ? d.trim("" + c.hide.event).split(" ") : []; this._bind(this.elements.target, ["remove", "removeqtip"], function () { this.destroy(!0) }, "destroy"), /mouse(over|enter)/i.test(c.show.event) && !/mouse(out|leave)/i.test(c.hide.event) && h.push("mouseleave"), this._bind(e, "mousemove", function (a) { this._storeMouse(a), this.cache.onTarget = x }), this._bindEvents(g, h, e, f, b, function () { return this.timers ? void clearTimeout(this.timers.show) : y }), (c.show.ready || c.prerender) && b.call(this, a) }, t._assignEvents = function () { var c = this, e = this.options, f = e.position, g = this.tooltip, h = e.show.target, i = e.hide.target, j = f.container, k = f.viewport, l = d(b), q = (d(b.body), d(a)), r = e.show.event ? d.trim("" + e.show.event).split(" ") : [], t = e.hide.event ? d.trim("" + e.hide.event).split(" ") : []; d.each(e.events, function (a, b) { c._bind(g, "toggle" === a ? ["tooltipshow", "tooltiphide"] : ["tooltip" + a], b, null, g) }), /mouse(out|leave)/i.test(e.hide.event) && "window" === e.hide.leave && this._bind(l, ["mouseout", "blur"], function (a) { /select|option/.test(a.target.nodeName) || a.relatedTarget || this.hide(a) }), e.hide.fixed ? i = i.add(g.addClass(S)) : /mouse(over|enter)/i.test(e.show.event) && this._bind(i, "mouseleave", function () { clearTimeout(this.timers.show) }), ("" + e.hide.event).indexOf("unfocus") > -1 && this._bind(j.closest("html"), ["mousedown", "touchstart"], function (a) { var b = d(a.target), c = this.rendered && !this.tooltip.hasClass(W) && this.tooltip[0].offsetWidth > 0, e = b.parents(Q).filter(this.tooltip[0]).length > 0; b[0] === this.target[0] || b[0] === this.tooltip[0] || e || this.target.has(b[0]).length || !c || this.hide(a) }), "number" == typeof e.hide.inactive && (this._bind(h, "qtip-" + this.id + "-inactive", o, "inactive"), this._bind(i.add(g), s.inactiveEvents, o)), this._bindEvents(r, t, h, i, m, n), this._bind(h.add(g), "mousemove", function (a) { if ("number" == typeof e.hide.distance) { var b = this.cache.origin || {}, c = this.options.hide.distance, d = Math.abs; (d(a.pageX - b.pageX) >= c || d(a.pageY - b.pageY) >= c) && this.hide(a) } this._storeMouse(a) }), "mouse" === f.target && f.adjust.mouse && (e.hide.event && this._bind(h, ["mouseenter", "mouseleave"], function (a) { return this.cache ? void (this.cache.onTarget = "mouseenter" === a.type) : y }), this._bind(l, "mousemove", function (a) { this.rendered && this.cache.onTarget && !this.tooltip.hasClass(W) && this.tooltip[0].offsetWidth > 0 && this.reposition(a) })), (f.adjust.resize || k.length) && this._bind(d.event.special.resize ? k : q, "resize", p), f.adjust.scroll && this._bind(q.add(f.container), "scroll", p) }, t._unassignEvents = function () { var c = this.options, e = c.show.target, f = c.hide.target, g = d.grep([this.elements.target[0], this.rendered && this.tooltip[0], c.position.container[0], c.position.viewport[0], c.position.container.closest("html")[0], a, b], function (a) { return "object" == typeof a }); e && e.toArray && (g = g.concat(e.toArray())), f && f.toArray && (g = g.concat(f.toArray())), this._unbind(g)._unbind(g, "destroy")._unbind(g, "inactive") }, d(function () { q(Q, ["mouseenter", "mouseleave"], function (a) { var b = "mouseenter" === a.type, c = d(a.currentTarget), e = d(a.relatedTarget || a.target), f = this.options; b ? (this.focus(a), c.hasClass(S) && !c.hasClass(W) && clearTimeout(this.timers.hide)) : "mouse" === f.position.target && f.position.adjust.mouse && f.hide.event && f.show.target && !e.closest(f.show.target[0]).length && this.hide(a), c.toggleClass(V, b) }), q("[" + O + "]", R, o) }), s = d.fn.qtip = function (a, b, e) { var f = ("" + a).toLowerCase(), g = z, i = d.makeArray(arguments).slice(1), j = i[i.length - 1], k = this[0] ? d.data(this[0], M) : z; return !arguments.length && k || "api" === f ? k : "string" == typeof a ? (this.each(function () { var a = d.data(this, M); if (!a) return x; if (j && j.timeStamp && (a.cache.event = j), !b || "option" !== f && "options" !== f) a[f] && a[f].apply(a, i); else { if (e === c && !d.isPlainObject(b)) return g = a.get(b), y; a.set(b, e) } }), g !== z ? g : this) : "object" != typeof a && arguments.length ? void 0 : (k = h(d.extend(x, {}, a)), this.each(function (a) { var b, c; return c = d.isArray(k.id) ? k.id[a] : k.id, c = !c || c === y || c.length < 1 || s.api[c] ? s.nextid++ : c, b = r(d(this), c, k), b === y ? x : (s.api[c] = b, d.each(L, function () { "initialize" === this.initialize && this(b) }), void b._assignInitialEvents(j)) })) }, d.qtip = e, s.api = {}, d.each({ attr: function (a, b) { if (this.length) { var c = this[0], e = "title", f = d.data(c, "qtip"); if (a === e && f && "object" == typeof f && f.options.suppress) return arguments.length < 2 ? d.attr(c, Y) : (f && f.options.content.attr === e && f.cache.attr && f.set("content.text", b), this.attr(Y, b)) } return d.fn["attr" + X].apply(this, arguments) }, clone: function (a) { var b = (d([]), d.fn["clone" + X].apply(this, arguments)); return a || b.filter("[" + Y + "]").attr("title", function () { return d.attr(this, Y) }).removeAttr(Y), b } }, function (a, b) { if (!b || d.fn[a + X]) return x; var c = d.fn[a + X] = d.fn[a]; d.fn[a] = function () { return b.apply(this, arguments) || c.apply(this, arguments) } }), d.ui || (d["cleanData" + X] = d.cleanData, d.cleanData = function (a) { for (var b, c = 0; (b = d(a[c])).length; c++) if (b.attr(N)) try { b.triggerHandler("removeqtip") } catch (e) { } d["cleanData" + X].apply(this, arguments) }), s.version = "2.2.1", s.nextid = 0, s.inactiveEvents = R, s.zindex = 15e3, s.defaults = { prerender: y, id: y, overwrite: x, suppress: x, content: { text: x, attr: "title", title: y, button: y }, position: { my: "top left", at: "bottom right", target: y, container: y, viewport: y, adjust: { x: 0, y: 0, mouse: x, scroll: x, resize: x, method: "flipinvert flipinvert" }, effect: function (a, b) { d(this).animate(b, { duration: 200, queue: y }) } }, show: { target: y, event: "mouseenter", effect: x, delay: 90, solo: y, ready: y, autofocus: y }, hide: { target: y, event: "mouseleave", effect: x, delay: 0, fixed: y, inactive: y, leave: "window", distance: y }, style: { classes: "", widget: y, width: y, height: y, def: x }, events: { render: z, move: z, show: z, hide: z, toggle: z, visible: z, hidden: z, focus: z, blur: z } }, L.viewport = function (c, d, e, f, g, h, i) { function j(a, b, c, e, f, g, h, i, j) { var k = d[f], s = u[a], t = v[a], w = c === K, x = s === f ? j : s === g ? -j : -j / 2, y = t === f ? i : t === g ? -i : -i / 2, z = q[f] + r[f] - (n ? 0 : m[f]), A = z - k, B = k + j - (h === C ? o : p) - z, D = x - (u.precedance === a || s === u[b] ? y : 0) - (t === I ? i / 2 : 0); return w ? (D = (s === f ? 1 : -1) * x, d[f] += A > 0 ? A : B > 0 ? -B : 0, d[f] = Math.max(-m[f] + r[f], k - D, Math.min(Math.max(-m[f] + r[f] + (h === C ? o : p), k + D), d[f], "center" === s ? k - x : 1e9))) : (e *= c === J ? 2 : 0, A > 0 && (s !== f || B > 0) ? (d[f] -= D + e, l.invert(a, f)) : B > 0 && (s !== g || A > 0) && (d[f] -= (s === I ? -D : D) + e, l.invert(a, g)), d[f] < q && -d[f] > B && (d[f] = k, l = u.clone())), d[f] - k } var k, l, m, n, o, p, q, r, s = e.target, t = c.elements.tooltip, u = e.my, v = e.at, w = e.adjust, x = w.method.split(" "), z = x[0], L = x[1] || x[0], M = e.viewport, N = e.container, O = (c.cache, { left: 0, top: 0 }); return M.jquery && s[0] !== a && s[0] !== b.body && "none" !== w.method ? (m = N.offset() || O, n = "static" === N.css("position"), k = "fixed" === t.css("position"), o = M[0] === a ? M.width() : M.outerWidth(y), p = M[0] === a ? M.height() : M.outerHeight(y), q = { left: k ? 0 : M.scrollLeft(), top: k ? 0 : M.scrollTop() }, r = M.offset() || O, ("shift" !== z || "shift" !== L) && (l = u.clone()), O = { left: "none" !== z ? j(A, B, z, w.x, F, H, C, f, h) : 0, top: "none" !== L ? j(B, A, L, w.y, E, G, D, g, i) : 0, my: l }) : O } }) }(window, document);

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
