$(function (){

	$('#toggbutton').on('click', function () {
		$('.subhead').toggle();
		$('.navbar-collapse').toggleClass('background-collapse');
	});

	//Add color to hover image - page About - Skills

$('#skills button').each(function(){
    $(this).hover(function(){
        $(this).toggleClass ('btn-img');
        });
});


	// Projects

	$('#disney').hover(function(){
		$('#disney').attr('src','https://s25.postimg.org/ic0x3yljz/walt_disney_page.png');
	},
	function(){
		$('#disney').attr('src', 'https://s25.postimg.org/8dfyhhc4f/walt_disney_black.png');
	});

	$('#eshaton').hover(function(){
		$('#eshaton').attr('src','https://s25.postimg.org/5zy0qgxpb/eshaton_page.png');
	},
	function(){
		$('#eshaton').attr('src', 'https://s25.postimg.org/xys6hbzbz/eshaton_black.png');
	});

	$('#autoaukcija').hover(function(){
		$('#autoaukcija').attr('src','https://s25.postimg.org/pgk3z47mn/autoaukcija.jpg');
	},
	function(){
		$('#autoaukcija').attr('src', 'https://s25.postimg.org/6pi6oyd27/autoaukcija_black.jpg');
	});

	

	"use strict";


	var topoffset = 50; //variable for menu height

	//Activate Scrollspy
	$('body').scrollspy({
		target: 'header .navbar',
		offset: topoffset
	});


	// Collapse button after click on navbar href
	$('ul li a').on('click', function(){
		$('#toggbutton').addClass('collapsed');
		$('#collapse').removeClass('in');
	});

	$('.carousel').carousel({
  		interval: 7000,
  		pause: false
	});

	// Add inbody class
	var hash = $(this).find('li.active a').attr('href');
	if (hash !== '#featured') {
	$('header nav').addClass('inbody');
	} else {
	$('header nav').removeClass('inbody');
	}

	// Add an inbody class to nav
	$('.navbar-fixed-top').on('activate.bs.scrollspy', function (){
		var hash = $(this).find('li.active a').attr('href');
		if (hash !== '#featured') {
		$('header nav').addClass('inbody');
		} else {
		$('header nav').removeClass('inbody');
		}
	});


  //Use smooth scrolling when clicking on navigation
  $('.navbar a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === 
      this.pathname.replace(/^\//,'') && 
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset+2
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling


/** Send button **/

$('#send-message').on('click', function(){
	if (($('input.form').val())!== ""){
        $('#gform').css({opacity:.2});
        $('suc-msg').show();
    }
           
});

/**	
//Carousel image

	var slideqty = $('#featured .item').length;

  	//Automatically generate carousel indicators
 	 for (var i=0; i < slideqty; i++) {
    var insertText = '<li data-target="#featured" data-slide-to="' + i + '"></li>';
    $('#featured ol').append(insertText);
  	}
  	**/

	/** Skills button
	$('img.img-icon').hide();
	$('.sideways li').on('click', function (){
		$('img.img-icon').hide();
	});
	$('.sideways li#skill-tab').on('click', function (){
	$('img.img-icon').show();
	});
	**/

});

