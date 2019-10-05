﻿$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 

	$('.about').addClass('anim');
	
	DetectTheThing()

});

function DetectTheThing() {
    	if( screen.width <= 480 && screen.height <= 812 ) {
    		location.href = '../Universum canvas new/mobil.html';
  		} else if( screen.width <= 812 && screen.height <= 480 ) {
    		location.href = '../Universum canvas new/mobil.html';
  			}
		// } else {
		// 	location.href = 'index.html';
		// }
       // var uagent = navigator.userAgent.toLowerCase();
       // if (uagent.search("iphone") > -1 || uagent.search("ipad") > -1 
       // || uagent.search("android") > -1 || uagent.search("blackberry") > -1
       // || uagent.search("webos") > -1)
       //    window.location.href ="mobil.html";
    }
// var screen = $(window).width();
// if( screen <= 480 ) {
//     location.href = '/mobile.html';
// }

/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
// $(function(){
	/* placeholder*/	   
	// $('input, textarea').each(function(){
 // 		var placeholder = $(this).attr('placeholder');
 // 		$(this).focus(function(){ 
 // 			$(this).attr('placeholder', '');
 // 		});
 // 		$(this).focusout(function(){ 
 // 			$(this).attr('placeholder', placeholder); 
 // 		});
 // });
	/* placeholder*/

$('.button-nav').click(function(){
	$(this).toggleClass('active'); 
	$('.main-nav-list').slideToggle(); 
	return false;
});
	
// $('.logo').on('click', function(){
// 	$('.tab-cont').addClass('hide');
// 	$('#tab1').addClass('anim').removeClass('hide');
// })


// });

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();		
	// $('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;


	
	if (viewport_wid <= 991) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);


var links = ['#tab1'];
$('.tabs li a').on('click', function(){
	var id = $(this).attr('href');
	if(id != '#tab6') {
		$('.about-studio__page-1').removeClass('anim').addClass('active3');
	}
	var pages = $(this).parents('.tab-wrap').find('.tab-cont');
	  // if(links.indexOf(id)==-1){
	links.unshift(id);
  // } 
  var lastId = links[1];
  if (lastId == id) {
  	return false;
  }
  $(lastId).addClass('anim2');
  var tabs = $('.tabs li a');
  for (var i = 0; i < tabs.length; i++) {
		$(tabs[i]).addClass('disabled');
	}
	var timeDelay = 1000;
	if (links[1] == "#tab5") {
		timeDelay = 1500;
	}
	setTimeout (pausePage,timeDelay);

  function pausePage (){
  	if(id == '#tab6') {
			$('.about-studio__page-1').addClass('anim');
			$('.about-studio__page-2').removeClass('anim');
		}
  	$('.about-studio__page-1').removeClass('hide').removeClass('active2').removeClass('active3');
		$('.about-studio__page-2').addClass('hide').removeClass('active2').removeClass('active3');
  	links.splice([1],1);
		$(pages).addClass('hide').removeClass('anim').removeClass('anim2');
		$(id).removeClass('hide').addClass('anim');
		for (var i = 0; i < tabs.length; i++) {
  		$(tabs[i]).removeClass('disabled');
  	}	
  }
  $(this).parent().siblings().removeClass('active');
 	$(this).parent().addClass('active');
	return false;
});

// Class about-studio, toggle pages //

$('.about-studio__arrow').click(function(){
	var arrowDown = $('.about-studio__arrow-down');
	var arrowUp = $('.about-studio__arrow-up');
	var arrow = $(this);
	
	if( arrow[0] == arrowDown[0] ) {
		$('.about-studio__page-2').removeClass('active2').removeClass('active3');
		$('.about-studio__page-1').removeClass('active3').addClass('active2');
	} else {
		$('.about-studio__page-1').removeClass('active2').removeClass('active3');
		$('.about-studio__page-2').removeClass('active3').addClass('active2');
	}
	setTimeout (pauseArrow,1000);
		
	function pauseArrow(){
		if( arrow[0] == arrowDown[0] ) {
			$('.about-studio__page-1').addClass('hide').removeClass('active2').removeClass('anim');
			$('.about-studio__page-2').removeClass('hide').addClass('active3').addClass('anim');
		} else {
				$('.about-studio__page-2').addClass('hide').removeClass('active2').removeClass('anim');
				$('.about-studio__page-1').removeClass('hide').addClass('active3').addClass('anim');
			}
	}
});
// Нажатие на кнопку "Быстрый заказ"
var checkAct = true;
var openForm = 'anim';
$('.order-text').on('click', function(){
	$(formInput).attr("placeholder", "Телефон").blur();
	$('footer').removeClass('active');
	if (openForm == 'anim') {
		$('footer').addClass(openForm).removeClass('anim3');
		setTimeout(delayForm, 1000);
		openForm = 'anim3';
	} else { 
			closeForm();
			$('footer').addClass(openForm).removeClass('anim').addClass('active');
			openForm = 'anim';
		}
		
});
	function delayFormClose(){
		$('footer').addClass('active').removeClass('anim')
			.removeClass('anim3').removeClass('anim2')
			.removeClass('anim4').removeClass('anim5');
		$('.form-footer').addClass('hide');
		checkAct = true;
		openForm = 'anim';
		$('.form-alert').addClass('hide');
	}
	function delayForm(){
		$('.form-footer').removeClass('hide');
	}
	function closeForm(){
	if( checkAct) {
			$('footer').addClass('anim4').addClass('anim3');
			setTimeout(delayFormClose, 1000);
		} else {
				$('footer').addClass('anim5').addClass('anim3');
				setTimeout(delayFormClose, 1000);
			}
	}
