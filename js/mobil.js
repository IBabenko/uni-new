$(document).ready(function() {


var heightScreen, heightCover;

$(window).resize(function(){
  heightScreen = $(window).height();
  heightCover = (heightScreen - 84) / 2;
  $(".top").css( {bottom: ("-" + heightCover + "px")} );
  $(".bottom").css( {top: ("-" + heightCover + "px")} );
  var heightWindow = heightScreen - 84;
  $('#tab4.anim2 .about-finish').css( {height: heightWindow } );
});

$(window).resize();



	var id = "#main-screen";
	var sections = $(".section");
	var serveceWrapSet = $(".services-wrap").children().filter(".service-wrap");
	function pauseCloseServices(){
		$(serveceWrapSet).addClass("hide");
	}
	
	var linkWindows = $('.portfolio__about');
	$('.menu-link').on('click', function(){
		var setTime = 1500;

		for(var linkWindow of linkWindows) { //закрываю модальное окно в портфолио
			$(linkWindow).removeClass('anim').addClass('hide');
		}

		if( id == $(this).attr('href') ){ //no double click
			return false;
		}
		for(var section of sections) { //add amination when closins
	  	if (id == "#main-screen") {
	  		$(section).addClass("anim2");
	  	} else if (id == "#tab1") {
	  		$(section).addClass("anim3");
	  		setTimeout(pauseCloseServices, 500);
	  		} else if (id == "#tab2") {
	  		$(section).addClass("anim2");
	  			} else if (id == "#tab3") {
	  		$(section).addClass("anim2");
	  			}else if (id == "#tab4") {
	  		$(section).addClass("anim2");
	  		setTimeout(closeAbout, 750);
	  		setTime = 2000;
	  			}
  	}
	  id = $(this).attr('href');
		setTimeout (pausePage,setTime);

		function pausePage (){
			$(serveceWrapSet).removeClass("hide");
			$(sections).addClass('hide').removeClass('anim').removeClass('anim2').removeClass('anim3');
			$(id).removeClass('hide').addClass('anim');
			$('.about-finish').css({backgroundColor: ''});
		}
		$(this).parent().siblings().removeClass('active');
 		$(this).parent().addClass('active');
		return false;
	});
////////////////FORM////////////////////
	function pauseCloseForm(){
		$('.section-form').addClass('hide').removeClass('anim3');
		$("#tab6").addClass("hide").removeClass("anim3");
	}
	var serviceForm = $(".service-text");
	for(var i = 0; i < serviceForm.length; i++){
		$(serviceForm[i]).on('click', function(){
			if($(this).text() == "Одностраничные лендинги (сайт-визитка)"){
				$(".form-btn").text("Заказать лендинг");
			} else if ($(this).text() == "Корпоративные сайты"){
				$(".form-btn").text("Заказать корпоративный сайт");
			} else if ($(this).text() == "Имидживые сайты"){
				$(".form-btn").text("Заказать имидживый сайт");
			} else if ($(this).text() == "Интернет-магазины"){
				$(".form-btn").text("Заказать интернет-магазин");
			} else if ($(this).text() == "Мобильные приложения"){
				$(".form-btn").text("Заказать приложение");
			}
			$('.section-form').removeClass('hide').addClass('anim');
		setTimeout (pauseOpenForm,500);
		});
	}

	function closeAbout(){
		$('#tab4').removeClass('anim2').addClass('anim3');
		$('#tab4.anim3 .about-finish').css({backgroundColor: 'black'});
	}

	function pauseOpenForm (){
		$('.form').removeClass('hide');
		$('.contacts').removeClass('hide');
	}

	$('.form-bacground, .cross').on('click', function(){
		$('.form').addClass('hide');
		$('.section-form').removeClass('anim').addClass('anim3');
		setTimeout (pauseCloseForm,500);
	});
		
////////////////FORM END////////////////

	var portfolioLinks = $('.portfolio-link');
	for(var portfolioLink of portfolioLinks) {
		$(portfolioLink).on('click', function(e){
			var idWindow = $(this).attr('href');
			$(idWindow).removeClass('hide').addClass('anim');
		});
	}
	$('.portfolio__about-back').on('click', function(){
		$(this).parent().removeClass('anim').addClass('hide');
	});

	$(".phone").on("click", function(){
		let idContacts = $(this).attr("href");
		$(idContacts).addClass("anim").removeClass("hide");
		setTimeout (pauseOpenForm,500);
	});
	$(".contacts-background").on("click", function(){
		$("#tab6").addClass("anim3").removeClass("anim");
		$('.contacts').addClass('hide');
		setTimeout (pauseCloseForm,500);
	});




});


