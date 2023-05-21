jQuery(document).ready(function($){
	//sliders
	//homepage fv slider
	$('.fv_slider .slider').slick({
	  dots: true,
	  infinite: true,
		arrows: false,
		// vertical: true,
		fade: true,
		cssEase: 'linear',
		autoplay:true,
		autoplaySpeed: 500,
	  speed: 2000,
	  slidesToShow: 1,
	  slidesToScroll: 1,
		// cssEase: 'ease-in-out',
		cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
	  responsive: [
	    {
	      breakpoint: 1280,
	      settings: {
					dots: false,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
					dots: false,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
					dots: false,
	      }
	    }
	  ]
	});
	//homepage fv slider-mob
	$('.fv_slider .slider-mob').slick({
	  dots: false,
	  infinite: true,
		arrows: false,
		// vertical: true,
		fade: true,
		cssEase: 'linear',
		autoplay:true,
		autoplaySpeed: 500,
	  speed: 2000,
	  slidesToShow: 1,
	  slidesToScroll: 1,
		// cssEase: 'ease-in-out',
		cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
	  responsive: [
	    {
	      breakpoint: 1280,
	      settings: {
					dots: false,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
					dots: false,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
					dots: false,
	      }
	    }
	  ]
	});
	//homepage apt slider
	$('.apt .slider').slick({
	  dots: true,
	  infinite: true,
		arrows: false,
		// vertical: true,
		fade: true,
		cssEase: 'linear',
		autoplay:true,
		autoplaySpeed: 1000,
	  speed: 2000,
	  slidesToShow: 1,
	  slidesToScroll: 1,
		// cssEase: 'ease-in-out',
		cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
	  responsive: [
	    {
	      breakpoint: 1280,
	      settings: {
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	      }
	    }
	  ]
	});
	//homepage infra slider
	$('.infra .slider').slick({
	  dots: true,
	  infinite: true,
		arrows: false,
		// vertical: true,
		fade: true,
		cssEase: 'linear',
		autoplay:true,
		autoplaySpeed: 1000,
	  speed: 2000,
	  slidesToShow: 1,
	  slidesToScroll: 1,
		// cssEase: 'ease-in-out',
		cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
	  responsive: [
	    {
	      breakpoint: 1280,
	      settings: {
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	      }
	    }
	  ]
	});
	//construction construction slider
	$('.construction .slider').slick({
	  dots: false,
	  infinite: true,
		arrows: true,
		autoplay:true,
		autoplaySpeed: 1000,
	  speed: 1000,
	  slidesToShow: 2,
	  slidesToScroll: 1,
		cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
	  responsive: [
	    {
	      breakpoint: 1280,
	      settings: {
					slidesToShow: 1,
				  slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
					slidesToShow: 1,
				  slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
					slidesToShow: 1,
				  slidesToScroll: 1,
	      }
	    }
	  ]
	});

	//another functions
	// homepage header language
	$(".language span").click(function() {
		$(this).parent().find('.drop').slideToggle(500);
	});
	// homepage header arrow_up
	$( '.arrow_up' ).click(function () {
		$('html, body').animate({
			// scrollTop: $(".list h3 ").next().offset().top
			scrollTop: $("main").offset().top,
		}, 500);
	});
	// mobile arrow show
	$(window).scroll(function () {
		var sc = $(window).scrollTop()
		if (sc > 150) {
			$(".arrow_up").addClass("show")
		} else {
			$(".arrow_up").removeClass("show")
		}
	});
	// homepage header nav
	$('header .side .menu').click(function(){
		$(this).parent().parent().find('nav').toggleClass('open');
	});
	//faq list slideToggle
	$('.faq__content').fadeIn(500);
	$('.faq__content .tab-title').click(function (e) {
		e.preventDefault();
		$('.faq__content .tab-title').removeClass('active');
		$(this).addClass('active');
		$('.faq__content .menu').slideUp();
		if ($(this).next().is(":hidden")) {
			$(this).next().slideDown(500)
		}
		else {
			$('.faq__content .tab-title').removeClass('active');
		}
	});

	//popups
	//close popup
	$('.popup .close').click(function(){
		$('.popup').removeClass('open');
		$('#wrapper').removeClass('popup');
	});
	$('.popup .blocker').click(function(){
		$('.popup').removeClass('open');
		$('#wrapper').removeClass('popup');
	});
	//homepage fv popup_catalog
	$('.fv_slider .btns span').click(function(){
		$('.popup_catalog').addClass('open');
		$('#wrapper').addClass('popup');
	});
	//homepage infra popup_catalog
	$('.infra .catalog span').click(function(){
		$('.popup_catalog').addClass('open');
		$('#wrapper').addClass('popup');
	});
	//homepage footer popup_map
	$('footer .map').click(function(){
		$('.popup_map').addClass('open');
		$('#wrapper').addClass('popup');
	});
	//manage manage_company popup_video
	$('.manage .btns .media').click(function(){
		$('.popup_video').addClass('open');
		$('#wrapper').addClass('popup');
	});

});