// Нажатие на кнопку "Перезвонить мне"
var formInput =  $('.form-input');

$('.form-btn').on('click', function(e){
	e.preventDefault();

	if( formInput.val() == '' ){
		$(formInput).attr("placeholder", "Заполните пожалуйста поле").blur();
		formInput.css('text-align', 'right');
	} else if ( /^[0-9-.+()*/ ]+$/.test($('.form-input').val()) ) {
			checkAct = false;
			$('footer').addClass('anim2');
			$('.form-alert').removeClass('hide');
			formInput.val('');
			formInput.css('text-align', 'right');
		} else {
				formInput.val('');
				$(formInput).attr("placeholder", "Введите только цифры").blur();
				formInput.css('text-align', 'right');
			}
});

// Нажатие на стрелку в быстром заказе
$('.form-text').on('click', function(){
	closeForm();
});
formInput.on('click', function(){
	formInput.css('text-align', 'left');
});

// Радио кнопки
var radioSite = true;
var radioConsultation = false;
$('.radio-site').on('click', function(){
	if (radioSite == true) {
		$('.radio-site').toggleClass('checked');
		$(this).prop('checked', false);
		radioSite = false;
	} else {
			$('.radio-site').toggleClass('checked');
			$(this).prop('checked', true);
			radioSite = true;
		}
		// console.log( $(this).prop('checked') );
});

$('.radio-consultation').on('click', function(){
	if (radioConsultation == true) {
		$('.radio-consultation').toggleClass('checked');
		$(this).prop('checked', false);
		radioConsultation = false;
	} else {
			$('.radio-consultation').toggleClass('checked');
			$(this).prop('checked', true);
			radioConsultation = true;
		}
		// console.log( $(this).prop('checked') );
});

// Слайдер для портфолио
var nextPortfolio = $('.portfolio-next');
var prevPortfolio = $('.portfolio-prev');
var slidesPortfolio = $('.portfolio-slide');
var numberOfSlide = 1;
var prevNumb = 0;
var slidersTotal = slidesPortfolio.length;
var toggleDirection = true;

$(nextPortfolio).on('click', function(){
	if (toggleDirection && numberOfSlide == slidersTotal - 1 && prevNumb == slidersTotal - 1) {
		numberOfSlide = 0;
	}else if (toggleDirection && numberOfSlide == slidersTotal && prevNumb == slidersTotal - slidersTotal + 1) {
		numberOfSlide = 2;
	}
	toggleDirection = false;
	if (numberOfSlide < slidersTotal) {
		$(slidesPortfolio[prevNumb]).addClass("hide").removeClass("active");
		$(slidesPortfolio[numberOfSlide]).removeClass("hide").addClass("active");
		prevNumb = numberOfSlide;
		numberOfSlide++;
		
	} else {
		prevNumb = slidersTotal - 1;
		$(slidesPortfolio[prevNumb]).addClass("hide").removeClass("active");
		$(slidesPortfolio[0]).removeClass("hide").addClass("active");
		prevNumb = 0;
		numberOfSlide = 1;
		}
});

$(prevPortfolio).on('click', function(){
	if (numberOfSlide == slidersTotal && !toggleDirection) {
		numberOfSlide = numberOfSlide - 1;
		} else if(!toggleDirection && numberOfSlide == slidersTotal - 1) {
			numberOfSlide++;
			} 
	toggleDirection = true;
	if (numberOfSlide <= slidersTotal) {
		$(slidesPortfolio[prevNumb]).addClass("hide").removeClass("active");
		$(slidesPortfolio[slidersTotal - numberOfSlide ] ).removeClass("hide").addClass("active");
		prevNumb = slidersTotal - numberOfSlide;
		numberOfSlide++;
			if (numberOfSlide == (slidersTotal + 1) ) {
				numberOfSlide = 1;
			}
	}
});





// mobile nav

// $('.js-cross').on('click', function(){
// 	$(this).parent('.js-nav-mob').toggleClass('open');
// });


// $('.nav-tab-list__link ').on('click', function(){
// 	let open = $(this).parents('.js-nav-mob');
// 	if((open).hasClass('open')){
// 			open.removeClass('open');
// 		}
		
// 	});