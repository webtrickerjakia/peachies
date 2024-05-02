
(function($){
	$(function(){


        // Start Home JS
        
        // Phone nav click function
        $('.hamburger').click(function () {
            $("body").toggleClass("navShown");
            $(".nav-wrap").fadeToggle()
        });
        
        
        if ($('.pampas-bg').length) {
            $('body').addClass('pampas-bg')
        }
        if ($('.secondary-header').length) {
            $('header').addClass('secondary-header')
        }
		
        
        if ($('.marquee-slider').length) {
            $('.marquee-slider').marquee({
                direction: 'left',
                duration: 50000,
                gap: 7,
                delayBeforeStart: 0,
                duplicated: true,
                startVisible: true
            });
        }
        
        $('.shop-range-tab-trigger ul li').click(function(){
            $('.shop-range-tab-trigger ul li').removeClass('active');
            $(this).addClass('active');
            $('.shop-range-tab-item-wrap .shop-range-tab-item').hide();
        
            var activeTab = $(this).attr('rel');
            $(activeTab).show();
            return false;
        });
        
        if ($('.shop-range-marquee').length) {
            $('.shop-range-marquee').marquee({
                direction: 'left',
                duration: 50000,
                gap: 12,
                delayBeforeStart: 0,
                duplicated: true,
                startVisible: true
            });
        }
        
        if ($('.review-item-wrap').length) {
            $('.review-item-wrap').slick({
                autoplay: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots:false,
                infinite: true,
            })
            $(window).on('resize', function () {
                $('.review-item-wrap').slick('resize');
            });
        }
        
        if($(window).width() > 480){
            if ($('.sponsor-item-wrap').length) {
                $('.sponsor-item-wrap').marquee({
                    direction: 'left',
                    duration: 50000,
                    gap: 0,
                    delayBeforeStart: 0,
                    duplicated: true,
                    startVisible: true
                });
            }
        }
        
        if ($('.instagram-component-wrap').length) {
            $('.instagram-component-wrap').marquee({
                direction: 'left',
                duration: 50000,
                gap: 0,
                delayBeforeStart: 0,
                duplicated: true,
                startVisible: true
            });
        }
        
        
        $('.bottom-to-top a ').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 1000)
        })
        
        if ($('.planet-item-wrap').length) {
            $('.planet-item-wrap').slick({
                autoplay: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: false,
                dots: true,
                infinite: true,
                adaptiveHeight: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: 'unslick'
                    }
                ]
            })
            
            $(window).on('resize', function () {
                $('.planet-item-wrap').slick('resize');
            });
        }
        
        $('.cart-btn a').click(function (e) {
            e.preventDefault()
            $("body").toggleClass("cartShown");
        
            $('.basket-close').click(function () {
                $("body").removeClass("cartShown");
            });
        });
        
        $('.basket-inner').click(function () {
            $("body").removeClass("cartShown");
        });
        $('.main-basket').click(function (e) {
            e.stopPropagation();
        });
        
        // End Home JS
        
        // Start About JS
        if ($('.secondary-hero-marquee').length) {
            $('.secondary-hero-marquee').marquee({
                direction: 'left',
                duration: 50000,
                gap: 12,
                delayBeforeStart: 0,
                duplicated: true,
                startVisible: true
            });
        }
        
        $(".scroll-to-section").click(function () {
            $('html, body').animate({
                scrollTop: $("#scroll-section").offset().top
            }, 500);
        
        });
        
        
        if ($('.blog-slider-wrap').length) {
            $('.blog-slider-wrap').slick({
                autoplay: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,
                dots:false,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 2,
                            arrows: false,
                        }
                    },
                    {
                        breakpoint: 570,
                        settings: {
                            slidesToShow: 1,
                            arrows: false,
                        }
                    }
                ]
            })
            
            $(window).on('resize', function () {
                $('.blog-slider-wrap').slick('resize');
            });
            
            var slickTracHeight = $('.blog-slider-wrap .slick-list').outerHeight();
            
            $('.blog-slider-component').css({'height': slickTracHeight})
        }
        // End About JS
        
        
        //Shop page
        $(".left-right-accordion").each(function () {
            var $this = $(this);
            $this.find("h5").on("click touch", function () {
                $(".left-right-accordion").removeClass("active")
                $(".left-right-accordion-content").slideUp();
                if ($this.find(".left-right-accordion-content:visible").length) {
                    $(".left-right-accordion").removeClass("active")
                    $(".left-right-accordion-content").slideUp();
                } else {
                    $this.addClass("active")
                    $(".left-right-accordion-content").slideUp();
                    $this.find(".left-right-accordion-content").slideDown();
                }
            })
        })
        
        $('.shop-description-tab-trigger ul li a').click(function () {
            $('.shop-description-tab-trigger ul li a').removeClass('active');
            $(this).addClass('active');
            $('.shop-description-tab-item').hide();
            var activeTab = $(this).attr('href');
            $(activeTab).fadeIn();
            return false;
        });
        
        $('.shop-description-tab-trigger ul li').click(function(){
            $('.shop-description-tab-trigger ul li').removeClass('active');
            $(this).addClass('active');
            $('.shop-description-tab-item-wrap .shop-description-tab-item').hide();
            
            var activeTab = $(this).attr('a');
            $(activeTab).fadeIn();
            return false;
        });
        
        
        if ($('.shop-slider-item-wrap').length) {
            $('.shop-slider-item-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: false,
                dots: true,
                autoplay: false,
                autoplaySpeed: 2000,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: 'unslick'
                    }
                ]
            })
            
            $(window).on('resize', function () {
                $('.shop-slider-item-wrap').slick('resize');
            });
        }
        
        
        $('.footer-widget ul li a[href^="#"], .popup-trigger a[href^="#"]').click(function () {
            $('.contact-popup-wrap').hide();
            var activeTab = $(this).attr('href');
            $(activeTab).fadeIn();
            return false;
        });
        
        
        $('.close-btn').click(function () {
            $('.contact-popup-wrap').hide()
        });
        
        $(window).on('load', function () {
            var bigImage = $('.shop-tab-item-wrap figure')
            $('.shop-tab-trigger ul li figure').click(function () {
                var thisImg = $(this).html()
                console.log(bigImage.attr('src', thisImg))
                bigImage.html(thisImg)
            })
        })
        
        
        if($(window).width() > 991){
            
        
        $(window).on('load resize', function(){
            var windowWidth = $(window).width();
            $('.switching-peachies-item').width(windowWidth);
            var totalLength = $('.switching-peachies-item').length;
            var totalWidth = windowWidth * totalLength;
            if($(window).width() > 1200){
                var totalHeight = totalWidth - (windowWidth / 2.5);
            }
            if($(window).width() > 991 && $(window).width() < 1201){
                var totalHeight = totalWidth;
            }
            
            var offsetY = $('.switching-peachies-inner').offset().top;
            $('.switching-peachies-inner').height(totalHeight);
            $('.switching-peachies-scroll-wrap').width(totalWidth)
            
            if($('.has-sticky').length){
                $('body').addClass('sticky-added')
            }
            
            $(window).on('scroll', function(){
                var thisScroll = $(this).scrollTop()
                var elemScroll = offsetY - thisScroll
                
                if(thisScroll > offsetY && thisScroll < totalHeight){
                    $('.switching-peachies-scroll-wrap').css("transform", `translateX(${elemScroll}px)`);
                }
                
                 if(thisScroll <  offsetY){
                     $('.switching-peachies-scroll-wrap').css("transform", `translateX(${0}px)`);
                 }
                
            })
        })
        
        }
        if ($(window).width() < 992) {

            if ($('.switching-peachies-scroll-wrap').length) {
                $('.switching-peachies-scroll-wrap').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    mobileFirst: true,
                    arrows: false,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    infinite: true,
                })

                $(window).on('resize', function () {
                    $('.switching-peachies-scroll-wrap').slick('resize');
                });
            }

        }
        
        
        
        
        
        
    
    
	})// End ready function.
    
    
    
	
    
})(jQuery)


function increaseCount(e, el) {
    var input = el.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}

function decreaseCount(e, el) {
    var input = el.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
}