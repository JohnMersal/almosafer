$(document).ready(function() {
	//////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////
	//   _____   __ ____   ___  _     _
	//  / ___/  /  ]    \ /   \| |   | |
	// (   \_  /  /|  D  )     | |   | |
	//  \__  |/  / |    /|  O  | |___| |___
	//  /  \ /   \_|    \|     |     |     |
	//  \    \     |  .  \     |     |     |
	//   \___|\____|__|\_|\___/|_____|_____|
	// Scroll to ID function
	$('.scroll').click(function(event) {
	var id = $(this).attr('href');
	// target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    // prevent standard hash navigation (avoid blinking in IE)
    event.preventDefault();
   	var pos = $id.offset().top-80;

	  $('html, body').animate({
	    scrollTop: pos
	  }, 1000)
	});
	$(window).scroll(function() {
		if ($(this).scrollTop()>250)
	     {
	        $('.scroll-page').fadeOut();
	     }
	    else
	     {
	      $('.scroll-page').fadeIn();
	     }
	});
    // Scroll to ID function End
	//////////////////////////////////////////////////////////


	//////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////
	//   ___  __    __ _
	//  /   \|  |__|  | |
	// |     |  |  |  | |
	// |  O  |  |  |  | |___
	// |     |  `  '  |     |
	// |     |\      /|     |
	//  \___/  \_/\_/ |_____|
    // Owl Carousel 2 Functions
	var owl = $('.owl-carousel');
	owl.owlCarousel({
	    nav:true,
	    center:true,
	    margin: -158,
	    touchDrag: true,
	    mouseDrag: true,
	    items:1,
	    // Call back !!! OPTIONS !!! for prespective classes to give 3D Effect
	    onDragged: callback2,
	    onInitialized: callback,
	    // End Call back  !!! OPTIONS !!! for prespective classes to give 3D Effect
	    // Custom Navigation
	    navContainer: '#customNav',
	    navText: ["<i class='ico_arrow-prev'></i>","<i class='ico_arrow-next'></i>"],
	    // Responsive 
	    responsive : {
		    // breakpoint from 0 up
		    0 : {
		        margin: 60,
		    },
		    // breakpoint from 480 up
		    480 : {
		    },
		    // breakpoint from 768 up
		    768 : {
		    }
		},
	});
	// Owl Option to set SECOND slide in action
	owl.trigger('next.owl.carousel');
	// End Owl Option to set SECOND slide in action
	//////////////////////////////////////////////////////////
	// Call back for prespective classes to give 3D Effect
	function callback(event) {
		$('.owl-item.active').addClass('prespective1');
		$('.owl-item.active').next('.owl-item').addClass('prespective1 shadow');
		$('.owl-item.active').next().next('.owl-item').addClass('prespective1 shadow');
		$('.owl-item.active').next().next().next('.owl-item').addClass('prespective2 shadow');
		$('.owl-item.active').next().next().next().next('.owl-item').addClass('prespective3');
	}
	function callback2(event) {
		$('.owl-item').removeClass('prespective1 prespective2 prespective3 shadow')
		$('.owl-item.active').prev().prev('.owl-item').addClass('prespective2');
		$('.owl-item.active').prev('.owl-item').addClass('prespective1');
		$('.owl-item.active').next('.owl-item').addClass('prespective1 shadow');
		$('.owl-item.active').next().next('.owl-item').addClass('prespective2 shadow');
		$('.owl-item.active').next().next().next('.owl-item').addClass('prespective3');
	}
	$('html').on('click change', function(event) {
		$('.owl-item').removeClass('prespective1 prespective2 prespective3 shadow')
		$('.owl-item.active').prev().prev('.owl-item').addClass('prespective2');
		$('.owl-item.active').prev('.owl-item').addClass('prespective1');
		$('.owl-item.active').next('.owl-item').addClass('prespective1 shadow');
		$('.owl-item.active').next().next('.owl-item').addClass('prespective2 shadow');
		$('.owl-item.active').next().next().next('.owl-item').addClass('prespective3');
	});
	// END Call back for prespective classes to give 3D Effect
	//////////////////////////////////////////////////////////
	// END Owl Carousel 2 Functions
	//////////////////////////////////////////////////////////


	//////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////
	//  ___    ____ ______   ___ ____ ____   __ __  _   ___ ____
	// |   \  /    |      | /  _]    \    | /  ]  |/ ] /  _]    \
	// |    \|  o  |      |/  [_|  o  )  | /  /|  ' / /  [_|  D  )
	// |  D  |     |_|  |_|    _]   _/|  |/  / |    \|    _]    /
	// |     |  _  | |  | |   [_|  |  |  /   \_|     \   [_|    \
	// |     |  |  | |  | |     |  |  |  \     |  .  |     |  .  \
	// |_____|__|__| |__| |_____|__| |____\____|__|\_|_____|__|\_|
	// Date picker OPTIONS for custom layout
	$('.oneway-date').datepicker({
		pick: function(e){
            e.preventDefault();
            var pickedDate = e.date;              
            var month = $(this).datepicker('getMonthName');
            var date = e.date.getDate();
            var day= $(this).datepicker('getDayName');
            // $(this).children('.place-holder').remove();
            $(".month").html(month);
            $(".date").html(date);
            $(".day").html(day);
            $(this).datepicker('hide'); 
        }
	});
	///////////////////////////////
	// Return DATE function 
	$('.return-date').datepicker({
		pick: function(e){
            e.preventDefault();
            var pickedDate2 = e.date;              
            var rmonth = $(this).datepicker('getMonthName');
            var rdate = e.date.getDate();
            var rday= $(this).datepicker('getDayName');
            $(this).addClass('show');
            $(this).children('.place-holder2').remove();
            $(".month2").html(rmonth).fadeIn(300);
            $(".date2").html(rdate).fadeIn(300);
            $(".day2").html(rday).fadeIn(300);
            $(this).datepicker('hide'); 
        }
	});
	// End Return DATE function 
	////////////////////////////////
	// Toggle Return date (SHOW and HIDE)
	$('#return-direction').click(function(event) {
		$(this).addClass('active');
		$('#oneway').removeClass('active');
		$('.return-date').show();
		$('.oneway-date').addClass('r-b');
	});
	$('#oneway').click(function(event) {
		$(this).addClass('active');
		$('#return-direction').removeClass('active');
		$('.return-date').hide();
		$('.oneway-date').removeClass('r-b');
	});
	// END Toggle Return date (SHOW and HIDE)
	////////////////////////////////
	// Simple Javascript SET current date to datepicker 
	var d = new Date();
	var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var month = new Array();
    month[0] = "January"; month[1] = "February"; month[2] = "March"; month[3] = "April"; month[4] = "May";
    month[5] = "June"; month[6] = "July"; month[7] = "August"; month[8] = "September"; month[9] = "October";
    month[10] = "November"; month[11] = "December";
	document.getElementById("putDateName").innerHTML = d.getDate();
	document.getElementById("putDayName").innerHTML = days[d.getDay()];
	document.getElementById("putMonthName").innerHTML = month[d.getMonth()];
	// END Date picker OPTIONS for custom layout
	//////////////////////////////////////////////////////////



	//////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////
	//   _____  ___ _       ___    __ ______       ___________ __ __ _       ___
	//  / ___/ /  _] |     /  _]  /  ]      |     / ___/      |  |  | |     /  _]
	// (   \_ /  [_| |    /  [_  /  /|      |    (   \_|      |  |  | |    /  [_
	//  \__  |    _] |___|    _]/  / |_|  |_|     \__  |_|  |_|  ~  | |___|    _]
	//  /  \ |   [_|     |   [_/   \_  |  |       /  \ | |  | |___, |     |   [_
	//  \    |     |     |     \     | |  |       \    | |  | |     |     |     |
	//   \___|_____|_____|_____|\____| |__|        \___| |__| |____/|_____|_____|
	// Custom Select style
	$('.md-select').on('click', function(){
	  $(this).toggleClass('active')
	})

	$('.md-select ul li').on('click', function() {
	  var v = $(this).text();
	  $('.md-select ul li').not($(this)).removeClass('active');
	  $(this).addClass('active');
	  $('.md-select label button').text(v)
	})
	$('.md-select2').on('click', function(){
	  $(this).toggleClass('active')
	})

	$('.md-select2 ul li').on('click', function() {
	  var v = $(this).text();
	  $('.md-select2 ul li').not($(this)).removeClass('active');
	  $(this).addClass('active');
	  $('.md-select2 label button').text(v)
	})
	// END Custom Select style
	//////////////////////////////////////////////////////////
});
// End Document Ready function
//////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
//  ___ ___  ____ ___     ___      ____  __ __       ____  ___  __ __ ____
// |   |   |/    |   \   /  _]    |    \|  |  |     |    |/   \|  |  |    \
// | _   _ |  o  |    \ /  [_     |  o  )  |  |     |__  |     |  |  |  _  |
// |  \_/  |     |  D  |    _]    |     |  ~  |     __|  |  O  |  _  |  |  |
// |   |   |  _  |     |   [_     |  O  |___, |    /  |  |     |  |  |  |  |
// |   |   |  |  |     |     |    |     |     |    \  `  |     |  |  |  |  |
// |___|___|__|__|_____|_____|    |_____|____/      \____j\___/|__|__|__|__|
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
