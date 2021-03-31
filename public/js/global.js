/* Caroussel avec slide manuel */
var accordion = (function(){
  
    var $accordion = $('.js-accordion');
    var $accordion_header = $accordion.find('.js-accordion-header');
    var $accordion_item = $('.js-accordion-item');
   
    // default settings 
    var settings = {
      // animation speed
      speed: 400,
      
      // close all other accordion items if true
      oneOpen: false
    };
      
    return {
      // pass configurable object literal
      init: function($settings) {
        $accordion_header.on('click', function() {
          accordion.toggle($(this));
        });
        
        $.extend(settings, $settings); 
        
        // ensure only one accordion is active if oneOpen is true
        if(settings.oneOpen && $('.js-accordion-item.active').length > 1) {
          $('.js-accordion-item.active:not(:first)').removeClass('active');
        }
        
        // reveal the active accordion bodies
        $('.js-accordion-item.active').find('> .js-accordion-body').show();
      },
      toggle: function($this) {
              
        if(settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
          $this.closest('.js-accordion')
                 .find('> .js-accordion-item') 
                 .removeClass('active')
                 .find('.js-accordion-body')
                 .slideUp()
        }
        // show/hide the clicked accordion item
        $this.closest('.js-accordion-item').toggleClass('active');
        $this.next().stop().slideToggle(settings.speed);
      }
    }
  })();

$(document).ready(function(){
    $('p').each(function(index, element) {
        $(this).attr('id', 'p'+index);
    });
    $('h2').each(function(index, element){
        $(this).attr('id', 'titre'+index);
    })
    $('img').each(function(index, element){
        $(this).attr('id', 'img'+index);
    });
    $('.section').each(function(index, element){
        $(this).attr('id', 'section'+index);
    });
    $('.cards-grid').each(function(index, element){
        $(this).attr('id', 'cards-grid'+index);
    });
    $('.card').each(function(index, element){
        $(this).attr('id', 'card'+index);
    });
    $('.content-slider').each(function(index, element){
        $(this).attr('id', 'carousel'+index);
    });
    $('.mask').each(function(index, element){
        $(this).attr('id', 'carousel-content'+index);
    });
    $('.mainBtn').each(function(index, element){
        $(this).attr('id', 'btn-classic'+index);
    });
    /*Accordeon */
    accordion.init({ speed: 300, oneOpen: true });
});
var subscribe_button = document.querySelector(".subscribe_button");

subscribe_button.addEventListener('click', function(){
	var subscribing = document.querySelector(".subscribing");
	var thanks = document.querySelector(".thanks");
	var login = document.querySelector(".login");

	subscribing.classList.add("subscribing_active");
	subscribe_button.classList.add("subscribe_button_active");
	setTimeout(function(){
		login.classList.add("login_active");
	}, 1200);
	setTimeout(function(){
		thanks.classList.add("thanks_active");
	}, 1400);

	setTimeout(function(){
		thanks.classList.remove("thanks_active");
		login.classList.remove("login_active");
		subscribing.classList.remove("subscribing_active");
		subscribe_button.classList.remove("subscribe_button_active");
	}, 4000);
});